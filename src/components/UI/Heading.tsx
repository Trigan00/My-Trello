import { Box, Typography } from '@mui/material'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<Box>
			<Typography variant='h6'>{title}</Typography>
		</Box>
	)
}
