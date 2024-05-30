import React, { Children } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid px-4">
        {children}
      </div>
    <Footer/>
    </>
  )
}
