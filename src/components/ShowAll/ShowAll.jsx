import React from 'react'
import { useSelector } from 'react-redux'
import './ShowAll.scss'

const ShowAll = () => {
    const allTotalVals=useSelector(state=>state.AllTotal);

    console.log(allTotalVals);

  return (
    <div className='Player1Card'>
      <div className='backgroundDrop'></div>
      <div className="RecordHolder">
        {
          allTotalVals.map((val,index)=>{
            return (
              <p key={index}>
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