import React, { useEffect, useState } from 'react'

import styles from './EventsCalendar.module.scss'

/**
* @author zilahir
* @function EventsCalendar
**/

const EventsCalendar = () => {
    const [days, setDays] = useState([])
    const [currentDate, setCUrrentDate] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1)
    useEffect(() => {
        console.debug('rendering', true)
        const d = currentDate
        const currentYear = d.getFullYear()
        const getDaysInMonth = (month, year) => (new Array(31)).fill('').map((v,i ) => new Date(year,month - 1, i +1 )).filter(v => v.getMonth ()=== month - 1)
        console.debug(getDaysInMonth(currentMonth, currentYear))
    }, [currentDate])

    function hasEventThisDay(date) {
        return false
    }
	return(
		<div className={styles.eventsCalendarContainer}>
            EventsCalendar
        </div>
	)
}

export default EventsCalendar