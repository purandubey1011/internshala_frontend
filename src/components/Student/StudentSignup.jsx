import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../../assets/background.png'
import { useDispatch } from 'react-redux'
import { asyncsignup } from '../../store/Actions/userActions'
const StudentSignup = () => {

        const [formData, setFormData] = useState({
            firstname: '',
            lastname: '',
            contact: '',
            city: '',
            gender: '',
            email: '',
            password: '',
            avatar: ''
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
                case 'firstname':
                    return value.length < 3 ? 'Firstname must be at least 3 characters' : '';
                case 'email':
                    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
                case 'password':
                    return value.length < 6 ? 'Password must be at least 6 characters' : '';
                case 'gender':
                    return value.length < 3 ? 'Gender must be at least 3 characters' : '';
                case 'city':
                    return value.length < 3 ? 'City must be at least 3 characters' : '';
                case 'contact':
                    return value.length < 9 ? 'Contact must be at least 10 characters' : '';
                case 'lastname':
                    return value.length < 3 ? 'Lastname must be at least 3 characters' : '';
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
                dispatch(asyncsignup(formData))
                navigate("/StudentLogin")
            } else {
                console.log('Form contains validation errors. Please fix them.');
            }
 }       
 return (
        <>
            <div className='fixed bg-white w-full py-4 shadow flex px-14 items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <Link to="/">
                        <img className='w-[100px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                    </Link>
                </div>
            </div>
            <br /><br />
            <div className='flex items-center justify-center'>
                <img className='fixed z-[-999] w-full h-screen ' src={Image} alt="" />
                <div className='w-[40vw] h-[135vh]  mt-10'>
                    <h1 className='text-[3vw] font-bold text-center'>Sign-up and apply for free</h1>
                    <p className='text-[1.8vw] text-center'>1,50,000+ companies hiring on Internshala</p>

                    <div className='px-10 py-8 mt-10 shadow-lg shadow-blue-300 w-[90%] ml-[5%] rounded-xl'>
                        <form role="form" onSubmit={handleSubmit}>
                            <div className='w-full h-12 border-2 flex items-center justify-center mb-5 rounded-md font-sans font-semibold text-[18px]'>
                                <img className='w-10' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                                <p>Sign up with Google</p>
                            </div>
                            <div className="flex items-center gap-5 mb-3">
                                <div className="w-1/2 h-1 bg-zinc-500"></div>
                                <p>OR</p>
                                <div className='w-1/2 h-1 bg-zinc-500'></div>
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input type="email" name="email" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                {errors.email && <span className='text-red-500'>{errors.email}</span>}
                            </div>
                            <div>
                                <label for="password" >Password</label>
                                <input type="password" name="password" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2" value={formData.password} onChange={handleChange} placeholder="Must be atleast 6 characters" />
                                {errors.password && <span className='text-red-500'>{errors.password}</span>}
                            </div>
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
                            <div className="flex gap-5">
                                <div>
                                    <label for="first_name">Gender</label>
                                    <input type="text" name="gender" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.gender} onChange={handleChange} placeholder="Gender" />
                                    {errors.gender && <span className='text-red-500'>{errors.gender}</span>}
                                </div>
                                <div >
                                    <label for="last_name">City</label>
                                    <input type="text" name="city" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.city} onChange={handleChange} placeholder="City" />
                                    {errors.city && <span className='text-red-500'>{errors.city}</span>}
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <label for="first_name">Contact</label>
                                    <input type="text" name="contact" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.contact} onChange={handleChange} placeholder="Contact" />
                                    {errors.contact && <span className='text-red-500'>{errors.contact}</span>}
                                </div>
                            </div>
                            <div className='mt-3 mb-3 text-[14px]'>
                                By signing up, you agree to our <a className='text-blue-500'>Terms and Conditions</a>.
                            </div>
                            <button type="submit" className="w-full bg-blue-400 text-white py-2" id="registration_submit">Sign up</button>
                            <p className='text-center mt-3'>Already registered? <Link to="/StudentLogin" className='text-blue-500'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentSignup