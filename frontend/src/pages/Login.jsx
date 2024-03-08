import { React, useState } from 'react'


const Login = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <div className='h-screen'>
      <div className='flex justify-center h-5/6'>
        <form action='http://localhost:3001/login' method='POST' className='flex flex-col justify-center items-center w-1/4'>
          <div className='h-1/2 border flex flex-col justify-center items-center w-full'>
            <label htmlFor="name">Username</label>
            <input type='text' className='w-5/6' />
            <label htmlFor="password">Password</label>
            <input type='text' className='w-5/6' />
            <input type='submit' value="Submit" className='border-gray-900 mt-2' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login