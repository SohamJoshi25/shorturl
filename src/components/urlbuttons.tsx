"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import '@/app/home.css'

function URLButtons(){
  const router = useRouter();
  return (
    <div className='url-button-div'>
        <button onClick={()=>{router.push('/addurl')}}>Shorten URL</button>
        <button onClick={()=>{router.push('/deleteurl')}}>Delete URL</button>
    </div>
  )
}
export default URLButtons;
