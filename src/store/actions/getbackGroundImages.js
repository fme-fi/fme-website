import axios from 'axios'
import { GET_BACKGROUND_IMAGES } from './actionTypes'
import { apiEndpoints } from '../../utils/apiEndpoints'
import { shuffle } from 'lodash'

export const setBgImages = bgImages => dispatch => new Promise(resolve => {
	dispatch({
		type: GET_BACKGROUND_IMAGES,
		payload: {
			bgImages,
		},
	})
	resolve()
})

export const getBgImages = () => dispatch => new Promise(resolve => {
	axios.get(apiEndpoints.getImages)
		.then(resp => {
			dispatch(setBgImages(shuffle(resp.data.photos.photo)))
			resolve(resp.data)
		})
})