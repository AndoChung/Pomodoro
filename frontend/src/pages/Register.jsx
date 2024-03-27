import { React, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        username: ""
    })

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/user/register", userData);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='h-screen flex w-screen'>
            <div className='w-1/2 bg-red-900 h-full'>
                <div className=''>

                </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center'>
                <div className='flex justify-center m-32 flex-col h-1/2'>
                    <h1 className='text-5xl h-16'>Login</h1>
                    <div className='h-14'>
                        <p>See your progress and track your goals!</p>
                    </div>
                    <form onSubmit={registerUser} className='flex flex-col justify-center items-center w-1/4'>
                        <div className='h-1/2 border flex flex-col justify-center items-center w-full'>
                            <label>Name</label>
                            <input type='text' value={userData.name} onChange={(e) => {
                                setUserData({ ...userData, name: e.target.value })
                            }} className='w-5/6' />
                            <label>Email</label>
                            <input type='email' value={userData.email} onChange={(e) => {
                                setUserData({ ...userData, email: e.target.value })
                            }} className='w-5/6' />
                            <label>Username</label>
                            <input type='text' value={userData.username} onChange={(e) => {
                                setUserData({ ...userData, username: e.target.value })
                            }} className='w-5/6' />
                            <label>Password</label>
                            <input type='password' value={userData.password} onChange={(e) => {
                                setUserData({ ...userData, password: e.target.value })
                            }} className='w-5/6' />
                            <input type='submit' value="Submit" className='border border-black mt-2' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register