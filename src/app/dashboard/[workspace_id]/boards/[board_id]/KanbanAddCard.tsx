import { type Dispatch, type SetStateAction } from 'react'
import AddIcon from '@mui/icons-material/Add'
import type { TaskI } from '@/types/task.types'
import { Button } from '@mui/material'
import { COLORS } from '@/constants/color.constants'

interface IKanbanAddCardInput {
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function KanbanAddCard({ setItems }: IKanbanAddCardInput) {
	const addCard = () => {
		// setItems(prev => {
		// 	if (!prev) return
		// 	return [
		// 		...prev,
		// 		{
		// 			id: 0,
		// 			name: ''
		// 		}
		// 	]
		// })
	}

	return (
		<Button
			onClick={addCard}
			variant='text'
			startIcon={<AddIcon sx={{ color: COLORS.textBlack }} />}
			sx={{
				mt: '16px',
				width: '100%',
				textTransform: 'inherit',
				color: COLORS.textBlack
			}}
		>
			Добавить
		</Button>
	)
}
