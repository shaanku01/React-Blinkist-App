//var React = require('react')
import React from 'react';

import  SvgIcon  from '@mui/material/SvgIcon';
interface Props{
  dValue:string;
}



const Icon = (props:Props)=>{

    return (
        <SvgIcon >
      <path data-testid='myele' d={props.dValue} />
        </SvgIcon>
    )
}

export default Icon;