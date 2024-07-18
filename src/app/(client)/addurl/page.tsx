"use client";
import Alert from '@/components/alert';
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { METHODS } from 'http';
import { URLInterface } from '@/models/urls.model';


 

export default function addUrl() {

  const [url,setUrl] = useState("");
  const [shortUrl , setShortUrl] = useState("");
  const [isFetched, setFetched] = useState(false);
  const [error,setError] = useState(false);

   const handleClick = async (e : React.SyntheticEvent<EventTarget> ) => {
      e.preventDefault();
      if(isFetched)return;
      

      if(url==''){
        setError(true);
        setFetched(false);
        return
      }
      setFetched(true);
      setError(false);
      const headers = {
        'Content-Type': 'application/json', // This indicates that the request body is in JSON format // Example of adding an Authorization header
        // Add any other headers you need here
      };

      try {
        const response = await axios.post(`http://localhost:3000/api/url`,{
          "value":url,
        },{
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        console.log('Data fetched successfully:', response);const URLObj : URLInterface = response.data.URL;
        
        setShortUrl(`http://localhost:3000/su/${URLObj.key}`);
        

      } catch (error) {

        setError(true);
        setShortUrl("");
        setFetched(false);
        console.error('Error fetching data:', error);

      };
      
   }

    function handleAlert() {
      setError(!error)
    }


  return (
    <>
    {error && <Alert message='Error' colorBg='#000' colorTxt='#FFF' onClick={handleAlert} />}
    <span className="addurl">
      <h1>Paste URL to be shortened</h1>
      <br />
      <br />
      <form  onSubmit={handleClick} >
        <label htmlFor="URL">URL</label>
        <input type="url" value={url} onChange={(e)=>{setUrl(e.target.value)}}></input>
        <input type="submit" value="Shorten" disabled={isFetched}/>
      </form>
      <br />
      <br />

      { isFetched && <div className="shorturl">
        {shortUrl}
      </div> }

    </span>
    </>
  )
}
