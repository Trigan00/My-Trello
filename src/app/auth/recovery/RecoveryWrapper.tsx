'use client'

import { Suspense } from 'react'
import Recovery from './Recovery'

export default function RecoveryWrapper() {
	return (
		<Suspense>
			<Recovery />
		</Suspense>
	)
}
