'use client'

import {
	Box,
	Button,
	Card,
	Checkbox,
	FormControlLabel,
	Typography
} from '@mui/material'
import { useState } from 'react'
import { Loader } from '@/components/UI/Loader/Loader'
import { useDeleteBoard } from '@/hooks/board-hooks/useDeleteBoard'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useRouter } from 'next/navigation'

interface DeleteI {
	board_id: number
	name: string
	workspace_id: number
}

export function Delete({ board_id, name, workspace_id }: DeleteI) {
	const { push } = useRouter()
	const [isDelete, setIsDelete] = useState(false)
	const [deleteCheckbox, setDeleteCheckbox] = useState(false)
	const { deleteBoard, isDeletePending } = useDeleteBoard(() =>
		push(DASHBOARD_PAGES.DASHBOARD + '/' + workspace_id + '/boards')
	)

	const onDelete = () => deleteBoard(board_id)

	return (
		<Box sx={{ mt: 1 }}>
			{!isDelete ? (
				<Button
					variant='outlined'
					color='error'
					size='small'
					fullWidth
					sx={{
						mt: { xs: 2, md: 0 }
					}}
					onClick={() => setIsDelete(true)}
				>
					Удалить
				</Button>
			) : (
				<Card
					variant='outlined'
					sx={{ p: 2, borderRadius: '15px' }}
				>
					<Typography
						id='transition-modal-description'
						sx={{ mt: 2, fontWeight: '500' }}
					>
						{`Доска «${name}» будет удалена`}
					</Typography>

					<Typography sx={{ mt: 1 }}>
						<FormControlLabel
							control={
								<Checkbox
									checked={deleteCheckbox}
									onChange={() => setDeleteCheckbox(prev => !prev)}
									inputProps={{ 'aria-label': 'controlled' }}
									size='small'
								/>
							}
							label={<span style={{ fontSize: '15px' }}>Удалить доску</span>}
						/>
					</Typography>
					<Box sx={{ mt: 1, float: 'right' }}>
						{isDeletePending ? (
							<Loader />
						) : (
							<>
								<Button
									size='small'
									style={{ marginRight: '10px' }}
									onClick={() => {
										setDeleteCheckbox(false)
										setIsDelete(false)
									}}
								>
									Отменить
								</Button>
								<Button
									variant='contained'
									size='small'
									color='error'
									disabled={!deleteCheckbox}
									onClick={() => onDelete()}
								>
									Удалить
								</Button>
							</>
						)}
					</Box>
				</Card>
			)}
		</Box>
	)
}
