import {React, useState, useEffect} from 'react'
import moment from "moment"


const Timer = ({ amountOfTime }) => {
    const durationNum = Number(amountOfTime)
    let duration = moment.duration(durationNum, "minutes")
    const [display, setDisplay] = useState(moment.utc(duration.as("milliseconds")).format("HH:mm:ss"))

    useEffect(() => {
        let interval = setInterval(() => {
            duration.subtract(1000, "milliseconds");
            setDisplay(moment.utc(duration.as("milliseconds")).format("HH:mm:ss"));
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <div>{display}</div>
        </div>
    )
}
export default Timer