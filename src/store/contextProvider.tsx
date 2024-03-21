'use client'

import { PropsWithChildren, useState } from 'react'
import { ISnackBar, MyContext } from './contex'
import MySnackbar from '@/components/SnackBar/MySnackbar'

export function MyProvider({ children }: PropsWithChildren) {
	const [alert, setAlert] = useState<ISnackBar>({
		isOpen: false,
		message: '',
		severity: null
	})

	return (
		<MyContext.Provider
			value={{ message: alert.message, severity: alert.severity, setAlert }}
		>
			{children}
			<MySnackbar
				open={alert.isOpen}
				message={alert.message}
				severity={alert.severity || 'info'}
			/>
		</MyContext.Provider>
	)
}
