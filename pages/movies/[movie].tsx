import { Container, Rating } from '@mui/material'
import { Box } from '@mui/system'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { ReviewForm } from '../../components/review/ReviewForm'
import { ReviewList } from '../../components/review/ReviewList'
import styles from '../../styles/Home.module.css'
import { Movie } from '../../types/Movie'
import { Review } from '../../types/Review'
import { getJSONFromResponse } from '../../util/getJSONFromResponse'

type MoviePageProps = { movie: Movie; reviews: Review[] }

// The specific movie page
const MoviePage: NextPage<MoviePageProps> = ({ movie, reviews }) => {
	const [reviewList, setReviewList] = useState(reviews)

	const handleUpdateReviewList = (review: Review) => {
		setReviewList((prevState) => {
			return [...prevState, review]
		})
	}
	return (
		<div className={styles.container}>
			<Container>
				<h1>{movie.title}</h1>
				<p>{movie.releaseDate}</p>
				<p>{movie.description}</p>
				<Box>
					<Image
						src={movie.img}
						height='100%'
						width='100%'
						alt='moviepic'
					/>
				</Box>
				<Rating value={movie.rating} readOnly />
				<ReviewList reviews={reviewList} />
				<ReviewForm
					updateReviewList={(review: Review) =>
						handleUpdateReviewList(review)
					}
					movieId={movie.id}
					id={reviewList.length + 1}
				/>
			</Container>
		</div>
	)
}

export default MoviePage

type MoviePageContextParams = { movie: string }

export const getServerSideProps: GetServerSideProps<
	MoviePageProps,
	MoviePageContextParams
> = async (context) => {
	const title = context.params?.movie
	const movieRequest = new Request(
		`http://localhost:3000/api/getMovieByTitle?title=${title}`
	)
	const movieResponse = await fetch(movieRequest)
	const movie = await getJSONFromResponse<Movie>(movieResponse)

	const reviewRequest = new Request(
		`http://localhost:3000/api/getReviewsForMovie?id=${movie.id}`
	)
	const reviewResponse = await fetch(reviewRequest)
	const reviews = await getJSONFromResponse<Review[]>(reviewResponse)

	return {
		props: { movie: movie, reviews: reviews },
	}
}
