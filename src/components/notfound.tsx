"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import "@/app/global.css"

export default function NotFound() {
    const router = useRouter();
  return (
    <div className='notfound'>
      <span>
        404 | Some Error has occured.
      </span>
      <div className='info'>
        Please try refreshing <a onClick={()=>{ router.refresh() }}>here</a> or contact developer at <a onClick={()=>{ router.replace('/dev') }}>here</a>.
      </div>
        
      
      </div>
  )
}
