import { Container } from '@mui/material'
import { Metadata } from 'next'
import { InBox } from './Inbox'
export const metadata: Metadata = {
	title: 'Dashboard'
}

export default function DashBoard() {
	return (
		<Container
			maxWidth='md'
			sx={{ p: 4 }}
		>
			<InBox />
		</Container>
	)
}
