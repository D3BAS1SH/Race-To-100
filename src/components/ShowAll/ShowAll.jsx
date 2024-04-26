import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './ShowAll.scss'

const ShowAll = () => {
    const User1Vals=useSelector(state=>state.User1);
    const User2Vals=useSelector(state=>state.User2);

    const myFinalAr=[...User1Vals,...User2Vals]

    console.log(myFinalAr);

  return (
    <div className='Player1Card'>
      <div className='backgroundDrop'></div>
      <div className="RecordHolder">
        {
          myFinalAr.map((val,index)=>{
            return (
              <p>
                {
                  `[PLAYER : ${index%2==0?1:2}] : ${val}`
                }
              </p>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShowAll