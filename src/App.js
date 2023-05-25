

import { Route, Routes, Navigate } from 'react-router';
import ProtectedRoute from './utils/ProtectedRoute';
import { LaptopManagement } from './components/laptop-management/LaptopManagement';
import { WorkFromHomeTable } from './components/WFH-Management/WorkFromHomeTable';
import  Recruitment  from './components/Recruitment/HomePage/Recruitment';
import Interview from './components/Interview/Interview';
import { Login } from './components/login/Login';
import HrNotification from './components/Current-Interview/Notification-HR/HrNotification';
import Calendar from './components/Calendar/Calendar';
import DashboardHR from './components/Dashboard/DashboardHR';
import Message from './components/Message/Message';
import Sidebar from './components/side-bar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import SuccessAddApplicants from './components/Recruitment/Modals/Add-Applicants/SuccessAddApplicants';













function App() {
  return (
    <>
    

    <Routes>
        <Route exact path='/login' element={<Login />}></Route>
      <Route path='*' element={<Navigate to='/login' />} />
      <Route path='/laptopmanagement' element={<LaptopManagement/>} />
      <Route path='/wfh' element={<WorkFromHomeTable/>} />
      <Route path='/recruitment-dashboard' element={<Recruitment/>} />
      <Route path='/interview' element={<Interview/>} />
      <Route path='/current-interview' element={<HrNotification/>} />
      <Route path='/calendar' element={<Calendar/>} />
      <Route path='/dashboard' element={<DashboardHR/>} />
      <Route path='/messages' element={<Message/>} />
    </Routes>

    {/* <ApplicantsDataTable/> */}
    {/* <Recruitment/> */}
    {/* <SuccessAddApplicants/> */}
    {/* <Sidebar/> */}
    {/* <HrNotification/> */}

    {/* <Topbar/> */}
    {/* <Sidebar/> */}
    
  
  
    </>
  );
}

export default App;
