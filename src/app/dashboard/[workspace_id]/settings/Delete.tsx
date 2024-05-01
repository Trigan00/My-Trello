'use client'

import { MyCard } from '@/components/UI/MyCard'
import { COLORS } from '@/constants/color.constants'
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useDeleteWorkspace } from '@/hooks/workspace-hooks/useDeleteWorkspace'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'

interface DeleteI {
	workspace_id: number
}

export function Delete({ workspace_id }: DeleteI) {
	const [isDelete, setIsDelete] = useState(false)
	const { deleteWorkspace, isDeletePending } = useDeleteWorkspace()

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

			<DeleteModal
				isModal={isDelete}
				setIsModal={setIsDelete}
				deleteFunction={() => deleteWorkspace(workspace_id)}
				isLoading={isDeletePending}
				title='Удалить рабочее пространство?'
				confirmation='Удалить рабочее пространство.'
			/>
		</MyCard>
	)
}
