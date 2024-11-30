import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";

import AdminSignIn from "./components/AdminSignIn";
import TeacherSignIn from "./components/TeacherSignIn";
import  StudentSignIn from "./components/StudentSignIn"




//import dashboards
import AdminDashboard from "./pages/Admin/Dashboard";

import StudentDashboard from "./pages/Students/Dashboard";

import TeacherDashboard from "./pages/Teachers/Dashboard";


//announcement section

import Announcement from "./pages/Admin/Announcement";

import AnnouncementStudent from "./pages/Students/Announcement";



//import event section







import Classes from './pages/Admin/Classes'

import Exam from './pages/Admin/Exam'
import Attendance from './pages/Admin/Attendance'
import Performance from './pages/Admin/Performance'

import Teachers from './pages/Admin/Teachers'
import Student from './pages/Admin/Student'

import Assigment from './pages/Admin/Assigment'



import Library from './pages/Admin/Library'

import EventCalander from './pages/Admin/EventCalander'

import SettingsProfile from './pages/Admin/SettingsProfile'

import Sidebar from './pages/Admin/Sidebar'






import StudentAssigments from "./pages/Students/Assigments";

import StudentAttendance from "./pages/Students/Attendance";



import ExamStudent from "./pages/Students/Exams";
import LibararySection from "./pages/Students/Library";

import PerformanceSection from "./pages/Students/Performance";

import ProfileSection from "./pages/Students/Profile";

//teacher

import ClassSection from "./pages/Teachers/Classes";

import StudentSection from "./pages/Teachers/Students";

import TeacherSection from "./pages/Teachers/Teachers";
import CheckPerformanceSection
 from "./pages/Teachers/Performance";

 import EventSection from "./pages/Teachers/Event";

import TeacherProfileSection from "./pages/Teachers/Profile";

import CheckAnnoucementSection from "./pages/Teachers/Announcement";

import AssigmentSection from "./pages/Teachers/Assigments";

import CheckAttendanceSection from "./pages/Teachers/Attendance";

import TCheckExamSection from './pages/Teachers/Exam'





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        {/* All the signin pages are here */}
        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />
        {/* all dashboard routes */}
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        {/* Admin section here */}
        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Student />} />
        <Route exact path="/admin/assigments" element={<Assigment />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalander />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />
        {/* // Student Section */}
        <Route
          exact
          path="/student/assigments"
          element={<StudentAssigments />}
        />
        <Route exact path="/student/exams" element={<ExamStudent />} />
        <Route
          exact
          path="/student/performance"
          element={<PerformanceSection />}
        />
        <Route
          exact
          path="/student/attendance"
          element={<StudentAttendance />}
        />
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/student/libarary" element={<LibararySection />} />
        <Route exact path="/student/settings" element={<ProfileSection />} />
        <Route
          exact
          path="/student/communication"
          element={<AnnouncementStudent />}
        />
        {/* Teacher Section */}
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/student" element={<StudentSection />} />
        <Route exact path="/teacher/teacher" element={<TeacherSection />} />
        <Route
          exact
          path="/teacher/checkperformance"
          element={<CheckPerformanceSection />}
        />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route
          exact
          path="/teacher/profile"
          element={<TeacherProfileSection />}
        />
        <Route
          exact
          path="/teacher/announcements"
          element={<CheckAnnoucementSection />}
        />
        <Route
          exact
          path="/teacher/assigments"
          element={<AssigmentSection />}
        />
        <Route
          exact
          path="/teacher/attendance"
          element={<CheckAttendanceSection />}
        />
        <Route exact path="/teacher/exams" element={<TCheckExamSection />} />

        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
