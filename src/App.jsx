import './App.scss'
import Player1 from './components/Player/Player1'
import Player2 from './components/Player/Player2'
import Instruction from './components/Instruction/Instruction'
import ShowWinner from './components/ShowWinner/ShowWinner'
import ShowP1 from './components/ShowP1/ShowP1'
import ShowP2 from './components/ShowP2/ShowP2'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Reset,ToggleBlur } from './feature/Numberholder'
import ShowAll from './components/ShowAll/ShowAll'

const App = ()=> {
  const Dispatcher=useDispatch()
  const winner=useSelector(state=>state.winner)
  const isSetBlur=useSelector(state=>state.blurSet)
  
  const [isEnableIns,setIsEnableIns]=useState(false)
  const [P1Enable,setP1Enable]=useState(false)
  const [P2Enable,setP2Enable]=useState(false)
  const [isShowAll,setIsShowAll]=useState(false)

  useEffect(()=>{
    if(winner){
      Dispatcher(ToggleBlur())
    }
  },[winner])

  const handleOnClick = () =>{
    setIsEnableIns(!isEnableIns);
    Dispatcher(ToggleBlur())
  }

  //Player 1 Value show
  const P1ScoreHandle=()=>{
    setP1Enable(!P1Enable);
    Dispatcher(ToggleBlur())
  }
  
  //Player 2 Value Show
  const P2ScoreHandle=()=>{
    setP2Enable(!P2Enable);
    Dispatcher(ToggleBlur())
  }
  
  //Reset Handler
  const ResetHandle=()=>{
    Dispatcher(Reset())
  }
  
  //Show All Player Inputs
  const ShowAllInputs=()=>{
    setIsShowAll(!isShowAll);
    Dispatcher(ToggleBlur())
  }

  return (
    <div className='MAINBODY'>
      <header className='HelpButton'>
        {/* Reset Button */}
        <button onClick={ResetHandle}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/>
          </svg>
        </button>
        
        {/* Player 1 Button */}
        <button onClick={P1ScoreHandle}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-20 200h80v-400H380v80h80v320Z"/>
        </svg>
        </button>
        
        {/* Player 2 Button */}
        <button onClick={P2ScoreHandle}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h240v-80H440v-80h80q33 0 56.5-23.5T600-520v-80q0-33-23.5-56.5T520-680H360v80h160v80h-80q-33 0-56.5 23.5T360-440v160Z"/>
        </svg>
        </button>
        
        {/* All Inputs Button */}
        <button onClick={ShowAllInputs}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M480-83 240-323l56-56 184 183 184-183 56 56L480-83Zm0-238L240-561l56-56 184 183 184-183 56 56-240 240Zm0-238L240-799l56-56 184 183 184-183 56 56-240 240Z"/>
          </svg>
        </button>
        
        {/* Info Button */}
        <button onClick={handleOnClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M80-40v-80h800v80H80Zm80-120v-240q-33-54-51-114.5T91-638q0-61 15.5-120T143-874q8-21 26-33.5t40-12.5q31 0 53 21t18 50l-11 91q-6 48 8.5 91t43.5 75.5q29 32.5 70 52t89 19.5q60 0 120.5 12.5T706-472q45 23 69.5 58.5T800-326v166H160Zm80-80h480v-86q0-24-12-42.5T674-398q-41-20-95-31t-99-11q-66 0-122.5-27t-96-72.5Q222-585 202-644.5T190-768q-10 30-14.5 64t-4.5 66q0 58 20.5 111.5T240-422v182Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640ZM320-160v-37q0-67 46.5-115T480-360h160v80H480q-34 0-57 24.5T400-197v37h-80Zm160-80Zm0-480Z"/>
          </svg>
        </button>
        
      </header>
      
      {/* <section className='ScoreNWinner'>
        <ShowWinner/>
      </section> */}

      <div className="RestOf">
        
        <div className="InstructionLayout">
          {
            isEnableIns && <Instruction/>
          }
        </div>
        
        <div className="WinnerSec">
          {
            winner && <ShowWinner/>
          }
        </div>
        
        <div className="ShowP1">
          {
            P1Enable && <ShowP1/>
          }
        </div>
        <div className="ShowP2">
          {
            P2Enable && <ShowP2/>
          }
        </div>

        <div className='CardHolder' style={{filter:isSetBlur?'blur(2px)':'blur(0px)'}}>
          <Player1 num={1}/>
          <ShowAll/>
          <Player2 num={2}/>
        </div>

      </div>
    </div>
  )
}

export default App
