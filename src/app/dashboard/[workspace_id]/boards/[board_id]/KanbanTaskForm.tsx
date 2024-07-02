import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Box, Button, Skeleton, TextField, Typography } from '@mui/material'
import { Loader } from '@/components/UI/Loader/Loader'
import MyModal from '@/components/UI/MyModal'
import MembersSelect from '@/components/dashboard-layout/MembersSelect'
import { BoardMemberI } from '@/types/board.types'
import { Dayjs } from 'dayjs'
import MyDate from '@/components/dashboard-layout/MyDate'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useBoardMembers } from '@/hooks/board-hooks/useBoardMembers'
import { useCreateTask } from '@/hooks/task-hooks/useCreateTask'

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
	const { members: board_members } = useBoardMembers(board_id)

	const [members, setMembers] = useState<BoardMemberI[] | []>([])
	const [name, setName] = useState('')
	const [description, setDescription] = useState<string>('')
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
			description: description ? description : null,
			column_id,
			start_time: startTime?.format() || null,
			deadline: endTime?.format() || null,
			verified: false
		})
	}

	const addUser = (member: BoardMemberI | undefined) => {
		member &&
			setMembers(prev => {
				const arr = [...prev]
				arr.push({
					id: member.id,
					email: member.email,
					username: member.username
				})
				return arr
			})
	}

	const removeUser = (member: BoardMemberI | undefined) => {
		member && setMembers(prev => prev.filter(u => u.id !== member.id))
	}

	function onClose() {
		setErrMsg('')
		setStartTime(null)
		setEndTime(null)
		setName('')
		setDescription('')
		setMembers([])
	}

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
			onClose={onClose}
			maxWidth={600}
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

			<Box
				display='flex'
				justifyContent='space-between'
				flexWrap='wrap'
				gap={2}
			>
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
			</Box>

			{board_members ? (
				<MembersSelect
					all_users={board_members}
					addFunc={addUser}
					removeFunc={removeUser}
					members={members as BoardMemberI[]}
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
				multiline
				maxRows={3}
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
				rows={5}
				fullWidth
				sx={{ mt: 2 }}
			/>
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
