'use client'

import { GlobalLoader } from '@/components/dashboard-layout/GlobalLoader'
import { Heading } from '@/components/UI/Heading'
import { useBoards } from '@/hooks/board-hooks/useBoards'
import { Box, Stack, IconButton, ButtonGroup, Button } from '@mui/material'
import { useParams } from 'next/navigation'
import { useIsAdmin } from '@/hooks/useIsAdmin'
import TimelineIcon from '@mui/icons-material/Timeline'
import BarChartIcon from '@mui/icons-material/BarChart'
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart'
import SettingsIcon from '@mui/icons-material/Settings'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import NextLink from 'next/link'
import { useState } from 'react'
import { BoardSettingsModal } from './board settings/BoardSettingsModal'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { headerHeight } from '@/components/dashboard-layout/header/Header'

const pages: Array<{
	title: string
	route: string
	Icon: React.ReactNode
	isAdminReq: boolean
}> = [
	{
		title: 'Диаграмма Ганта',
		route: 'gantt',
		Icon: (
			<WaterfallChartIcon
				color='inherit'
				sx={{ color: 'text.secondary', transform: 'rotate(-90deg)' }}
			/>
		),
		isAdminReq: false
	},
	{
		title: 'Статистика',
		route: 'statistics',
		Icon: (
			<BarChartIcon
				color='inherit'
				sx={{ color: 'text.secondary' }}
			/>
		),
		isAdminReq: false
	},
	{
		title: 'Журнал',
		route: 'timeline',
		Icon: (
			<TimelineIcon
				color='inherit'
				sx={{ color: 'text.secondary' }}
			/>
		),
		isAdminReq: true
	}
]

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

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const default_route =
		DASHBOARD_PAGES.HOME +
		'/' +
		params.workspace_id +
		'/boards' +
		'/' +
		params.board_id +
		'/'

	return (
		//TODO Откуда то 10 пикселей взялось у скрола
		<Box sx={{ height: `calc(100% - ${headerHeight - 10}px)` }}>
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
					alignItems='center'
				>
					<GlobalLoader />
					<Box
						sx={{
							display: {
								xs: 'block',
								lg: 'none'
							}
						}}
					>
						<IconButton
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
							{pages.map(page => {
								if (!isAdmin && page.isAdminReq) return null
								return (
									<MenuItem
										key={page.route}
										component={NextLink}
										href={default_route + page.route}
										onClick={handleClose}
									>
										{page.Icon}
										<span style={{ marginLeft: '10px' }}>{page.title}</span>
									</MenuItem>
								)
							})}
							{isAdmin && (
								<MenuItem
									onClick={() => {
										handleClose()
										setIsSettings(true)
									}}
								>
									<SettingsIcon
										color='inherit'
										sx={{ color: 'text.secondary' }}
									/>
									<span style={{ marginLeft: '10px' }}>Настройки</span>
								</MenuItem>
							)}
						</Menu>
					</Box>
					<ButtonGroup
						variant='contained'
						size='small'
						sx={{
							display: {
								xs: 'none',
								lg: 'block'
							},
							borderRadius: '10px'
						}}
					>
						{pages.map(page => {
							if (!isAdmin && page.isAdminReq) return null
							return (
								<Button
									key={page.route}
									startIcon={page.Icon}
									component={NextLink}
									href={default_route + page.route}
									sx={{ color: 'white' }}
									onClick={() => {
										if (page.title === 'Настройки') setIsSettings(true)
									}}
								>
									{page.title}
								</Button>
							)
						})}
						{isAdmin && (
							<Button
								startIcon={<SettingsIcon color='inherit' />}
								sx={{ color: 'white' }}
								onClick={() => setIsSettings(true)}
							>
								Настройки
							</Button>
						)}
					</ButtonGroup>
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
		</Box>
	)
}
