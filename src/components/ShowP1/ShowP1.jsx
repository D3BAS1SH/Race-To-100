import React from 'react'
import { useSelector } from 'react-redux'

const ShowP1 = () => {
    const User1Vals=useSelector(state=>state.User1);
  return (
    <div className='Player1Card'>
        {
            User1Vals.map((element,index)=>{
                return <p key={index}>{index+1} : {element}</p>
            })
        }
    </div>
  )
}

export default ShowP1