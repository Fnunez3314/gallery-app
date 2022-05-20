import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img}) => {
  return (
    <div className=''>
      <div className="card m-2" style={{width: "15rem"}}>
        <img src={img} className="card-img-top" alt="imagen.png"/>
      </div>
    </div>
  )
}

Card.propTypes = {
  img:PropTypes.string
}

export default Card