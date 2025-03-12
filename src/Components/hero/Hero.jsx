import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.jpg'
import { HiOutlineDownload } from "react-icons/hi";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img className='image' src={profile_img} alt="" />
        <h1><span>I'm Kishan Prajapati,</span> frontend developer based in India</h1>
        <p>I am a frontend developer from Noida, India with 5 year experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="/CV.pdf" download="CV.pdf" className="hero-resume">
                My Resume <HiOutlineDownload className='hero-resume-download' />
            </a>
        </div>
    </div>
  )
}

export default Hero