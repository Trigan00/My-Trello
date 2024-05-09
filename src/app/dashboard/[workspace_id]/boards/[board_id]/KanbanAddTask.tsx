import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import {
	Box,
	Button,
	IconButton,
	Skeleton,
	TextField,
	Typography
} from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import { Loader } from '@/components/UI/Loader/Loader'
import MyModal from '@/components/UI/MyModal'
import MembersSelect from '@/components/dashboard-layout/MembersSelect'
import { BoardMemberI } from '@/types/board.types'
import dayjs, { Dayjs } from 'dayjs'
import MyDate from '@/components/dashboard-layout/MyDate'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

export function KanbanAddTask() {
	const [isModal, setIsModal] = useState(false)
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [errMsg, setErrMsg] = useState('')

	const [startTime, setStartTime] = useState<Dayjs | null>(dayjs(new Date()))
	const [endTime, setEndTime] = useState<Dayjs | null>(dayjs(new Date()))

	const submit = () => {
		if (!name.trim()) return setErrMsg('Не может быть пустым')
		setErrMsg('')
	}

	const addUser = (member: BoardMemberI | undefined) => {
		// member && addMember({ board_id, user_id: member?.id })
	}

	const removeUser = (member: BoardMemberI | undefined) => {
		// member && deleteBoardMember({ board_id, user_id: member?.id })
	}

	const onClose = () => {
		setErrMsg('')
		setStartTime(dayjs(new Date()))
		setEndTime(dayjs(new Date()))
	}

	return (
		<>
			<Button
				onClick={() => setIsModal(true)}
				variant='text'
				startIcon={<AddIcon sx={{ color: COLORS.textBlack }} />}
				color='inherit'
				sx={{
					mt: '16px',
					width: '100%',
					color: COLORS.textBlack
				}}
			>
				Добавить
			</Button>
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
					// alignItems='center'
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
						/>
						<MyDate
							value={endTime}
							setValue={setEndTime}
							label='Конец'
						/>
					</Box>
					<Button
						variant='contained'
						sx={{ height: 'min-content', mt: 2 }}
					>
						<NotificationsNoneIcon sx={{ color: 'white' }} />
					</Button>
				</Box>

				{true ? (
					<MembersSelect
						all_users={[]}
						addFunc={addUser}
						removeFunc={removeUser}
						members={[]}
					/>
				) : (
					<Skeleton
						variant='rounded'
						sx={{ mt: 2, height: '40px', width: '100%', borderRadius: '15px' }}
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
				<Box sx={{ mt: 3, float: 'right' }}>
					{false ? (
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
		</>
	)
}
