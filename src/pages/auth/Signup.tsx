import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from "formik";
import classes from './signin.module.css'
import { Input } from '../../component/element/form/Input';
// import { ISignup } from '../../../types/interfaces/auth/signup';

interface ISignUp {
    handleSignup:(data:any,resetForm?:()=>void) => void;
    signupLoading:boolean;
}

const SignUp = ({handleSignup,signupLoading}:ISignUp) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
  
    const initial = {
        username:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        password_confirmation:'',
        code:'',
        phoneNumber:""
      }
    
    const schemas = yup.object({
        username:yup.string().required("Username is a required field"),
        firstName:yup.string().matches(/^[A-Za-z]+$/, 'First Name must contain only letters')
        .required("First Name is a required field"),
        lastName:yup.string().matches(/^[A-Za-z]+$/, 'Last Name must contain only letters')
        .required("Last Name is a required field"),
        email:yup.string().email('Must be a valid email').required(),
        password:yup.string().required(),
        password_confirmation: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match').required('Confirm password is a required field')
    })

    const [initialState, setIntialState] = useState<typeof initial>(initial);

    return(
      <div>
        <Formik
            validationSchema={schemas}
            enableReinitialize={true}
            validateOnChange={true}
            initialValues={initialState}
            onSubmit={async(data:any,{resetForm}) => {
              handleSignup(data,resetForm)
            }}
        >
         {({ values, errors, handleChange, isValid, isInitialValid, isSubmitting, handleSubmit}) => (
        <>      
          <form onSubmit={handleSubmit} className={classes.FormStyle}>
            <Input
              name="username"
              type="text"
              label="Username *"
              //   className="mb-3 px-3"
              className={errors.username?`mb-3 px-5`:`mb-5 px-5`}
            />
            <Input
              name="firstName"
              type="text"
              label="First Name *"
              //   className="mb-3 px-3"
              className={errors.firstName?`mb-3 px-5`:`mb-5 px-5`}
            />
            <Input
              name="lastName"
              type="text"
              label="Last Name *"
              className={errors.lastName?`mb-3 px-5`:`mb-5 px-5`}
            />
             <Input
              name="code"
              type="text"
              label="Unique Code *"
              className={errors.code?`mb-3 px-5`:`mb-5 px-5`}
            />
             <Input
              name="email"
              type="text"
              label="Email *"
              className={errors.email?`mb-3 px-5`:`mb-5 px-5`}

            />
              <Input
              name="phoneNumber"
              type="text"
              label="Phone number *"
              className={errors.email?`mb-3 px-5`:`mb-5 px-5`}

            />
            <Input
              name="password"
              type="password"
              label="Password *"
              className={errors.password?`mb-3 px-5`:`mb-5 px-5`}
            />
            <Input
              name="password_confirmation"
              type="password"
              label="Confirm password *"
              className="px-5"
            />

            <div className={classes.Remember}>
                <input  type="checkbox"  onChange={handleCheckboxChange}  id="check"/>
                <p className={classes.NewsLetter}>
                     I want to receive Trybz newsletters with the best deals and offers
                </p> 
            </div>
          
            <div className={classes.ButtonContent}>
              <button className={classes.SigninButton} type="submit">{signupLoading?'Loading ...':'Create Account'}</button>
            </div>

          </form>
        </>
      )}
    </Formik>
    </div>
    )
}

export default SignUp;
