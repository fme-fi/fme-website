import React, { useEffect, useState } from 'react'

import styles from './EventsCalendar.module.scss'

/**
* @author zilahir
* @function EventsCalendar
**/

const EventsCalendar = () => {
    const [days, setDays] = useState([])
    useEffect(() => {
        console.debug('rendering', true)
    }, [])

	return(
		<div className={styles.eventsCalendarContainer}>
            EventsCalendar
        </div>
	)
}

export default EventsCalendar