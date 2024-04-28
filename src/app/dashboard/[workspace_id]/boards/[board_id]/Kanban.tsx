'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskDnd } from '@/hooks/task-hooks/useTaskDnd'
import { useTasks } from '@/hooks/task-hooks/useTasks'
import { Box, IconButton, Skeleton } from '@mui/material'
import { KanbanColumn } from './KanbanColumn'
import { Heading } from '@/components/UI/Heading'
import { useWorkspaces } from '@/hooks/workspace-hooks/useWorkspaces'
import { useBoards } from '@/hooks/board-hooks/useBoards'
import Image from 'next/image'
import { useGetColumns } from '@/hooks/task-hooks/useGetColumns'
import { headerHeight } from '@/components/dashboard-layout/header/Header'

interface KanbanI {
	workspace_id: number
	board_id: number
}

export function Kanban({ workspace_id, board_id }: KanbanI) {
	const { columns, isLoading } = useGetColumns(board_id)
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd({ items, setItems })
	const { items: Workspaces } = useWorkspaces()
	const { items: Boards } = useBoards(workspace_id)

	return (
		<Box sx={{ height: `calc(100% - ${headerHeight}px)` }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					pt: 4,
					pr: 4,
					pl: 4
				}}
			>
				<Heading
					title={
						Workspaces &&
						Boards &&
						`${Workspaces?.find(ws => ws.id == workspace_id)?.name} / ${Boards?.find(b => b.id == board_id)?.title}`
					}
				/>
				<IconButton sx={{ p: 1 }}>
					<Image
						src={'/svg/settings.svg'}
						alt={'settings'}
						width={25}
						height={25}
					/>
				</IconButton>
			</Box>
			<DragDropContext onDragEnd={onDragEnd}>
				<Box
					sx={{
						boxSizing: 'border-box',
						height: '100%',
						display: 'flex',
						p: 4,
						gap: 2
						// overflowX: 'auto' //без него ставиться, с ним не вращается
					}}
				>
					{isLoading &&
						new Array(4).fill(null).map((_, i) => (
							<Box key={i}>
								<Skeleton
									variant='rounded'
									sx={{
										borderRadius: '15px',
										width: '300px',
										height: '200px'
									}}
								/>
							</Box>
						))}
					{columns?.map(column => (
						<KanbanColumn
							key={column.id}
							column_id={column.id}
							label={column.label}
							items={items}
							setItems={setItems}
						/>
					))}
				</Box>
			</DragDropContext>
		</Box>
	)
}
