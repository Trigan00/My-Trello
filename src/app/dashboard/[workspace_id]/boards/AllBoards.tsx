'use client'

import { Heading } from '@/components/UI/Heading'
import { useBoards } from '@/hooks/board-hooks/useBoards'
import { Box, Typography, styled } from '@mui/material'
import { NewBoard } from './NewBoard'
import { Loader } from '@/components/UI/Loader/Loader'
import NextLink from 'next/link'
import { useWorkspaces } from '@/hooks/workspace-hooks/useWorkspaces'
import shortenText from '@/helpers/shortenText'

interface AllBoardsI {
	workspace_id: number
}

const Item = styled(NextLink)(() => ({
	position: 'relative',
	// width: 267,
	height: 140,
	borderRadius: '15px',
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
	const { items: Workspaces } = useWorkspaces()

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: {
						xs: 'space-between',
						md: 'flex-start'
					},
					flexWrap: 'wrap',
					gap: '8px'
				}}
			>
				<Heading title={Workspaces?.find(ws => ws.id == workspace_id)?.title} />
				<NewBoard />
			</Box>
			{isLoading && <Loader />}
			{!isLoading && items && (
				<Box
					sx={{
						mt: '20px',
						display: 'flex',
						justifyContent: {
							xs: 'center',
							md: 'flex-start'
						},
						flexWrap: 'wrap',
						gap: '20px'
					}}
				>
					{items.map((board, i) => (
						<Item
							key={board.id}
							sx={{
								backgroundImage: `url(/boards/${i % 2 === 0 ? '1.jpeg' : i % 3 === 0 ? '3.jpeg' : '2.jpeg'})`,
								maxWidth: {
									xs: '100%',
									sm: '267px'
								},
								width: '100%'
							}}
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
								{shortenText(board.title, 18)}
							</Typography>
						</Item>
					))}
				</Box>
			)}
		</>
	)
}
