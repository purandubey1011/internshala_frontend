import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { asynccurrentemploye ,asyncemployeupdate } from '../../store/Actions/userActions';

const EmployeData = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [contact, setcontact] = useState("")
    const [organizationname, setorganizationname] = useState("")
    const navigate = useNavigate();

    const { employe } = useSelector((state) => state.employe)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(asynccurrentemploye())
      },[]); 

    const onSubmit = (event)=>{
        event.preventDefault();
        const newemploye = {
            firstname:firstname,
            lastname: lastname,
            contact: contact,
            id:employe._id, 
            organizationname: organizationname
        };

        dispatch(asyncemployeupdate(newemploye))
        setcontact("")
        setfirstname("")
        setlastname("")
        setorganizationname("")
        navigate("/EmployeProfile")  
    };


    

    return employe ? (
        <>
            <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <Link to="/EmployeProfile">
                        <img className='w-[120px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                    </Link>
                </div>
                <div className='flex items-center gap-10 text-[16px]'>
                    <h4 className='hover:text-blue-400 cursor-pointer'>Dashboard<i className="ri-arrow-down-s-fill"></i></h4>
                    <h4 className='hover:text-blue-400 cursor-pointer'> Post Internships / Jobs<i className="ri-arrow-down-s-fill"></i></h4>
                    <div className='flex items-center gap-2 h-[40px] cursor-pointer'>
                        <Link to="/EmployeData">
                            <div className='w-10 h-10 rounded-full border overflow-hidden '>
                                <h1 className='first-letter:text-4xl ml-[9px] -mt-[5px] tracking-[15px]'>{employe.firstname}</h1>
                            </div>
                        </Link>
                        <i class="ri-arrow-down-s-fill"></i>
                    </div>
                </div>
            </div>
            <div className='w-full h-[140vh] py-10'>
                <h1 className='text-[2vw] font-semibold text-center mt-8 mb-10'>Edit Profile</h1>
                <div className='w-full h-[60vh]  flex items-center justify-center'>
                    <div className='w-2/4 h-full  rounded-lg border p-6'>

                        <form role="form" onSubmit={onSubmit}>
                            <div className="flex gap-5">
                                <div>
                                    <label for="first_name">First Name</label>
                                    <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2'  onChange={(event) => setfirstname(event.target.value)} placeholder="John" />
                                </div>
                                <div >
                                    <label for="last_name">Last Name</label>
                                    <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' onChange={(event) => setlastname(event.target.value)} placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label for="email" >Email</label>
                                <input type="email" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" disabled value={employe.email} placeholder="email" />
                            </div>
                            <div>
                                <label for="organizationname" >Organization Name</label>
                                <input type="organizationname" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2"   onChange={(event) => setorganizationname(event.target.value)} placeholder="Organization Name" />
                            </div>

                            <div className="flex">
                                <div className='flex items-center justify-between gap-10'>
                                    <div>
                                        <label for="first_name">Contact</label>
                                        <div className='flex gap-4'>
                                            <input type="text" className='w-[50px] mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={91} placeholder="+91" />
                                            <input type="text" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2'   onChange={(event) => setcontact(event.target.value)} placeholder="Contact" />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center gap-2 mt-5 text-green-600'>
                                        <i class="ri-verified-badge-line"></i>
                                        <p>Verified</p>
                                    </div>
                                    <button className='px-3 rounded text-white font-semibold py-1 bg-green-500 ml-20 mt-5'>Changed</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <p className='text-center mb-14 mt-32 '>Need help? Call us at <span className='text-blue-400'>+91 8448444852</span>, available from Mon to Fri, 10 AM - 6 PM.</p>
                <div className='w-full h-[30vh] bg-[#333333]'>
                    <div className='flex items-center justify-center gap-10 text-white w-full h-[20vh] border-b'>
                            <p> About us</p>
                            <p>Blog</p>
                            <p>We’re hiring</p>
                            <p>Employer resources</p>
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

export default EmployeData