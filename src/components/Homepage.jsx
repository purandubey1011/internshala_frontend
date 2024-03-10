import React, { useEffect } from 'react'
import Nav from './Nav'

const Homepage = () => {
  return (
    <div>
        <Nav/>
        <h1 className='mt-14 text-[3.5vw] font-sans font-semibold text-center'>Make your dream career a reality</h1>
        <h4 className='mt-5 text-[2.5vw] font-sans font-semibold text-center'>Trending on Internshala 🔥</h4>
        <div className='flex px-14 gap-10 mt-16'>
            <img className='w-[389px]' src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png" alt="" />
            <img className='w-[389px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/vday_launch_feb24-student.png.webp" alt="" />
            <img className='w-[389px]' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
        </div>
    </div>
  )
}

export default Homepage