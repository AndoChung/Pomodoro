import { React, useState, useEffect } from 'react'
import ToDoList from '../components/ToDoList/ToDoList'
import Timer from '../components/Timer/Timer'

const Home = () => {
  return (
    <div className='h-screen'>
      <div className='flex h-5/6'>
        <ToDoList />
        <Timer amountOfTime="25" />
      </div>
    </div>
  )
}

export default Home;