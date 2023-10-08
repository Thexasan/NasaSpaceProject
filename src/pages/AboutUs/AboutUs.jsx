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
            <div className="w-[910px] text-[36px] py-[90px] font-bold text-center">
              <h1><span className='text-[#0072CD] font-normal'>Open project partners </span>
              the opportunity to interact with scientists from all over the world</h1>
              <p className='text-[20px] font-normal mt-[10px]'>Open Project Partners is an online science platform where everyone
              has the opportunity to share their project ideas that can be realized by collaborating with other
              scientists, because now on our site you can communicate with each other from different continents.</p>
            </div>
          </div>
          <div className="contatiner1 text-center my-[40px]">
            <h1 className='text-[48px] font-bold'>Meet our development team</h1>
          </div>
          <div className="container1 flex justify-center">
            <div className="w-[910px] flex flex-wrap py-[40px] justify-between">
              <div className="w-[360px] h-[570px] text-start">
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
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs