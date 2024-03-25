import { React, useState, useEffect } from 'react'
import ToDoList from '../components/HomeComponents/ToDoList/ToDoList'
import Timer from '../components/HomeComponents/Timer/Timer'
import Logout from '../components/LogoutComponents/Logout'

const Home = () => {
  return (
    <div className='h-screen'>
      <div className='flex h-5/6'>
        <ToDoList />
        <Timer />
      </div>
      <div>
        <Logout />
      </div>
    </div>
  )
}

export default Home;