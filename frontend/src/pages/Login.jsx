import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [ userData, setUserData ] = useState({
    username: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
        try {
            await axios.post("/user/login", userData);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
  }

  return (
    <div className='h-screen'>
      <div className='flex justify-center h-5/6'>
        <form onSubmit={loginUser} className='flex flex-col justify-center items-center w-1/4'>
          <div className='h-1/2 border flex flex-col justify-center items-center w-full'>
            <label>Username</label>
            <input type='text' value={userData.username} onChange={(e) => {
              setUserData({ ...userData, username: e.target.value})
            }} className='w-5/6' />
            <label>Password</label>
            <input type='password' value={userData.password} onChange={(e) => {
              setUserData({ ...userData, password: e.target.value})
            }} className='w-5/6' />
            <input type='submit' value="Submit" className='border border-black mt-2' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login