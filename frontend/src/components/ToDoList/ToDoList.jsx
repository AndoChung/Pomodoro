import React from 'react'
import ToDo from './ToDo'


const ToDoList = () => {
  return (
    <div className='w-1/3 overflow-y-scroll'>
      <div className=''>
        <ToDo goal="Finish LeetCode"/>
        <ToDo goal="Kiss Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Kiss Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Kiss Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Kiss Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Kiss Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Kiss Gloria" />
        <ToDo goal="Kiss Gloria and watch her do awesome things from the side and more loveydovey stuff" />
        <ToDo goal="Kiss Gloria" />
        <ToDo goal="Kiss Gloria" />
      </div>
    </div>
  )
}

export default ToDoList