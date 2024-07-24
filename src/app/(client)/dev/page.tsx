
"use client";
import React from 'react'
import "@/app/(client)/dev/dev.css"
import Image from "../../../../public/BlueSuit.jpeg"

export default function Page() {
  return (
    <div className='dev'>
      <div className='dev-about'>
        <div className="dev-pfp">
          <img src="/BlueSuit.jpeg" alt="Developer Image" />
          <h3>Soham Joshi</h3>
        </div>
        <div className="dev-info">
          <h3>Hello folks, I am Soham Joshi, the sole developer of this project. At the time of making this project i am in my 3rd year of Engineering. I love to build and craft ideas and try to implement a real world solution to modern problems. This project is one of such implementations.</h3>
          <h3> My Aim of the project is to provide a solution to the difficulty in managing long URLs by shoutning it. This project called <b>shorturl </b> is my first next project. This Project teaches me lots of valuable knowledge and always eager to improve for the better. </h3>
          <h3>If You have enountered any bug or you have any suggessions, please do contact me at the handles below. Feel free to contribute to this project through the mentioned below github link.</h3>
          <a href="https://www.linkedin.com/in/sohamjoshi25/" target='_blank'>LinkedIn</a>
          <a href="https://github.com/SohamJoshi25/shorturl"  target='_blank'>Github</a>
          <a>Reach me out at <b>sohamjoshiofficial@gmail.com</b> </a>
        </div>
      </div>
      <br />
      <br />
      <div className='project-info-div'>
        <h2>About This Project</h2>
        <span className='project-details'>
        <div className="project-card">
          <div className="project-info">Redis was crucial for caching, reducing MongoDB load and enhancing performance. I utilized various data structures and implemented TTL for cache expiration, ensuring data freshness. Additionally, Redis enabled effective rate limiting, preventing service abuse and maintaining application reliability under high traffic conditions.</div>
          <div className="project-img"><img src="/redis.png" alt="" /></div>
        </div>
        <div className="project-card">
          <div className="project-info">Using MongoDB, I designed schemas for URL storage and implemented CRUD operations with Mongoose. I explored aggregation pipelines to generate usage analytics, understanding complex queries and indexing to optimize performance. This experience highlighted the importance of efficient schema design and data management in scalable applications.</div>
          <div className="project-img"><img src="/mongodb.png" alt="" /></div>
        </div>
        <div className="project-card">
          <div className="project-info">In my project, I delved into Next.js, mastering Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance speed and SEO. I utilized API routes for serverless functions handling URL shortening logic and dynamic routing for managing shortened URLs, ensuring a seamless and efficient user experience. I have also used typescript as a language of choice which addidionally gave me type safety.</div>
          <div className="project-img"><img src="/nextjs.png" alt="" /></div>
        </div>
        </span>
      </div>
      <p>To go back to homepage, click <a href="/" >here</a> </p>
    </div>
  )
}
