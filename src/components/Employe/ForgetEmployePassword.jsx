import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../../assets/background.png'
import { useDispatch, useSelector } from 'react-redux'
import {asyncemployesendmail} from '../../store/Actions/userActions'
const ForgetEmployePassword = () => {
    const {employe} = useSelector((state)=> state.employe)
    console.log(employe);

    const dispatch= useDispatch();
    const [email, setemail] = useState()

    const sendmail =(event)=>{
        event.preventDefault()
        const newuser = {
            email: email,
        };
        dispatch(asyncemployesendmail(newuser))
        setemail("")
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
                <div className='w-[40vw] h-[100vh]  mt-10'>
                    <div className='px-10 py-8 mt-10 shadow-lg shadow-blue-300 w-[90%] ml-[5%] rounded-xl'>
                    
                     <form role="form" onSubmit={sendmail}>
                        <div className='w-full h-12  flex items-center justify-center mb-5 rounded-md font-sans font-semibold text-[18px]'>
                        <h1 className='text-2xl'>Forget Password</h1>
                        </div>
                        <div>   
                            <label for="email">Email</label>
                            <input type="email" className="w-full mt-2 px-2 py-2 outline-none rounded-md border mb-2"value={email} onChange={(event) => setemail(event.target.value)} placeholder="john@example.com" />
                        </div>
                        
                        <button type="submit" className="w-full bg-green-400 font-semibold text-white py-2" id="registration_submit">Send Mail</button>
                          </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetEmployePassword