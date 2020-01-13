import React from 'react'

import styles from './EventsCalendar.module.scss'

/**
* @author zilahir
* @function CalendarDay
**/

const CalendarDay = props => {
	const { day, month, year, event } = props
	return (
		<div className={styles.dayContainer}>
			
		</div>
	)
}

export default CalendarDay