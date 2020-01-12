import React from 'react'

import styles from './IssueTicket.module.scss'

/**
* @author
* @function IssueTicket
**/

const renderLabel = label => {
	let l
	if (label.includes(':bug:')) {
		l = '🐛 reported issue'
	} else {
		l = label
	}
	return l
}
const issueBody = isseBody => {
	let body
	body = isseBody.split('%ISSUEDBY%:')
	console.debug('body', body)
	return body[0]
}

const IssueTicket = props => {
	const { title, labels, number, dateOpened, bodyText } = props
	return(
		<div className={styles.issueContainer}>
			<div className={styles.innerContainer}>
				<p>
					{title}
				</p>
				<ul className={styles.labels}>
					{
						labels.map(currLabel => (
							<li key={currLabel.id}>
								{renderLabel(currLabel.name)}
							</li>
						))
					}
				</ul>
			</div>
			<div className={styles.body}>
				<p>
					{issueBody(bodyText)}
				</p>
			</div>
			<div className={styles.footer}>
					<p>
						<small>
						{
							`#${number}`
						}
						</small>
						<small>
						{
							dateOpened
						}	
						</small>
					</p>
				</div>
		</div>
	 )

 }

export default IssueTicket