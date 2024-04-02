import './App.scss'
import Player1 from './components/Player1'
import Instruction from './components/Instruction'
import { useState } from 'react'

const App = ()=> {
  const [isEnableIns,setIsEnableIns]=useState(false)
  const [isSetBlur,setIsSetBlur]=useState(false)

  const handleOnClick = () =>{
    setIsEnableIns(!isEnableIns);
    setIsSetBlur(!isSetBlur);
  }

  return (
    <>
      <header className='HelpButton'>
        <button onClick={()=>{handleOnClick()}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M80-40v-80h800v80H80Zm80-120v-240q-33-54-51-114.5T91-638q0-61 15.5-120T143-874q8-21 26-33.5t40-12.5q31 0 53 21t18 50l-11 91q-6 48 8.5 91t43.5 75.5q29 32.5 70 52t89 19.5q60 0 120.5 12.5T706-472q45 23 69.5 58.5T800-326v166H160Zm80-80h480v-86q0-24-12-42.5T674-398q-41-20-95-31t-99-11q-66 0-122.5-27t-96-72.5Q222-585 202-644.5T190-768q-10 30-14.5 64t-4.5 66q0 58 20.5 111.5T240-422v182Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640ZM320-160v-37q0-67 46.5-115T480-360h160v80H480q-34 0-57 24.5T400-197v37h-80Zm160-80Zm0-480Z"/>
          </svg>
        </button>
      </header>
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
