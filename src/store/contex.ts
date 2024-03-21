import { AlertColor } from '@mui/material'
import { Dispatch, SetStateAction, createContext } from 'react'

export interface ISnackBar {
	isOpen: boolean
	message: string
	severity: AlertColor | null
}

interface MyContextType extends Omit<ISnackBar, 'isOpen'> {
	setAlert: Dispatch<SetStateAction<ISnackBar>>
}

export const MyContext = createContext<MyContextType | undefined>(undefined)
