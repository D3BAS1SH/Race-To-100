import React from 'react'
import './User.scss'
import { useState } from 'react'

const Player1 = ({num}) => {
  const [NumVal,setNumVal]=useState(1);
  return (
    <section id='UserSection'>
        <div className='TitleSection'>
            <h1>PLAYER {num}</h1>
        </div>
        <div className='InputSection'>
            <input type='number' min={1} max={10} value={NumVal} onChange={(e)=>setNumVal(e.target.value)}/>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
            </button>
        </div>
    </section>
  )
}

export default Player1