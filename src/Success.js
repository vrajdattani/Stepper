import { Typography } from '@material-ui/core';
import React from 'react';
export const Success = ({formData}) => {
    const {name,address} = formData;
    return(
    <div><Typography>Your Name is : {name}</Typography>
    <Typography>Your Address is : {address}</Typography></div>
      
    )
}