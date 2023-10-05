import React, { useEffect } from 'react'

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Catalog</div>
  )
}

export default Catalog