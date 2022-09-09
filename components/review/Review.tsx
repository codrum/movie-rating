import { Paper, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { Review } from '../../types/Review'

type ReviewProps = { review: Review }

export const Review: FC<ReviewProps> = ({ review }) => {
	return (
		<Paper
			key={review.id + review.name}
			sx={{ marginTop: '12px', marginBottom: '12px' }}
		>
			<Typography variant='h6'>{review.name}</Typography>
			<Typography variant='body1'>{review.review}</Typography>
			<Box>
				<Rating
					name='read-only'
					value={parseInt(review.rating)}
					readOnly
				/>
			</Box>
		</Paper>
	)
}
