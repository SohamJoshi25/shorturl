"use client";
import React from 'react'
import { useState } from 'react';


 

export default function deleteUrl() {

  const [url,setUrl] = useState("");
  const [shortUrl , setShortUrl] = useState("");
  const [isFetched, setFetched] = useState(false);

   const handleClick = async (e : React.SyntheticEvent<EventTarget> ) => {
      e.preventDefault();
      setFetched(true);
      setShortUrl(url);
      setUrl("");
   }
   

  return (
    <span className="deleteurl">
      <h1>Paste URL to be Deleted</h1>
      <br />
      <br />
      <form  onSubmit={handleClick} >
        <label htmlFor="URL">URL</label>
        <input type="url" value={url} onChange={(e)=>{setUrl(e.target.value)}}></input>
        <input type="submit" value="Shorten"/>
      </form>
      <br />
      <br />

      { isFetched && <div className="shorturl">
        {shortUrl}
      </div> }

    </span>
  )
}
