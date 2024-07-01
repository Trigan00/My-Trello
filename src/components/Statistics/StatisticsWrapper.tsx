'use client'

// import 'dayjs/locale/ru'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useEffect, useState } from 'react'
import { GeneralStatistics } from './GeneralStatistics'
import { MembersStatistics } from './MembersStatistics'

interface StatisticsWrapperI {
	id: number
	isWorkspace: boolean
}

export function StatisticsWrapper({ id, isWorkspace }: StatisticsWrapperI) {
	const [isGeneral, setISGeneral] = useState(true)
	return (
		<Box sx={{ p: 4 }}>
			<Box
				display='flex'
				justifyContent='center'
			>
				<ButtonGroup variant='outlined'>
					<Button onClick={() => setISGeneral(true)}>Основная</Button>
					<Button onClick={() => setISGeneral(false)}>Участники</Button>
				</ButtonGroup>
			</Box>
			{isGeneral ? (
				<GeneralStatistics
					id={id}
					isWorkspace={isWorkspace}
				/>
			) : (
				<MembersStatistics />
			)}
		</Box>
	)
}
