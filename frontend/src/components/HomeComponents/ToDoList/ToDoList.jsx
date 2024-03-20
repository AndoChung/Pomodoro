import { React, useEffect, useState } from 'react'
import ToDo from './ToDo'
import axios from 'axios';


const ToDoList = () => {
  const [goals, setGoals] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/user')
  //     .then((res) => {
  //       setGoals(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, [])


  return (
    <div className='w-1/3 overflow-y-scroll border border-gray-800 m-2'>
      <div className=''>
        <ToDo goal="Finish LeetCode"/>
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Have fun with glo and then force her to go rock climbing with me until i show off a move and break a bone so that we use my high deductible kaiser insurance and fall into mad debt so that i have to pick up another jobs and i cant get a software job because of it" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria" />
        <ToDo goal="Hug Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Hug Gloria" />
        <ToDo goal="Hug Gloria" />
      </div>
    </div>
  )
}

export default ToDoList