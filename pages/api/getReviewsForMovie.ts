import { NextApiRequest, NextApiResponse } from 'next'
import { reviews } from '../../data/reviews'
import { Review } from '../../types/Review'

// gets the reviews of the movie id
const getReviewsForMovie = async (
	req: NextApiRequest,
	res: NextApiResponse<Review[]>
) => {
	const query = req.query
	const { id } = query
	const idAsNumber: number = parseInt(id as string)

	const reviewRecord: Review[] = await new Promise((resolve, reject) => {
		let reviewDetails: Review[] = []
		for (let review of reviews) {
			if (review.movieId === idAsNumber) {
				reviewDetails.push(review)
			}
		}
		resolve(reviewDetails)
	})

	res.status(200).json(reviewRecord)
}

export default getReviewsForMovie
