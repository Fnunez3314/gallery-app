import React from 'react'
import PropTypes from 'prop-types'

const Formimg = ({handleSubmit}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label className='my-1 w-75'>Buscar <input className='w-100 border border-1 border-dark' type="text" name="inputText" />
   </label>
   <button className='btn btn-dark m-1'>
     <span className="text-white material-symbols-outlined">
     search</span>
   </button>
  </form>
  </>
  )
}

Formimg.propTypes = {
  handleSubmit: PropTypes.func
}

export default Formimg