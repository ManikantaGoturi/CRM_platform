import React from 'react'
import { FaHome, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import logo from '../assets/employee_logo_crm.png'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar h-screen w-64 bg-gray-800 text-white flex flex-col p-6">
        <img src={logo} alt="Logo"/>
        <ul className="space-y-4">
          <li className="flex items-center px-2 py-2 rounded hover:bg-gray-700 cursor-pointer transition">
            <FaHome className="text-lg" />
            <span className="ml-3">Dashboard</span>
          </li>
          <li className="flex items-center px-2 py-2 rounded hover:bg-gray-700 cursor-pointer transition">
            <FaUsers className="text-lg" />
            <span className="ml-3">Employees</span>
          </li>
          <li className="flex items-center px-2 py-2 rounded hover:bg-gray-700 cursor-pointer transition">
            <FaChartBar className="text-lg" />
            <span className="ml-3">Reports</span>
          </li>
          <li className="flex items-center px-2 py-2 rounded hover:bg-gray-700 cursor-pointer transition">
            <FaCog className="text-lg" />
            <span className="ml-3">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
