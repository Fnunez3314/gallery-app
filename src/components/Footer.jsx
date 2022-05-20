import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <div className='text-white-50'>By Federico Nuñez - &copy; {new Date().getFullYear()}{" "}</div>
    </nav>
  )
}

export default Footer