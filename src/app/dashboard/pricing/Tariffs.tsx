'use client'

import { MyCard } from '@/components/UI/MyCard'
import {
	Box,
	Button,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import React from 'react'

const data: Array<{
	title: string
	subtitle: string
	price: number
	cons: string[]
}> = [
	{
		title: 'Starter',
		subtitle: 'Is perfect for individual developers',
		price: 190,
		cons: ['1 User', '1 App', 'Integrations']
	},
	{
		title: 'Pro',
		subtitle: 'For teams and advanced developers',
		price: 390,
		cons: ['All in Starter plan', 'Google Ads', 'SSO via Google', 'API access']
	},
	{
		title: 'Enterprise',
		subtitle: 'Ideal for corporate companyes',
		price: 690,
		cons: [
			'All features',
			'Email support',
			'Google Ads',
			'SSO via Google',
			'API access',
			'Facebook Ads'
		]
	}
]

export function Tariffs() {
	const [priceVariant, setPriceVariant] = React.useState<'Annual' | 'Monthly'>(
		'Annual'
	)

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		variant: 'Annual' | 'Monthly'
	) => {
		setPriceVariant(variant)
	}

	return (
		<>
			<Box
				sx={{
					textAlign: 'center'
				}}
			>
				<ToggleButtonGroup
					color='primary'
					value={priceVariant}
					exclusive
					onChange={handleChange}
					aria-label='Price variant'
					sx={{ my: 4, textTransform: 'lowercase' }}
				>
					<ToggleButton
						value='Annual'
						sx={{ textTransform: 'initial' }}
					>
						Annual
					</ToggleButton>
					<ToggleButton
						value='Monthly'
						sx={{ textTransform: 'initial' }}
					>
						Monthly
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						md: 'row'
					},
					gap: 3
				}}
			>
				{data.map(({ title, subtitle, price, cons }) => (
					<MyCard
						key={title}
						variant='outlined'
						sx={{
							boxSizing: 'border-box',
							p: 2,
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}
					>
						<Box>
							<Typography
								variant='h5'
								fontWeight={600}
							>
								{title}
							</Typography>
							<Typography
								variant='subtitle1'
								my={1}
							>
								{subtitle}
							</Typography>
							<Typography
								variant='h4'
								fontWeight={500}
							>
								${priceVariant === 'Annual' ? price : Math.floor(price / 9)}
								<Typography
									component={'span'}
									sx={{ fontWeight: 500, color: 'GrayText' }}
								>
									{priceVariant === 'Annual' ? '/y' : '/mo'}
								</Typography>
							</Typography>
							<Stack
								direction='column'
								gap={2}
								mt={2}
							>
								{cons.map(str => (
									<Stack
										key={str}
										direction='row'
										gap={1}
									>
										<CheckCircleIcon color='primary' />
										<Typography>{str}</Typography>
									</Stack>
								))}
							</Stack>
						</Box>
						<Button
							variant='contained'
							sx={{ mt: 3, color: 'White' }}
							fullWidth
						>
							Choose
						</Button>
					</MyCard>
				))}
			</Box>
		</>
	)
}
