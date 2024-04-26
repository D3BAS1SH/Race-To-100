import React from 'react'
import { useSelector } from 'react-redux'
import './ShowP2.scss'

const ShowP2 = () => {
    const User2Vals=useSelector(state=>state.User2);
  return (
    <div className='Player1Card'>
      <div className='backgroundDrop'></div>
      <div className="RecordHolder">
        {
          User2Vals.map((val)=>{
            return <p>{val}</p>
          })
        }
      </div>
    </div>
  )
}

export default ShowP2