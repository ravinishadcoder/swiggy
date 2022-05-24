import React from 'react'
//import meal from "../assets/restaurant1.jpeg"
import Restos from './Restos.jsx'
const Resto = (props) => {
  return (
     <div className="container divider">
            <div className="cards">
                {props.resto.map((resto)=>(
                 <Restos key={resto.id} resto={resto} />
         ))}
        </div> 
        </div> 
  )
}

export default Resto