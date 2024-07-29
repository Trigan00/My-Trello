'use client'

import {
	Typography,
	CardHeader,
	Box,
	Pagination,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material'
import {
	Timeline,
	TimelineDot,
	TimelineContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineItem
} from '@mui/lab'
import { timelineItemClasses } from '@mui/lab/TimelineItem'
import { MyCard } from '@/components/UI/MyCard'
import shortenText from '@/helpers/shortenText'
import { useState } from 'react'
import { EditTask } from '../task_info/EditTask'
import { useLogs } from '@/hooks/board-hooks/useLogs'
import { Loader } from '@/components/UI/Loader/Loader'
import { TimeLineItemI } from '@/types/board.types'
import { per_Page } from '@/services/board.service'

interface ActionTypeI {
	[name: string]:
		| 'success'
		| 'primary'
		| 'info'
		| 'error'
		| 'secondary'
		| 'warning'
}
const ACTION_TYPE: ActionTypeI = {
	CREATE: 'success',
	UPDATE_SET: 'primary',
	UPDATE_POS: 'info',
	FINISH: 'success',
	DELETE: 'error',
	ADD_MEMBER: 'secondary',
	DELETE_MEMBER: 'warning'
}

export default function LogsTimeline({ board_id }: { board_id: number }) {
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(10)
	const { logs } = useLogs({ board_id, page, perPage })

	const [isTask, setIsTask] = useState(false)
	const [selectedTaskId, setSelectedTaskId] = useState<number>()

	const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	const showTask = (id: number, isDelete: boolean) => {
		if (isDelete) return
		setIsTask(true)
		setSelectedTaskId(id)
	}

	return (
		<Box sx={{ p: 3 }}>
			<MyCard
				variant='shadowed'
				sx={{ width: 'fit-content' }}
			>
				<CardHeader title='Журнал событий' />
				{!logs ? (
					<Loader />
				) : (
					<>
						<Timeline
							sx={{
								m: 0,
								p: 2,
								[`& .${timelineItemClasses.root}:before`]: {
									flex: 0,
									padding: 0
								}
							}}
						>
							{logs.logs.map((item, index) => (
								<LogsTimelineItem
									key={item.id}
									item={item}
									lastTimeline={index === logs.logs.length - 1}
									showTask={showTask}
								/>
							))}
						</Timeline>
						<Box
							sx={{
								p: '0 5px 10px 5px',
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Select
								size='small'
								value={String(perPage)}
								variant='standard'
								onChange={(event: SelectChangeEvent) =>
									setPerPage(Number(event.target.value))
								}
							>
								<MenuItem value={10}>10</MenuItem>
								<MenuItem value={20}>20</MenuItem>
								<MenuItem value={30}>30</MenuItem>
							</Select>
							<Pagination
								count={Math.ceil(logs.count / perPage) || 1}
								color='primary'
								page={page}
								onChange={onPageChange}
							/>
						</Box>
					</>
				)}
				{isTask && (
					<EditTask
						board_id={board_id}
						task_id={selectedTaskId as number}
						isModal={isTask}
						setIsModal={setIsTask}
					/>
				)}
			</MyCard>
		</Box>
	)
}

interface OrderItemP {
	item: TimeLineItemI
	lastTimeline: boolean
	showTask: (id: number, isDelete: boolean) => void
}

function LogsTimelineItem({ item, lastTimeline, showTask }: OrderItemP) {
	const { log_info, task_name, task_id, time, action } = item
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot color={ACTION_TYPE[action]} />
				{lastTimeline ? null : <TimelineConnector />}
			</TimelineSeparator>

			<TimelineContent>
				<Typography variant='subtitle2'>
					{log_info}{' '}
					{task_name && (
						<Typography
							sx={{ cursor: action !== 'DELETE' ? 'pointer' : 'text' }}
							color={action !== 'DELETE' ? 'primary' : 'inherit'}
							component='span'
							onClick={() => showTask(task_id, action === 'DELETE')}
						>
							{shortenText(task_name, 20)}
						</Typography>
					)}
				</Typography>

				<Typography
					variant='body2'
					sx={{ color: 'text.disabled' }}
				>
					{time}
				</Typography>
			</TimelineContent>
		</TimelineItem>
	)
}
