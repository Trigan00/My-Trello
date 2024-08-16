'use client'

import { MyCard } from '@/components/UI/MyCard'
import { SITE_NAME } from '@/constants/seo.constants'
import { Link, Typography, alpha, Box, Stack, useTheme } from '@mui/material'

function Copyright(props: any) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link
				color='inherit'
				href='#'
			>
				{SITE_NAME}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

function bgGradient(props: any) {
	const direction = props?.direction || 'to bottom'
	const startColor = props?.startColor
	const endColor = props?.endColor
	const imgUrl = props?.imgUrl
	const color = props?.color

	if (imgUrl) {
		return {
			background: `linear-gradient(${direction}, ${startColor || color}, ${
				endColor || color
			}), url(${imgUrl})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center'
		}
	}

	return {
		background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
	}
}

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const theme = useTheme()

	return (
		<Box
			component='main'
			sx={{
				...bgGradient({
					color: alpha(theme.palette.background.default, 0.9),
					imgUrl: '/assets/overlay_4.jpg'
				}),
				height: '100vh'
			}}
		>
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{ height: 1 }}
			>
				<MyCard
					variant='shadowed'
					sx={{
						boxSizing: 'border-box',
						p: {
							xs: 3,
							md: 5
						},
						width: '100%',
						maxWidth: '505px'
					}}
				>
					{children}
				</MyCard>
				<Copyright sx={{ mt: 3 }} />
			</Stack>
		</Box>
	)
}
