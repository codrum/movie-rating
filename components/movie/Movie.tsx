import React, { FC, useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button, Rating } from '@mui/material'
import Link from 'next/link'

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

type MovieProps = {
	img: string
	title: string
	description: string
	rating: number
	releaseDate: string
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

export const Movie: FC<MovieProps> = ({
	img,
	title,
	description,
	rating,
	releaseDate,
}) => {
	const [expanded, setExpanded] = useState({})

	// const [ratingValue, setRatingValue] = useState(rating)

	return (
		<Card sx={{ height: '100%', margin: '24px' }}>
			<CardHeader
				title={
					<Typography noWrap gutterBottom variant='h6' component='h4'>
						{title}
					</Typography>
				}
				subheader={releaseDate}
			/>
			<Link href={`/movies/${title}`}>
				<CardMedia
					component='img'
					height='194'
					image={img}
					alt='movie poster'
				/>
			</Link>
			<CardContent>
				<Typography
					variant='body2'
					color='text.secondary'
					sx={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: '3',
						WebkitBoxOrient: 'vertical',
					}}
				>
					{description}
				</Typography>
			</CardContent>
			<CardActions
				disableSpacing
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Rating value={rating} readOnly />
				<Link
					href={{
						pathname: `movies/${title}`,
						query: {
							title: title,
							description: description,
							img: img,
							rating: rating,
							releaseDate: releaseDate,
						},
					}}
				>
					<Button size='small'>View</Button>
				</Link>
			</CardActions>
		</Card>
	)
}
