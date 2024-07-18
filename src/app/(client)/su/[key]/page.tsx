"use client";
import axios from 'axios';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation'

interface APIresponse {
  message: string;
  source: string;
  value: string;
}

const Page = ({ params }: { params: { key: string } }) => {
  const router = useRouter();

  const fetchData = async (): Promise<APIresponse | null> => {
    try {
      const response = await axios.get<APIresponse>(`http://localhost:3000/api/url?key=${params.key}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAndRedirect = async () => {
      const response = await fetchData();
      if (response) {
        router.replace(response.value);
      }
    };
    fetchAndRedirect();
  }, [params.key]);

  return (
    <h1>Redirection Page to {params.key}</h1>
  );
};

export default Page;
