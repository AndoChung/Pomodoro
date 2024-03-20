import { React, useEffect, useState } from 'react'
import ToDo from './ToDo'
import AddGoal from './AddGoal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ToDoList = () => {
	const navigate = useNavigate();
	const [goals, setGoals] = useState([]);

	const getGoals = async () => {
		try {
			const response = await axios.get("/goal")
			setGoals(response.data)
		} catch (error) {
			navigate("/login")
			console.log(error)
		}
	}

	useEffect(() => {
		getGoals()
	}, [])



	return (
		<div className='w-1/3 overflow-y-scroll border border-gray-800 m-2'>
			<div>
				<AddGoal updateGoals={getGoals} />
			</div>
			<div className=''>
				{goals.map((goal, i) => (
					<ToDo goal={goal.task} key={i} />
				))}
			</div>
		</div>
	)
}

export default ToDoList