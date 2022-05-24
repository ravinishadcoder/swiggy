import React from 'react'

const Offers = (props) => {
  return (
    <section className="offers">
        <div className="container">
          {props.offers.map((el,i)=>(
           <img className="offer" src={el} key={i}/>
          ))}
            

            {/* <img className="offer" src={offer2} />
            <img className="offer" src={offer3} />
            <img className="offer" src={offer4} /> */}
        </div>
    </section>
  )
}

export default Offers