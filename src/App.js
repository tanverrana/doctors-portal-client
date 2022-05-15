import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments/MyAppointments';
import MyReview from './Pages/Dashboard/Review/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory/MyHistory';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-20">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="appointment" element=
          {
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }></Route>
        <Route path="dashboard" element=
          {
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
