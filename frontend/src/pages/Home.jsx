import { React, useState, useEffect } from 'react'
import ToDoList from '../components/ToDoList/ToDoList'
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/user/')
      .then((response) => {
        setUsers(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
        <ToDoList />
    </div>
  )
}

export default Home;