'use client'

import { Heading } from '@/components/UI/Heading'
import { useBoards } from '@/hooks/board-hooks/useBoards'
import { Box, Typography, styled } from '@mui/material'
import { NewBoard } from './NewBoard'
import { Loader } from '@/components/UI/Loader/Loader'
import NextLink from 'next/link'

interface AllBoardsI {
	workspace_id: number
}

const Item = styled(NextLink)(() => ({
	position: 'relative',
	width: 267,
	height: 140,
	borderRadius: '15px',
	backgroundImage: 'url(/board.png)',
	backgroundSize: 'cover',
	cursor: 'pointer',
	'&:before': {
		content: '""',
		position: 'absolute',
		borderRadius: '15px',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background:
			'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'
	},
	'&:hover:before': {
		background:
			'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
	}
}))

export function AllBoards({ workspace_id }: AllBoardsI) {
	const { items, isLoading } = useBoards(workspace_id)

	return (
		<>
			<Box sx={{ display: 'flex', gap: '8px' }}>
				<Heading title='[Workspace name]' />
				<NewBoard />
			</Box>
			{isLoading && <Loader />}
			{!isLoading && items && (
				<Box
					sx={{ mt: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}
				>
					{items.map(board => (
						<Item
							key={board.id}
							href={'/dashboard/' + workspace_id + '/boards/' + board.id}
						>
							<Typography
								sx={{
									position: 'absolute',
									bottom: 15,
									left: 15,
									fontSize: '15px',
									fontWeight: '500',
									color: 'white'
								}}
							>
								{board.title}
							</Typography>
						</Item>
					))}
				</Box>
			)}
		</>
	)
}
