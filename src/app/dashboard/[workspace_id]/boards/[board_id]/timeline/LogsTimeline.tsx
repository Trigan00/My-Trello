'use client'

import { Typography, CardHeader, Button, Box, Pagination } from '@mui/material'
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

interface TimeLineItem {
	id: number
	log_info: string
	task_name: string
	task_id: number
	date: string
	type: string
}

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

const logs: TimeLineItem[] = [
	{
		id: 1,
		log_info: 'Пользователь niyaz удалил задачу',
		task_name: 'teswegwegmweokeiokwgiowegt',
		task_id: 1,
		date: '2024/06/18 16:49',
		type: 'DELETE'
	},
	{
		id: 2,
		log_info: 'Пользователь niyaz создал задачу',
		task_name: 'test2',
		task_id: 2,
		date: '2024/06/18 17:49',
		type: 'CREATE'
	}
]

export default function LogsTimeline() {
	return (
		<Box sx={{ p: 4 }}>
			<CardHeader title='Журнал событий' />
			<MyCard
				variant='shadowed'
				sx={{ width: 'fit-content' }}
			>
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
					{logs.map((item, index) => (
						<LogsTimelineItem
							key={item.id}
							item={item}
							lastTimeline={index === logs.length - 1}
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
					<Pagination
						count={10}
						color='primary'
					/>
				</Box>
			</MyCard>
		</Box>
	)
}

interface OrderItemP {
	item: TimeLineItem
	lastTimeline: boolean
}

function LogsTimelineItem({ item, lastTimeline }: OrderItemP) {
	const { log_info, task_name, task_id, date, type } = item
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot color={ACTION_TYPE[type]} />
				{lastTimeline ? null : <TimelineConnector />}
			</TimelineSeparator>

			<TimelineContent>
				<Typography variant='subtitle2'>
					{log_info}{' '}
					<Typography
						sx={{ cursor: 'pointer' }}
						color='primary'
						component='span'
						onClick={() => console.log('click', task_id)}
					>
						{shortenText(task_name, 20)}
					</Typography>
				</Typography>

				<Typography
					variant='body2'
					sx={{ color: 'text.disabled' }}
				>
					{date}
				</Typography>
			</TimelineContent>
		</TimelineItem>
	)
}
