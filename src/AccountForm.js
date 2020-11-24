import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { formik } from './MultiForm';
import { ErrorMessage, yupToFormErrors } from 'formik';
import {useFormik} from 'formik';
import * as Yup from 'yup';
export const AccountForm =({formData,setFormData,nextStep })=>{
    
    //validation of form data field
    const validationSchema = Yup.object({
            address:Yup.string().required('Req'),
        })
    
    const formik = useFormik({
        initialValues:formData,

        validationSchema,
        // onSubmit method for further steps
        onSubmit:(values) =>{
            setFormData(values)
            nextStep();
        }
        
    });
    //Property used by formik
    const {errors,values,handleSubmit,handleChange} = formik;
   
    return(
    <form onSubmit={handleSubmit}>
        <TextField id="address" placeholder="address" name="address" onChange={handleChange} value={values?.address} error={errors.address} helperText={errors.address}/>
        <Button type='submit'>Continue</Button>
    </form>
    )
}