import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { COLORS } from '@/constants/color.constants'
import { useBoards } from '@/hooks/board-hooks/useBoards'
import { useWorkspaces } from '@/hooks/workspace-hooks/useWorkspaces'
import { Skeleton } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { useParams, usePathname } from 'next/navigation'

const last_pages: { [str: string]: string } = {
	gantt: 'Диаграмма Ганта',
	statistics: 'Статистика',
	timeline: 'Журнал'
}

export function Heading() {
	const pathname = usePathname()
	const params = useParams<{ workspace_id: string; board_id: string }>()
	const { items: Workspaces } = useWorkspaces()
	const { items: Boards } = useBoards(Number(params.workspace_id))

	const workspace_title = Workspaces?.find(
		ws => ws.id == Number(params.workspace_id)
	)?.name
	const board_title = Boards?.find(b => b.id == Number(params.board_id))?.name
	const arr = pathname.split('/')
	const last_page = arr[arr.length - 1]

	return (
		<div>
			{workspace_title && Boards ? (
				<Breadcrumbs
					aria-label='breadcrumb'
					sx={{ fontWeight: '600', color: 'white' }}
					// sx={{ fontWeight: '600' }}
				>
					<Link
						underline='hover'
						// color={arr.length === 4 ? 'text.primary' : 'inherit'}
						color={arr.length === 4 ? 'white' : COLORS.border}
						component={NextLink}
						href={DASHBOARD_PAGES.HOME + '/' + params.workspace_id + '/boards'}
					>
						{workspace_title}
					</Link>
					{params.board_id && (
						<Link
							underline='hover'
							// color={arr.length === 5 ? 'text.primary' : 'inherit'}
							color={arr.length === 5 ? 'white' : COLORS.border}
							component={NextLink}
							href={
								DASHBOARD_PAGES.HOME +
								'/' +
								params.workspace_id +
								'/boards' +
								'/' +
								params.board_id
							}
						>
							{board_title}
						</Link>
					)}
					{last_pages[last_page] && (
						<Link
							underline='hover'
							// color={arr.length === 6 ? 'text.primary' : 'inherit'}
							color={arr.length === 6 ? 'white' : COLORS.border}
							component={NextLink}
							href={
								DASHBOARD_PAGES.HOME +
								'/' +
								params.workspace_id +
								'/boards' +
								'/' +
								params.board_id +
								'/' +
								last_page
							}
						>
							{last_pages[last_page]}
						</Link>
					)}
				</Breadcrumbs>
			) : (
				<Skeleton
					width={250}
					height={40}
				/>
			)}
		</div>
	)
}
