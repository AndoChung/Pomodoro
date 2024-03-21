import { React, useEffect, useState } from 'react'
import ToDo from './ToDo'
import axios from 'axios';


const ToDoList = () => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    const getGoals = async () => {
      try {
        const response = await axios.get("/goal")
        console.log(response.data)
        setGoals(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getGoals()
  }, [])

  return (
    <div className='w-1/3 overflow-y-scroll border border-gray-800 m-2'>
      <div className=''>
        {goals.map((goal,i) => (
          <ToDo goal={goal.task} />
        ))}
      </div>
    </div>
  )
}

export default ToDoList