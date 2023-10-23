import './HorizontalSlider.css'
import { url } from '../common/constants'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Search from '../pages/Search'





const HorizontalSlider = ({ items, title, onItemSelect }) => {

  const navigate = useNavigate();
 
  
  
  return (
    <div className="back">
   
    <div className="slider-container">
      <div className="title">{title}</div>
      

      {items.map((item) => {
        return (
          <div
            className="item-container"
            onClick={() => {
              onItemSelect(item)
            }}>
              
          
            <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr >
            <th>Bus</th>
              <th>BusNo</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Time</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Action</th>
              
           
            </tr>
          </thead>
          <tbody className="tb">
              <tr>
              <td><img src={url + '/images/' + item.thumbnail} className="i"></img></td>
                  <td>{item.busNo}</td>
                  <td>{item.source}</td>
                  <td>{item.destination}</td>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}/-</td>
                  <td><button onClick={() => {
                
                navigate('/Seat', { state: { busid: item.busid ,amount:item.amount} })
              }} className="btn btn-primary">Book Now</button></td>
                
               

              </tr>
          
               
          </tbody>
        </table>
        
            
            
            
          
      </div>
          </div>
          
        )
      })}
    </div>
    </div>
  
  )
}

export default HorizontalSlider