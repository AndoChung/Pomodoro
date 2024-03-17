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
            if (duration.asMilliseconds() === 0) {
                clearInterval(interval);
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className='w-2/3 mr-2 mt-2 mb-2 border flex justify-center items-center'>
            <div className="text-9xl">{display}</div>
        </div>
    )
}
export default Timer