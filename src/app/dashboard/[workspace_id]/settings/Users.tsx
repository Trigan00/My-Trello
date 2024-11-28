'use client'

import { Loader } from '@/components/UI/Loader/Loader'
import { MyCard } from '@/components/UI/MyCard'
import { COLORS } from '@/constants/color.constants'
import { useWorkspaceUsers } from '@/hooks/workspace-hooks/useWorkspaceUsers'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
	Box,
	Divider,
	IconButton,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography
} from '@mui/material'
import copy from 'copy-to-clipboard'
import { toast } from 'sonner'
import React from 'react'
import { useInviteLink } from '@/hooks/workspace-hooks/useInviteLink'
import MyTableRow from './MyTableRow'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import { useWorkspaceRoles } from '@/hooks/workspace-hooks/useWorkspaceRoles'

interface UsersI {
	workspace_id: number
}

export function Users({ workspace_id }: UsersI) {
	const { users } = useWorkspaceUsers(workspace_id)
	const { roles } = useWorkspaceRoles()
	const { item: link, refetch_link, isLoading } = useInviteLink(workspace_id)

	const copyHandler = () => {
		copy(link || '')
		toast.info('Скопировано в буфер обмена!')
	}

	return (
		<MyCard
			variant='shadowed'
			sx={{ mt: 4 }}
		>
			<Box sx={{ p: 3 }}>
				<Typography
					fontSize={18}
					fontWeight={500}
				>
					Участники
				</Typography>
				<Typography
					color={COLORS.textGrey}
					fontSize={14}
				>
					Управление участниками
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 3, overflowX: 'auto' }}>
				{users && roles ? (
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>№</TableCell>
								<TableCell>Имя пользователя</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Роль</TableCell>
								<TableCell align='right'></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{users.map((row, i) => (
								<MyTableRow
									workspace_id={workspace_id}
									key={row.id}
									row={row}
									i={i}
									roles={roles}
								/>
							))}
						</TableBody>
					</Table>
				) : (
					<Loader />
				)}
			</Box>
			<Divider />
			<Box
				sx={{
					p: 3,
					display: { xs: 'block', md: 'flex' },
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: 2
				}}
			>
				<Typography fontSize={14}>
					Ссылка для приглашения новых участников
				</Typography>
				<Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
					{link ? (
						<>
							<input
								style={{
									outline: 'none',
									border: 'none',
									borderBottom: 'none',
									width: '100%',
									fontSize: '14px',
									color: COLORS.textBlack,
									backgroundColor: COLORS.border,
									borderRadius: '15px',
									padding: '0 16px'
								}}
								readOnly
								value={link}
							/>
							<IconButton
								sx={{ p: 1 }}
								onClick={() => refetch_link()}
							>
								<AutorenewIcon />
							</IconButton>
							<IconButton
								sx={{ p: 1 }}
								onClick={copyHandler}
							>
								<ContentCopyIcon />
							</IconButton>
						</>
					) : (
						<Skeleton
							width={'100%'}
							height={40}
							variant='rounded'
							sx={{ borderRadius: '15px' }}
						/>
					)}
				</Box>
			</Box>
		</MyCard>
	)
}
