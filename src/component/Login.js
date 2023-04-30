import {React , useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setlogin] = useState({"email" : "" , "password" : ""});
    const history = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        let role = document.getElementById('role').value;
        let url = ""
        
        if(role === "student"){
            url = "http://localhost:5000/api/auth/login"
            const fetchNotes = async ()=>{
                // api for add note
                const response = await fetch(`${url}`, {
                    method: "POSt",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({"e_email" : login.email , "e_password" : login.password}), // body data type must match "Content-Type" header
                    
                  });
                  const json = await response.json();
                  
                  
                  if(json.success)
                  {
                    localStorage.setItem('token' , json.authToken)
                    history('\home');
                  }
          
              }
              fetchNotes();
        }        
        else{
            url = "http://localhost:5000/api/clg-auth/college_login"
            const fetchNotes = async ()=>{
                // api for add note
                const response = await fetch(`${url}`, {
                    method: "POSt",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({"c_email" : login.email , "c_passsword" : login.password}), // body data type must match "Content-Type" header
                    
                  });
                  const json = await response.json();
                  console.log(json);
                  
                  if(json.success)
                  {
                    localStorage.setItem('token' , json.authToken)
                    history('\home');
                  }
          
              }
              fetchNotes();
        }
        
    }
    
  
      
    const handelChange = (e) => {
        setlogin({...login, [e.target.name] : e.target.value})
        
        console.log(login);
    }
  return (
    <>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    
    <div className="row d-flex justify-content-center align-items-center h-100">
    <h1 className='text-center'>Student Help-Desk</h1>
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <select className='select form-control' style={{"width" : "140px" }} id="role">
            <option value="student">Student</option>
            <option value="college">College</option>
            
            </select>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

       
          <div className="form-outline mb-4">
            <input type="email" id="email" name='email' onChange={handelChange} className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

       
          <div className="form-outline mb-3">
            <input type="password" id="password" name="password" onChange={handelChange} className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
       
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg"
              style={{"padding-left": "2.5rem", "padding-right" : "2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={'/signup'}
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div> 
  </div>
  <div className="">
    
    <div className="text-white mb-3 mb-md-0">
      
    </div>
    

    
    
    
  </div>
</section> 
    </>
  );
}

export default Login;
