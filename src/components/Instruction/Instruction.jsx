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
            <li>You only have to choose a number that is between 1 to 10.</li>
            <li>You can not choose fractional/floating point/decimal number.</li>
            <li>You can not choose negative numbers.</li>
            <li>Once you write the number tap/click the check marked button.</li>
          </ul>
          <ul>
            Example :
            <li>Player 1 have to place the first number in between 1 to 10</li>
            <li>Player 2 have to place the second number in between 1 to 10</li>
            <li>Then we will make the sum of the numbers that have choosen by each player</li>
            <li>After that, place the numbers respectively as it was started.</li>
            <li>Then again the sum will be calculated by taking the sum of previous sum and current player's number.</li>
          </ul>
        </h3>
      </div>
    </div>
  )
}

export default Instruction