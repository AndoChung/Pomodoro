import { React, useState } from 'react'


const Login = () => {
  const [ data, setData ] = useState({
    username: '',
    password: '',
  });

  const loginUser = (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-screen'>
      <div className='flex justify-center h-5/6'>
        <form onSubmit={loginUser} className='flex flex-col justify-center items-center w-1/4'>
          <div className='h-1/2 border flex flex-col justify-center items-center w-full'>
            <label>Username</label>
            <input type='text' className='w-5/6' />
            <label>Password</label>
            <input type='text' className='w-5/6' />
            <input type='submit' value="Submit" className='border border-black mt-2' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login