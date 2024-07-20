"use client";
import React from 'react'

export interface AlertProp {
    alert :{
      message:string,
      colorBg:string,
      colorTxt:string, 
    }
    onClick : () => void;
}
export default function Alert(prop :AlertProp ) {
    const alert = prop.alert;
  return (
    <div className='alert' style={{ backgroundColor:alert.colorBg }}>

        <h2 style={{color:alert.colorTxt}}>
            {alert.message}
        </h2>

        <button onClick={prop.onClick} className='alert-dismiss'>X</button>

    </div>
  )
}
