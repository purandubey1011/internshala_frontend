import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Svg from '../../assets/message.svg'
import { asyncremoveuser, asyncresumecreate, asynccurrentuser, asyncresumeupdate } from '../../store/Actions/userActions'
const ResumeForm = () => {
  const { user } = useSelector((state) => state.user)
  console.log(user);
  const [formData, setFormData] = useState({
    education: [
      {
        college: '',
        startYear: '',
        endYear: '',
        degree: '',
        stream: '',
        percentage: '',
        performance: '', // Optional
        status12th: '',
        completeYear12th: '',
        Board12th: '',
        percentage12th: '',
        performance12th: '',
        stream12th: '',
        schoolName12th: '',
        status10th: '',
        completeYear10th: '',
        Board10th: '',
        percentage10th: '',
        performance10th: '',
        schoolName10th: '',
      },
    ],
    jobs: [
      {
        jobDesignation: '',
        jobProfile: '',
        jobOrganization: '',
        jobLocation: '',
        jobStartDate: '',
        jobEndDate: '',
      }
    ],
    internships: [
      {
        internshipsProfile: '',
        internshipsOrganization: '',
        internshipsLocation: '',
        internshipsStartDate: '',
        internshipsEndDate: '',
      }
    ],
    responsibilities: [
      {
        responsibilitiesDescription: '',
      }
    ],
    courses: [
      {
        coursesDescription: '',
        coursesTrainingProgram: '',
        coursesOrganization: '',
        coursesLocation: '',
        coursesStartDate: '',
        coursesEndDate: '',
      }
    ],
    projects: [
      {
        projectsTitle: '',
        projectsDescription: '',
        projectsStartDate: '',
        projectsEndDate: '',
        projectsLink: '',
        githubProfileLink: '',
      }
    ],
    skills: [
      {
        skill: '',
      }
    ],
    accomplishments: [
      {
        accomplishmentDescription: '',
      }
    ],
  });

  const LogoutHandler = () => {
    console.log("click");
    dispatch(asyncremoveuser());
    navigate('/')
  };

  useEffect(() => {
    dispatch(asynccurrentuser())
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      education: [
        {
          ...prevData.education[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleJobsChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      jobs: [
        {
          ...prevData.jobs[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleInternshipsChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      internships: [
        {
          ...prevData.internships[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleResponsibilitiesChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      responsibilities: [
        {
          ...prevData.responsibilities[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleCoursesChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      courses: [
        {
          ...prevData.courses[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleProjectsChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      projects: [
        {
          ...prevData.projects[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleSkillsChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: [
        {
          ...prevData.skills[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleAccomplishmentChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      accomplishments: [
        {
          ...prevData.accomplishments[0],
          [name]: value,
        },
      ],
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Log the form data to the console (replace this with your actual form submission logic)
    console.log(formData);
    dispatch(asyncresumeupdate(formData))
    navigate('/StudentResume')
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
            <i className="ri-arrow-down-s-fill"></i>
          </div>
          <h4 className='hover:text-blue-400 cursor-pointer' onClick={LogoutHandler}><i class="ri-logout-box-line"></i> Logout</h4>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="text-4xl font-bold text-center">Resume Update Form</h2>
      </div>

      <div className='w-[60vw] min-h-[200vh] m-auto p-8'>
        <form action="" onSubmit={handleSubmit}>
          <h1 className='mb-5 text-2xl font-semibold'>EDUCATION</h1>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Graduation details/ Post graduation details</p>
            <label htmlFor="college">College Name : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='College' name="college"
              value={formData.education[0].college}
              onChange={handleEducationChange} />
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mb-2'>Start Year : </label>
                <select id="department" class="w-[25vw] p-2 border border-gray-300 rounded" name='startYear' onChange={handleEducationChange} value={formData.education[0].startYear}>
                  <option name="startYear">Choose year</option>
                  <option value="2020" name="startYear">2020</option>
                  <option value="2021" name="startYear">2021</option>
                  <option value="2022" name="startYear">2022</option>
                  <option value="2023" name="startYear">2013</option>
                  <option value="2024" name="startYear">2024</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mb-2'>End Year : </label>
                <select id="department" class="w-[26vw] p-2 border border-gray-300 rounded" name='endYear' onChange={handleEducationChange} value={formData.education[0].endYear}>
                  <option name="endYear">Choose year</option>
                  <option value="2020" name="endYear">2020</option>
                  <option value="2021" name="endYear">2021</option>
                  <option value="2022" name="endYear">2022</option>
                  <option value="2023" name="endYear">2013</option>
                  <option value="2024" name="endYear">2024</option>
                  <option value="2025" name="endYear">2025</option>
                </select>
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mt-3'>Degree Name : </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. BSc (Hons.)' name='degree'
                  value={formData.education[0].degree}
                  onChange={handleEducationChange} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mb-2 mt-3'>Stream: </label>
                <select id="department" class="w-[26vw] p-2 border border-gray-300 rounded" name="stream" value={formData.education[0].stream} onChange={handleEducationChange}>
                  <option name="stream">Stream</option>
                  <option value="CSE" name="stream">CSE</option>
                  <option value="ME" name="stream">ME</option>
                  <option value="EX" name="stream">EX</option>
                  <option value="CE" name="stream">CE</option>
                </select>
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mb-2'>Percentage : </label>
                <select id="department" class="w-[26vw] p-2 border border-gray-300 rounded" name="percentage" value={formData.education[0].percentage} onChange={handleEducationChange}>
                  <option name="percentage" >Percentage</option>
                  <option value="CGPA (Scale of 10)" name="percentage" >CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)" name="percentage" >CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)" name="percentage" >CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)" name="percentage" >CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 6)" name="percentage" >CGPA (Scale of 6)</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">Performance : <span className='text-zinc-400 text-sm'>(Optional)</span> </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='0.00' name='performance'
                  value={formData.education[0].performance}
                  onChange={handleEducationChange} />
              </div>
            </div>
          </div>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Senior Secondary or Equivalent (XII) details</p>
            <div>
              <label htmlFor="Intermediate status">Intermediate status : </label>
              <div className='flex gap-5 mb-3'>
                <div className='flex items-center gap-3'>
                  <input type="radio" name='status12th' value='Pursuing' className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleEducationChange} />
                  <p className='text-zinc-600'>Pursuing</p>
                </div>
                <div className='flex items-center gap-3'>
                  <input type="radio" name='status12th' value='Completed' className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleEducationChange} />
                  <p className='text-zinc-600'>Completed</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col mb-3'>
              <label htmlFor="college" className='mb-2'>Year of completion : </label>
              <select id="department" class="w-full p-2 border border-gray-300 rounded" name='completeYear12th' onChange={handleEducationChange} value={formData.education[0].completeYear12th}>
                <option name="completeYear12th">Choose year</option>
                <option value="2018" name="completeYear12th">2018</option>
                <option value="2019" name="completeYear12th">2019</option>
                <option value="2020" name="completeYear12th">2020</option>
                <option value="2021" name="completeYear12th">2021</option>
                <option value="2022" name="completeYear12th">2022</option>
                <option value="2023" name="completeYear12th">2013</option>
                <option value="2024" name="completeYear12th">2024</option>
                <option value="2025" name="completeYear12th">2025</option>
                <option value="2026" name="completeYear12th">2026</option>
              </select>
            </div>
            <label htmlFor="Board" >Board : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. CBSE' name='Board12th' onChange={handleEducationChange} value={formData.education[0].Board12th} />
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mb-2'>Percentage: </label>
                <select id="department" class="w-[26vw] p-2 border border-gray-300 rounded" name='percentage12th' onChange={handleEducationChange} value={formData.education[0].percentage12th}>
                  <option name="percentage12th">Percentage</option>
                  <option value="CGPA (Scale of 10)" name="percentage12th">CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)" name="percentage12th">CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)" name="percentage12th">CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)" name="percentage12th">CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 6)" name="percentage12th">CGPA (Scale of 6)</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">Performance : <span className='text-zinc-400 text-sm'>(Optional)</span> </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='0.00' name='performance12th' onChange={handleEducationChange} value={formData.education[0].performance12th} />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="college" className='mb-2 mt-3'>Stream: </label>
              <select id="department" class="w-full p-2 border border-gray-300 rounded" name='stream12th' onChange={handleEducationChange} value={formData.education[0].stream12th}>
                <option name="stream12th">Stream</option>
                <option value="Science" name="stream12th">Science</option>
                <option value="Mathematics" name="stream12th">Mathematics</option>
                <option value="Arts" name="stream12th">Arts</option>
                <option value="Commerce" name="stream12th">Commerce</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="School" className='mt-3'>School Name : </label>
              <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Delhi Public School' name='schoolName12th' onChange={handleEducationChange} value={formData.education[0].schoolName12th} />
            </div>
          </div>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Secondary (X) details</p>
            <div>
              <label htmlFor="Intermediate status">Intermediate status : </label>
              <div className='flex gap-5 mb-3'>
                <div className='flex items-center gap-3'>
                  <input type="radio" name='status10th' value='Pursuing' className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleEducationChange} />
                  <p className='text-zinc-600'>Pursuing</p>
                </div>
                <div className='flex items-center gap-3'>
                  <input type="radio" name='status10th' value='Completed' className='w-5 border mt-3 mb-2 h-5 rounded-sm' onChange={handleEducationChange} />
                  <p className='text-zinc-600'>Completed</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col mb-3'>
              <label htmlFor="college" className='mb-2'>Year of completion : </label>
              <select id="department" class="w-full p-2 border border-gray-300 rounded" name='completeYear10th' onChange={handleEducationChange}>
                <option name="completeYear10th">Choose year</option>
                <option value="2018" name="completeYear10th">2018</option>
                <option value="2019" name="completeYear10th">2019</option>
                <option value="2020" name="completeYear10th">2020</option>
                <option value="2021" name="completeYear10th">2021</option>
                <option value="2022" name="completeYear10th">2022</option>
                <option value="2023" name="completeYear10th">2013</option>
                <option value="2024" name="completeYear10th">2024</option>
                <option value="2025" name="completeYear10th">2025</option>
                <option value="2026" name="completeYear10th">2026</option>
              </select>
            </div>

            <label htmlFor="college" >Board : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. CBSE' name='Board10th' value={formData.education[0].Board10th} onChange={handleEducationChange} />
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college" className='mb-2'>Percentage: </label>
                <select id="department" class="w-[26vw] p-2 border border-gray-300 rounded" name='percentage10th' onChange={handleEducationChange}>
                  <option name="percentage10th">Percentage</option>
                  <option value="CGPA (Scale of 10)" name="percentage10th">CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)" name="percentage10th">CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)" name="percentage10th">CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)" name="percentage10th">CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 6)" name="percentage10th">CGPA (Scale of 6)</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">Performance : <span className='text-zinc-400 text-sm'>(Optional)</span> </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='0.00' name='performance10th' value={formData.education[0].performance10th} onChange={handleEducationChange} />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="School" className='mt-3'>School Name : </label>
              <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Delhi Public School' name='schoolName10th' value={formData.education[0].schoolName10th} onChange={handleEducationChange} />
            </div>

          </div>

          <h1 className='mb-5 text-2xl font-semibold'>WORK EXPERIENCE</h1>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Job details</p>
            <label htmlFor="college">Designation : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Software Engineer' name='jobDesignation' value={formData.jobs[0].jobDesignation} onChange={handleJobsChange} />
            <label htmlFor="college">Profile : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Opeations ' name='jobProfile' value={formData.jobs[0].jobProfile} onChange={handleJobsChange} />
            <label htmlFor="college">Organization : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Internshala' name='jobOrganization' value={formData.jobs[0].jobOrganization} onChange={handleJobsChange} />
            <label htmlFor="college">Location : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Mumbai' name='jobLocation' value={formData.jobs[0].jobLocation} onChange={handleJobsChange} />

            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college">Start Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" placeholder='e.g. BSc (Hons.)' name='jobStartDate' value={formData.jobs[0].jobStartDate} onChange={handleJobsChange} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">End Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" placeholder='e.g. BSc (Hons.)' name='jobEndDate' value={formData.jobs[0].jobEndDate} onChange={handleJobsChange} />
              </div>
            </div>

          </div>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Internship details</p>
            <label htmlFor="college">Profile : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Sales & Marketing ' name='internshipsProfile' value={formData.internships[0].internshipsProfile} onChange={handleInternshipsChange} />
            <label htmlFor="college">Organization : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Internshala' name='internshipsOrganization' value={formData.internships[0].internshipsOrganization} onChange={handleInternshipsChange} />
            <label htmlFor="college">Location : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Mumbai' name='internshipsLocation' value={formData.internships[0].internshipsLocation} onChange={handleInternshipsChange} />

            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college">Start Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" placeholder='e.g. BSc (Hons.)' name='internshipsStartDate' value={formData.internships[0].internshipsStartDate} onChange={handleInternshipsChange} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">End Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" placeholder='e.g. BSc (Hons.)' name='internshipsEndDate' value={formData.internships[0].internshipsEndDate} onChange={handleInternshipsChange} />
              </div>
            </div>

          </div>

          <h1 className='mb-5 text-2xl font-semibold'>POSITIONS OF RESPONSIBILITY</h1>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-4'>Position of responsibility</p>
            <p className=' text-[18px] mb-1'>Description</p>
            <p className=' text-[16px] mb-4 font-semibold text-zinc-400'>If you have been/are an active part of societies, conducted any events or led a team, add details here</p>
            <textarea className='resize-none border w-full h-[28vh] rounded-md p-2' placeholder='e.g. led a team of 5 volunteers to plan and conduct activities for literary event in college fest' name='responsibilitiesDescription' value={formData.responsibilities[0].responsibilitiesDescription} onChange={handleResponsibilitiesChange}></textarea>
          </div>

          <h1 className='mb-5 text-2xl font-semibold'>TRAININGS / COURSES</h1>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Training details</p>
            <label htmlFor="college">Training program : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Analytics ' name='coursesTrainingProgram' value={formData.courses[0].coursesTrainingProgram} onChange={handleCoursesChange} />
            <label htmlFor="college">Organization : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Internshala Trainings' name='coursesOrganization' value={formData.courses[0].coursesOrganization} onChange={handleCoursesChange} />
            <label htmlFor="college">Location : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Mumbai' name='coursesLocation' value={formData.courses[0].coursesLocation} onChange={handleCoursesChange} />

            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college">Start Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" placeholder='e.g. BSc (Hons.)' name='coursesStartDate' value={formData.courses[0].coursesStartDate} onChange={handleCoursesChange} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">End Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" placeholder='e.g. BSc (Hons.)' name='coursesEndDate' value={formData.courses[0].coursesEndDate} onChange={handleCoursesChange} />
              </div>
            </div>

            <p className=' text-[18px] mb-3'>Description</p>
            <textarea className='resize-none border w-full h-[28vh] rounded-md p-2' placeholder='Short description about training (max 700 char )' name='coursesDescription' value={formData.courses[0].coursesDescription} onChange={handleCoursesChange}></textarea>
          </div>

          <h1 className='mb-5 text-2xl font-semibold'>PERSONAL PROJECTS</h1>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Project details</p>
            <label htmlFor="college">Title : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. Optical Character Recognition ' name='projectsTitle' value={formData.projects[0].projectsTitle} onChange={handleProjectsChange} />
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="college">Start Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" name='projectsStartDate' placeholder='e.g. BSc (Hons.)' value={formData.projects[0].projectsStartDate} onChange={handleProjectsChange} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="college">End Date: </label>
                <input className='w-[25vw] py-2 border mt-2 px-2 rounded mb-4' type="date" name='projectsEndDate' placeholder='e.g. BSc (Hons.)' value={formData.projects[0].projectsEndDate} onChange={handleProjectsChange} />
              </div>
            </div>

            <p className=' text-[18px] mb-3'>Description</p>
            <textarea className='resize-none border w-full h-[28vh] rounded-md p-2 mb-3' placeholder='Short description about training (max 1000 char )' name='projectsDescription' value={formData.projects[0].projectsDescription} onChange={handleProjectsChange}></textarea>

            <label htmlFor="college">Project link : </label>
            <p className='text-zinc-400'>If you have multiple project links or an offline project, upload and provide link to google drive</p>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='e.g. https://myprojectlink.com ' name='projectsLink' value={formData.projects[0].projectsLink} onChange={handleProjectsChange} />
            <label htmlFor="college">GitHub profile : </label>
            <input className='w-full py-2 border mt-2 px-2 rounded mb-4' type="text" placeholder='https://github.com/my_profile ' name='githubProfileLink' value={formData.projects[0].githubProfileLink} onChange={handleProjectsChange} />
          </div>

          <h1 className='mb-5 text-2xl font-semibold'>SKILLS DETAILS</h1>
          <div className='w-full min-h-[40vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>Skills Details</p>
            <textarea className='resize-none border w-full h-[28vh] rounded-md p-2 mb-3' placeholder='SKills' name='skill' value={formData.skills[0].skill} onChange={handleSkillsChange}></textarea>
          </div>

          <h1 className='mb-5 text-2xl font-semibold'>ACCOMPLISHMENTS DETAILS</h1>
          <div className='w-full min-h-[60vh] border-2 rounded-lg p-4 mb-10'>
            <p className='font-semibold text-[22px] text-center mb-8'>accomplishments details</p>

            <p className=' text-[18px] mb-3'>Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.</p>
            <textarea className='resize-none border w-full h-[28vh] rounded-md p-2 mb-3' placeholder='E.g. Secured 1st rank among 500 entries in national level story writing competition organised by Internshala.' name='accomplishmentDescription' value={formData.accomplishments[0].accomplishmentDescription} onChange={handleAccomplishmentChange}></textarea>
          </div>

          <button className='px-4 font-semibold text-white rounded py-2 bg-blue-500'>Submit</button>
        </form>
      </div>

    </>
  ) : <p>loading...</p>
};

export default ResumeForm;
