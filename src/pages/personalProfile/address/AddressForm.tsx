import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import classes from './address.module.css'
import * as yup from 'yup'
import { ErrorMessage, Field, FieldProps, Formik } from "formik";
import { Form as RForm, Input as RInput, InputPicker, InputNumber as RInputNumber} from "rsuite";


interface IAddressForm{
    errors:{[key:string]:any};
    values:{[key:string]:any};
    isEditing:{[key:string]:boolean},
    isDefault: (e:boolean) => void;
    setIsEditing:(e:any)  => void;
    showCheckBox?:boolean
}

const AddressForm = ({errors,values,isEditing,isDefault,setIsEditing,showCheckBox=true}:IAddressForm) => {


    const [countriesData, setCountriesData] = useState<any>();
    const [selectedCountry,setSelectedCountry]  = useState<string>(values.country);

    const [firstName,setFirstName] = useState<string>();
    const [lastName,setLastName] = useState<string>()





    //   useEffect(() => {
    //     let dataArray: any[] = [];
    //     countries?.data?.forEach((e, i) => {
    //       dataArray = [
    //         ...dataArray,
    //         {
    //           label: (
    //             <div key={i}>
    //               {" "}
    //               <img height="20px" width="20px" style={{ marginRight: "5px" }} src={e.flag} /> {e.name}{" "}
    //             </div>
    //           ),
    //           value: e.iso2,
    //         },
    //       ];
    //     });
    
    //     setCountriesData(dataArray);
    //   }, [countries]);

  

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        isDefault(event.target.checked)
    };

      
  return (
    <>

        <div className="d-flex align-items-center gap-3 mb-3 w-100">
           

        </div>
    
    </>
  );
};

export default AddressForm;
