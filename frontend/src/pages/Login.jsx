import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
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

    const navigateRegister = (e) => {
        e.preventDefault();
        navigate("/register")
    }

    return (
        <div className='h-screen flex w-screen'>
            <div className='w-1/2 flex flex-col justify-center'>
                <div className='flex justify-center m-32 flex-col h-1/2'>
                    <h1 className='text-5xl h-16'>Login</h1>
                    <div className='h-14'>
                        <p>See your progress and track your goals!</p>
                    </div>
                    <form onSubmit={loginUser} className='flex flex-col items-center h-64 '>
                        <div className='flex flex-col justify-between w-full h-full'>
                            <div>
                                <label>Username*</label>
                                <input placeholder='username' type='text' value={userData.username} onChange={(e) => {
                                    setUserData({ ...userData, username: e.target.value })
                                }} className='w-full h-12' />
                            </div>
                            <div>
                                <label>Password*</label>
                                <input placeholder='password' type='password' value={userData.password} onChange={(e) => {
                                    setUserData({ ...userData, password: e.target.value })
                                }} className='w-full h-12' />
                            </div>
                            <div>
                                <input type='submit' value="Login" className=' h-12 border border-black mt-2 w-full' />
                            </div>
                        </div>
                    </form>
                    <div className='mt-4'>
                        <p>First Time Here? <span><button onClick={navigateRegister}>Register Here</button></span></p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 bg-red-900 h-full'>
                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default Login