import { Alert, AlertColor, Snackbar } from '@mui/material'
import React from 'react'
import { useSnackbar } from './useSnackbar'

interface AlertProps {
	message: string
	open: boolean
	severity: AlertColor
}

const MySnackbar: React.FC<AlertProps> = ({ message, open, severity }) => {
	const { removeSnackbar } = useSnackbar()

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	): void => {
		if (reason === 'clickaway') {
			return
		}

		removeSnackbar()
	}

	return (
		<Snackbar
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
		>
			<Alert
				onClose={handleClose}
				severity={severity}
				sx={{ width: '100%' }}
			>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default MySnackbar
