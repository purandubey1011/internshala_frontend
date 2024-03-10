import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Svg from '../../assets/message.svg'
import { asynccurrentuser, asyncuserupdate ,asyncremoveuser } from '../../store/Actions/userActions';

const StudentProfileEdit = () => {
    const {user} = useSelector((state)=> state.user)
    // console.log(user._id);
    useEffect(()=>{
        dispatch(asynccurrentuser())
    },[])
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        city: '',
        gender: '',
        avatar: '',
        id:user._id
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: validateInput(name, value),
        });
    };



    const validateInput = (name, value) => {
        console.log(value);
        switch (name) {
            case 'firstname':
                return value.length < 3 ? 'Firstname must be at least 3 characters' : '';
            case 'gender':
                return value.length < 3 ? 'Gender must be at least 3 characters' : '';
            case 'city':
                return value.length < 3 ? 'City must be at least 3 characters' : '';
            case 'contact':
                return value.length < 9 ? 'Contact must be at least 10 characters' : '';
            case 'lastname':
                return value.length < 3 ? 'Lastname must be at least 3 characters' : '';
            case 'avatar':
                return value.length < 3 ? 'Enter the image url' : '';
            default:
                return '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach((name) => {
            newErrors[name] = validateInput(name, formData[name]);
        });
        // Update errors state with new validation results
        setErrors(newErrors);

        if (Object.values(newErrors).every((error) => error === '')) {
            console.log('Form submitted successfully!');
            dispatch(asyncuserupdate(formData))
            // console.log(setFormData);
            navigate("/StudentProfile")
        } else {
            console.log('Form contains validation errors. Please fix them.');
        }
    }

    const LogoutHandler = () => {
        console.log("click");
        dispatch(asyncremoveuser());
        navigate('/')
      };



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
            <h4 className='hover:text-blue-400 cursor-pointer' onClick={LogoutHandler}><i class="ri-logout-box-line"></i> Logout</h4>
          </div>
        </div>
      </div>
            <div className='w-full h-[140vh] py-10'>
                <h1 className='text-[2vw] font-semibold text-center mt-8 mb-10'>Edit Profile</h1>
                <div className='w-full h-[60vh]  flex items-center justify-center'>
                    <div className='w-2/4 min-h-full  rounded-lg border p-6'>

                        <form role="form" onSubmit={handleSubmit} className='px-6'>
                        <div className="flex gap-5">
                                <div>
                                    <label for="first_name">First Name</label>
                                    <input type="text" name="firstname" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.firstname} onChange={handleChange} placeholder="John" />
                                    {errors.firstname && <span className='text-red-500'>{errors.firstname}</span>}
                                </div>
                                <div >
                                    <label for="last_name">Last Name</label>
                                    <input type="text" name="lastname" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.lastname} onChange={handleChange} placeholder="Doe" />
                                    {errors.lastname && <span className='text-red-500'>{errors.lastname}</span>}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label for="email">Email</label>
                                <input type="email" name="email" className="w-[90vh] mt-2 px-2 py-2 outline-none rounded-md border mb-2" value={user.email} disabled onChange={handleChange} placeholder="john@example.com" />
                                {errors.email && <span className='text-red-500'>{errors.email}</span>}
                            </div>
                            <div className="flex gap-5">
                                <div className='flex flex-col'>
                                    <label for="first_name">Gender</label>
                                    <input type="text" name="gender" className='w-[20vw] mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.gender} onChange={handleChange} placeholder="Gender" />
                                    {errors.gender && <span className='text-red-500'>{errors.gender}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label for="last_name">City</label>
                                    <input type="text" name="city" className='w-[20vw] mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.city} onChange={handleChange} placeholder="City" />
                                    {errors.city && <span className='text-red-500'>{errors.city}</span>}
                                </div>
                            </div>


                            <div className="flex">
                                <div className='flex items-center justify-between gap-10'>
                                <div className="flex">
                                <div>
                                    <label for="first_name">Contact</label>
                                    <input type="text" name="contact" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.contact} onChange={handleChange} placeholder="Contact" />
                                    {errors.contact && <span className='text-red-500'>{errors.contact}</span>}
                                </div>
                            </div>
                                <div>
                                    <label for="first_name">Avatar</label>
                                    <input type="text" name="avatar" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.avatar} onChange={handleChange} placeholder="avatar" />
                                    {errors.avatar && <span className='text-red-500'>{errors.avatar}</span>}
                                </div>
                                   
                                    <button className='px-3 rounded text-white font-semibold py-2 bg-green-500 -ml- mt-5'>Changed</button>

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

export default StudentProfileEdit