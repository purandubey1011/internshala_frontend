import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../../assets/background.png'
import { useDispatch } from 'react-redux'
import { asyncemployesignin } from '../../store/Actions/userActions'
const EmployeLogin = () => {

    const [formData, setFormData] = useState({
        email: '',
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
            case 'email':
                return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
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
            dispatch(asyncemployesignin(formData))
            navigate("/EmployeProfile")
        } else {
            console.log('Form contains validation errors. Please fix them.');
        }
    }
    return (
        <>
            <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <Link to="/">
                        <img className='w-[100px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img className='fixed z-[-999] w-full h-screen' src={Image} alt="" />
                <div className='w-[40vw] h-[80vh]  mt-10'>
                    <div className='px-10 py-8 mt-10 shadow-lg shadow-blue-300 w-[90%] ml-[5%] rounded-xl'>
                        <form role="form" onSubmit={handleSubmit}>
                            <div className='w-full h-12 border-2 flex items-center justify-center mb-5 rounded-md font-sans font-semibold text-[18px]'>
                                <img className='w-10' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                                <p>Login with Google</p>
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
                            <div className='mt-3 mb-3'>
                                <Link to='/ForgetEmployePassword' className='text-blue-500 text-[16px] font-semibold'>Forget password?</Link>.
                            </div>
                            <button type="submit" className="w-full bg-blue-400 text-white py-2" id="registration_submit">Login</button>
                            <p className='text-center mt-3'>New to Internshala? Register<Link to="/student" className='text-blue-500'> (Student)</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeLogin