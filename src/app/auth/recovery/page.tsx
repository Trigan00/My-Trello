import type { Metadata } from 'next'
import Recovery from './Recovery'

export const metadata: Metadata = {
	title: 'Password recovery'
}

export default function AuthPage() {
	return <Recovery />
}
