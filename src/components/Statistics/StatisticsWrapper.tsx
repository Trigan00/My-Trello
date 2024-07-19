'use client'

import {
	Box,
	Button,
	ButtonGroup,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material'
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

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		variant: boolean
	) => {
		setISGeneral(variant)
	}

	const isAdmin = useIsAdmin()
	return (
		<Box sx={{ p: 4 }}>
			<Box
				display='flex'
				justifyContent='center'
			>
				{isAdmin && (
					<ToggleButtonGroup
						color='primary'
						value={isGeneral}
						exclusive
						onChange={handleChange}
						sx={{ textTransform: 'lowercase' }}
					>
						<ToggleButton
							value={true}
							sx={{ textTransform: 'initial' }}
						>
							Основная
						</ToggleButton>
						<ToggleButton
							value={false}
							sx={{ textTransform: 'initial' }}
						>
							Участники
						</ToggleButton>
					</ToggleButtonGroup>
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
