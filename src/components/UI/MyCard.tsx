import { COLORS } from '@/constants/color.constants'
import { Box, BoxProps, Card, SxProps } from '@mui/material'

interface MyCardI extends BoxProps {
	children: React.ReactNode
	variant: 'outlined' | 'shadowed'
	sx?: SxProps
}

export function MyCard({ children, variant, sx, ...props }: MyCardI) {
	return (
		<Box
			{...props}
			sx={{
				// boxShadow:
				// 	variant === 'shadowed'
				// 		? '0px 0px 10px 0px rgba(0, 0, 0, 0.15)'
				// 		: 'none',
				backgroundColor: 'white',
				// border: variant === 'outlined' ? `1px solid ${COLORS.border}` : 'none',
				border: `1px solid ${COLORS.border}`,
				borderRadius: '15px',
				...sx
			}}
		>
			{children}
		</Box>
	)
}
