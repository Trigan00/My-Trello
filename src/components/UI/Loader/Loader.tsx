import React from 'react'
import './Loader.css'
import { COLORS } from '@/constants/color.constants'

export function Loader() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div
				className='lds-ellipsis'
				style={{ margin: '0 auto' }}
			>
				<div style={{ backgroundColor: COLORS.primary }}></div>
				<div style={{ backgroundColor: COLORS.primary }}></div>
				<div style={{ backgroundColor: COLORS.primary }}></div>
				<div style={{ backgroundColor: COLORS.primary }}></div>
			</div>
		</div>
	)
}
