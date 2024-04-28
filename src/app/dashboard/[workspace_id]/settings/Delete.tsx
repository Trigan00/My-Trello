'use client'

import { MyCard } from '@/components/UI/MyCard'
import { COLORS } from '@/constants/color.constants'
import { Box, Button, Typography } from '@mui/material'
import DeleteWorkspaceModal from './DeleteWorkspaceModal'
import { useState } from 'react'

interface DeleteI {
	workspace_id: number
}

export function Delete({ workspace_id }: DeleteI) {
	const [isDelete, setIsDelete] = useState(false)

	return (
		<MyCard
			variant='shadowed'
			sx={{
				mt: 4,
				p: 3,
				display: { xs: 'block', md: 'flex' },
				justifyContent: 'space-between',
				alignItems: 'center',
				boxShadow: '0px 0px 10px 0px rgba(255, 0, 0, 0.15)'
			}}
		>
			<Box>
				<Typography
					fontSize={18}
					fontWeight={500}
				>
					Удалить рабочее пространство
				</Typography>
				<Typography
					color={COLORS.textGrey}
					fontSize={14}
				>
					Как только вы удалите рабочее пространство, пути назад не будет.
					Пожалуйста, будьте уверены.
				</Typography>
			</Box>
			<Button
				variant='outlined'
				color='error'
				size='small'
				sx={{
					mt: { xs: 2, md: 0 }
				}}
				onClick={() => setIsDelete(true)}
			>
				Удалить
			</Button>

			<DeleteWorkspaceModal
				isModal={isDelete}
				setIsModal={setIsDelete}
				id={workspace_id}
			/>
		</MyCard>
	)
}
