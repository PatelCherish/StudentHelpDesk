import React, { useContext, useEffect , useState } from 'react';
import Event from './Event';
import helpdeskcontext from './context/helpdesk/helpdeskcontext';
const Eventcontainer = () => {
  const context = useContext(helpdeskcontext)
  const {fetchallEvents , list_event} = context

    useEffect(() => {
      fetchallEvents();
      console.log(list_event);
  },[]);
    
  return (
    <>
        <div className='my-3'>
           <h2>List of Events :</h2> 
           <div className='container'>
                <div className='d-flex justify-content-around flex-wrap'>
                {
                    list_event.map((event)=>{
                      return <Event key={event._id} title ={event.e_title} context = {event.e_context} desc = {event.e_desc}></Event> 
                    })  
                    
                }
                </div>
           </div>
        </div> 
    </>
  );
}

export default Eventcontainer;
