import { React, useState } from 'react'
import axios from 'axios'
import UpdateGoal from './UpdateGoal'

const ToDo = ({ goal, id, updateGoals }) => {
    const deleteGoal = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`/goal/${id}`);
            updateGoals();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='flex border-amber-900 border m-2 p-2'>
                <div className='flex flex-col justify-center pr-4 pl-2'>
                    <input type='checkbox' className='rounded-full px-3' />
                </div>
                <div className='w-full flex justify-between'>
                    <div className=''>
                        <h4>{goal}</h4>
                    </div>
                    <div>
                        <div>
                            <button onClick={deleteGoal}>X</button>
                            <UpdateGoal id={ id } updateGoals={updateGoals} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ToDo