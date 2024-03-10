import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { asyncremoveemploye, asynccurrentemploye , asyncjobcreate} from '../../store/Actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
const Job = () => {
  const { employe } = useSelector((state) => state.employe)
//   const dispatch = useDispatch()
  const LogoutHandler = () => {
    console.log("click");
    dispatch(asyncremoveemploye());
    navigate('/')
  };
  useEffect(() => {
    dispatch(asynccurrentemploye())
  }, [])

  const [formData, setFormData] = useState({
    profile: '',
    skill: '',
    jobtype: '',
    city: '',
    openings: '',
    description:'',
    preferences:'',
    salary: '',
    perks: '',
    assesments:'',
    time:'',
    StartDate:'',
    EndDate:'',
    Duration:''
});

const navigate = useNavigate()
const dispatch = useDispatch()

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    // console.log(e.target.name)
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
        case 'profile':
            return value.trim() === '' ? 'Profile is required' : '';
        case 'skill':
            return ''; // You can add specific validation for the skill field if needed
        case 'jobtype':
            return value.trim() === '' ? 'Job type is required' : '';
        case 'city':
            return value.trim() === '' ? 'City is required' : '';
        case 'openings':
            return isNaN(value) || value <= 0 ? 'Invalid number of openings' : '';
        case 'description':
            return value.trim() === '' ? 'Description is required' : '';
        case 'preferences':
            return value.trim() === '' ? 'Preferences are required' : '';
        case 'salary':
            return isNaN(value) || value < 0 ? 'Invalid salary amount' : '';
        case 'perks':
            // You can add any specific validation for the perks field if needed
            return '';
        case 'assesments':
            return value.trim() === '' ? 'Assessments are required' : '';
        case 'time':
            return value.trim() === '' ? 'Part-time/full-time is required' : '';
        case 'StartDate':
            return value.trim() === '' ? 'Start date is required' : '';
        case 'EndDate':
            return value.trim() === '' ? 'End date is required' : '';
        case 'Duration':
            return value.trim() === 'select' ? 'Please select job duration' : '';
        // Add validation for other fields as needed
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
        dispatch(asyncjobcreate(formData))
        navigate("/JobInternship")
    } else {
        console.log('Form contains validation errors. Please fix them.');
    }
}

  return employe ? (
    <div>
      <div className='w-full py-4 shadow flex px-14 items-center justify-between'>
        <div className='flex items-center gap-5'>
          <Link to="/JobInternship">
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
      <div className='w-full min-h-[320vh] mt-5'>
        <p className='text-center uppercase text-blue-400 text-3xl mb-1'>Jobs Details</p>
        <div className='m-auto h-[2px] w-[17vw] bg-blue-500'></div>
        <div className='w-[50%] m-auto min-h-[320vh]'>
                    <form onSubmit={handleSubmit}>
                        <div className='w-[100%] h-[220vh] border-2 mt-14 rounded-xl p-8'>
                            <p className='font-semibold text-zinc-600'>Jobs profile </p>
                            <input type="text" className='w-full border mt-3 mb-2 h-9 rounded-sm px-3'  name='profile' value={formData.profile} onChange={handleChange} />
                            {errors.profile && <span className='text-red-500'>{errors.profile}</span>}
                            <p className='font-semibold text-zinc-600'>Skills required <span className='text-sm'>(Optional)</span></p>
                            <input type="text" className='w-full border mt-3 mb-2 h-9 rounded-sm px-3' name='skill' value={formData.skill} onChange={handleChange} />
                            {errors.skill && <span className='text-red-500'>{errors.skill}</span>}
                            <p className='text-zinc-400 mb-3'>Recommended skills</p>
                            <div>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>Html +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>Css +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>Javascript +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>Php +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>Java +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>React +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>Node.js +</p>
                                <p className='border-2 border-blue-400 text-blue-600 rounded-full inline-block px-5 py-1 font-semibold ml-3 mb-4'>MySQL +</p>
                            </div>

                            <p className='font-semibold text-zinc-600'>Jobs type </p>
                            <div className='flex gap-5 mb-3'>
                                    <div className='flex items-center gap-3'>
                                        <input type="radio" name='jobtype' value="In office" className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleChange} />
                                        {errors.jobtype && <span className='text-red-500'>{errors.jobtype}</span>}
                                        <p className='text-zinc-600'>In office</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input type="radio" name='jobtype' value="Hybrid" className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleChange} />
                                        <p className='text-zinc-600'>Hybrid</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input type="radio" name='jobtype' value="Remote" className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleChange} />
                                        <p className='text-zinc-600'>Remote</p>
                                    </div>
                                </div>

                            <p className='font-semibold text-zinc-600'>Part-time/full-time </p>
                            <div className='flex gap-5 mb-3'>
                                <div className='flex items-center gap-3'>
                                    <input type="radio"  name='time' className='w-5 border mt-3 mb-2 h-5 rounded-sm' value="Part-time" onChange={handleChange}/>
                                    {errors.time && <span className='text-red-500'>{errors.time}</span>}
                                    <p className='text-zinc-600'>Part-time</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input type="radio" name='time' className='w-5 border mt-3 mb-2 h-5 rounded-sm' value="Full-time" onChange={handleChange} />
                                    {errors.time && <span className='text-red-500'>{errors.time}</span>}
                                    <p className='text-zinc-600'>Full-time</p>
                                </div>
                            </div>
                            <p className='font-semibold text-zinc-600'>City/Cities </p>
                            <input type="text" className='w-full border mt-3 mb-2 h-9 rounded-sm px-3' name='city' value={formData.city} onChange={handleChange} />
                            {errors.city && <span className='text-red-500'>{errors.city}</span>}
                            <p className='font-semibold text-zinc-600'>Number of openings </p>
                            <input type="text" className='w-full border mt-3 mb-2 h-9 rounded-sm px-3' name='openings' value={formData.openings} onChange={handleChange} />
                            {errors.openings && <span className='text-red-500'>{errors.openings}</span>}

                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-zinc-600'>Jobs Start date </p>
                                    <input type="date" className='w-full border mt-3 mb-2 h-9 rounded-sm' name='StartDate' value={formData.StartDate} onChange={handleChange}/>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-zinc-600'>Jobs End date</p>
                                    <input type="date" className='w-full border mt-3 mb-2 h-9 rounded-sm' name='EndDate' value={formData.EndDate} onChange={handleChange} />
                                </div>
                            </div>
                            <div class="mb-4">
                                <p className='font-semibold text-zinc-600 mb-1'>Jobs duration</p>
                                <p className=' text-zinc-600 mb-3 text-sm'>Shorter the duration, more the applications</p>
                                <select id="department" name="Duration" class="w-full p-2 border border-gray-300 rounded" value={formData.Duration} onChange={handleChange}>
                                    <option name="Duration">select</option>
                                    <option value="1 Month" name="Duration">1 Month</option>
                                    <option value="2 Month" name="Duration">2 Month</option>
                                    <option value="3 Month" name="Duration">3 Month</option>
                                    <option value="4 Month" name="Duration">4 Month</option>
                                    <option value="5 Month" name="Duration">5 Month</option>
                                    <option value="6 Month" name="Duration">6 Month</option>
                                </select>
                            </div>
                            <p className='font-semibold text-zinc-600 mb-3'>Job’s description</p>
                            <div className='w-full h-32 overflow-hidden border-2 rounded-lg'>
                                <textarea className='w-full h-[100%] p-2 overflow-scroll resize-none bg-zinc-100' name='description' value={formData.description} onChange={handleChange}>

                                </textarea>
                            </div>
                            <p className='font-semibold text-zinc-600 mb-3'>Job’s preferences</p>
                            <div className='w-full h-20 overflow-hidden border-2 rounded-lg'>
                                <textarea className='w-full h-[100%] p-2 overflow-scroll resize-none bg-zinc-100' name='preferences' value={formData.preferences} onChange={handleChange}>

                                </textarea>
                            </div>
                            <p className='font-semibold text-zinc-600 mb-3 mt-3'>Who can apply (prefilled as per earlier inputs):</p>
                            <div className='w-full h-48 overflow-hidden bg-zinc-50 p-5 text-zinc-500'>
                                <p>Only those candidates can apply who:</p>
                                <p>1. are available for full time (in-office) internship</p>
                                <p>2. can start the internship between 16th Feb'24 and 22nd Mar'24</p>
                                <p>3. are available for duration of 5 months</p>
                                <p>4. have relevant skills and interests</p>
                                <p>* Women wanting to start/restart their career can also apply.</p>
                            </div>
                        </div>
                        <p className='font-semibold text-zinc-600 mb-3 mt-10 text-[18px]'>Salary & perks</p>
                        <div className='w-[100%] h-[50vh] border-2 mt-1 rounded-xl p-8'>
                            <p className='font-semibold text-zinc-600'>Salary </p>
                            <div>
                              <input className='w-full border mt-3 mb-2 h-9 rounded-sm px-3' type="text" placeholder='Enter the Salary..' name='salary' value={formData.salary} onChange={handleChange}/>
                              {errors.salary && <span className='text-red-500'>{errors.salary}</span>}
                            </div>
                            <p className='font-semibold text-zinc-600 mb-4'>Perks <span className='text-sm'>(Optional) </span> </p>
                            <div className='flex items-center gap-14'>
                                <div>
                                    <div className='flex items-center gap-3 mb-3'>
                                        <input className='' type="checkbox" name='perks' value='Certificate' onChange={handleChange} />
                                        <p className='text-zinc-600'>Certificate</p>
                                    </div>
                                    <div className='flex items-center gap-3 mb-3'>
                                        <input className='' type="checkbox" name='perks' value="Flexible work hours" onChange={handleChange} />
                                        <p className='text-zinc-600'>Flexible work hours</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input className='' type="checkbox" name='perks' value='Informal dress code' onChange={handleChange} />
                                        <p className='text-zinc-600'>Informal dress code</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-3 mb-3'>
                                        <input className='' type="checkbox" name='perks' value='Letter of recommendation' onChange={handleChange} />
                                        <p className='text-zinc-600'>Letter of recommendation</p>
                                    </div>
                                    <div className='flex items-center gap-3 mb-3'>
                                        <input className='' type="checkbox" name='perks' value='5 days a week' onChange={handleChange} />
                                        <p className='text-zinc-600'>5 days a week</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input className='' type="checkbox" name='perks' value='Free snacks & beverages' onChange={handleChange} />
                                        <p className='text-zinc-600'>Free snacks & beverages</p>
                                    </div>
                                </div>
                            </div>
                        <p className='font-semibold text-zinc-600 mb-3 mt-5 text-[16px]'>Does this internship come with a pre-placement offer (PPO)? </p>
                        </div>
                        <p className='font-semibold text-zinc-600 mb-3 mt-10 text-[18px]'>Cover letter, availability & assessment question</p>
                        <div className='w-[100%] h-[62vh] border-2 mt-1 rounded-xl p-8'>
                            <p className='text-zinc-500 mb-3'>Cover letter & availability question will be asked to every applicant by default. If you wish, you may ask two more customized questions as an assessment.</p>
                            <p>Cover letter</p>
                            <p className='text-zinc-500 mb-3 mt-3'>Why should you be hired for this role?</p>
                            <p>Availability</p>
                            <p className='text-zinc-500 mb-3 mt-3'>Are you available for 5 months, starting immediately, for a full-time internship in Bhopal? If not, what is the time period you are available for and the earliest date you can start this internship on?</p>
                            <input type="text" placeholder='assesments' name='assesments' className='w-full border mt-3 mb-2 h-9 rounded-sm px-2' value={formData.assesments} onChange={handleChange} />
                            <p className='text-blue-500'>+ Add assessment question</p>
                        </div>
                        <div className='w-[100%] h-[30vh] border-2 mt-14 rounded-xl p-5'>
                            <p className='font-semibold text-zinc-600 mb-3'>Alternate mobile number for this listing</p>
                            <p className=' text-zinc-600 mb-3'>Our team will call you on this number in case of any query regarding this listing only. Primary account number will not be updated.</p>
                            <div className='flex gap-5'>
                                <input type="text" value="+91" placeholder='+91' className='w-[60px] border mt-3 mb-2 h-9 rounded-sm px-2' />
                                <input type="text" className='w-[40vw] border mt-3 mb-2 h-9 rounded-sm px-2' placeholder='Mobile Number' value={employe.contact}/>
                            </div>
                        </div>
                        <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded mt-8 mb-10 ml-[43vw]'>Create</button>
                    </form>
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
    </div>
  ) : <p>loading....</p>
}

export default Job