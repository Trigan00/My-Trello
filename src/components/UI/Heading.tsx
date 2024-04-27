import { Box, Skeleton, Typography } from '@mui/material'

interface IHeading {
	title: string | undefined
}

export function Heading({ title }: IHeading) {
	return (
		<Box>
			<Typography sx={{ fontWeight: '600', fontSize: '18px' }}>
				{title ? (
					title
				) : (
					<Skeleton
						width={200}
						height={35}
					/>
				)}
			</Typography>
		</Box>
	)
}
