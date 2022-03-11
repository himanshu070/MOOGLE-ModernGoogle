import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Routes from '../components/Routes'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  console.log(darkTheme);
  return (
   <>
      <div className="">
         <div className='bg-gray-200 dark:bg-pink-900'>
            <Navbar/>
            <Routes/>
            <Footer/>
        </div>
      </div>
   </>
  )
}
