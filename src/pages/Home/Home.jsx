import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home