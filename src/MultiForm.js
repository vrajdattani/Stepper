import React from 'react'
import {UserForm} from './UserForm';
import {AccountForm} from './AccountForm';
import { useState } from 'react';
import {Success} from './Success';
import { Card,CardContent } from '@material-ui/core';
const MultiForm = () => {
    const [step,setStep] = useState(0);

    const [formData,setFormData] = useState({
        name:'',
        address:''
    })
    // nextStep is used to change the Step
    const nextStep = () =>{
        setStep(prev=>prev+1);
    }    
    // Render the forms as per the Step
    const renderForm = () => {
        switch (step) {
            case 0 :
                return <UserForm formData={formData} setFormData={setFormData} nextStep={nextStep}/>
            case 1 :
                return <AccountForm formData={formData}  setFormData={setFormData} nextStep={nextStep}/>
            case 2 :
                return <Success formData={formData}/>
        }
    }
   //All Component Data will display
    return (
        <Card>
          <CardContent>
            <h1>Your Information</h1>
            {renderForm()}
            </CardContent>
           </Card>
         );
    
}
export default MultiForm