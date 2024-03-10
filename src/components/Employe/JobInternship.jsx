import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { asyncremoveemploye, asynccurrentemploye , asyncreadInternships} from '../../store/Actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
const JobInternship = () => {
    const { employe } = useSelector((state) => state.employe)
    const { internship } = useSelector((state) => state.internship)
    console.log(internship);
    const dispatch = useDispatch()
    const LogoutHandler = () => {
        console.log("click");
        dispatch(asyncremoveemploye());
        navigate('/')
    };
    useEffect(() => {
        dispatch(asynccurrentemploye())
        dispatch(asyncreadInternships())
    }, [])
    return employe ? (
        <div>
            <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <Link to="/EmployeProfile">
                        <img className='w-[120px] h-[50px] -mt-3' src="https://www.financialexpress.com/wp-content/uploads/2022/07/Internshala-logo_3x-1.png" alt="" />
                    </Link>
                </div>
                <div className='flex items-center gap-10 text-[16px]'>
                    <Link to='/Job' className='hover:text-blue-400 cursor-pointer'>Jobs<i className="ri-arrow-down-s-fill"></i></Link>
                    <Link to='/Internship' className='hover:text-blue-400 cursor-pointer'>Internship<i className="ri-arrow-down-s-fill"></i></Link>
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
            <div className=' w-full min-h-[40vh]  mt-5'>
                <p className='text-center text-2xl mb-1 text-blue-600'>Internships</p>
                <div className='w-[11vw] h-[2px] bg-blue-500 m-auto'></div>
                <div className='w-[90%] rounded-lg border-2 h-32 mt-10 m-auto overflow-hidden'>
                    <div className='w-full h-1/2 bg-zinc-100 border-b-2 flex justify-between items-center px-5'>
                        <p className='uppercase'>Profile</p>
                        <p className='uppercase'>Status</p>
                        <p className='uppercase'>Total views</p>
                        <p className='uppercase'>Action</p>
                        <p className='uppercase'>UPGRADE TO PREMIUM</p>
                        <p className='uppercase'>SHARE ON LINKEDIN</p>
                    </div>
                    <div className='w-full h-1/2'></div>
                </div>
            </div>
            <div className=' w-full min-h-[40vh]  mt-5'>
                <p className='text-center text-2xl mb-1 text-blue-600'>Jobs</p>
                <div className='w-[6vw] h-[2px] bg-blue-500 m-auto'></div>
                <div className='w-[90%] rounded-lg border-2 h-32 mt-10 m-auto overflow-hidden'>
                    <div className='w-full h-1/2 bg-zinc-100 border-b-2 flex justify-between items-center px-5'>
                        <p className='uppercase'>Profile</p>
                        <p className='uppercase'>Status</p>
                        <p className='uppercase'>Total views</p>
                        <p className='uppercase'>Action</p>
                        <p className='uppercase'>UPGRADE TO PREMIUM</p>
                        <p className='uppercase'>SHARE ON LINKEDIN</p>
                    </div>
                    <div className='w-full h-1/2'></div>
                </div>
            </div>
        </div>
    ) : <p>loading....</p>
}

export default JobInternship