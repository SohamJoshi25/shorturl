"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import '@/app/home.css'

function HomeFooter(){
    const router = useRouter();
  return (
    <div className='home-footer'>
         <span className="tooltip">Know about Developer and this project | Thankyou for visiting this website</span>
        <h3 onClick={()=>{router.push('/dev')}}>About this Page | Developer</h3>
    </div>       
  )
}
export default HomeFooter;
