'use client'

import { Loader } from '@/components/UI/Loader/Loader'
import { MyCard } from '@/components/UI/MyCard'
import { COLORS } from '@/constants/color.constants'
import { useWorkspaceUsers } from '@/hooks/workspace-hooks/useWorkspaceUsers'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
	Box,
	Button,
	Divider,
	IconButton,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
	styled
} from '@mui/material'
import copy from 'copy-to-clipboard'
import { toast } from 'sonner'
import DeleteUserModal from './DeleteUserModal'
import { useState } from 'react'
import { IUser } from '@/types/auth.types'
import React from 'react'
import { useInviteLink } from '@/hooks/workspace-hooks/useInviteLink'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0
	}
}))

function MyTableRow({ row, i }: { row: IUser; i: number }) {
	const [isDelete, setIsDelete] = useState(false)

	return (
		<React.Fragment>
			<StyledTableRow key={row.id}>
				<TableCell>{i + 1}</TableCell>
				<TableCell>{row.username}</TableCell>
				<TableCell>{row.email}</TableCell>
				<TableCell>{row.role}</TableCell>
				<TableCell align='right'>
					{/* <IconButton
		aria-label='delete'
		color='error'
	>
		<DeleteOutlineIcon />
	</IconButton> */}
					<Button
						size='small'
						color='error'
						onClick={() => setIsDelete(true)}
					>
						Удалить
					</Button>
				</TableCell>
			</StyledTableRow>
			<DeleteUserModal
				id={row.id}
				isModal={isDelete}
				setIsModal={setIsDelete}
				username={row.username}
			/>
		</React.Fragment>
	)
}

interface UsersI {
	workspace_id: number
}

export function Users({ workspace_id }: UsersI) {
	const { users } = useWorkspaceUsers(workspace_id)
	const { item: link } = useInviteLink(workspace_id)

	const copyHandler = () => {
		copy(link?.inviteLink || '')
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
					Пользователи
				</Typography>
				<Typography
					color={COLORS.textGrey}
					fontSize={14}
				>
					Управление пользователями
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 3, overflowX: 'auto' }}>
				{users ? (
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
									key={row.id}
									row={row}
									i={i}
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
					Ссылка для приглашения новых пользователей
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
								value={link.inviteLink}
							/>
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
						/>
					)}
				</Box>
			</Box>
		</MyCard>
	)
}
