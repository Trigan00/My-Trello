import { type Dispatch, type SetStateAction } from 'react'
import AddIcon from '@mui/icons-material/Add'
import type { TaskI } from '@/types/task.types'
import { Button } from '@mui/material'
import { COLORS } from '@/constants/color.constants'

export function KanbanAddTask() {
	const addTask = () => {}

	return (
		<Button
			onClick={addTask}
			variant='text'
			startIcon={<AddIcon sx={{ color: COLORS.textBlack }} />}
			sx={{
				mt: '16px',
				width: '100%',
				color: COLORS.textBlack
			}}
		>
			Добавить
		</Button>
	)
}
