import { React, useState, useEffect } from 'react'
import ToDoList from '../components/ToDoList/ToDoList'
import Timer from '../components/Timer/Timer'
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:3001/user/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
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