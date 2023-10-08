import React from 'react'
import about from '../../assets/about.png'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import about3 from '../../assets/about3.png'

import avatar1 from '../../assets/avatar1.png'

const AboutUs = () => {
  return (
    <div>
      <div className="py-[20px]">
          <div className="container1">
             <img src={about1} alt="" />
          </div>
          <div className="h-[20px]"></div>
          <div className="container1 flex justify-between">
            <img src={about2} alt="" />
            <img src={about3} alt="" />
            <img src={about} alt="" />
          </div>
          <div className="container1 flex justify-center">
            <div className="w-[910px] text-[36px] py-[20px] font-bold text-center">
              <h1><span className='text-[#0072CD] font-normal'>Open project partners </span>
              the opportunity to interact with scientists from all over the world</h1>
              <p className='text-[20px] font-normal mt-[10px]'>Open Project Partners is an online science platform where everyone
              has the opportunity to share their project ideas that can be realized by collaborating with other
              scientists, because now on our site you can communicate with each other from different continents.</p>
              <p className='text-[20px] font-normal mt-[10px]'>
              In our web-site, we're driven by a passion for open science and innovation.
              Our platform is designed to connect brilliant minds with groundbreaking projects.
              We believe that collaboration fuels discovery and accelerates progress.
              With a global community of scientists, researchers, and enthusiasts, we're making open science accessible to all.
              Innovation knows no borders, and neither do we. We welcome members from around the world.
              Our team is dedicated to facilitating meaningful connections and fostering innovation.
              Science is a collaborative endeavor, and we're here to make collaboration easier.
              Discover exciting projects, share your expertise, and be part of a transformative scientific journey.
              We're more than just a platform; we're a community of like-minded individuals pushing the boundaries of knowledge.
              Our vision is a world where scientific breakthroughs are made through collective effort.
              We believe in the power of transparency, sharing, and open access to information.
              On our web-site, you can explore projects that range from astronomy to zoology.
              We're not just connecting people; we're creating opportunities for groundbreaking discoveries.
              </p>
            </div>
          </div>
          <div className="container1 flex justify-center">
            <div className="w-[910px] flex flex-wrap py-[40px] justify-between">
              {/* <div className="w-[360px] h-[570px] text-start">
                <img src={avatar1} className='w-[100%] h-[350px] rounded-[5px] object-cover bg-[gray]' alt="" />
                <p className='text-[38px] font-bold'>Name Family</p>
                <p className='text-[42px] text-[gray]'>Developer</p>
              </div>
              <div className="w-[360px] h-[570px] text-center">
                <p className='text-[38px] font-bold'>Name Family</p>
                <img src="" className='w-[100%] h-[450px] rounded-[5px] object-cover bg-[gray]' alt="" />
                <p className='text-[42px] text-[gray]'>Developer</p>
              </div>
              <div className="w-[360px] my-[80px] h-[570px] text-center">
                <p className='text-[38px] font-bold'>Name Family</p>
                <img src="" className='w-[100%] h-[450px] rounded-[5px] object-cover bg-[gray]' alt="" />
                <p className='text-[42px] text-[gray]'>Developer</p>
              </div>
              <div className="w-[360px] my-[80px] h-[570px] text-center">
                <p className='text-[38px] font-bold'>Name Family</p>
                <img src="" className='w-[100%] h-[450px] rounded-[5px] object-cover bg-[gray]' alt="" />
                <p className='text-[42px] text-[gray]'>Developer</p>
              </div>
              <div className="w-[360px] h-[570px] text-center">
                <p className='text-[38px] font-bold'>Name Family</p>
                <img src="" className='w-[100%] h-[450px] rounded-[5px] object-cover bg-[gray]' alt="" />
                <p className='text-[42px] text-[gray]'>Developer</p>
              </div>
              <div className="w-[360px] h-[570px] text-center">
                <p className='text-[38px] font-bold'>Name Family</p>
                <img src="" className='w-[100%] h-[450px] rounded-[5px] object-cover bg-[gray]' alt="" />
                <p className='text-[42px] text-[gray]'>Developer</p>
              </div> */}
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs