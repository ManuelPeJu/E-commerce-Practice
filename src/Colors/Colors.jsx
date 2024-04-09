import React from 'react'

const Colors = () => {
  return (
    <div>
      <label htmlFor="" className="sidebar-label-container color-title">
          <input type="radio" name="test3" />
          <span className='checkmark'></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className='checkmark'></span>Black
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className='checkmark'></span>Red
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className='checkmark'></span>Blue
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className='checkmark'></span>Green
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className='checkmark'></span>White
        </label>
    </div>
  )
}

export default Colors
