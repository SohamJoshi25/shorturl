
"use client";
import React from 'react'
import "@/app/(client)/dev/dev.css"
import Image from "../../../../public/BlueSuit.jpeg"

export default function page() {
  return (
    <div className='dev'>
      <div className='dev-about'>
        <div className="dev-pfp">
          <img src="/BlueSuit.jpeg" alt="Developer Image" />
          <h3>Soham Joshi</h3>
        </div>
        <div className="dev-info">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At tempore aspernatur cum laudantium. Ea praesentium at distinctio quis! In repudiandae sed aliquam maiores quos exercitationem enim tempore incidunt fugit dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi maxime obcaecati pariatur necessitatibus maiores perspiciatis, odit officia, error quaerat porro beatae. Aspernatur accusamus, nam iusto tempore expedita quas ratione!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis earum, consectetur deleniti aliquam laborum aut architecto, accusantium modi repellat nostrum quaerat dicta, saepe hic sit sapiente similique illum facilis.</p>
          <a href="">Lorem ipsum dolor sit amet.</a>
          <a href="">Lorem, ipsum.</a>
          <a href="">Lorem, ipsum dolor.</a>
        </div>
      </div>
      <br />
      <br />
      <div className='project-info-div'>
        <h3>About This Project</h3>
        <span className='project-details'>
        <div className="project-card">
          <div className="project-info">Lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quidem porro veritatis illo molestias voluptatibus earum ducimus quis facere laboriosam, at dolores labore doloremque nostrum minima cum quam, inventore ullam velit corrupti laborum soluta aliquam nam possimus? Voluptatem ea itaque obcaecati aliquid sequi! Vitae repu em ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis soluta facere velit eveniet vero modi, quas harum atque deleniti dolores adipisci nulla laborum. Eius ad nesciunt rem cumque aut.</div>
          <div className="project-img"><img src="/BlueSuit.jpeg" alt="" /></div>
        </div>
        <div className="project-card">
          <div className="project-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quidem porro veritatis illo molestias voluptatibus earum ducimus quis facere laboriosam, at dolores labore doloremque nostrum minima cum quam, inventore ullam velit corrupti laborum soluta aliquam nam possimus? Voluptatem ea itaque obcaecati aliquid sequi! Vitae repu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam excepturi atque vel aut modi quo, alias, aliquid quibusdam dignissimos ipsa dolorem sint impedit, suscipit obcaecati repudiandae recusandae quas ex esse!</div>
          <div className="project-img"><img src="/BlueSuit.jpeg" alt="" /></div>
        </div>
        <div className="project-card">
          <div className="project-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quidem porro veritatis illo molestias voluptatibus earum ducimus quis facere laboriosam, at dolores labore doloremque nostrum minima cum quam, inventore ullam velit corrupti laborum soluta aliquam nam possimus? Voluptatem ea itaque obcaecati aliquid sequi! Vitae repudiandae harum delectus velit ratione a. ia ullam iusto, commodi cupiditate earum dignissimos suscipit nulla amet voluptate quisquam vel minus minima tempora magnam ipsa ipsam neque alias repellat.</div>
          <div className="project-img"><img src="/BlueSuit.jpeg" alt="" /></div>
        </div>
        </span>
      </div>
    </div>
  )
}
