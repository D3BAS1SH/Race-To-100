import React from 'react'
import './User.scss'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { AddValue1 } from '../../feature/Numberholder'

const Player1 = ({num}) => {
  const [NumVal,setNumVal]=useState(1);
  const [TExt,setTExt]=useState('')

  const Dispatcher=useDispatch()
  const isTrue=useSelector(state=>state.isTrue)

  const HandleOnClick = () =>{
    if ((NumVal) > 10){
      setTExt("The number you have chossen doesn't satisfies the game instruction.")
    }
    else if (NumVal<1){
      setTExt("The number you have chossen doesn't satisfies the game instruction.")
    }
    else if(!isTrue){
      setTExt("This is Player 2 Term. you can't play now")
    }
    else{
      Dispatcher(AddValue1(parseInt(NumVal)))
      setTExt("")
      setNumVal(1)
    }
    console.log(num,' says ',NumVal);
  }

  return (
    <section id={num}>
        <div className='TitleSection' style={isTrue?{color:"#00ff00"}:{color:"#ff0000"}}>
            <h1>PLAYER 1</h1>
        </div>
        <span>{TExt}</span>
        <div className='InputSection'>
            <input type='number' min={1} max={10} value={NumVal} onChange={(e)=>setNumVal(e.target.value)}/>
            
            <button onClick={HandleOnClick}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
              </svg>
            </button>

        </div>
    </section>
  )
}

export default Player1