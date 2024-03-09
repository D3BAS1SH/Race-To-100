import React from 'react'
import './User.scss'

const User = () => {
  return (
    <section id='UserSection'>
        <div className='TitleSection'>
            <h1>NUMBER INPUT</h1>
        </div>
        <div className='InputSection'>
            <input type='number' min={1} max={10} step={1}/>
        </div>
    </section>
  )
}

export default User