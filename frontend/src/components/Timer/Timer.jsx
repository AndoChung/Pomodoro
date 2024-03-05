import {React, useState, useEffect} from 'react'
import moment from "moment"


const Timer = ({ duration }) => {
    const durationNum = Number(duration)
    let diff = moment.duration(durationNum * 1000, "millisecond")
    
    const [display, setDisplay] = useState(moment(diff.asMilliseconds()).format('h:mm:ss'))

    useEffect(() => {
        setInterval(() => {
            diff = moment.duration(diff.asMilliseconds() - 1000, "millisecond")
            setDisplay(moment(diff.asMilliseconds()).format('h:mm:ss'))
        }, 1000)
        
    }, [display])
    return (
        <div>
            <div>{display}</div>
        </div>
    )
}
export default Timer