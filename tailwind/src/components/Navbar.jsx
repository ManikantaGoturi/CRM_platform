import React from 'react'
import profile_logo from '../assets/profile_icon.png'

const Navbar = () => {
  return (
    <div className="">
      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-xl">Employee Management CRM</span>
            </a>
            <nav className="md:ml-auto flex flex-row flex-wrap items-center text-base justify-center">
            <div className="flex flex-row items-center gap-6 w-full max-w-3xl">
                <div className="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#6B7280">
                    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
                  </svg>
                  <input type="text" className="w-full h-full outline-none text-sm text-gray-500"/>
                  <button type="submit" className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white mr-[5px]">Search</button>
                </div>
                <div className="relative group">
                  <img src={profile_logo} className="w-10 cursor-pointer" alt="profile" />
                  <ul className="absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                    <li className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer" onClick="">settings</li>
                    <li className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer" onClick="">Logout</li>
                  </ul>
                </div>
              </div> 
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Navbar
