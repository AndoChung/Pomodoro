import {React , useState} from 'react'
import axios from 'axios'

const UpdateGoal = ({ id, updateGoals }) => {
    const [formDisplay, setFormDisplay] = useState({display: "none"});
    const [taskMessage, setTaskMessage] = useState("")
    const addGoal = async (e) => {
        e.preventDefault()
        await axios.put(`/goal/${id}`, {task: taskMessage})
        closeForm()
        updateGoals()
        setTaskMessage("")
    }

    const openForm = () => {
        setFormDisplay({display: "block"})
    }

    const closeForm = () => {
        setFormDisplay({display: "none"})
    }

    return (
        <div>
            <div>
                <button onClick={openForm}>Update</button>
            </div>
            <div>
                <form style={formDisplay}>
                    <h4>Update Goal</h4>
                    <label>Task</label>
                    <input type='text' name='task' value={taskMessage} onChange={(e) => {
                        setTaskMessage(e.target.value)
                    }} />
                    <button onClick={addGoal}>Update</button>
                    <button onClick={closeForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateGoal