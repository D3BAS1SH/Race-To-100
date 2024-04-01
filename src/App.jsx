import './App.scss'
import Player1 from './components/Player1'
import Instruction from './components/Instruction'
import { useState } from 'react'

const App = ()=> {
  const [isEnableIns,setIsEnableIns]=useState(false)
  const [isSetBlur,setIsSetBlur]=useState(false)
  return (
    <>
      <div>
        <button></button>
      </div>
      {
        isEnableIns && <Instruction/>
      }
      <div className='CardHolder' style={{filter:isSetBlur?'blur(2px)':'blur(0px)'}}>
        <Player1 num={1}/>
      </div>
    </>
  )
}

export default App
