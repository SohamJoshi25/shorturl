"use client";
import Alert from '@/components/alert';
import React from 'react'
import axios, { AxiosError } from 'axios'
import { useState } from 'react';
import { URLInterface } from '@/models/urls.model';
import '@/app/(client)/addurl/addUrl.css'


 

export default function Page() {

  const [url,setUrl] = useState<string>("");
  const [isFetched, setFetched] = useState(false);

  const [err, setErr] = useState<IError>({
    message:"Some Error Occured",
    colorBg:"#000000EE",
    colorTxt:"#FF3333", 
  });
  const [alert, setAlert] = useState(false);
  const [isDeleted,setDeleted] = useState(false);
  interface IError{
      message:string,
      colorBg:string,
      colorTxt:string,
  }



   const handleClick = async (e : React.SyntheticEvent<EventTarget> ) => {
      e.preventDefault();
      if(isFetched)return;

      if(url=='' || url.length<6){

        err.message="Cannot have an empty URL and should be greater than 6 letters"     
        setErr(err);
        setAlert(true);
        setFetched(false);
        return
      }

      setFetched(true);
      setAlert(false);

      const headers = {
        'Content-Type': 'application/json', 
      };
      const arr = url.split("/")

      try {
        const response = await axios.delete(`http://localhost:3000/api/url?key=${arr[arr.length-1]}`,);
        console.log('Data fetched successfully:', response);
        setDeleted(true);

      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          err.message="URL dosent Exist";
        } else {
          console.error(error);
        }
   
        setErr(err);
        setAlert(true);
        setFetched(false);
        console.error('Error fetching data:', error);

      };
      
   }

    function handleAlert() {
      console.log("Handlealert")
      setAlert(false);
    }
    
    function deleted() {
      setDeleted(false);
    }

  return (
    <>
    {alert && <Alert alert={err} onClick={handleAlert} />}
    {isDeleted && <Alert alert={{message:"The URL has been Deleted",colorBg:"yellow",colorTxt:"black"}} onClick={deleted} />}
    <span className="addurl">

      <form className='add-url-form'  onSubmit={handleClick} >

        <h1 className='add-url-text'>Paste the URL to be deleted</h1>
        <br /><br />
        <input type="text" placeholder='Enter Your URL here' className='url-input' value={url}  disabled={isFetched} onChange={(e)=>{setUrl(e.target.value)}}></input>
        <input type="submit" className='url-submit' value="Delete!!!" disabled={isFetched}/>

        {isFetched && isDeleted && <div className="url-response-div" >
          <div className='url-response'>
            The URL is deleted!
            <br />
          </div>


        </div> }
      </form>

      <p>To go back to homepage, click <a href="/" >here</a></p>

    </span>
    </>
  )
}
