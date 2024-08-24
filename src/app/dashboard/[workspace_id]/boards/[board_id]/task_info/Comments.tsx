import {
	Avatar,
	Box,
	CircularProgress,
	IconButton,
	TextField,
	Typography
} from '@mui/material'
import { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { COLORS } from '@/constants/color.constants'
import { CommentI } from '@/types/comments.types'
import { useComments } from '@/hooks/task-hooks/comments-hooks/useComments'
import { Loader } from '@/components/UI/Loader/Loader'
import { useCreateComment } from '@/hooks/task-hooks/comments-hooks/useCreateComment'
import dayjs from 'dayjs'

const testArr = [
	{
		id: 1,
		name: 'User #1',
		date: '9 часов назад',
		comment:
			'Lorem ipsum dolor sit amet consectetur. Sagittis ornare ullamcorper mi maecenas. Donec molestie nibh pulvinar scelerisque. Ipsum dolor ultrices eu tempor scelerisque. Ut enim felis urna dapibus et sed. Cras amet gravida eget volutpat arcu fringilla aliquet amet vel. Risus pretium phasellus egestas quam urna vestibulum cursus. Blandit nec viverra in aliquam scelerisque vitae. Et eu ut nunc facilisis nisl. Tempus posuere et sed aenean cras facilisis. Risus sit mattis pellentesque.'
	}
]

function CommentCard({ data }: { data: CommentI }) {
	return (
		<Box marginBottom={2}>
			<Box
				display='flex'
				alignItems='center'
				gap={1}
				marginBottom={1}
			>
				<Avatar
					alt={data.name}
					sx={{
						width: '30px',
						height: '30px'
					}}
				/>
				<Typography fontWeight='600'>{data.name}</Typography>
				<Typography
					variant='caption'
					color={COLORS.textGrey}
				>
					{dayjs(data.date).format('DD/MM/YYYY')}
				</Typography>
			</Box>
			<Typography variant='body2'>{data.comment}</Typography>
		</Box>
	)
}

interface CommentsI {
	task_id: number
}

export function Comments({ task_id }: CommentsI) {
	const { comments, isLoading } = useComments(task_id)
	const { createComment, isPending } = useCreateComment(task_id)
	const [comment, setComment] = useState('')

	const clickHandler = () => {
		createComment({
			comment,
			task_id,
			date: dayjs(new Date()).format()
		})
		setComment('')
	}

	return (
		<>
			<Box
				display='flex'
				alignItems='center'
				gap={1}
			>
				<TextField
					value={comment}
					onChange={e => setComment(e.target.value)}
					size='small'
					label='Комментировать'
					variant='outlined'
					type='text'
					fullWidth
					margin='none'
				/>
				{isPending ? (
					<CircularProgress />
				) : (
					<IconButton
						sx={{
							backgroundColor: COLORS.primary,
							height: '40px',
							width: '40px',
							borderRadius: '10px',
							'&:hover': {
								backgroundColor: COLORS.darkBlue
							}
						}}
						onClick={clickHandler}
					>
						<ArrowForwardIosIcon
							sx={{ color: 'white' }}
							fontSize='small'
						/>
					</IconButton>
				)}
			</Box>

			<Box>
				{isLoading ? (
					<Loader />
				) : (
					comments &&
					comments.map(data => (
						<CommentCard
							key={data.id}
							data={data}
						/>
					))
				)}
			</Box>
		</>
	)
}
