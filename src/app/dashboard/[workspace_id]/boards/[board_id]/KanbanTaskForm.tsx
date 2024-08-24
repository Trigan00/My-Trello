import { Dispatch, SetStateAction, useState } from 'react'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { Loader } from '@/components/UI/Loader/Loader'
import MyModal from '@/components/UI/MyModal'
import { Dayjs } from 'dayjs'
import MyDate from '@/components/dashboard-layout/MyDate'
import { useCreateTask } from '@/hooks/task-hooks/useCreateTask'
import TaskDependenceSelect from '@/components/dashboard-layout/TaskDependenceSelect'
import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'
const Description = dynamic(() => import('./task_info/Description'), {
	ssr: false
})

interface KanbanTaskFormI {
	board_id: number
	column_id: number
	isModal: boolean
	setIsModal: Dispatch<SetStateAction<boolean>>
}

export function KanbanTaskForm({
	board_id,
	column_id,
	isModal,
	setIsModal
}: KanbanTaskFormI) {
	const [dependence, setDependence] = useState<number[]>([])
	const [name, setName] = useState('')
	const [description, setDescription] = useState<OutputData | undefined>()
	const [errMsg, setErrMsg] = useState('')
	const [startTime, setStartTime] = useState<Dayjs | null>(null)
	const [endTime, setEndTime] = useState<Dayjs | null>(null)

	const { createTask, isPending } = useCreateTask(() => {
		onClose()
		setIsModal(false)
	})

	const submit = () => {
		if (!name.trim()) return setErrMsg('Не может быть пустым')
		createTask({
			name,
			description: description ? JSON.stringify(description) : null,
			column_id,
			start: startTime?.format() || null,
			end: endTime?.format() || null,
			dependencies_id: dependence,
			verified: false
		})
	}

	function onClose() {
		setErrMsg('')
		setStartTime(null)
		setEndTime(null)
		setName('')
		setDescription(undefined)
		setDependence([])
	}

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
			onClose={onClose}
			maxWidth={1000}
		>
			<Typography
				sx={{
					fontWeight: '600',
					fontSize: '18px',
					mb: 2,
					textAlign: 'center'
				}}
			>
				Добавить задачу
			</Typography>

			<Grid
				container
				columnSpacing={3}
			>
				<Grid
					item
					xs={12}
					md={8}
				>
					<Stack
						spacing={2}
						pt={'4px'}
					>
						<TextField
							value={name}
							onChange={e => setName(e.target.value)}
							error={!!errMsg}
							helperText={errMsg}
							multiline
							maxRows={3}
							size='small'
							label='Название'
							variant='outlined'
							type='text'
							fullWidth
						/>

						<Description
							description={description}
							setDescription={setDescription}
							holder='editor-new-task'
						/>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
				>
					<Stack spacing={2}>
						<MyDate
							value={startTime}
							setValue={setStartTime}
							label='Начало'
						/>
						<MyDate
							value={endTime}
							setValue={setEndTime}
							label='Конец'
						/>

						<TaskDependenceSelect
							board_id={board_id}
							dependence={dependence}
							setDependence={setDependence}
						/>
					</Stack>
				</Grid>
			</Grid>

			<Box sx={{ mt: 3, float: 'right' }}>
				{isPending ? (
					<Loader />
				) : (
					<>
						<Button
							size='small'
							style={{ marginRight: '10px' }}
							onClick={() => {
								onClose()
								setIsModal(false)
							}}
						>
							Отменить
						</Button>
						<Button
							variant='contained'
							size='small'
							color='primary'
							sx={{ color: 'white' }}
							onClick={submit}
						>
							Добавить
						</Button>
					</>
				)}
			</Box>
		</MyModal>
	)
}
