import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'




export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
   <>
      <div className={darkTheme ? 'dark' : ''}>
         <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Footer/>
        </div>
      </div>
   </>
  )
}

//packages installed - react-router-dom react-player react-loader-spinner use-debounce