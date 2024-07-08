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
					404: Страницы, которую вы ищете, здесь нет
				</Typography>
				<Typography
					color='text.secondary'
					variant='body1'
					sx={{ textAlign: 'center' }}
				>
					Вы либо выбрали какой-то сомнительный маршрут, либо попали сюда по
					ошибке. Что бы это ни было, попробуйте воспользоваться навигацией
				</Typography>
				<Button
					component={RouterLink}
					href={DASHBOARD_PAGES.HOME}
					startIcon={<WestIcon />}
					variant='contained'
					sx={{
						color: 'white'
					}}
				>
					Вернуться на главную страницу
				</Button>
			</Stack>
		</Box>
	)
}
