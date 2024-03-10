import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../../assets/r767_banner.png'
import Svg from '../../assets/faster.svg'
import Logos from '../../assets/logos.svg'
import { useDispatch } from 'react-redux'
import { asyncemployesignup } from '../../store/Actions/userActions'
const EmployeSignup = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        password: '',
        organizationname: ''
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
            case 'organizationname':
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
            dispatch(asyncemployesignup(formData))
            navigate("/EmployeLogin")
        } else {
            console.log('Form contains validation errors. Please fix them.');
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full py-4 shadow flex px-14 items-center justify-between fixed z-[999999] top-0 bg-white'>
                <div className='flex items-center gap-5'>
                    <Link to="/">
                        <img className='w-[100px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                    </Link>
                </div>
                <div className='flex gap-10 text-[18px]'>
                    <Link className='px-5 py-1 text-blue-500 border font-semibold border-blue-500 rounded-md' to="/EmployeLogin">Login</Link>
                </div>
            </div>
            <div className=' h-[95vh] mt-16'>
                <img className='absolute z-[-99] h-screen' src={Image} alt="" />
                <div className='flex justify-between p-10'>
                    <div className='px-5'>
                        <div className=''>
                            <h1 className='text-5xl font-bold leading-normal flex'>Hire Interns & Freshers <img src={Svg} alt="" /></h1>
                            <h2 className='text-2xl font-semibold'>Post Internships for <span className='font-bold'>Free</span> Now</h2>
                        </div>
                    </div>

                    <div className=' shadow-lg shadow-blue-300 w-96 rounded-xl p-6'>
                        <form role="form" onSubmit={handleSubmit}>
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
                                    <label for="first_name">Contact</label>
                                    <input type="text" name="contact" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.contact} onChange={handleChange} placeholder="Contact" />
                                    {errors.contact && <span className='text-red-500'>{errors.contact}</span>}
                                </div>
                                <div>
                                    <label for="first_name">Organization Name</label>
                                    <input type="text" name="organizationname" className='w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2' value={formData.organizationname} onChange={handleChange} placeholder="Organization Name" />
                                    {errors.organizationname && <span className='text-red-500'>{errors.organizationname}</span>}
                                </div>
                            </div>
                            <div className='mt-3 mb-3 text-[14px]'>
                                By clicking on <span className='font-semibold'>Post for Free</span>, you agree to our <a className='text-blue-500'>T&C</a>.
                            </div>
                            <button type="submit" className="w-full bg-[#008BDC] text-white py-2 rounded font-semibold" id="registration_submit">Post for Free</button>
                            <p className='text-center mt-3'>Already registered? <Link to="/EmployeLogin" className='text-blue-500'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className='h-screen  mt-8 pt-10 p-5 px-16'>
                <div className="why-hire-div ">
                    <div className="heading font-bold text-3xl mb-3">
                        <h2 className="h-06-bold">Why Hire from Internshala?</h2>
                    </div>
                    <p className="sub-heading font-medium text-lg">Post your intern requirements and build your dream team with ease.</p>
                    <div className="outline-div h-48 flex justify-around items-center border rounded-lg mt-5">
                        <div className="why-hire-card c-1 border-r-2 w-60">
                            <div className="heading-txt text-[#006BC2] text-4xl font-bold tracking-tight mb-2">25 Mn+</div>
                            <div className="sub-heading-txt text-lg ">candidates looking for <br />Internships</div>
                        </div>
                        <div className="why-hire-card c-2  border-r-2 w-60">
                            <div className="heading-txt text-[#006BC2] text-4xl font-bold tracking-tight mb-2">1.7 Mn+</div>
                            <div className="sub-heading-txt text-lg">candidates hired <br className="line-break" />PAN India</div>
                        </div>
                        <div className="why-hire-card c-3  border-r-2 w-60">
                            <div className="heading-txt text-[#006BC2] text-4xl font-bold tracking-tight mb-2">200+</div>
                            <div className="sub-heading-txt text-lg">Job Profiles</div>
                        </div>
                        <div className="why-hire-card c-4">
                            <div className="heading-txt text-[#006BC2] text-4xl font-bold tracking-tight mb-2">250 K+</div>
                            <div className="sub-heading-txt text-lg">Companies Hiring on <br /> Internshala</div>
                        </div>
                    </div>
                </div>
                <div className="features-div mt-20  pb-5 border-b">
                    <div className="feature-heading-main text-3xl tracking-wide font-bold ">
                        <h2 className="h-06-bold">A One-Stop Solution for Quick & Hassle-Free Hiring</h2>
                    </div>
                    <div className='features mt-3 flex justify-between p-5'>
                        <div className='w-1/3'>
                            <div className='h-36 w-full  flex justify-between py-8 px-3 border-b'>
                                <div> <img src="https://internshala.com/static/images/registration/employer/registration_new/images/icons/filter-inactive.svg" alt="" /></div>
                                <div>
                                    <h1 className='text-2xl tracking-tight font-semibold'>Quick Shortlisting Process</h1>
                                    <p>World-class ATS with filters to <br /> shortlist candidates faster.</p>
                                </div>
                                <div><i className="ri-arrow-right-s-line text-3xl "></i></div>
                            </div>
                            <div className='h-36 w-full  flex justify-between py-8 px-3 border-b'>
                                <div> <img src="https://internshala.com/static/images/registration/employer/registration_new/images/icons/communication-inactive.svg" alt="" /></div>
                                <div>
                                    <h1 className='text-2xl tracking-tight font-semibold'>Seamless Communication</h1>
                                    <p>Instant chat feature to reach out to <br /> candidates immediately.</p>
                                </div>
                                <div><i className="ri-arrow-right-s-line text-3xl  "></i></div>
                            </div>
                            <div className='h-36 w-full bg-[#E7F6FF] flex justify-between py-8 px-3 '>
                                <div> <img src="https://internshala.com/static/images/registration/employer/registration_new/images/icons/calendar-inactive.svg" alt="" /></div>
                                <div>
                                    <h1 className='text-2xl tracking-tight font-semibold'>Advanced Hiring Tools</h1>
                                    <p>Built-in interview scheduler and <br /> assignment tool for hassle-free hiring.</p>
                                </div>
                                <div><i className="ri-arrow-right-s-line text-3xl  "></i></div>
                            </div>
                        </div>
                        <div className='w-[52vw] rounded-lg border h-[70vh] bg-[#BFE1FF]'>
                            <img className='h-96 w-full mt-16' src="https://internshala.com/static/images/registration/employer/registration_new/images/features/r767/faster-shortlisting.png" alt="" />
                            {/* <img className='h-96 w-full mt-16' src="https://internshala.com/static/images/registration/employer/registration_new/images/features/r767/seamless-communication.png" alt="" />
                            <img className='h-96 w-full mt-16' src="https://internshala.com/static/images/registration/employer/registration_new/images/features/r767/advanced-hiring-tools.png" alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className='w-full h-60 mt-10 pt-10 '>
                    <h1 className='text-3xl font-bold tracking-tight text-center'>Trusted by 3 Lakh+ Startups, SMEs, & MNCs</h1>
                    <div className='flex justify-center items-center mt-8'> <img src={Logos} alt="" /></div>
                </div>
            </div>


        </div>
    )
}

export default EmployeSignup