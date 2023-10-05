import React, { useEffect } from 'react'

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Profile</div>
  )
}

export default Profile