import React from 'react'

const ScienceCard = ({img, text1, text2}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h1>{text1}</h1>
        <h1>{text2}</h1>
    </div>
  )
}

export default ScienceCard