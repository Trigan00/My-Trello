import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { BoardMemberI } from '@/types/board.types'
import { useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
}

interface MembersSelectI {
	all_users: BoardMemberI[]
	members: BoardMemberI[]
	addFunc: (user: BoardMemberI | undefined) => void
	removeFunc: (user: BoardMemberI | undefined) => void
	label: string
}

export default function MembersSelect({
	all_users,
	addFunc,
	removeFunc,
	members,
	label
}: MembersSelectI) {
	const [personName, setPersonName] = useState<string[]>(
		members.map(m => m.email)
	)

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value }
		} = event
		const arr = typeof value === 'string' ? value.split(',') : value
		const remove = personName.filter(x => !arr.includes(x))
		const add = arr.filter(x => !personName.includes(x))
		if (remove.length)
			removeFunc(members && members.find(u => u.email === remove[0]))
		if (add.length)
			addFunc(all_users && all_users.find(u => u.email === add[0]))
		setPersonName(arr)
	}

	return (
		<FormControl sx={{ width: '100%' }}>
			<InputLabel
				id='demo-multiple-chip-label'
				size='small'
			>
				<p
					style={{
						margin: 0,
						paddingRight: '5px',
						backgroundColor: 'white'
					}}
				>
					{label}
				</p>
			</InputLabel>
			<Select
				labelId='demo-multiple-chip-label'
				id='demo-multiple-chip'
				multiple
				value={personName}
				onChange={handleChange}
				size='small'
				input={
					<OutlinedInput
						id='select-multiple-chip'
						label='Chip'
					/>
				}
				renderValue={selected => (
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
						{selected.map(value => (
							<Chip
								key={value}
								label={value}
							/>
						))}
					</Box>
				)}
				MenuProps={MenuProps}
			>
				{all_users.map(user => (
					<MenuItem
						key={user.id}
						value={user.email}
					>
						{user.username}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
