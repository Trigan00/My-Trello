import { Typography, CardHeader } from '@mui/material'
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

interface TimeLine {
	id: number
	title: string
	type: string
	time: Date
}

const list: TimeLine[] = [...Array(5)].map((_, index) => ({
	id: index,
	title: [
		'1983, orders, $4220',
		'12 Invoices have been paid',
		'Order #37745 from September',
		'New order placed #XF-2356',
		'New order placed #XF-2346'
	][index],
	type: `order${index + 1}`,
	time: new Date()
}))

export default function AnalyticsOrderTimeline() {
	return (
		<MyCard
			variant='shadowed'
			sx={{ maxWidth: '500px' }}
		>
			<CardHeader title='Журнал событий' />

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
				{list.map((item, index) => (
					<OrderItem
						key={item.id}
						item={item}
						lastTimeline={index === list.length - 1}
					/>
				))}
			</Timeline>
		</MyCard>
	)
}


interface OrderItemP {
	item: TimeLine
	lastTimeline: boolean
}

function OrderItem({ item, lastTimeline }: OrderItemP) {
	const { type, title, time } = item
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot
					color={
						(type === 'order1' && 'primary') ||
						(type === 'order2' && 'success') ||
						(type === 'order3' && 'info') ||
						(type === 'order4' && 'warning') ||
						'error'
					}
				/>
				{lastTimeline ? null : <TimelineConnector />}
			</TimelineSeparator>

			<TimelineContent>
				<Typography variant='subtitle2'>{title}</Typography>

				<Typography
					variant='caption'
					sx={{ color: 'text.disabled' }}
				>
					{time.getFullYear()}
				</Typography>
			</TimelineContent>
		</TimelineItem>
	)
}
