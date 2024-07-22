"use client";
import Alert from '@/components/alert';
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { URLInterface } from '@/models/urls.model';
import '@/app/(client)/addurl/addUrl.css'


 

export default function addUrl() {

  const [url,setUrl] = useState("");
  const [shortUrl , setShortUrl] = useState("PLease wait . .");
  const [isFetched, setFetched] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [err, setErr] = useState<IError>({
    message:"Some Error Occured",
    colorBg:"#000000C0",
    colorTxt:"#FF3333", 
  });
  const [alert, setAlert] = useState(false);
  const [isCopied,setCopied] = useState(false);
  interface IError{
      message:string,
      colorBg:string,
      colorTxt:string,
  }



   const handleClick = async (e : React.SyntheticEvent<EventTarget> ) => {
      e.preventDefault();
      if(isFetched)return;

      if(url==''){

        err.message="Cannot have an empty URL"     
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

      try {
        const response = await axios.post(`http://localhost:3000/api/url`,{
          "value":url,
        },{
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log('Data fetched successfully:', response);
        const URLObj : URLInterface = response.data.URL;

        setSuccess(true);
        setShortUrl(`http://localhost:3000/su/${URLObj.key}`);
      } catch (error) {
        err.message=JSON.stringify(error)     
        setErr(err);
        setAlert(true);
        setShortUrl("");
        setFetched(false);
        console.error('Error fetching data:', error);

      };
      
   }

    function handleAlert() {
      console.log("Handlealert")
      setAlert(false);
    }

    function handleSuccess(){
      console.log("Handlealert")
      setSuccess(false);
    }

    function copyClipboard(){
      navigator.clipboard.writeText(shortUrl);
      setCopied(!isCopied)
    }


  return (
    <>
    {alert && <Alert alert={err} onClick={handleAlert} />}
    {isSuccess && <Alert alert={{message:"Success | URL has been shortened! ",colorBg:"#000000C0",colorTxt:"#00ff00"}} onClick={handleSuccess} />}
    <span className="addurl">

      <form className='add-url-form'  onSubmit={handleClick} >
        <h1 className='add-url-text'>Paste the URL to be shortened</h1>
        <br /><br />
        <input type="url" placeholder='Enter Your URL here' className='url-input' value={url} onChange={(e)=>{setUrl(e.target.value)}}></input>
        <input type="submit" className='url-submit' value="Shorten" disabled={isFetched}/>
        {isFetched && <div className="url-response-div" >
          <div className='url-response' onClick={copyClipboard}>
            {shortUrl}
            <br />
          </div>
          {isFetched && <div className='tooltips'>{isCopied? <p>URL has been copied!</p>:  <p>Click to Copy URL</p> }</div>}
        </div> }
      </form>
      <p>To go back to homepage, click <a href="/" >here</a> </p>

      

    </span>
    </>
  )
}
