import type { Metadata } from 'next'

import { Auth } from './Auth'
import MySuspense from '@/components/MySuspense'

export const metadata: Metadata = {
	title: 'Authorization'
}

export default function AuthPage() {
	return (
		<MySuspense>
			<Auth />
		</MySuspense>
	)
}
