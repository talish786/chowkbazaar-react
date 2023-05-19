import React from 'react'

const AdminLogin = () => {
  return (
    <div className="bg-black1 h-screen flex justify-center items-center">
        <from className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 rounded">
          <h3 className="mb-4 text-white capitalize font-semibold text-lg">Admin Dashboard</h3>
          <div className="mb-4">
            <input type="email" className="w-full bg-black1 p-3 rounded outline-none text-white" placeholder="Enter Email"/>
          </div>
          <div className="mb-4">
            <input type="password" className="w-full bg-black1 p-3 rounded outline-none text-white" placeholder="Enter Password"/>
          </div>
          <div className="mb-4">
            <input type="submit" className="w-full bg-indigo-600 p-4 rounded outline-none text-white cursor-pointer uppercase font-semibold" value="sign in &rarr;"/>
          </div>
        </from>
    </div>
  )
}

export default AdminLogin