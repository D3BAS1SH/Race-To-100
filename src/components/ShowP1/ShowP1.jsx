import React from 'react'
import { useSelector } from 'react-redux'
import './ShowP1.scss'

const ShowP1 = () => {
    const User1Vals=useSelector(state=>state.User1);
  return (
    <div className='Player1Card'>
      <div className='backgroundDrop'></div>
      <div className="RecordHolder">
        <p>Term:2</p>
        <p>Term:2</p>
        <p>Term:2</p>
        <p>Term:2</p>
        <p>Term:2</p>
      </div>
    </div>
  )
}

export default ShowP1