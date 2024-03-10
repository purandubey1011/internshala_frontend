import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { asynccurrentemploye, asyncremoveemploye ,asyncemployeresetpassword } from '../../store/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const ChangeResetPassword = () => {
    const {employe} = useSelector((state)=> state.employe)
    console.log(employe );
  
    useEffect(()=>{
      dispatch(asynccurrentemploye())
    },[])
  
    
    const LogoutHandler = () => {
      console.log("click");
      dispatch(asyncremoveemploye());
      navigate('/')
  };

  const [formData, setFormData] = useState({
    password: '',

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
    // console.log(value);
    switch (name) {
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
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
      dispatch(asyncemployeresetpassword(formData))
      navigate("/EmployeLogin")
    } else {
      console.log('Form contains validation errors. Please fix them.');
    }
  }
  return employe ? (
    <div>
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
                    <i className="ri-arrow-down-s-fill"></i>
                </div>
                <h4 className='hover:text-blue-400 cursor-pointer' onClick={LogoutHandler}><i class="ri-logout-box-line"></i> Logout</h4>
            </div>
        </div>
      <p className='mt-10 text-center text-3xl mb-5'>Change Password</p>
        <div className='w-full mb-24'>
        <div className='w-[28vw] min-h-[55vh] m-auto border-2 rounded-lg  p-5'>
        <form action="" onSubmit={handleSubmit}>
            <div>
              <label for="password" >Old Password</label>
              <input type="password" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2"  onChange={handleChange} placeholder="Enter the Old Password" />
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
            </div>
            <div>
              <label for="password" >New Password</label>
              <input type="password" name="password" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" value={formData.password} onChange={handleChange} placeholder="Enter the New Password" />
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
            </div>
            <div>
              <label for="password" >Confirm Password</label>
              <input type="password" name="password" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" value={formData.password} onChange={handleChange} placeholder="Enter the Confirm Password" />
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
            </div>
            <input type="submit" className='w-full bg-blue-400 text-white font-semibold py-2 rounded' value="Update" />
          </form>
        </div>
      </div>
      <div className='w-full h-[32vh] bg-[#333333]'>
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
  ): <p>loading....</p>
}

export default ChangeResetPassword