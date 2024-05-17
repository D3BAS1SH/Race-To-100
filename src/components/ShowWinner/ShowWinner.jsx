import React from 'react'
import './ShowWinner.scss'
import { useSelector } from 'react-redux'

const ShowWinner = () => {

  const isTrue=useSelector(state=>state.isTrue)

  return (
    <div className='myCard'>
      <div className='Show-winner'>
        <h1>
          WINNER IS PLAYER {isTrue?1:2}
        </h1>
      </div>
    </div>
  )
}

export default ShowWinner