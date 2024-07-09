'use client'

import { GlobalLoader } from '@/components/dashboard-layout/GlobalLoader'
import { Heading } from '@/components/UI/Heading'
import { useBoards } from '@/hooks/board-hooks/useBoards'
import { useWorkspaces } from '@/hooks/workspace-hooks/useWorkspaces'
import { Box, Stack, Tooltip, IconButton } from '@mui/material'
import { useParams, usePathname } from 'next/navigation'
import { useIsAdmin } from '@/hooks/useIsAdmin'
import TimelineIcon from '@mui/icons-material/Timeline'
import BarChartIcon from '@mui/icons-material/BarChart'
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart'
import SettingsIcon from '@mui/icons-material/Settings'
import NextLink from 'next/link'
import { useState } from 'react'
import { BoardSettingsModal } from './board settings/BoardSettingsModal'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export default function BoardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const params = useParams<{ workspace_id: string; board_id: string }>()
	const { items: Boards } = useBoards(Number(params.workspace_id))
	const isAdmin = useIsAdmin()
	const [isSettings, setIsSettings] = useState(false)
	const board_title = Boards?.find(b => b.id == Number(params.board_id))?.name

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					pt: 4,
					pr: 4,
					pl: 4
				}}
			>
				<Heading />

				<Stack
					spacing={1}
					direction='row'
				>
					<GlobalLoader />
					<Tooltip
						title='Диаграмма Ганта'
						placement='top'
					>
						<IconButton
							component={NextLink}
							href={
								DASHBOARD_PAGES.HOME +
								'/' +
								params.workspace_id +
								'/boards' +
								'/' +
								params.board_id +
								'/gantt'
							}
						>
							<WaterfallChartIcon
								sx={{ color: '#999999', transform: 'rotate(-90deg)' }}
							/>
						</IconButton>
					</Tooltip>

					<Tooltip
						title='Статистика'
						placement='top'
					>
						<IconButton
							component={NextLink}
							href={
								DASHBOARD_PAGES.HOME +
								'/' +
								params.workspace_id +
								'/boards' +
								'/' +
								params.board_id +
								'/statistics'
							}
						>
							<BarChartIcon sx={{ color: '#999999' }} />
						</IconButton>
					</Tooltip>

					{isAdmin && (
						<>
							<Tooltip
								title='Журнал'
								placement='top'
							>
								<IconButton
									component={NextLink}
									href={
										DASHBOARD_PAGES.HOME +
										'/' +
										params.workspace_id +
										'/boards' +
										'/' +
										params.board_id +
										'/timeline'
									}
								>
									<TimelineIcon sx={{ color: '#999999' }} />
								</IconButton>
							</Tooltip>

							<Tooltip
								title='Настройки'
								placement='top'
							>
								<IconButton onClick={() => setIsSettings(true)}>
									<SettingsIcon sx={{ color: '#999999' }} />
								</IconButton>
							</Tooltip>
						</>
					)}
				</Stack>
			</Box>
			{children}
			{board_title && isSettings && (
				<BoardSettingsModal
					isModal={isSettings}
					setIsModal={setIsSettings}
					heading_title={board_title}
					workspace_id={Number(params.workspace_id)}
					board_id={Number(params.board_id)}
				/>
			)}
		</>
	)
}
