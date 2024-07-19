import { Box, Container, Typography } from '@mui/material'
import { Metadata } from 'next'
import { Tariffs } from './Tariffs'

export const metadata: Metadata = {
	title: 'Pricing'
}

export default function Pricing() {
	return (
		<Container
			maxWidth='lg'
			sx={{ p: 4 }}
		>
			<Typography
				variant='h4'
				fontWeight={500}
				textAlign='center'
			>
				Flexible pricing options
			</Typography>
			<Typography
				variant='subtitle1'
				textAlign='center'
				mt={2}
			>
				We are founded by a leading academic and researcher in the field of
				Industrial Systems Engineering. For entrepreneurs, startups and
				freelancers. If you didn’t find what you needed, these could help!
			</Typography>
			<Tariffs />
		</Container>
	)
}
