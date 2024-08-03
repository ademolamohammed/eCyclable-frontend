import * as yup from 'yup'
import { Formik } from "formik";
import classes from './signin.module.css'
import { useState } from 'react';
import { Input } from '../../component/element/form/Input';
import { InputPicker } from 'rsuite';



const Boooking = ({signinLoading,handleSignin,setJunk}:any) => {

    const [isChecked, setIsChecked] = useState(false);

    const value:any = [
        {name:'Junk'},{name:'Reusable'}
    ]

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
  
      const initial = {
          firstName:'',
          lastName:'',
          address:'',
          date:new Date(),
          email:'',
          type:'',
        }
      
      const schemas = yup.object({
        firstName:yup.string().required(),
        lastName:yup.string().required(),
        address:yup.string().required(),
        email:yup.string().required(),
        type:yup.string().required(),
      })
  
  
      // const [initialState, setIntialState] = useState<{username:string,password:string}>(initial);
  
      return(
        <div className={classes.FormContainer}>
          <Formik
              validationSchema={schemas}
              enableReinitialize={true}
              validateOnChange={true}
              initialValues={initial}
              onSubmit={(data:any) => {
                handleSignin(data)
              }}
          >
           {({ values, errors, handleChange, isValid, isInitialValid, isSubmitting, handleSubmit}) => (
          <>      
            <form onSubmit={handleSubmit} className={classes.FormStyle}>
              
              <Input
                name="firstName"
                type="text"
                label="First Name *"
                className={errors?.firstName?`mb-3 px-5`:`mb-5 px-5`}
              />
            <Input
                name="lastName"
                type="text"
                label="Last Name *"
                className={errors?.lastName?`mb-3 px-5`:`mb-5 px-5`}
              />
               <Input
                name="email"
                type="text"
                label="Email *"
                className={errors?.email?`mb-3 px-5`:`mb-5 px-5`}
              />
              <Input
                name="date"
                type="date"
                label="Date *"
                className={errors?.date?`mb-3 px-5`:`mb-5 px-5`}
              />
             < Input
                name="address"
                type="text"
                label="Address *"
                className={errors?.address?`mb-3 px-5`:`mb-5 px-5`}
              />
              <Input
                name="type"
                type="text"
                label="Junk Type *"
                className={errors?.type?`mb-3 px-5`:`mb-5 px-5`}
              />


  
              {/* <div className={classes.Remember}>
                <input  type="checkbox"  onChange={handleCheckboxChange}  id="check"/>
                <p className='p-0 m-0 ms-3'> Remember my details </p> 
              </div> */}
  
              <div className={classes.ButtonContent}>
                <button className={classes.SigninButton} type="submit">{signinLoading?'Loading...':'Submit'}</button>
              </div>
            </form>
          </>
        )}
      </Formik>
      </div>
      )
  }
  


export default Boooking;