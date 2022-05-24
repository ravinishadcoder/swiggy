//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Offers from './components/Offers';
import Filters from './components/Filters';
import Resto from './components/Resto';
import userInfo from "./data/navbar.json"
import resto from "./data/restruarant.json"
import offers from "./data/offer.json"
import { useState } from 'react';
const filters = {
  0:"Cost High to Lost",
  1:" Cost Lost to High",
  2:"Ratings",
  3:" Delivery Time",
  4:"Relevance"
            
}
function App() {
  const [filterBy,setFilterBy]=useState("");
  const [data,setData]=useState(resto);
  const updateFilter = (newFilter)=>{
   console.log(newFilter)
   switch(newFilter){
     
     case "0":{
       setFilterBy(0)
       data.sort((a,b)=>b.costfortwo-a.costfortwo);
        
       setData([...data])
       break;
     }
     case "1":{
       setFilterBy(1)
       data.sort((a,b)=>a.costfortwo-b.costfortwo);  
       setData([...data])
       break;
     }
     case "2":{
       setFilterBy(2)
       data.sort((a,b)=>b.rating-a.rating);
       setData([...data])
       break;
     }
     case "3":{
       setFilterBy(3)
       data.sort((a,b)=>a.deliveryTimings-b.deliveryTimings);
       setData([...data])
       break;
     }
     default:{
       setData(resto)
       break;
     }
   }
  }
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offers={offers} />
      <Filters filters={filters} updateFilter={ updateFilter} currentFilteredBy={filterBy} />
      <Resto resto={data}/>
    </div>
  );
}

export default App;
