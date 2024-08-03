import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import classes from "./address.module.css";
import * as yup from "yup";
import { Formik } from "formik";
import AddressForm from "./AddressForm";
import PersonalProfileContainer from "..";

const AddressBook = () => {


  const EditingState = {
    country: false,
    first: false,
    last: false
  };

  const EditingState2 = {
    country: true,
    first: true,
    last: true
  };


  const token = localStorage.getItem("token") || ""
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [isDefault, setIsDefault] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<{[key:string]:boolean}>(EditingState);


  const [showDelete, setShowDelete] = useState<boolean>(false);

  const [addressIsLoading, setAddressLoading ] = useState<boolean>(false)
  const [fetchSuccess,setFetchSuccess]  = useState<boolean>(false)

  const initial = {
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
  };


  const [initialState, setIntialState] = useState<{[key:string]:any}>(initial);



  const schemas = yup.object({
    country: yup.string().required(),
    firstName: yup.string().required().min(3, "minimum must be 3 characters").matches(/^[aA-zZ]+$/, "Name can only be in alphabets")    ,
    lastName: yup.string().required().min(3, "minimum must be 3 characters").matches(/^[aA-zZ]+$/, "Name can only be in alphabets")    ,
    address: yup.string().required().min(8, "minimum must be 8 characters"),
    address2: yup.string().min(8, "minimum must be 8 characters"),
    city: yup.string().required(),
    state: yup.string().required(),
    zip_code:yup
    .string(),
    phone: yup
      .string()
      .required("Phone Number is a required field")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, "minimum must be 8 characters")
      .max(17, "maximum must be 17 characters"),
  });




  const handleAddAddress = async(data:any) => {

  }

  const handleEditAddress = async(data:any) => {

  }

  const handleDelete = async() => {

  }
  // 
  return (
    <>
      <PersonalProfileContainer>
        lll
      </PersonalProfileContainer>
    </>
  );
};

export default AddressBook;
