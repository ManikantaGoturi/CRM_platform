import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Employee from './components/Employee';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Reports from './components/Reports';
import Settings from './components/Settings';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 md:p-6 bg-gray-50 flex-1">
          <Routes>
            <Route path="/employee" element={<Employee />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Reports/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;