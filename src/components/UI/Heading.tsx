import { Box, Skeleton, Typography } from '@mui/material'

interface IHeading {
	title: string | undefined
}

export function Heading({ title }: IHeading) {
	return (
		<Box>
			<Typography variant='h6'>
				{title ? title : <Skeleton width={200} />}
			</Typography>
		</Box>
	)
}
