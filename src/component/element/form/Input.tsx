import React, { ElementType } from "react";
import { Field, FieldProps, FieldAttributes, ErrorMessage } from "formik";
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { Form, Input as RInput, InputPicker as RInputPicker, InputNumber as RInputNumber} from "rsuite";
import classes from './input.module.css';

interface IBaseInput {
  name: string;
  label?: string;
}

interface IInput extends IBaseInput {
  type?: string;
  as?: ElementType;
  optn?: boolean;
  disableValidation?: boolean;
  opnValues?: string[];
  position?:boolean;
  className?:string;
  placeholder?:string;
  row?:any;
  noMb?:boolean
}

interface IInputPicker extends IBaseInput {
  data: { label: string; value: string }[];
  searchable?: boolean;
}

interface IInuptAddon extends IInput {
  AddonText: string;
}

export const Input = ({ name, type,position, label,noMb,...props }: IInput) => {
    return (
      <>
        <Field name={name}>
          {({ field: { onChange, ...field }, meta }: FieldProps) => (
            <>
              <div style={{display:position?'flex':'block',marginBottom:'2rem'}}>
              <Form.ControlLabel style={{"marginBottom":noMb?'':'1.6rem'}} className={classes.InputLabel}>{ label } </Form.ControlLabel>
              <RInput 
                 style={{
                    borderRadius: '0.6rem',
                    border: 'thin solid',
                    // width: '40.9rem',
                    // height:'4.2rem',
                    width:'94%',
                    outline:'none',
                    borderColor:'#000000',
                    padding:'1.5rem'

                }}
                type={type || `text`} size="lg" onChange={(v, e) => onChange(e)} {...field} {...props} />   
              </div>         
                 {/* { meta.touched && meta.error && (
                    <Form.ErrorMessage style={{fontSize:'1.2rem',color:'red'}} placement="bottomStart" show>
                    {meta.error}
                    </Form.ErrorMessage>
                 )} */}
                 <div>
                    <small style={{color:'red'}} className="text-danger">
                      <ErrorMessage
                        name={name}
                          component="div"
                        className="field-error text-danger"
                      />
                    </small>
                 </div>
            </>
          )}
        </Field>
      </>
    );
  };
