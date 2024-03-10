import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import Homepage from './components/Homepage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncremoveuser } from './store/Actions/userActions';
import StudentSignup from './components/Student/StudentSignup'
import StudentLogin from './components/Student/StudentLogin';
import StudentProfile from './components/Student/StudentProfile';
import StudentData from './components/Student/StudentData';
import StudentProfileEdit from './components/Student/StudentProfileEdit';
import ChangePassword from './components/Student/ChangePassword';
import ForgetPassword from './components/Student/ForgetPassword';
import StudentResumeEdit from './components/Student/StudentResumeEdit';
import EmployeSignup from './components/Employe/EmployeSignup';
import EmployeLogin from './components/Employe/EmployeLogin';
import EmployeProfile from './components/Employe/EmployeProfile';
import EmployeData from './components/Employe/EmployeData';
import OrganizationData from './components/Employe/OrganizationData';
import EmployeProfileEdit from './components/Employe/EmployeProfileEdit';
import ForgetEmployePassword from './components/Employe/ForgetEmployePassword';
import ChangeEmployePassword from './components/Employe/ChangeEmployePassword';
import Job from './components/Employe/Job';
import Internship from './components/Employe/Internship';
import JobInternship from './components/Employe/JobInternship';
import ChangePasswordReset from './components/Student/ChangePasswordReset';
import ChangeResetPassword from './components/Employe/ChangeResetPassword';
import StudentResume from './components/Student/StudentResume';
import StudentResumeUpdate from './components/Student/StudentResumeUpdate';
const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(asyncremoveuser());
  }


  return  (
    <div>
      <Routes>
        <Route path='/' element={  <Homepage />} />
        <Route path='/StudentSignup' element={<StudentSignup/>}/>
        <Route path='/StudentLogin' element={<StudentLogin/>}/>
        <Route path='/EmployeSignup' element={<EmployeSignup/>}/>
        <Route path='/EmployeLogin' element={<EmployeLogin/>}/>
        <Route path='/StudentProfile' element={<StudentProfile/>}/>
        <Route path='/StudentData' element={<StudentData/>}/>
        <Route path='/EmployeProfile' element={<EmployeProfile/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/EmployeData' element={<EmployeData/>}/>
        <Route path='/OrganizationData' element={<OrganizationData/>}/>
        <Route path='/EmployeProfileEdit' element={<EmployeProfileEdit/>}/>
        <Route path='/StudentProfileEdit' element={<StudentProfileEdit/>}/>
        <Route path='/Student/forget-link/:id' element={<ChangePassword/>}/>
        <Route path='/StudentResume' element={<StudentResumeEdit/>}/>
        <Route path='/ForgetEmployePassword' element={<ForgetEmployePassword/>}/>
        <Route path='/Employe/forget-link/:id' element={<ChangeEmployePassword/>}/>
        <Route path='/Job' element={<Job/>}/>
        <Route path='/Internship' element={<Internship/>}/>
        <Route path='/JobInternship' element={<JobInternship/>}/>
        <Route path='/ChangePassword' element={<ChangePasswordReset/>}/>
        <Route path='/Change-Password' element={<ChangeResetPassword/>}/>
        <Route path='/resume' element={<StudentResume/>}/>
        <Route path='/resume-update' element={<StudentResumeUpdate/>}/>
      </Routes>

    </div>
  ) 
};

export default App