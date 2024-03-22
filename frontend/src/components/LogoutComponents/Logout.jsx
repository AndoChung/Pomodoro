import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();
    const logoutUser = async (e) => {
        e.preventDefault();
            try {
                await axios.get("/user/logout");
                navigate("/login");
            } catch (error) {
                console.log(error)
            }
      }
    

  return (
    <div>
        <button onClick={logoutUser} >
            Logout
        </button>
    </div>
  )
}

export default Logout