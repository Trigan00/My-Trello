import { AccordionProps, AccordionSummaryProps, styled } from '@mui/material'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { COLORS } from '@/constants/color.constants'

export const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion
		disableGutters
		elevation={0}
		square
		{...props}
	/>
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0
	},
	'&::before': {
		display: 'none'
	}
}))

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ExpandMoreIcon sx={{ color: COLORS.textBlack }} />}
		{...props}
		sx={{ margin: 0 }}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, 0)',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)'
	}
}))

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	//padding: theme.spacing(2),
	borderTop: 'none'
}))
