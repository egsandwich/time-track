import React, { useState } from 'react'//probably useContext here
import Moment from 'react-moment'

function Stopwatch() {
    const [start, setStart] = useState(false)
    const [stop, setStop] = useState(false)
    const [time, setTime] = useState();

    //press start then timer starts, time is always shown, press stop timer stops

    function atStart() {
        //setstart on time
        console.log("start")
    }
    function atStop() {
        //setstop on time
        console.log("stop")
    }

    return (
        <div>
            Stopwatch
            <button onClick={() => atStart()}>Start</button>
            <button onClick={() => atStop()}>Stop</button>
            {time}
        </div>
    )
}

export default Stopwatch
