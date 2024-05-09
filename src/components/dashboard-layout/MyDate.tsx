import 'dayjs/locale/ru'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'
import { Dispatch, SetStateAction, useState } from 'react'
import dayjs from 'dayjs'

interface MyDateI {
	label: string
	value: dayjs.Dayjs | null
	setValue: Dispatch<SetStateAction<dayjs.Dayjs | null>>
}

export default function MyDate({ value, setValue, label }: MyDateI) {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale={'ru'}
		>
			<DemoContainer
				components={['DateTimePicker']}
				sx={{
					minWidth: 'none',
					width: '200px',
					overflow: 'hidden',
					'& .MuiInputBase-root': {
						width: '200px'
					}
				}}
			>
				<DateTimePicker
					label={label}
					viewRenderers={{
						hours: renderTimeViewClock,
						minutes: renderTimeViewClock,
						seconds: renderTimeViewClock
					}}
					value={value}
					onChange={newValue => setValue(newValue)}
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}
