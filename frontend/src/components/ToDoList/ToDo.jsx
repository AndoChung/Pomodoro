import {React, useState} from 'react'

const ToDo = ({ goal }) => {
    
  return (
    <div>
        <div className='flex'>
            <div>
                <input type='checkbox' />
            </div>
            <div>
                <h4>{goal}</h4>
            </div>
        </div>
    </div>
  )
}

export default ToDo