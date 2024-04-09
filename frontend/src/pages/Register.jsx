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

    const navigateLogin = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <div className='h-full flex w-screen lg-height:h-screen'>
            <div className='hidden md:block w-1/2'>
                <div className='h-full flex overflow-clip'>
                    <img src='/images/RegisterIMG.jpg' className='self-center overflow-clip' />
                </div>
            </div>
            <div className='w-full flex flex-col justify-center bg-brand-tan md:w-1/2 h-full'>
                <div className='flex justify-center mx-16 flex-col lg:mx-32'>
                    <h1 className='text-5xl h-16 pt-8 mb-10'>Register</h1>
                    <div className='h-14 mb-1'>
                        <p>See your progress and track your goals!</p>
                    </div>
                    <form onSubmit={registerUser} className='flex flex-col items-center'>
                        <div className='flex flex-col justify-between w-full h-full'>
                            <div>
                                <label>Name<span className='text-brand-scarlet'>*</span></label>
                                <input placeholder='ex. Gloria Lee' type='text' value={userData.name} onChange={(e) => {
                                    setUserData({ ...userData, name: e.target.value })
                                }} className='w-full h-12 bg-brand-pale mb-2' />
                            </div>
                            <div>
                                <label>Email<span className='text-brand-scarlet'>*</span></label>
                                <input placeholder='Email' type='email' value={userData.email} onChange={(e) => {
                                    setUserData({ ...userData, email: e.target.value })
                                }} className='w-full h-12 bg-brand-pale mb-2' />
                            </div>
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
                                <input type='submit' value="Submit" className='h-12 border border-black my-10 w-full bg-brand-scarlet cursor-pointer active:bg-button-red' />
                            </div>
                        </div>
                    </form>
                    <div className='my-4 pb-10'>
                        <p>Already have an account? <span><button className='text-brand-scarlet active:text-button-red' onClick={navigateLogin}>Login</button></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register