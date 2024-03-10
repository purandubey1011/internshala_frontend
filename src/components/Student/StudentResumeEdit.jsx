import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Svg from '../../assets/message.svg'
import { asynccurrentuser, asyncremoveuser } from '../../store/Actions/userActions';
import { Link } from 'react-router-dom';

const StudentResumeEdit = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser())
  }, []);

  const LogoutHandler = () => {
    // console.log("click");
    dispatch(asyncremoveuser());
    navigate('/')
  };
  return user ? (
    <div>
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
            <i onClick={() => b(!a)} className="ri-arrow-down-s-fill"></i>
          </div>
          <h4 className='hover:text-blue-400 cursor-pointer' onClick={LogoutHandler}><i class="ri-logout-box-line"></i> Logout</h4>
        </div>
      </div>

      <div className='min-h-screen w-full py-12 px-16'>
        <Link className='Back-button' to={"/StudentProfile"}>
          <div className='Back_button text-[#00A3EA] text-base font-semibold'><i className="ri-arrow-left-line mr-2 "></i>Back</div>
        </Link>
        <div className='min-h-screen w-full px-14 mb-20'>
          <div className='text-center my-2 mb-6'>
            <h1 className='text-3xl font-semibold'>Resume</h1>
          </div>
          <div className='py-4 px-1 bg-[#faf1d6] border-[#f5e272] border rounded mb-4 '>
            <h3 className='text-[2.4vh] flex items-center justify-center'><i className="ri-error-warning-line mr-2 text-xl"></i>Whenever you apply to an internship or fresher job, this is the resume that the employer will see. Always make sure it is up to date.</h3>
          </div>

          <div className='border py-10 px-16 rounded-lg min-h-full w-full'>
            <div className='student_data flex justify-between border-b py-5'>
              <div className='left'>
                <h1 className='text-3xl font-bold tracking-tight opacity-80 mb-1 text-slate-900'>{user.firstname} {user.lastname}</h1>
                <div className='font-medium opacity-70'>
                  <p>{user.email}</p>
                  <p>{user.contact}</p>
                  <p>{user.city}</p>
                </div>
              </div>
              <div className='right'>
                <div className='w-32 h-32 -mt-3 rounded-full overflow-hidden bg-red-400'>
                  <img className='w-full h-full object-cover' src={user.avatar} alt="" />
                </div>
              </div>
            </div>

            <div className='border-b py-5'>
              {user.resume.education.map(item => (
                <div className='flex flex-col '>
                  <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>EDUCATION :</h5>
                  <div className='flex justify-between'>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Graduation details/ Post graduation details</h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.college}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.degree} - {item.stream}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.startYear} - {item.endYear}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.percentage} - {item.performance}</h4>
                    </div>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Senior Secondary or Equivalent (XII) details</h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.Board12th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.schoolName12th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.status12th} - {item.stream12th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.completeYear12th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.percentage12th} - {item.performance12th}</h4>
                    </div>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Secondary (X) details</h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.Board10th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.schoolName10th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.status10th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.completeYear10th}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.percentage10th} - {item.performance10th}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='border-b py-5 '>
              <div className='flex items-center gap-10'>
                {user.resume.jobs.map(item => (
                  <div className='flex flex-col '>
                    <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>WORK EXPERIENCE :</h5>
                    <div className='flex justify-between'>
                      <div className='mb-2'>
                        <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Jobs Details </h1>
                        <h4 className='capitalize text-sm' key={item._id}>{item.jobDesignation}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.jobProfile}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.jobOrganization}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.jobLocation}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.jobStartDate} - {item.jobEndDate}</h4>
                      </div>
                    </div>
                  </div>
                ))}

                {user.resume.internships.map(item => (
                  <div className='flex flex-col'>
                    <div className='flex justify-between'>
                      <div>
                        <h1 className='text-[1.2vw] capitalize font-semibold opacity-70 mt-5'>Internship details</h1>
                        <h4 className='capitalize text-sm' key={item._id}>{item.internshipsProfile}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.internshipsOrganization}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.internshipsLocation}</h4>
                        <h4 className='capitalize text-sm' key={item._id}>{item.internshipsStartDate} - {item.internshipsEndDate}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border-b py-5 '>
              {user.resume.responsibilities.map(item => (
                <div className='flex flex-col '>
                  <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>POSITIONS OF RESPONSIBILITY :</h5>
                  <div className='flex justify-between'>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Description</h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.responsibilitiesDescription}</h4>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            <div className='border-b py-5 '>
              {user.resume.courses.map(item => (
                <div className='flex flex-col '>
                  <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>TRAININGS / COURSES :</h5>
                  <div className='flex justify-between'>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Courses Details </h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.coursesDescription}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.coursesTrainingProgram}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.coursesOrganization}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.coursesLocation}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.coursesStartDate} - {item.coursesEndDate}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='border-b py-5 '>
              {user.resume.projects.map(item => (
                <div className='flex flex-col '>
                  <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>PERSONAL PROJECTS :</h5>
                  <div className='flex justify-between'>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Project details </h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.projectsTitle}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.projectsDescription}</h4>
                      <h4 className='capitalize text-sm' key={item._id}>{item.projectsStartDate} - {item.projectsEndDate}</h4>
                      <h4 className='text-sm' key={item._id}>{item.projectsLink}</h4>
                      <h4 className='text-sm' key={item._id}>{item.githubProfileLink}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='border-b py-5 '>
              {user.resume.projects.map(item => (
                <div className='flex flex-col '>
                  <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>SKILLS :</h5>
                  <div className='flex justify-between flex-col'>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Skills details </h1>
                    </div>
                    <div className='flex gap-5 whitespace-nowrap'>
                      <h4 className='capitalize text-sm' key={item._id}>Html</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Css</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Tailwind css</h4>
                      <h4 className='capitalize text-sm' key={item._id}>JavaScript</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Gsap</h4>
                      <h4 className='capitalize text-sm' key={item._id}>ScrollTrigger</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Locomotive</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Shery js</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Node js</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Express js</h4>
                      <h4 className='capitalize text-sm' key={item._id}>MongoDB</h4>
                      <h4 className='capitalize text-sm' key={item._id}>React js</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Next js</h4>
                      <h4 className='capitalize text-sm' key={item._id}>Framer-motion</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='border-b py-5 '>
              {user.resume.accomplishments.map(item => (
                <div className='flex flex-col '>
                  <h5 className='text-[1.5vw] tracking-wider font-semibold  mb-2 text-slate-700'>ACCOMPLISHMENTS DETAILS :</h5>
                  <div className='flex justify-between'>
                    <div className='mb-2'>
                      <h1 className='text-[1.2vw] capitalize font-semibold opacity-70'>Description</h1>
                      <h4 className='capitalize text-sm' key={item._id}>{item.accomplishmentDescription}</h4>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
        <Link to='/resume-update' className='px-4 py-2 bg-green-500 rounded ml-[88%] font-semibold text-white '>Update</Link>
      </div>
      <div className='Footer w-full  bg-[#303030] text-[#FFFFDF] px-32 py-1'>
        <div className='upwalidiv w-full flex gap-12  px-2 py-8  border-b'>
          <div className='1'>
            <h1 className='text-[2.4vh] font-semibold mb-4' >Internships by places</h1>
            {["Internship in India", "Internship in Delhi", "Internship in Bangalore", "Internship in Hyderabad", "Internship in Mumbai", "Internship in Chennai", "Internship in Gurgaon", "Internship in Kolkata", "Virtual internship", "View all internships"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
            })}
          </div>
          <div className='2'>
            <h1 className='text-[2.4vh] font-semibold mb-4' >Internship by Stream</h1>
            {["Computer Science Internship", "Electronics Internship", "Mechanical Internship", "Civil Internship", "Marketing Internship", "Chemical Internship", "Finance Internship", "Summer Research Fellowship", "Campus Ambassador Program", "View all internships"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
            })}
          </div>
          <div className='3'>
            <h1 className='text-[2.4vh] font-semibold mb-4' >Jobs by Places</h1>
            {["Jobs in Delhi", , "Jobs in Mumbai", "Jobs in Bangalore", "Jobs in Jaipur", "Jobs in Kolkata", "Jobs in Hyderabad", "Jobs in Pune", "Jobs in Chennai", "Jobs in Lucknow", "View all jobs"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
            })}
          </div>
          <div className='4'>
            <h1 className='text-[2.4vh] font-semibold mb-4' >Jobs by Stream</h1>
            {[" Marketing jobs", " Content writing jobs", " Web development jobs", " Sales jobs", " Finance jobs", " Digital Marketing jobs", " Computer Science jobs", " Graphic Design jobs", " Data Science jobs", " View all jobs"
            ].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
            })}
          </div>
          <div className='5'>
            <h1 className='text-[2.4vh] font-semibold mb-4 cursor-pointer' >Placement Guarantee Courses</h1>
            {["Full Stack Development course with placement", "Data Science course with placement", "Human Resource Management course with placement", "Digital Marketing course with placement", "Product Management course with placement", "UI/UX Design course with placement", "Electric Vehicle course with placement"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-7' key={index}>{event}</a>
            })}
            <h1 className='text-[2.4vh] font-semibold  mt-8 cursor-pointer' >Certification Courses</h1>
          </div>
        </div>
        <div className='downwalidiv w-full  my-5 px-2 flex gap-32 '>
          <div className='1'>
            {["About us", "We're hiring", "Hire interns for your company"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
            })}
          </div>
          <div className='1'>
            {["Team Diary", "Blog", "Our Services"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
            })}
          </div>
          <div className='1'>
            {["Terms & Conditions", "Privacy", "Contact us"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
            })}
          </div>
          <div className='1'>
            {["Sitemap", "College TPO registration", "List of Companies"].map((event, index) => {
              return <a href='#' className=' cursor-pointer flex flex-col text-sm font-medium leading-8' key={index}>{event}</a>
            })}
          </div>
        </div>
        <div className='footer w-full my-5  py-5 flex justify-between items-center'>
          <div className='flex gap-10 items-center'>
            <a href="#" className=' flex items-center rounded px-3 py-2 border tracking-tighter font-semibold cursor-pointer'>
              <svg className='mr-1 text-xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1m8.292 11.68l-4.498 4.498l5.699-3.299zM5 6.118v11.76l5.88-5.88zm10.284 4.302L13.707 12l1.578 1.577L18.009 12zm-7.49-4.336l4.5 4.5l1.199-1.2z" /></svg>Get Android App</a>
            <div className='icon flex gap-5 text-2xl '>
              <i className="ri-instagram-line cursor-pointer"></i>
              <i className="ri-twitter-line cursor-pointer"></i>
              <i className="ri-youtube-fill cursor-pointer"></i>
              <i className="ri-linkedin-fill cursor-pointer "></i>
            </div>
          </div>
          <div>
            <h1 className='tracking-tight '>© Copyright 2024 Internshala</h1>
          </div>
        </div>
      </div>
    </div>
  ) : <p>User not found 😂</p>
}

export default StudentResumeEdit