import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MovieList } from '../components/movie/MovieList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Movie Ratings</title>
				<meta
					name='description'
					content='This is the greatest movie rating site of all time'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<MovieList />
			</Container>
		</div>
	)
}

export default Home
