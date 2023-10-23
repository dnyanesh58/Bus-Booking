
import './signin.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

import profile from "../../images/th.jpeg"



const CustSignin = () => {
  
  //const { id, firstName, lastName } = sessionStorage
  //comment above not in admin code

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {

    if(email.length === 0){
      toast.warning('Please enter the email')
    }else if(password.length === 0){
      toast.warning("please enter the password")
    }else{
      const body = {
      email,
      password,
      }

      const url = `http://localhost:8080/customer/signin`

      axios.post(url, body).then(response => {
        const result = response.data
        console.log(result)

        if(result['status'] == 'success'){
          toast.success('Welcome to the Application')

          //get the data sent by the server
          //const { id, firstName } = result['data']
         const { id, firstname, lastname } = result['data']

         //persist the logged in user's info for future
          sessionStorage['id'] = id
          //sessionStorage['firstName'] = firstName
          sessionStorage['firstname'] = firstname

          // sessionStorage['loginStatus'] = 1
          sessionStorage['loginStatus'] = 1
           navigate('/Search')
        }else{
          toast.error(result['error'])
        }
      })
    }

  }
    return (

      <div>
      <div className="bgimg">
          
      
      <div className="container">
     
           <div className="container">
           <div className="imgs">
           
           
           <div className="sub-main">
         <div>
           
         
       <div className="container-image">
         <img src={profile} alt="profile" className="profile"/>
         </div>
       
         <div className="sp"><h2>Login Here</h2></div>
           <div className="form">
                    
             <div className="mb-3">
               
               <label htmlFor="" className="label-control" > 
                   Email Address
               </label>
               <input onChange = {(e) => {
                  
                  setEmail(e.target.value)
               }} type="text" placeholder="Enter email here" className="form-control"/>
           
           <div>
           </div>
         
            <div className="password">
           <div className="mb-3"></div>
              
              <label htmlFor="" className="label-control" >
                 Password
              </label>
            <input onChange={(e) => {

              setPassword(e.target.value)
            }} type="password" placeholder="Enter password"  className="form-control"/>
           </div>
           </div>
           
            
            <div className="mb-3"></div>
             <div className="acc">No account yet? <Link to="/Signup">Signup here</Link></div>
             <button onClick={signinUser} className="btn btn-info">Signin</button>
             </div>
             
            </div>
           
           
            </div>
       </div>
   </div>
   </div>
   </div>
   </div>
   
)
}
export default CustSignin