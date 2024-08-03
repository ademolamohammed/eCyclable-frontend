import React, { useEffect, useState } from 'react';
import classes from './account.module.css'
import AccountForm from './accountForm';
import * as yup from 'yup'
import { Formik } from "formik";
// import { useGetUserDetailsQuery } from '../../../../app/services/customerSettings/me';
import axios from 'axios';
import PersonalProfileContainer from '..';
import { loadPartialConfig } from '@babel/core';



const AccountInfo = () => {

  //we submit form
  // we alsp have our formik here

  

  const token = localStorage.getItem("token") || ""


  const initial = {}
  
  const [initialState, setIntialState] = useState(initial);
  const [fileChanges,setFileChanges] = useState<Blob>()
  const [loading,setLoading] = useState<boolean>(false)
  const [passwordLoading,setPasswordLoading] = useState<boolean>(false)




  const initialValue = {
    password:"",
    old_password:"",
    password_confirmation:""
  }

 
  // const [upload, { isLoading: uploadExcelFileLoading }] = useUploadMutation();



  const schemas = yup.object({
    first_name:yup.string().required('First Name is a required field'),
      last_name:yup.string().required('Last Name is a required field'),
      gender:yup.string().required('Gender is a required field'),
      username:yup.string().required('Username is a required filed'),
      phone: yup
      .string()
      .required("Phone Number is a required field")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, "minimum must be 8 characters")
      .max(17, "maximum must be 17 characters"),
      email:yup.string().email('Must be a valid email').required('Email is a required field'),
      password:yup.string(),
      password_confirmation: yup.string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match')
  })

  const schema = yup.object({
      old_password:yup.string().required('Old password is required'),
      password:yup.string().required(),
      password_confirmation: yup.string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match')
  })

  // const {
  //   data,
  //   refetch: testRefetch,
  //   error: errorMsg,
  //   isLoading,
  //   isSuccess: fetchTestSuccess,
  //   isError,
  // } = useGetUserDetailsQuery();

  // const fetch = () => {
  //   if (isLoading && isError)
  //     return toast.error("Error Fetching Address. Kindly try again.");
  //   !data?.error && data?.data && setIntialState(data.data.profile);
  // };

  // useEffect(() => {
  //   fetch();
  // }, []);

  // useEffect(() => {
  //   fetch();
  // }, [data]);



   


  const handleFileChanges = (e:any) => {
    // const file = e.currentTarget.files[0];
    const file = e.target.files[0];
    setFileChanges(file);
  }


  const handleSubmitForm = async(data:any) => {

    }


  const handlePasswordChange = async(data:any) => {

  }


    return (
      <PersonalProfileContainer>
      <div className={classes.Container}>
      <p className={classes.Container_text}>
        User Information
      </p>
      <div className={classes.Container_Div}>
      <Formik
            validationSchema={schemas}
            enableReinitialize={true}
            validateOnChange={true}
            initialValues={initialState}
            onSubmit={(data:any) => {
                handleSubmitForm(data)
            }}
        >
         {({ values, errors, handleChange, isValid, isInitialValid, isSubmitting, handleSubmit}) => (
        <>      
          <form onSubmit={handleSubmit} className={classes.FormStyle}>
            <AccountForm
              values={values}
              errors={errors}
              handleFileChange={(e)=> handleFileChanges(e)}
            />

            {/* NOTE:: The relative or container of this positioning 'submit form button' is 
            on the personalProfile/index.ts the div above the <Tab/> line 40 */}
              <div className='mt-5' style={{width:'26.1rem'}} >
                <button className={classes.SigninButton} type="submit">{loading?"Loading ..." : "Save Changes" } </button>
              </div>            
          </form>
        </>
        )}
      </Formik>
   
      </div>
    </div>
    </PersonalProfileContainer>
    )

}

// , position:'absolute',bottom:'13%',left:'3%'
export default AccountInfo;
