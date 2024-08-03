import React, { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "../../component/element/tabs/tab";
import classes from './container.module.css'



const PersonalProfileContainer = ({children}:any) => {

  const tagManagerArgs = {
    dataLayer: {
        userProject: 'project',
        page: 'Personal profile page'
    },
    dataLayerName: 'PageDataLayer'
}

  const navigate = useNavigate()

  const values = {
    accountInfo:false,
    finance:false,
    order:false,
    myFav:false,
    measurement:false,
    card:false
  }

  const defaultValues = {
    accountInfo:true,
    finance:false,
    order:false,
    myFav:false,
    measurement:false,
    card:false
  }

  const [selectedValue,setSelectedValue] = useState<typeof values>(defaultValues)

  // const [selectedValue,setSelectedValue] = useState<any>(values)



  const handleAccountInfo = () => {
    // setSelectedValue({...values,accountInfo:true})
    navigate('/dashboard/account')
  }
  
  const handleAddressBook = () => {
    // setSelectedValue({...values,addressBook:true})
    navigate('/dashboard/finance')
  }
  const handleOrder = () =>{
    // setSelectedValue({...values,order:true})
    navigate('/dashboard/history')
  }
  

  const handleMeasurement = () => {
    // setSelectedValue({...values,measurement:true})
    navigate('/dashboard/messaging')

  }





  return (
    <>
      {/* <div style={{ height: "10.4rem",backgroundColor:'lightGrey' }}></div> */}
      <div className={classes.Menu_row}>
        <Tab
          accountInfo={()=>handleAccountInfo()}
          addressBook={()=>handleAddressBook()}
          measurement={() => handleMeasurement()}
          order={() => handleOrder()}

          // transaction={() => handleCard()}
        /> 

        {/* <div className="w-100" style={{position:'relative'}}>
          {selectedValue.accountInfo &&<AccountInfo /> }
          {selectedValue.addressBook &&<AddressBook /> }
          {selectedValue.order &&<Order /> }
          {selectedValue.myFav && <Favourite/>}
          {selectedValue.measurement && <Measurement/>}
        </div>  */}
        <div className="w-100" style={{position:'relative',overflowY:'scroll',maxHeight:'90vh',width:'100%'}}>
        {children}
        </div>
      </div>
    </>
  );
};

export default PersonalProfileContainer;
