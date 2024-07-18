"use client";
import React from 'react'

export interface AlertProp {
    message:string;
    colorBg?:string;
    colorTxt?:string;
    onClick : () => void;
}
export default function Alert(prop :AlertProp ) {
    const bgcolor = prop.colorBg;
  return (
    <div className='alert' style={{ backgroundColor:prop.colorBg }}>

        <h2 style={{color:prop.colorTxt}}>

            {prop.message}

        </h2>
        <button onClick={prop.onClick} className='alert-dismiss'>X</button>

    </div>
  )
}
