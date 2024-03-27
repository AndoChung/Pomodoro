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
                <div className='flex justify-center mx-32 flex-col h-4/5'>
                    <h1 className='text-5xl h-16'>Register</h1>
                    <div className='h-14'>
                        <p>See your progress and track your goals!</p>
                    </div>
                    <form onSubmit={registerUser} className='flex flex-col items-center'>
                        <div className='h-1/2 flex flex-col justify-center items-center w-full'>
                            <div className='flex flex-col justify-between w-full h-full'>
                                <div>
                                    <label>Name</label>
                                    <input placeholder='ex. Gloria Lee' type='text' value={userData.name} onChange={(e) => {
                                        setUserData({ ...userData, name: e.target.value })
                                    }} className='w-full h-12' />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input placeholder='Email' type='email' value={userData.email} onChange={(e) => {
                                        setUserData({ ...userData, email: e.target.value })
                                    }} className='w-full h-12' />
                                </div>
                                <div>
                                    <label>Username</label>
                                    <input placeholder='Username' type='text' value={userData.username} onChange={(e) => {
                                        setUserData({ ...userData, username: e.target.value })
                                    }} className='w-full h-12' />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input placeholder='Password' type='password' value={userData.password} onChange={(e) => {
                                        setUserData({ ...userData, password: e.target.value })
                                    }} className='w-full h-12' />
                                </div>
                                <div>
                                    <input type='submit' value="Submit" className='h-12 border border-black mt-2 w-full' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register