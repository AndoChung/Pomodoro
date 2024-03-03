import {React, useState} from 'react'

const ToDo = ({ goal }) => {
    
  return (
    <div>
        <div className='flex border-2 m-2 p-2'>
            <div className='flex flex-col justify-center pr-4 pl-2'>
                <input type='checkbox' className='rounded-full px-3' />
            </div>
            <div className='w-full'>
              <div className=''>
                  <h4>{goal}</h4>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default ToDo