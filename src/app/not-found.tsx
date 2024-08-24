import * as React from 'react'
import type { Metadata } from 'next'
import RouterLink from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import WestIcon from '@mui/icons-material/West'

export const metadata: Metadata = {
	title: 'Not found'
}

export default function NotFound(): React.JSX.Element {
	return (
		<Box
			component='main'
			sx={{
				p: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh'
			}}
		>
			<Stack
				spacing={3}
				sx={{ alignItems: 'center', maxWidth: 'md' }}
			>
				<Box>
					<Box
						component='img'
						alt='Under development'
						src='/assets/error-404.png'
						sx={{
							display: 'inline-block',
							height: 'auto',
							maxWidth: '100%',
							width: '100%'
						}}
					/>
				</Box>
				<Typography
					variant='h3'
					sx={{ textAlign: 'center' }}
				>
					404: Страница не найдена
				</Typography>

				<Button
					component={RouterLink}
					href={DASHBOARD_PAGES.DASHBOARD}
					startIcon={<WestIcon />}
					variant='contained'
					sx={{
						color: 'white'
					}}
				>
					Вернуться на главную
				</Button>
			</Stack>
		</Box>
	)
}
