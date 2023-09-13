import { useState, useEffect, useRef } from "react";

function Content() {
    const [count, setCount] = useState(60)
    const timeId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        const interval = 1000
        timeId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, interval);
    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    console.log(count, prevCount.current);

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
    )
}

export default Content;