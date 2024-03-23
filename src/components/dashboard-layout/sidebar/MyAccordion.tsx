import { AccordionProps, AccordionSummaryProps, styled } from '@mui/material'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

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
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, 0)',
	// flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)'
	}
}))

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	//padding: theme.spacing(2),
	borderTop: 'none'
}))
