import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Employee from './components/Employee'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
          <Navbar/>
          <Employee/>
        </div>
      </div>
    </div>
  )
}

export default App
