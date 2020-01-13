import axios from 'axios'
import { apiEndpoints } from '../../utils/apiEndpoints'
import { SET_ISSUES } from './actionTypes'

export const createGithubIssue = issueObject => new Promise(resolve => {
	axios.defaults.headers.common.authorization = `token ${process.env.GATSBY_GITHUB_TOKEN}`
	axios.post(`${apiEndpoints.creteGhIssue}`, JSON.stringify({
        title: issueObject.title,
        body: issueObject.body,
        labels: [':bug: reported-issue'],
        assignees: ['zilahir']
    }))
		.then(resp => {
			resolve(resp.data)
		})
})

export const setAllIssue = issues => dispatch => new Promise(resolve => {
	dispatch({
		type: SET_ISSUES,
		payload: {
			issues,
		},
	})
	resolve(issues)
})

export const getAllIssues = user => dispatch => new Promise(resolve => {
	axios.defaults.headers.common.authorization = `token ${process.env.GATSBY_GITHUB_TOKEN}`
	axios.get(`${apiEndpoints.getAllGhIssues}`, {
        params: {
            creator: 'zr-robot',
        }
    })
		.then(resp => {
            dispatch(setAllIssue(resp.data))
            console.debug('all issues', resp.data)
			resolve(resp.data)
		})
})
