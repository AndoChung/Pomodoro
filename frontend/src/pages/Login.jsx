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
        <div className='h-full flex w-screen md-height:h-screen'>
            <div className='w-full flex flex-col justify-center bg-brand-tan md:w-1/2 h-full'>
                <div className='flex justify-center mx-16 flex-col lg:mx-32'>
                    <h1 className='text-5xl h-16 pt-8 mb-10'>Login</h1>
                    <div className='h-14 mb-1'>
                        <p>See your progress and track your goals!</p>
                    </div>
                    <form onSubmit={loginUser} className='flex flex-col items-center'>
                        <div className='flex flex-col justify-between w-full h-full'>
                            <div>
                                <label>Username<span className='text-brand-scarlet'>*</span></label>
                                <input placeholder='Username' type='text' value={userData.username} onChange={(e) => {
                                    setUserData({ ...userData, username: e.target.value })
                                }} className='w-full h-12 bg-brand-pale mb-2' />
                            </div>
                            <div>
                                <label>Password<span className='text-brand-scarlet'>*</span></label>
                                <input placeholder='Password' type='password' value={userData.password} onChange={(e) => {
                                    setUserData({ ...userData, password: e.target.value })
                                }} className='w-full h-12 bg-brand-pale mb-2' />
                            </div>
                            <div>
                                <input type='submit' value="Login" className='h-12 border border-black my-10 w-full bg-brand-scarlet cursor-pointer active:bg-button-red' />
                            </div>
                        </div>
                    </form>
                    <div className='my-4 pb-10'>
                        <p>First Time Here? <span><button className='text-brand-scarlet active:text-button-red' onClick={navigateRegister}>Register Here</button></span></p>
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-1/2'>
                <div className='h-full flex overflow-clip'>
                    <img src='/images/LoginIMG.jpg' className='self-center overflow-clip'/>
                </div>
            </div>
        </div>
    )
}

export default Login