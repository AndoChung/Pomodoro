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
                <div className='w-full flex justify-between'>
                    <div className=''>
                        <h4>{goal}</h4>
                    </div>
                    <div>
                        <div className='flex'>
                        <UpdateGoal id={ id } updateGoals={updateGoals} />
                            <button onClick={deleteGoal}>X</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ToDo