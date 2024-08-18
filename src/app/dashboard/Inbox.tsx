'use client'

import { MyCard } from '@/components/UI/MyCard'
import { Box, CardHeader, ListItemButton, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import React, { useState } from 'react'
import { useDashboard } from '@/hooks/task-hooks/useDashboard'
import { DashboardTasksI } from '@/types/task.types'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary
} from '@/components/dashboard-layout/sidebar/MyAccordion'
import { EditTask } from './[workspace_id]/boards/[board_id]/task_info/EditTask'
import { Loader } from '@/components/UI/Loader/Loader'

const accordionItems = [
	{ prop: 'not_started_tasks', title: 'Не начатые задачи' },
	{ prop: 'at_work_data', title: 'В работе' },
	{ prop: 'recently_completed', title: 'Недавно завершенные' }
]

export function InBox() {
	const { dashboardData } = useDashboard()
	const [expanded, setExpanded] = useState({
		not_started_tasks: true,
		at_work_data: true,
		recently_completed: true
	})
	const [isTask, setIsTask] = useState(false)
	const [taskInfo, setTaskInfo] = useState<{
		board_id: number
		task_id: number
	}>()

	return (
		<MyCard
			variant='shadowed'
			sx={{ p: 2 }}
		>
			<CardHeader title='Входящие' />

			{!dashboardData && <Loader />}
			{dashboardData &&
				accordionItems.map((item, i) => (
					<Accordion
						expanded={(expanded as any)[item.prop]}
						onChange={() =>
							setExpanded(prev => {
								return {
									...prev,
									[item.prop]: !(prev as any)[item.prop]
								}
							})
						}
						key={item.title}
						variant='outlined'
						sx={{
							border: 'none',
							margin: '0 !important'
						}}
					>
						<AccordionSummary
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{
								border: 'none !important',
								p: 0,
								m: 0
							}}
						>
							<Typography
								fontSize={14}
								fontWeight={500}
								color={COLORS.textBlack}
							>
								{item.title}
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								mt: '-15px',
								px: 0,
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							{(dashboardData as any)[item.prop].map(
								(data: DashboardTasksI) => (
									<Box
										key={data.task_id}
										sx={{
											position: 'relative',
											mt: '10px',
											// ml: 1,
											color: COLORS.textBlack,
											backgroundColor: COLORS.border,
											borderRadius: '10px',
											'&:hover': {
												transition: '0.4s',
												filter: 'brightness(0.9)'
											}
										}}
										onClick={() => {
											setTaskInfo({
												board_id: data.board_id,
												task_id: data.task_id
											})
											setIsTask(true)
										}}
									>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												gap: 1,
												padding: '8px',
												pr: '25px',
												cursor: 'pointer'
											}}
										>
											<Typography
												sx={{
													wordWrap: 'break-word'
												}}
											>
												{data.task_name}
											</Typography>
											<Typography variant='caption'>{`${data.ws_name}/${data.board_name}`}</Typography>
										</Box>
									</Box>
								)
							)}
						</AccordionDetails>
					</Accordion>
				))}
			{isTask && taskInfo && (
				<EditTask
					board_id={taskInfo.board_id}
					task_id={taskInfo.task_id}
					isModal={isTask}
					setIsModal={setIsTask}
				/>
			)}
		</MyCard>
	)
}
