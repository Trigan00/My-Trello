import type { Metadata } from 'next'
import Recovery from './Recovery'
import MySuspense from '@/components/MySuspense'

export const metadata: Metadata = {
	title: 'Password recovery'
}

export default function AuthPage() {
	return (
		<MySuspense>
			<Recovery />
		</MySuspense>
	)
}
