import React from 'react'

const Restos = ({resto}) => {
  return (
    <div className="card" key={resto.id}>
                     <img width="254" height="160px" src={resto.image}/>
                     <div className="restaurant-details">
                     <div className="restaurant-title">{resto.name}</div> 
                     <div className="restaurant-subtitle">{resto.category.join(", ")}</div> 
                     </div>
                    <div className="restaurant-info">
                        <div className="restaurant-ratings">
                            <i className="material-icons star-icon">star</i> {resto.rating}
                        </div>
                         <div className="restaurant-delivery-timings">{resto.deliveryTimings} MINS</div> 
                        <div className="restaurant-cost-for-two">Rs. {resto.costfortwo}</div>
                    </div>
                    <div className="offer-banner">
                        <span className="material-icons"> local_offer </span>
                        <span className="offer-text">{resto.offer.join(", ")}</span>
                    </div>  
                    </div> 
  )
}

export default Restos