import { FC } from 'react'
import { Review as ReviewType } from '../../types/Review'
import { Review } from './Review'

type ReviewListProps = { reviews: ReviewType[] }

export const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
	return (
		<>
			{reviews.map((review) => {
				return (
					<Review
						key={review.id + review.name + review.review} //horrible way of handling this but solves the id updating bug
						review={review}
					/>
				)
			})}
		</>
	)
}
