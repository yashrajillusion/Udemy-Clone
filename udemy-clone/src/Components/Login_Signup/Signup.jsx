import { Checkbox } from '@mui/material';
import React from 'react';
import "./signup.css"
import {Header} from "../Header/Header"


const Signup = () => {
  return (
    <div>
        <Header />
           <div className='loginDiv'>
               <h4>Sign up Start Learning!</h4>
               <hr className='hr_line_login'></hr>

               <div className='login_inputDiv'>
                 <input type = "text" placeholder='Full Name' className='login_pw'></input>
                 <input type = "email" placeholder='Email' className='login_pw'></input>
                  
                 <input type = "password" placeholder='Passward' className='login_pw'></input>
                   
                   <div className='checkboxDiv'>
                <input type = "checkbox" className = "signup_checkbox"></input>
                <label for = "signup_checkbox">
                      I'm in for emails with exciting discounts and personalized recommendations
                </label></div>
                   
                <button id = "signup_input">Sign up</button>

                  <h6>By signing up you agree to our <a href= "#">Terms of use</a> and <a href= "#">privacy policy</a></h6>
                    <hr className='hr_line_login'></hr>

                    <div className='hv_account'>Alreday have an Account? <a href = "#">Log in</a></div>
              
                </div>
           </div>

          
    </div>
  )
}
export default Signup
