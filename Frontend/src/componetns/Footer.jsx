import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const date= new Date();
  const year=date.getFullYear();
  return (
    <div className='flex items-center justify-center  gap-4  m-8'>
      <p> copyright &copy; {year}</p>
      <Link to='/contact'>contact</Link>
    </div>
  )
}

export default Footer
