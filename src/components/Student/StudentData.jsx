import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { asynccurrentuser } from '../../store/Actions/userActions';
import Svg from '../../assets/message.svg'
const StudentData = () => {

    const { user } = useSelector((state) => state.user)
    console.log(user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asynccurrentuser())
    }, [])
    return user ? (
        <>
              <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
        <div className='flex items-center gap-5'>
          <Link to="/StudentProfile">
            <img className='w-[120px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
          </Link>
        </div>
        <div className='flex items-center gap-10 text-[16px]'>
          <h4 className='hover:text-blue-400 cursor-pointer'>Internships <i className="ri-arrow-down-s-fill"></i></h4>
          <h4 className='hover:text-blue-400 cursor-pointer'>Courses <i className="ri-arrow-down-s-fill"></i></h4>
          <h4 className='hover:text-blue-400 cursor-pointer'>Jobs <i className="ri-arrow-down-s-fill"></i></h4>
          <h4 className='hover:text-blue-400 cursor-pointer'>Clubs</h4>
          <img className='w-7' src={Svg} alt="" />
          <div className='flex items-center gap-2 h-[40px]'>
          <Link to={"/StudentData"}>
          <div className='w-10 h-10 rounded-full border overflow-hidden'>
              <img className='w-full h-full object-cover' src={user.avatar != '' ? user.avatar : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
            </div>
          </Link>
            <i  className="ri-arrow-down-s-fill"></i>
          </div>
        </div>
      </div>
            <div className='w-full h-[170vh]  py-20'>
                <h1 className='text-[3vw] font-semibold text-center '>Personal details</h1>
                <div className='w-full flex items-center justify-center my-3'>
                    <div className='w-36 h-36 rounded-full border overflow-hidden '>
                        <img className='w-full h-full object-cover' src={user.avatar != '' ? user.avatar : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                    </div>
                </div>

                <div className='w-full h-[60vh]  flex items-center justify-center'>
                    <div className='w-2/4 h-full  rounded-lg border p-6'>
                        <form role="form">
                            <div className="flex gap-5">
                                <div>
                                    <label for="first_name">First Name</label>
                                    <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' disabled value={user.firstname} placeholder="John" />
                                </div>
                                <div >
                                    <label for="last_name">Last Name</label>
                                    <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' disabled value={user.lastname} placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label for="email" >Email</label>
                                <input type="email" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" disabled value={user.email} placeholder="email" />
                            </div>
                            <div className="flex gap-5">
                                <div>
                                    <label for="Gender" >Gender</label>
                                    <input type="Gender" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" disabled value={user.gender} placeholder="Gender" />
                                </div>
                                <div>
                                    <label for="City">City</label>
                                    <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' disabled value={user.city} placeholder="City" />
                                </div>

                            </div>

                            <div className="flex">
                                <div className='flex items-center justify-between gap-10'>
                                    <div>
                                        <label for="first_name">Contact</label>
                                        <div className='flex gap-4'>
                                            <input type="text" className='w-[50px] mt-2 px-2 py-2 outline-none rounded-md border mb-2' disabled value={91} placeholder="+91" />
                                            <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' disabled value={user.contact} placeholder="Contact" />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center gap-2 mt-5 text-green-600'>
                                        <i class="ri-verified-badge-line"></i>
                                        <p>Verified</p>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Link to={"/StudentProfile"}>
                <button className='px-5 py-[8px] ml-[68vw] mt-5 mb-32 font-semibold rounded-sm text-white bg-blue-500'>Done</button>
                </Link>
                
                <p className='text-center mb-4'>Need help? Call us at <span className='text-blue-400'>+91 8448444852</span>, available from Mon to Fri, 10 AM - 6 PM.</p>
                <div className='w-full h-[32vh] bg-[#333333]'>
                    <div className='flex items-center justify-center gap-10 text-white w-full h-[20vh] border-b'>
                        <p> About us</p>
                        <p>Blog</p>
                        <p>We’re hiring</p>
                        <p>userr resources</p>
                        <p>Our services</p>
                        <p>Terms & conditions</p>
                        <p>Privacy</p>
                        <p>Refund policy</p>
                        <p>Contact us</p>
                        <p>Sitemap</p>

                    </div>
                    <div className='flex items-center justify-between px-10 mt-4'>
                        <div className='text-white flex gap-3 text-2xl'>
                            <i class="ri-instagram-line"></i>
                            <i class="ri-twitter-line"></i>
                            <i class="ri-youtube-line"></i>
                            <i class="ri-linkedin-fill"></i>
                        </div>
                        <div className='text-white text-xl'>© Copyright 2024 Internshala</div>
                    </div>
                </div>
            </div>
        </>
    ) : <p>loading.....</p>
}

export default StudentData