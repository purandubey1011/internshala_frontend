"use client"
import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const Nav = () => {
    return (
        <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Link to="/">
                    <img className='w-[100px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                </Link>
            </div>
            <div className='flex gap-10 text-[20px]'>
                <input className='border border-blue-200 px-5 py-1 text-[17px] rounded-full outline-none' type="text" placeholder='Search'/>
                <Link className='px-3 flex items-center text-[15px] text-blue-700 font-semibold rounded-md border border-blue-500 ' to="/StudentLogin">Login</Link>
                <Link className='bg-blue-500 px-3 flex items-center text-[15px] text-white font-semibold rounded-md' to="/StudentSignup">Student Sign-up</Link>
                <Link className='bg-blue-500 px-3 flex items-center text-[15px] text-white font-semibold rounded-md' to="/EmployeSignup">Employe Sign-up</Link>
            </div>
        </div>
    )
}

export default Nav