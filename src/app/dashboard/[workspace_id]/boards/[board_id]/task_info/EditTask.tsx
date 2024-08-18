import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
	Box,
	Button,
	Grid,
	Skeleton,
	Stack,
	TextField,
	Typography
} from '@mui/material'
import { Loader } from '@/components/UI/Loader/Loader'
import MyModal from '@/components/UI/MyModal'
import MembersSelect from '@/components/dashboard-layout/MembersSelect'
import { BoardMemberI } from '@/types/board.types'
import dayjs, { Dayjs } from 'dayjs'
import MyDate from '@/components/dashboard-layout/MyDate'
import { useBoardMembers } from '@/hooks/board-hooks/useBoardMembers'
import { useTaskMembers } from '@/hooks/task-hooks/members/useTaskMembers'
import { useOneTask } from '@/hooks/task-hooks/useOneTask'
import { useUpdateTask } from '@/hooks/task-hooks/useUpdateTask'
import { useAddMemberToTask } from '@/hooks/task-hooks/members/useAddMemberToTask'
import { useDeleteTaskMember } from '@/hooks/task-hooks/members/useDeleteTaskMember'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import { toast } from 'sonner'
import { Comments } from './Comments'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'
import { useDeleteTask } from '@/hooks/task-hooks/useDeleteTask'
import { COLORS } from '@/constants/color.constants'
import { useGetColumns } from '@/hooks/columns-hooks/useGetColumns'
import { useIsAdmin } from '@/hooks/useIsAdmin'
import TaskDependenceSelect from '@/components/dashboard-layout/TaskDependenceSelect'
import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'
import { useTaskWorkers } from '@/hooks/task-hooks/workers/useTaskWorkers'
import { useAddWorkerToTask } from '@/hooks/task-hooks/workers/useAddWorkerToTask'
import { useDeleteTaskWorker } from '@/hooks/task-hooks/workers/useDeleteTaskWorker'
const Description = dynamic(() => import('./Description'), {
	ssr: false
})

interface EditTaskI {
	task_id: number
	board_id: number
	isModal: boolean
	setIsModal: Dispatch<SetStateAction<boolean>>
}

export function EditTask({
	task_id,
	board_id,
	isModal,
	setIsModal
}: EditTaskI) {
	const { task, isLoading } = useOneTask(task_id)
	const { members: board_members } = useBoardMembers(board_id)
	const { members } = useTaskMembers(task_id)
	const { workers } = useTaskWorkers(task_id)
	const { columns } = useGetColumns(board_id)
	const isAdmin = useIsAdmin()

	const [name, setName] = useState('')
	const [description, setDescription] = useState<OutputData | undefined>()
	const [errMsg, setErrMsg] = useState('')
	const [startTime, setStartTime] = useState<Dayjs | null>(null)
	const [endTime, setEndTime] = useState<Dayjs | null>(null)
	const [isVerified, setIsVerified] = useState(false)
	const [dependence, setDependence] = useState<number[]>([])
	const [deleteModal, setDeleteModal] = useState(false)

	const { updateTask, isPending } = useUpdateTask(undefined, () =>
		toast.success('Задача успешно изменена')
	)
	const { addMember } = useAddMemberToTask(task_id)
	const { deleteTaskMember } = useDeleteTaskMember(task_id)
	const { addWorker } = useAddWorkerToTask(task_id)
	const { deleteTaskWorker } = useDeleteTaskWorker(task_id)
	const { deleteTask, isDeletePending } = useDeleteTask(() => setIsModal(false))

	useEffect(() => {
		if (task) {
			setName(task.name || '')
			setDescription(task.description ? JSON.parse(task.description) : {})
			setStartTime(task.start ? dayjs(task.start) : null)
			setEndTime(task.end ? dayjs(task.end) : null)
			setIsVerified(task.verified)
			setDependence(task.dependencies_id)
		}
	}, [task])

	const submit = () => {
		if (!name.trim()) return setErrMsg('Не может быть пустым')
		updateTask({
			id: task_id,
			data: {
				name,
				description: JSON.stringify(description),
				start: startTime?.format() || null,
				end: endTime?.format() || null,
				dependencies_id: dependence
			}
		})
	}

	const addUserHandler = (member: BoardMemberI | undefined) =>
		member && addMember({ task_id, user_id: member.id })

	const removeUserHandler = (member: BoardMemberI | undefined) =>
		member && deleteTaskMember({ user_id: member.id })

	const addWorkerHandler = (worker: BoardMemberI | undefined) =>
		worker && addWorker({ task_id, user_id: worker.id })

	const removeWorkerHandler = (worker: BoardMemberI | undefined) =>
		worker && deleteTaskWorker({ user_id: worker.id })

	const changeTaskStatus = () => {
		if (!columns) return
		const columnId = columns.find(
			col => col.name === (isVerified ? 'В работе' : 'Завершенные')
		)?.id
		updateTask({
			id: task_id,
			data: {
				verified: !isVerified,
				column_id: columnId
			}
		})
		setIsVerified(prev => !prev)
	}

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
			maxWidth={1000}
		>
			{!isLoading ? (
				<>
					<Typography
						sx={{
							fontWeight: '600',
							fontSize: '18px',
							mb: 2,
							textAlign: 'center'
						}}
					>
						Редактировать задачу
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
								{/* <TextField
						value={description}
						onChange={e => setDescription(e.target.value)}
						size='small'
						label='Описание'
						variant='outlined'
						type='text'
						multiline
						rows={4}
						fullWidth
						sx={{ mt: 2 }}
					/> */}

								{description && (
									<Description
										description={description}
										setDescription={setDescription}
										holder='editor-task'
									/>
								)}
								<Comments task_id={task_id} />
							</Stack>
						</Grid>
						<Grid
							item
							xs={12}
							md={4}
						>
							<Stack spacing={2}>
								{isAdmin && (
									<Button
										variant={isVerified ? 'contained' : 'outlined'}
										fullWidth
										sx={{ color: isVerified ? 'white' : COLORS.primary }}
										onClick={changeTaskStatus}
										endIcon={<CheckIcon />}
									>
										{isVerified ? 'Проверено' : 'Проверить'}
									</Button>
								)}
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

								{board_members && members ? (
									<MembersSelect
										all_users={board_members}
										addFunc={addUserHandler}
										removeFunc={removeUserHandler}
										members={members || []}
										label='Участники'
									/>
								) : (
									<Skeleton
										variant='rounded'
										sx={{
											height: '40px',
											width: '100%',
											borderRadius: '15px'
										}}
									/>
								)}
								{board_members && workers ? (
									<MembersSelect
										all_users={board_members}
										addFunc={addWorkerHandler}
										removeFunc={removeWorkerHandler}
										members={workers || []}
										label='Исполнители'
									/>
								) : (
									<Skeleton
										variant='rounded'
										sx={{
											height: '40px',
											width: '100%',
											borderRadius: '15px'
										}}
									/>
								)}
								<TaskDependenceSelect
									board_id={board_id}
									dependence={dependence}
									setDependence={setDependence}
									currentTask_id={task_id}
								/>
							</Stack>
						</Grid>
					</Grid>

					<Box
						sx={{
							mt: 3,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Button
							onClick={() => setDeleteModal(true)}
							color='error'
							startIcon={<DeleteIcon color='error' />}
						>
							Удалить
						</Button>
						{isPending ? (
							<Loader />
						) : (
							<div>
								<Button
									size='small'
									style={{ marginRight: '10px' }}
									onClick={() => setIsModal(false)}
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
									Сохранить
								</Button>
							</div>
						)}
					</Box>
				</>
			) : (
				<Loader />
			)}
			<DeleteModal
				isModal={deleteModal}
				setIsModal={setDeleteModal}
				deleteFunction={() => deleteTask(task_id)}
				isLoading={isDeletePending}
				title='Удалить задачу?'
				subtitle={`Задача «${name}» будет безвозвратно удалена.`}
				confirmation='Удалить задачу.'
			/>
		</MyModal>
	)
}
