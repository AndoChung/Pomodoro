import { React, useState, useEffect } from 'react'
import moment from "moment"


const Timer = () => {
    const [isCounting, setIsCounting] = useState(false)
    const [durationLength, setDurationLength] = useState(25)
    const [duration, setDuration] = useState(moment.duration(durationLength, "minutes"))
    const [display, setDisplay] = useState(moment.utc(duration.as("milliseconds")).format("mm:ss"))
    useEffect(() => {
        if (isCounting) {
            let interval = setInterval(() => {
                duration.subtract(1000, "milliseconds");
                setDisplay(moment.utc(duration.as("milliseconds")).format("mm:ss"));
                if (duration.asMilliseconds() === 0 && durationLength === 25) {
                    setIsCounting(false);
                    let newLength = 5
                    setDurationLength(newLength)
                    setDuration(moment.duration(newLength,"minutes"));
                    setDisplay(moment.utc(moment.duration(newLength, "minutes").as("milliseconds")).format("mm:ss"))
                }
                if (duration.asMilliseconds() === 0 && durationLength === 5) {
                    setIsCounting(false);
                    let newLength = 25
                    setDurationLength(newLength)
                    setDuration(moment.duration(newLength,"minutes"));
                    setDisplay(moment.utc(moment.duration(newLength, "minutes").as("milliseconds")).format("mm:ss"))
                }
            }, 1)
            return () => {
                clearInterval(interval);
            }
        }
    }, [isCounting, durationLength, duration, display])


    const startTimer = () => {
        setIsCounting(true)
    }

    return (
        <div className='w-2/3 mr-2 mt-2 mb-2 border flex justify-center items-center'>
            <div className="text-9xl">{display}</div>
            <button onClick={startTimer}>start</button>
        </div>
    )
}
export default Timer
