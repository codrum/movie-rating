import { Button, Rating } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC } from 'react'

type MovieProps = {
	img: string
	title: string
	description: string
	rating: number
	releaseDate: string
}

export const Movie: FC<MovieProps> = ({
	img,
	title,
	description,
	rating,
	releaseDate,
}) => {
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
				<Link href={`/movies/${title}`}>
					<Button size='small'>View</Button>
				</Link>
			</CardActions>
		</Card>
	)
}
