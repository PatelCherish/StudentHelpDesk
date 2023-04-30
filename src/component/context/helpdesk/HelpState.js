import {React , useState} from "react";
import helpdeskcontext from "./helpdeskcontext";

const Helpstate = (props)=>{
    const host = "http://localhost:5000";
    const eventl = []
    const [list_event, setlist_event] = useState(eventl)
    const placement = []
    const [placements, setplacements] = useState(placement)
    const scholorship = []
    const [scholorships, setscholorships] = useState(scholorship)


    // api :: fetch events
    const fetchEvents = async ()=>{
        // api for add note
        alert("hello");
        const response = await fetch(`${host}/api/events/getevent`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" :  localStorage.getItem("token")
            },
            
            
          });
          const json = await response.json();
          console.log(json);
          setlist_event(list_event);
          
      }
      const fetchallEvents = async ()=>{
        // api for add note
        
        const response = await fetch(`${host}/api/events/getallevent`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              
            }, 
          });
          const json = await response.json();  
          setlist_event(json);
          
          
          
          
          
      }
      // api :: fetch placements
      const fetchPlacements = async ()=>{
        // api for add note
        const response = await fetch(`${host}/api/placement/getplacement`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" :  localStorage.getItem("token")
            },
            
            
          });
          const json = await response.json();
          console.log(json);
          setplacements(json);
          console.log(placements);
          
      }

      const fetchallPlacements = async ()=>{
        // api for add note
        const response = await fetch(`${host}/api/placement/getallplacement`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
             
            },
            
            
          });
          const json = await response.json();
          console.log(json);
          setplacements(json);
          console.log(placements);
          
      }
      // api :: fetch scholorship
      const fetchScholorships = async ()=>{
        // api for add note
        const response = await fetch(`${host}/api/scholorship/getscholorship`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" :  localStorage.getItem("token")
            },
            
            
          });
          const json = await response.json();
          console.log(json);
          setscholorships(json);
          
      }
      // api :: fetch the all
      const fetchalls = async ()=>{
        // api for add note
        const response = await fetch(`${host}/api/scholorship/getAll`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              
            },
            
            
          });
          const json = await response.json();
          console.log(json);
          setscholorships(json);
          
      }

      // api :: insert the event
      const addEvents = async (e_title , e_context , e_desc , e_date , e_poster)=>{
        // api for add note
        const response = await fetch(`${host}/api/events/insertEvent`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem("token")
            },
            
            body: JSON.stringify({e_title , e_context , e_desc , e_date , e_poster}), // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json);
          setlist_event(eventl.concat(json));

      }
      // api :: insert the placement
      const addPlacement = async (p_year , h_package , l_package , n_student_p , n_student_g , p_t_company)=>{
        // api for add note
        const response = await fetch(`${host}/api/placement/insertplace/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem("token")
            },
            
            body: JSON.stringify({p_year , h_package , l_package , n_student_p , n_student_g , p_t_company}), // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json);
          setplacements(placement.concat(json));

      }
      
      // api :: insert the Scholorship
      const addScholorship = async (s_name , s_eligibility , s_amount , s_steps , s_link)=>{
        // api for add note
        const response = await fetch(`${host}/api/scholorship/insertscholorship`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem("token")
            },
            
            body: JSON.stringify({s_name , s_eligibility , s_amount , s_steps , s_link}), // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json);
          setscholorships(scholorships.concat(json));

      }

      // api :: delete events
      const deleteEvent =async (id)=>{
        const response = await fetch(`${host}/api/events/deleteEvent`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem("token")
          },
          body: JSON.stringify({id : id}), // body data type must match "Content-Type" header
           
        });
        response.text("note deleted")
        fetchEvents();
      }

      // api :: delete placements
      const deletPlacement =async (id)=>{
        const response = await fetch(`${host}/api/placement/deleteplacement/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem("token")
          },
          
           
        });
        response.text("note deleted")
        fetchPlacements();
      }

      // api :: delete schlolorship 
      const deletescholorship =async (id)=>{
        const response = await fetch(`${host}/api/placement/deleteplacement/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem("token")
          },
          
           
        });
        response.text("note deleted")
        fetchPlacements();
      }

      // api :: to create user
      const CreateUser =async (student)=>{
        const response = await fetch(`${host}/api/auth/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem("token")
          },
          body: JSON.stringify({"e_name" : student.e_name , "e_email" : student.e_email , "e_ph" : student.e_ph , "e_school" : student.e_school , "e_state" : student.e_state , "e_result" : student.e_result , "e_branch" : student.e_branch , "e_password" : student.e_password}), // body data type must match "Content-Type" header
           
        });
        const json = await response.json();
        
      }
      return(
        <helpdeskcontext.Provider value={{fetchEvents , fetchPlacements , fetchScholorships , addEvents , addPlacement  , deleteEvent , deletPlacement , deletescholorship , CreateUser ,fetchallEvents , list_event , fetchalls , scholorships}} >
            {props.children}
        </helpdeskcontext.Provider>
      )
}
export default Helpstate