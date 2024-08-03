import React, { useState } from 'react';


import { DatePicker, InputPicker} from 'rsuite'
import { ErrorMessage,Field } from 'formik'
import { Form } from "react-bootstrap";


import classes from './account.module.css'


interface IAccountForm{
    values:{[key:string]:any};
    handleFileChange: (e:any) => void;
    errors:{[key:string]:string};   
}




const AccountForm = ({values,handleFileChange,errors}:IAccountForm) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };



    return(
        <div className={classes.Div_Content}>
            yooo
        </div>
    )
}


export default AccountForm;