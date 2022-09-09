import { Movie } from '../../types/Movie'
import { NextApiRequest, NextApiResponse } from 'next'
import { movies } from '../../data/movies'

// Fetches movies from movie.js and returns as promise
const getMovieByTitle = async (
	req: NextApiRequest,
	res: NextApiResponse<Movie>
) => {
	const query = req.query
	const { title } = query
	const movieRecord: Movie = await new Promise((resolve, reject) => {
		let movieDetails: Movie = {
			id: 0,
			title: '',
			description: '',
			img: '',
			releaseDate: '',
			rating: 0,
		}
		for (let movie of movies) {
			if (movie.title === title) {
				movieDetails = movie
			}
		}
		if (movieDetails.id !== 0) resolve(movieDetails)
		else reject('Movie not found')
	})

	res.status(200).json(movieRecord)
}

export default getMovieByTitle
