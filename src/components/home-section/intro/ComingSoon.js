import { useEffect, useState } from 'react';

const ComingSoon = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMins, setTimerMins] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval

    const startTimer = () => {
        const countdownDate = new Date('May 30, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(distance % (1000 * 60) / 1000)

            if(distance < 0){
                clearInterval(interval)
            }else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMins(mins)
                setTimerSeconds(seconds)
            }
        }, 1000)

    
    }
    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className="timer">
            <span>{timerDays}d</span>
            <span>{timerHours}h</span>
            <span>{timerMins}m</span>
            <span>{timerSeconds}s</span>
        </div>
            

    )
}

export default ComingSoon
