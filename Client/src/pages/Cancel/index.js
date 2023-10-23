import { useState } from 'react'



import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, Router, useNavigate } from 'react-router-dom'


const Cancel = () => {

    //const { id, firstName, lastName } = sessionStorage
    const [tid, setTid] = useState('');
   

    const navigate = useNavigate()




    const deleteTicket = () => {
        if(tid.length === 0){
            toast.warning('Please enter the ticket id')
        }else{
            const body = {
              
           

            }
      
            const url = `http://localhost:8080/cancelticket/`+tid
      
            axios.delete(url, body).then(response => {
              const result = response.data
              console.log(result)
      
              if(result['status'] == 'success'){
                toast.success('Ticket Deleted Succeffully')
      
                //get the data sent by the server
                const { id, firstName, lastName } = result['data']
      
                //persist the logged in user's info for future
                sessionStorage['id'] = id
                sessionStorage['firstName'] = firstName
                sessionStorage['lastName'] = lastName
                sessionStorage['loginStatus'] = 1
                //  navigate('/Sidebar')
              }else{
                toast.error(result['error'])
              }
            })
          }
      
        }
       
    
    return (

        <div className="background">
            <div className="p">
            {/* <div className="fnm">welcome { firstName } </div> */}
                <h1>Delete Ticket Here</h1></div>
            <div className="form">
                
                <div className="row">
                    <div className="col"></div>
                    <div className="col">

                    <div >

                      <label htmlFor="" className="label-control" >
                        tiketId
                       </label>
                       <input onChange={(e) => {
                         setTid(e.target.value)
                        }} type="text" placeholder="TicketId" className="form-control" />
                       </div>
                        
                    



                        <div >
                            <button onClick={deleteTicket} className="btn btn-info">delete</button>
                        </div>


                    </div>
                    <div className="col"></div>
                   
                </div>
                
            </div>
        
        </div>


    )
    }
export default  Cancel