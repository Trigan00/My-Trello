import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
	Box,
	Button,
	IconButton,
	Skeleton,
	TextField,
	Tooltip,
	Typography
} from '@mui/material'
import { Loader } from '@/components/UI/Loader/Loader'
import MyModal from '@/components/UI/MyModal'
import MembersSelect from '@/components/dashboard-layout/MembersSelect'
import { BoardMemberI } from '@/types/board.types'
import dayjs, { Dayjs } from 'dayjs'
import MyDate from '@/components/dashboard-layout/MyDate'
import { useBoardMembers } from '@/hooks/board-hooks/useBoardMembers'
import { useTaskMembers } from '@/hooks/task-hooks/useTaskMembers'
import { useOneTask } from '@/hooks/task-hooks/useOneTask'
import { useUpdateTask } from '@/hooks/task-hooks/useUpdateTask'
import { useAddMemberToTask } from '@/hooks/task-hooks/useAddMemberToTask'
import { useDeleteTaskMember } from '@/hooks/task-hooks/useDeleteTaskMember'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import { toast } from 'sonner'
import { Comments } from './Comments'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'
import { useDeleteTask } from '@/hooks/task-hooks/useDeleteTask'

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

	const [name, setName] = useState('')
	const [description, setDescription] = useState<string>('')
	const [errMsg, setErrMsg] = useState('')
	const [startTime, setStartTime] = useState<Dayjs | null>(null)
	const [endTime, setEndTime] = useState<Dayjs | null>(null)
	const [isVerified, setIsVerified] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)

	const { updateTask, isPending } = useUpdateTask(undefined, () =>
		toast.success('Задача успешно изменена')
	)
	const { addMember } = useAddMemberToTask()
	const { deleteTaskMember } = useDeleteTaskMember()
	const { deleteTask, isDeletePending } = useDeleteTask(() => setIsModal(false))

	useEffect(() => {
		if (task) {
			setName(task.name || '')
			setDescription(task.description || '')
			setStartTime(task.start_time ? dayjs(task.start_time) : null)
			setEndTime(task.deadline ? dayjs(task.deadline) : null)
			setIsVerified(task.verified)
		}
	}, [task])

	const submit = () => {
		if (!name.trim()) return setErrMsg('Не может быть пустым')
		updateTask({
			id: task_id,
			data: {
				name,
				description,
				start_time: startTime?.format() || null,
				deadline: endTime?.format() || null
			}
		})
	}

	const addUser = (member: BoardMemberI | undefined) =>
		member && addMember({ task_id, user_id: member.id })

	const removeUser = (member: BoardMemberI | undefined) =>
		member && deleteTaskMember({ user_id: member.id })

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
			maxWidth={600}
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
					<Box
						display='flex'
						alignItems='center'
					>
						<Box
							flex='1'
							display='flex'
							flexWrap='wrap'
							gap={2}
						>
							<MyDate
								value={startTime}
								setValue={setStartTime}
								label='Начало'
								mini={true}
							/>
							<MyDate
								value={endTime}
								setValue={setEndTime}
								label='Конец'
								mini={true}
							/>
						</Box>
						<Tooltip
							title='Проверить'
							placement='top'
						>
							<IconButton
								aria-label='check'
								sx={{ height: 'fit-content' }}
								onClick={() => {
									updateTask({
										id: task_id,
										data: {
											verified: true
										}
									})
									setIsVerified(true)
								}}
							>
								<CheckIcon
									sx={{ p: 1 }}
									color={isVerified ? 'primary' : 'inherit'}
								/>
							</IconButton>
						</Tooltip>
					</Box>

					{board_members && members ? (
						<MembersSelect
							all_users={board_members}
							addFunc={addUser}
							removeFunc={removeUser}
							members={members || []}
						/>
					) : (
						<Skeleton
							variant='rounded'
							sx={{
								mt: 2,
								height: '40px',
								width: '100%',
								borderRadius: '15px'
							}}
						/>
					)}
					<TextField
						value={name}
						onChange={e => setName(e.target.value)}
						error={!!errMsg}
						helperText={errMsg}
						size='small'
						label='Название'
						variant='outlined'
						type='text'
						fullWidth
						sx={{ mt: 2 }}
					/>
					<TextField
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
					/>
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
			<Comments task_id={task_id} />
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
