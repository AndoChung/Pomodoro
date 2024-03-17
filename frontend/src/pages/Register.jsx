import { React, useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [ userData, setUserData ] = useState({
        name: "",
        email: "",
        password: "",
        username: ""
    })

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/user/register", userData)
        } catch {

        }
        console.log(userData)
    }
    return (
    <div className='h-screen'>
      <div className='flex justify-center h-5/6'>
        <form onSubmit={registerUser} className='flex flex-col justify-center items-center w-1/4'>
          <div className='h-1/2 border flex flex-col justify-center items-center w-full'>
            <label>Name</label>
            <input type='text' value={userData.name} onChange={(e) => {
                setUserData({ ...userData, name: e.target.value})
            }} className='w-5/6' />
            <label>Email</label>
            <input type='email' value={userData.email} onChange={(e) => {
                setUserData({ ...userData, email: e.target.value})
            }} className='w-5/6' />
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

export default Register