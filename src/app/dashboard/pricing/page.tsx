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
			<Tariffs />
		</Container>
	)
}
