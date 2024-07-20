"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter, notFound } from 'next/navigation';
import { error } from 'console';
import Alert from '@/components/alert';
import "../url.css"

interface APIresponse {
  message: string;
  source: string;
  value: string;
}

const Page = ({ params }: { params: { key: string } }) => {
  const [loading, setLoading] = useState(true);
  const [success,setSuccess] = useState(true);
  const router = useRouter();

  const fetchData = async (): Promise<APIresponse | null> => {
    console.log("Flag")
    try {
      const response = await axios.get<APIresponse>(`http://localhost:3000/api/url?key=${params.key}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;

    } catch (error) {
      console.log("response");
      setSuccess(false);
      if (axios.isAxiosError(error) && error.response?.status === 404) {
       console.error(`${params.key} : NOT FOUND`);
      } else {
        console.error(error);
      }
      return null;
    }
  };

  useEffect(() => {

    const fetchAndRedirect = async () => {
        const response = await fetchData();
        if (response) {         
          router.replace(response.value);        
        }else{   

        }
    };

    if (loading){
      setLoading(false);
      fetchAndRedirect();
    }
      
  }, []);

  return (<div className='su'>
    {success ? <h1> Redirecting . . .</h1> : <h1> Not a valid URL | Please try re-checking your URL</h1> }
  </div>
  );
};

export default Page;
