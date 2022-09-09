import { Grid } from '@mui/material'
import React from 'react'
import { movies } from '../../data/movies'
import { Movie } from './Movie'

export const MovieList = () => {
	return (
		<Grid container justifyContent={'center'}>
			<Grid item xs={12}>
				<h1>Movies</h1>
			</Grid>
			{movies.map((movie) => {
				return (
					<Grid
						item
						xs={12}
						md={6}
						xl={4}
						key={'Movie' + movie.id}
						sx={{ paddingBottom: '32px' }}
					>
						<Movie
							title={movie.title}
							description={movie.description}
							img={movie.img}
							rating={movie.rating}
							releaseDate={movie.releaseDate}
						/>
					</Grid>
				)
			})}
		</Grid>
	)
}
