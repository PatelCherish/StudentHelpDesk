
import './App.css';
import Login from './component/Login';
import { Link, Route, Routes } from "react-router-dom";
import Signup from './component/Signup';
import Nav from './component/Nav';
import Helpstate from './component/context/helpdesk/HelpState';
import Profile from './component/Profile';
import Eventcontainer from './component/Eventcontainer';

//import Student_s from './component/Student_s';
import { Container } from '@mui/material';
import Container_s from './component/Container_s';


function App() {
  return (
    <>
      <Helpstate>
      <Nav></Nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/event' element={<Eventcontainer></Eventcontainer>}></Route>
          <Route path='/scholorship' element={<Container_s></Container_s>}></Route>
        </Routes>
        
      </div>
      </Helpstate>    

    </>
  );
}

export default App;
