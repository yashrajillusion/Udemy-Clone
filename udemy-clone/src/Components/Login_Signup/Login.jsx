import React from 'react';
import "./login.css";
import {Header} from "../Header/Header"


const Login = () => {
  return (
    <div>

          <Header />              
         <div className='loginDiv'>
               <h4>Log In to Your Udemy Account!</h4>
               <hr className='hr_line_login'></hr>
                 
                 <div className='img_tag'>
                <img src="	https://img-c.udemycdn.com/user/50x50/anonymous_3.png" alt="" />
               <p>Welcome back, {"Yashas"}</p> </div>
                  
                  <div className='login_inputDiv'>
                 <input type = "password" placeholder='Passward' className='login_pw'></input>

                <button id = "login_input">Log in</button>
                </div>
                  
                  <div className='forgot_pws'>           
                      <span className='forgot_pw'>or </span>
                   <a href = "#">Forgot Password</a>
                    
                    <div className='diff_acct'>
                   <a href="#">Log in</a>to a <a href="#">different account</a>
                   </div>  </div>
 

                   <div className='login_org'>
                       <p>Don't have an account? <span><a href="#">Sign up</a></span></p>
                       <a href="#" className='login_org1'>Log in with your organization</a>
                   </div>
         </div>
    </div>
  )
}

export default Login
