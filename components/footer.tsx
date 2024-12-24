import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
     
    
         
        <span className="ml-3 text-xl">FlexiStore</span>
    
      
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Location
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800" href="">Saddar</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800" href=''>Gulshan</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800" href=''>Nazimabad</Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">North Chapter</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Men&#39;s</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Women</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Kids</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Home/Decor</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Stitched</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Unstitched</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Imported</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Made in Pakistan</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Media Links
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Facebook</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Instagram</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Line</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2020 FlexiStore 
       
      </p>
 
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
