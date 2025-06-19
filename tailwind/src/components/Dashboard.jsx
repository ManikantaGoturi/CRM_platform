import React , {useState, useEffect}from 'react'

const base_url = 'http://localhost:8080/api';

const Dashboard = () => {

  const [counts, setCounts] = useState({
    total:0,
    developers:0,
    managers:0,
    sales:0
  });

  useEffect(()=>{
    fetch(`${base_url}/counts`)
    .then(res => res.json())
    .then(data => setCounts(data))
    .catch(err => console.log(err))
  },[]);



  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
      <div className="bg-white p-4 rounded shadow text-center">
        <h2 className="text-lg font-bold">Total Employees</h2>
        <p className="text-2xl">{counts.total}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h2 className="text-lg font-bold">Developers</h2>
        <p className="text-2xl">{counts.developers}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h2 className="text-lg font-bold">Managers</h2>
        <p className="text-2xl">{counts.managers}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h2 className="text-lg font-bold">Sales</h2>
        <p className="text-2xl">{counts.sales}</p>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;
