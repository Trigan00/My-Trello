import { MyContext } from '@/store/contex'
import { AlertColor } from '@mui/material'
import { useContext } from 'react'

export function useSnackbar() {
	const ctx = useContext(MyContext)

	function showSnackbar(severity: AlertColor, message: string) {
		ctx?.setAlert({ severity, message, isOpen: true })
	}

	function removeSnackbar() {
		ctx?.setAlert({
			isOpen: false,
			message: ctx.message,
			severity: ctx.severity
		})
	}
	return { showSnackbar, removeSnackbar }
}
