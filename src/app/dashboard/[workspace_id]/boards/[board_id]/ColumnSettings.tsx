import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDeleteColumn } from '@/hooks/columns-hooks/useDeleteColumn'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'

interface ColumnSettingsI {
	column_id: number
	setIsEdit: Dispatch<SetStateAction<boolean>>
	label: string
}

export function ColumnSettings({
	setIsEdit,
	column_id,
	label
}: ColumnSettingsI) {
	const { deleteColumn, isPending } = useDeleteColumn()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [isModal, setIsModal] = useState(false)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleEdit = () => {
		setIsEdit(true)
		setAnchorEl(null)
	}

	const handleDelete = () => {
		deleteColumn(column_id)
		setAnchorEl(null)
	}

	return (
		<div>
			<IconButton
				sx={{ p: 1, position: 'absolute', top: '-8px', right: '0px' }}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MoreHorizIcon />
			</IconButton>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={() => setAnchorEl(null)}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
						p: 1
					}}
				>
					<Button
						onClick={handleEdit}
						color='inherit'
						startIcon={<EditIcon color='inherit' />}
					>
						Изменить
					</Button>
					<Button
						onClick={() => setIsModal(true)}
						color='error'
						startIcon={<DeleteIcon color='error' />}
					>
						Удалить
					</Button>
				</Box>
			</Menu>
			<DeleteModal
				isModal={isModal}
				setIsModal={setIsModal}
				deleteFunction={handleDelete}
				isLoading={isPending}
				title='Удалить колонку?'
				subtitle={`Колонка «${label}» и все вложенные задачи будут удалены.`}
				confirmation='Удалить колонку.'
				resetFunc={() => setAnchorEl(null)}
			/>
		</div>
	)
}
