import {React,useEffect,useContext} from 'react';
import helpdeskcontext from './context/helpdesk/helpdeskcontext';
import Student_s from './Student_s';

const Container_s = () => {
  const context = useContext(helpdeskcontext)
  const {fetchalls , scholorships} = context
  useEffect(() => {
    fetchalls();
    console.log(scholorships);
},[]);
  
  return (
    <>
       
        <div className='container my-4'>
        <h1>Scholorship List</h1> 
            {
                scholorships.map((s)=>{
                    return <Student_s key={s._id} title ={s.s_name} e = {s.s_eligibility} amt  = {s.s_amount} step = {s.s_steps} link = {s.s_link}></Student_s> 
                  })  
            }
        </div>
        
    </>
  );
}

export default Container_s;
