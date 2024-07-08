'use client'

import { Box, Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import { GeneralStatistics } from './GeneralStatistics'
import { MembersStatistics } from './MembersStatistics'
import { useIsAdmin } from '@/hooks/useIsAdmin'

interface StatisticsWrapperI {
	id: number
	isWorkspace: boolean
}

export function StatisticsWrapper({ id, isWorkspace }: StatisticsWrapperI) {
	const [isGeneral, setISGeneral] = useState(true)
	const isAdmin = useIsAdmin()
	return (
		<Box sx={{ p: 4 }}>
			<Box
				display='flex'
				justifyContent='center'
			>
				{isAdmin && (
					<ButtonGroup variant='outlined'>
						<Button onClick={() => setISGeneral(true)}>Основная</Button>
						<Button onClick={() => setISGeneral(false)}>Участники</Button>
					</ButtonGroup>
				)}
			</Box>
			{isGeneral && isAdmin ? (
				<GeneralStatistics
					id={id}
					isWorkspace={isWorkspace}
				/>
			) : (
				<MembersStatistics
					id={id}
					isWorkspace={isWorkspace}
				/>
			)}
		</Box>
	)
}
