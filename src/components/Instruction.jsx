import React from 'react'
import './Instruction.scss'

const Instruction = () => {
  return (
    <div className='Instruction'>
      <div className='InstructionSet'>
        <h1><span className='O1'>RACE</span>-<span className='O2'>TO</span>-<span className='O3'>100</span></h1>
        <hr/>
        <h3>
          <ul>
            Restriction :
            <li>You only have to choose</li>
          </ul>
        </h3>
      </div>
    </div>
  )
}

export default Instruction