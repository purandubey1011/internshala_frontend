import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asynccurrentemploye, asyncremoveemploye } from '../../store/Actions/userActions';
import { motion } from 'framer-motion';

const EmployeProfile = () => {
  const {employe} = useSelector((state)=> state.employe)
  console.log(employe );
  const navigate = useNavigate()
  const dispatch=  useDispatch()

  useEffect(()=>{
    dispatch(asynccurrentemploye())
  },[])

const [a,b] = useState(false)
  
  const LogoutHandler = () => {
    console.log("click");
    dispatch(asyncremoveemploye());
    navigate('/')
};
  return employe ?(
    <div className='overflow-hidden'>
         <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Link to="/EmployeProfile">
                    <img className='w-[120px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                </Link>
            </div>
            <div className='flex items-center gap-10 text-[16px]'>
                <h4 className='hover:text-blue-400 cursor-pointer'>Dashboard<i className="ri-arrow-down-s-fill"></i></h4>
                <Link to='/JobInternship' className='hover:text-blue-400 cursor-pointer'> Post Internships / Jobs<i className="ri-arrow-down-s-fill"></i></Link>
                <div className='flex items-center gap-2 h-[40px] cursor-pointer'>
                     <Link to="/EmployeData">
                     <div className='w-10 h-10 rounded-full border overflow-hidden '>
                      <h1 className='first-letter:text-4xl ml-[9px] -mt-[5px] tracking-[15px]'>{employe.firstname}</h1>
                     </div>
                     </Link>
                    <i  onClick={()=> b(!a)} className="ri-arrow-down-s-fill"></i>
                </div>
                <h4 className='hover:text-blue-400 cursor-pointer' onClick={LogoutHandler}><i class="ri-logout-box-line"></i> Logout</h4>
            </div>
        </div>
        <div className='w-full h-screen  p-10'>
            <h1 className='text-[2.2vw] font-semibold text-center'>Hi, {employe.firstname}! ✋</h1>
            <p className='text-[2vw] tracking-tighter text-center text-zinc-600'>Let’s help you land your dream career</p>
            <h4 className='text-[2vw] font-semibold text-center mt-20 mb-7'>Trending on Internshala 🔥</h4>
            <div className='scroll flex overflow-x-auto whitespace-nowrap'>
                <div className='scrolll flex gap-10 min-w-[100vw] '>
                  <img className='w-[400px]' src="https://internshala.com/static/images/pgc_course_specific_banners/ui_ux_course.png" alt="" />
                  <img className='w-[400px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                  <img className='w-[400px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/vday_ext_feb24-student.png.webp" alt="" />
                  <img className='w-[400px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp" alt="" />
                  <img className='w-[400px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp" alt="" />
                  <img className='w-[400px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp" alt="" />
                </div>
            </div>
            <div className='w-full h-14 flex items-center justify-center mt-5'>
                <div className='w-1/6 h-full flex items-center gap-4'>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-left-s-line"></i>
                    </div>
                    <div className='w-1/2 rounded-full h-1 bg-zinc-500'></div>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='Recommended-preferance w-full  bg-[#F0FBFF] mt-8 p-3 pt-10'>
            <div className=' text-center font-semibold tracking-tighter'>
                <h1 className='text-3xl '>Recommended for you</h1>
                <p className='text-xl opacity-60'>as per your <a href="#" className='text-[#009BDE]'> preferences</a></p>
            </div>
            <div className='scrollbar mt-10 mx-12 flex gap-7 whitespace-nowrap overflow-x-auto overflow-y-hidden'>
                <div className='box-1 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-2 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-3 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-4 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-5 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-6 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-7 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-8 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-9 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-10 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-11 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-12 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
                <div className='box-13 flex-shrink-0 w-72 rounded-2xl pb-3 bg-white'>
                      <div className='up p-4 border-b'>
                        <a href="#" className='border px-3 text-sm font-semibold opacity-80 py-1 rounded-md'>Activity hiring</a>
                        <h2 className='font-bold  text-sm mt-4'>Reactjs Development</h2>
                        <p className=' text-sm'>NatWest Group</p>
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-map-pin-line mr-2"></i>Gurgaon (Hybrid)</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-wallet-2-line mr-2"></i>₹ 45,000 /month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-calendar-line mr-2"></i>6 Months</a>
                      </div>
                      <div className='flex justify-between px-4 py-2 mt-10'>
                        <a href="#" className='text-xs px-1 opacity-70 bg-slate-200 border rounded'>Internship</a>
                        <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >View details<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                </div>
            </div>
            <div className='w-full h-14 flex items-center justify-center mt-5'>
                <div className='w-1/6 h-full flex items-center gap-4'>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-left-s-line"></i>
                    </div>
                    <div className='w-1/2 rounded-full h-1 bg-zinc-500'></div>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='Recommended-preferance w-full mt-8 p-3 pt-10'>
            <div className=' text-center font-semibold tracking-tighter'>
                <h1 className='text-3xl '>Certification courses for you</h1>
            </div>
            <div className='scrollbar mt-10 mx-12 flex gap-7 whitespace-nowrap overflow-x-auto overflow-y-hidden'>
                <div className='box-1 flex-shrink-0 w-72 rounded-2xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px]' src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-1'>
                      <a href="#" className='opacity-40 text-sm font-semibold'>8 Weeks</a>
                      <a href="#" className='text-lg font-semibold'>Web development</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-star-fill mr-1 text-lg text-yellow-400"></i> 4.1 | 15824</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-2xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px]' src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/python.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-1'>
                      <a href="#" className='opacity-40 text-sm font-semibold'>8 Weeks</a>
                      <a href="#" className='text-lg font-semibold'>Python and Programming</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-star-fill mr-1 text-lg text-yellow-400"></i> 4.1 | 15824</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-2xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px]' src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/java.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-1'>
                      <a href="#" className='opacity-40 text-sm font-semibold'>8 Weeks</a>
                      <a href="#" className='text-lg font-semibold'>Core Java</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-star-fill mr-1 text-lg text-yellow-400"></i> 4.1 | 15824</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-2xl bg-white border-2 overflow-hidden'>
                      <div className='border-b '>
                       <img className='h-[130px]' src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/machine-learning.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-1'>
                      <a href="#" className='opacity-40 text-sm font-semibold'>8 Weeks</a>
                      <a href="#" className='text-lg font-semibold'>Machine Learning</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-star-fill mr-1 text-lg text-yellow-400"></i> 4.1 | 15824</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-2xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px]' src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-1'>
                      <a href="#" className='opacity-40 text-sm font-semibold'>8 Weeks</a>
                      <a href="#" className='text-lg font-semibold'>Web development</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i className="ri-star-fill mr-1 text-lg text-yellow-400"></i> 4.1 | 15824</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
               
            </div>
            <div className='w-full h-14 flex items-center justify-center mt-5'>
                <div className='w-1/6 h-full flex items-center gap-4'>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-left-s-line"></i>
                    </div>
                    <div className='w-1/2 rounded-full h-1 bg-zinc-500'></div>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='Recommended-preferance bg-[#F0FBFF] w-full mt-8 p-3 pt-10'>
            <div className=' text-center font-semibold tracking-tighter'>
                <h1 className='text-3xl '>Placement guarantee courses</h1>
            </div>
            <div className='scrollbar mt-10 mx-12 flex gap-7 whitespace-nowrap overflow-x-auto overflow-y-hidden'>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/fsd-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3 mb-3'>
                      <a href="#" className='text-lg font-semibold'>Full Stack Development <br /> Course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-5' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/ds-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3 mb-3'>
                      <a href="#" className='text-lg font-semibold'>Data Science Course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-11' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/hrm-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3 mb-3'>
                      <a href="#" className='text-lg font-semibold'>Human Resource <br /> Management Course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-5' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/dm-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3 mb-3'>
                      <a href="#" className='text-lg font-semibold'>Digital Marketing Course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-11' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/pm-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3 mb-3'>
                      <a href="#" className='text-lg font-semibold'>Project Management Course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-11' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/ui-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3'>
                      <a href="#" className='text-lg font-semibold'>UI/UX Design Course </a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-12' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
                <div className='box-1 flex-shrink-0 w-72 rounded-xl bg-white border-2 overflow-hidden'>
                      <div className='border-b'>
                       <img className='h-[130px] w-full' src="https://internshala.com/static/images/home/specializations/ev-min.png" alt="" />
                      </div>
                      <div className='px-4 py-2 flex flex-col gap-3 mb-3'>
                      <a href="#" className='text-lg font-semibold'>Electric Vehicle industry <br /> Course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold bg-yellow-300'>course with guaranteed internship</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'><i class="ri-timer-2-line"></i> 8 month course</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  Highest stipend offered ₹ 1.1 Lac/month</a>
                      <a href="#" className='opacity-40 text-sm font-semibold'>₹  1.08 Lac + job/internship opportunies</a>
                     <a href="#" className='text-[#006BCE] font-semibold text-base tracking-tighter mt-5' >Know more<i className="ri-arrow-right-s-line ml-2 "></i></a>
                      </div>
                      
                </div>
            </div>
            <div className='w-full h-14 flex items-center justify-center mt-8 mb-8'>
                <div className='w-1/6 h-full flex items-center gap-4'>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-left-s-line"></i>
                    </div>
                    <div className='w-1/2 rounded-full h-1 bg-zinc-500'></div>
                    <div className='w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-400'>
                    <i className="text-[25px] ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full  bg-[#303030] text-[#FFFFDF] px-32 py-1'>
       <div className='upwalidiv w-full flex gap-12  px-2 py-8  border-b'>
       <div className='1'>
          <h1 className='text-[2.2vh] font-semibold mb-4' >Internships by places</h1>
          {["Internship in India","Internship in Delhi","Internship in Bangalore","Internship in Hyderabad","Internship in Mumbai","Internship in Chennai","Internship in Gurgaon","Internship in Kolkata","Virtual internship","View all internships"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
          })}
        </div>
        <div className='2'>
          <h1 className='text-[2.2vh] font-semibold mb-4' >Internship by Stream</h1>
          {["Computer Science Internship","Electronics Internship","Mechanical Internship","Civil Internship","Marketing Internship","Chemical Internship","Finance Internship","Summer Research Fellowship","Campus Ambassador Program","View all internships"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
          })}
        </div>
        <div className='3'>
          <h1 className='text-[2.2vh] font-semibold mb-4' >Jobs by Places</h1>
          {["Jobs in Delhi",,"Jobs in Mumbai","Jobs in Bangalore","Jobs in Jaipur","Jobs in Kolkata","Jobs in Hyderabad","Jobs in Pune","Jobs in Chennai","Jobs in Lucknow","View all jobs"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
          })}
        </div>
        <div className='4'>
          <h1 className='text-[2.2vh] font-semibold mb-4' >Jobs by Stream</h1>
          {[" Marketing jobs"," Content writing jobs"," Web development jobs"," Sales jobs"," Finance jobs"," Digital Marketing jobs"," Computer Science jobs"," Graphic Design jobs"," Data Science jobs"," View all jobs"
          ].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
          })}
        </div>     
        <div className='5'>
          <h1 className='text-[2.2vh] font-semibold mb-4 cursor-pointer' >Placement Guarantee Courses</h1>
          {["Full Stack Development course with placement","Data Science course with placement","Human Resource Management course with placement","Digital Marketing course with placement","Product Management course with placement","UI/UX Design course with placement","Electric Vehicle course with placement"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
          })}
          <h1 className='text-[2.2vh] font-semibold  mt-8 cursor-pointer' >Certification Courses</h1>
        </div>
       </div>
        <div className='downwalidiv w-full  my-5 px-2 flex gap-32 '>
             <div className='1'>
             {["About us","We're hiring","Hire interns for your company"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
          })}
             </div>
             <div className='1'>
             {["Team Diary","Blog","Our Services"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
          })}
             </div>
             <div className='1'>
             {["Terms & Conditions","Privacy","Contact us"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
          })}
             </div>
             <div className='1'>
             {["Sitemap","College TPO registration","List of Companies"].map((event,index)=>{
            return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
          })}
             </div>
        </div>
        <div className='footer w-full my-5  py-5 flex justify-between items-center'>
            <div className='flex gap-10 items-center'>
              <a href="#" className=' flex items-center rounded px-3 py-2 border tracking-tighter font-semibold cursor-pointer'> 
              <svg className='mr-1 text-xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1m8.292 11.68l-4.498 4.498l5.699-3.299zM5 6.118v11.76l5.88-5.88zm10.284 4.302L13.707 12l1.578 1.577L18.009 12zm-7.49-4.336l4.5 4.5l1.199-1.2z"/></svg>Get Android App</a>
              <div className='icon flex gap-5 text-2xl '>
              <i className="ri-instagram-line cursor-pointer"></i>
              <i className="ri-twitter-line cursor-pointer"></i>
              <i className="ri-youtube-fill cursor-pointer"></i>
              <i className="ri-linkedin-fill cursor-pointer "></i>
              </div>
            </div>
            <div>
            <h1 className='tracking-tight '>© Copyright 2024 Internshala</h1>
            </div>
        </div>
         </div>
        <motion.aside 
          animate={a?{x:"-150%"}:{x: "0%"}}
          initial={{duration:0.2 }}
          transition={{duration:0.2}}
         className='page absolute top-16 -right-60 w-[250px] h-[50vh] bg-white p-3 rounded-md overflow-hidden border'>
            <div className='w-20 h-20 rounded-full bg-blue-300 ml-[65px] mb-2'></div>
            <p className='font-bold'>{employe.firstname} {employe.lastname}</p>
            <p>{employe.email}</p>
            <div className='w-full h-[2px] mt-3 bg-zinc-300 mb-5'></div>
            <div className='w-full flex flex-col ml-5 gap-3'>
            <Link to='/EmployeProfileEdit'>
            <p>Edit profile</p>
            </Link>
            <Link to='/Change-Password'>
            <p>Change Password</p>
            </Link>
            <p>Delete My Account</p>
            </div>
         </motion.aside>
    </div>
  ): <p>loading...</p>
}

export default EmployeProfile