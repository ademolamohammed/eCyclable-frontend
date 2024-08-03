import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from "formik";
import classes from './signin.module.css'
import { Input } from '../../component/element/form/Input';

interface ISignIn {
  handleSignin:any;
  signinLoading:boolean;
  patner?:boolean
}

const SignIn = ({handleSignin,signinLoading,patner}:ISignIn) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

    const initial = {
        username:'',
        password:'',
        email:''
      }
    
    const schemas = yup.object({
        username:yup.string().required(),
        password:yup.string().required(),
    })

    const schemas2 = yup.object({
      email:yup.string().required(),
      password:yup.string().required(),
  })

    // const [initialState, setIntialState] = useState<{username:string,password:string}>(initial);

    return(
      <div className={classes.FormContainer}>
        <Formik
            validationSchema={patner?schemas2:schemas}
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
            {
            patner?    
            <Input
              name="email"
              type="text"
              label="Email *"
              className={errors?.email?`mb-3 px-5`:`mb-5 px-5`}
            />
            :
            <Input
              name="username"
              type="text"
              label="Username or Email *"
              className={errors?.username?`mb-3 px-5`:`mb-5 px-5`}
            />
          }
            <Input
              name="password"
              type="password"
              label="Password *"
              className="px-5 mt-5"
            />

            <div className={classes.Remember}>
              <input  type="checkbox"  onChange={handleCheckboxChange}  id="check"/>
              <p className='p-0 m-0 ms-3'> Remember my details </p> 
            </div>

            <div className={classes.ButtonContent}>
              <button className={classes.SigninButton} type="submit">{signinLoading?'Loading...':'sign in'}</button>
            </div>
          </form>
        </>
      )}
    </Formik>
    </div>
    )
}

export default SignIn;
