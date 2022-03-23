import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Search from './Search';


const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link href="/">
          <a className="flex text-2xl bg-blue-400 font-bold text-white py-1 px-1 rounded dark:bg-gray-500 dark:text-gray-900">
            <img src="/cow.svg" alt="add" width={35} height={35} />
            <p>Moogle</p>
          </a>
        </Link>

        {/* Dark Mode Toggle Button  */}
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? (
            <div className="flex">
              <p>Light</p>
              <img src="/light.svg" alt="" width={30} className="ml-2" />
            </div>
          ) : (
            <div className="flex">
              <p>Dark</p>
              <img src="/dark.svg" alt="" width={28} className="ml-2" />
            </div>
          )}
        </button>
      </div>

      {/* Search Component  */}
      <Search />
      
    </div>
  );
}

export default Navbar