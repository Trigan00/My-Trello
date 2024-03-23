import type { Metadata } from 'next'
// import Recovery from './Recovery'
import RecoveryWrapper from './RecoveryWrapper'

export const metadata: Metadata = {
	title: 'Password recovery'
}

export default function AuthPage() {
	return <RecoveryWrapper />
}
