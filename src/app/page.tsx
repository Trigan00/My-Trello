'use client'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useRouter } from 'next/navigation'

export default function Home() {
	const { push } = useRouter()
	return (
		<div>
			<button onClick={() => push(DASHBOARD_PAGES.HOME)}>DASHBOARD</button>
		</div>
	)
}
