import {
	Button,
	Grid,
	Paper,
	Rating,
	TextField,
	Typography,
} from '@mui/material'
import React, { FC, useState } from 'react'

type ReviewFormProps = { updateReviewList: any; movieId: number; id: number }

export const ReviewForm: FC<ReviewFormProps> = ({
	updateReviewList,
	movieId,
	id,
}) => {
	const [state, setState] = useState({
		name: '',
		email: '',
		review: '',
		rating: '',
		movieId: movieId,
		id: id,
	})

	const handleSubmit = () => {
		updateReviewList({
			name: state.name,
			email: state.email,
			review: state.review,
			rating: state.rating,
			movieId: state.movieId,
			id: state.id,
		})
	}

	const handleChange: React.ChangeEventHandler<
		HTMLTextAreaElement | HTMLInputElement
	> = (evt) => {
		let value = evt.target.value
		console.log(value)

		setState({
			...state,
			[evt.target.name]: value,
		})
	}
	return (
		<Paper elevation={3}>
			<Grid container>
				<Grid item xs={12}>
					<Typography
						variant='h4'
						gutterBottom
						sx={{ padding: '12px' }}
					>
						Leave a review
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ padding: '12px' }}>
					<TextField
						required
						sx={{ width: '100%' }}
						id='outlined-name'
						label='Your name'
						value={state.name}
						name='name'
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sx={{ padding: '12px' }}>
					<TextField
						sx={{ width: '100%' }}
						id='outlined-email'
						label='Email (optional)'
						name='email'
						value={state.email}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sx={{ padding: '12px' }}>
					<TextField
						sx={{ width: '100%' }}
						id='outlined-multiline-static'
						label='Review'
						multiline
						rows={4}
						name='review'
						value={state.review}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sx={{ padding: '12px' }}>
					<Rating
						name='rating'
						value={parseInt(state.rating)}
						onChange={handleChange}
					/>
				</Grid>
				<Button
					variant='contained'
					onClick={handleSubmit}
					sx={{ margin: '12px' }}
				>
					Submit
				</Button>
			</Grid>
		</Paper>
	)
}
