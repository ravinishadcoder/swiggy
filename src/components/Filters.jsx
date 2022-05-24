import React from 'react'

const Filters = ({updateFilter,filterBy,filters}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
               {Object.entries(filters).map(([key,value])=>(
                <div className="restaurant-option" key={value} onClick={()=>updateFilter(key)}>
                {value}
            </div>
               ))} 
                

                
                
            </div>
        </div>
  )
}

export default Filters