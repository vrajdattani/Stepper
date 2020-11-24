import { Button,TextField } from '@material-ui/core';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
export const UserForm = ({formData,setFormData,nextStep })=>{
    // Validation of form data field
    const validationSchema = Yup.object({
            name:Yup.string().required('Req'),
        })
    
    const formik = useFormik({
        initialValues:formData,

        validationSchema,
        // onSubmit method for further steps
        onSubmit:(values) =>{
            setFormData(values);
            nextStep();
        }
        
    });
    //property used by formik
    const {values,errors,handleSubmit,handleChange} = formik;
    
    return(
    <div>
    <form onSubmit={handleSubmit}>
        <TextField id="name" placeholder="name" name="name" onChange={handleChange} value={values?.name} error={errors.name} helperText={errors.name}/>
        <Button type='submit'>Continue</Button>
    </form>
    </div>
    );
}