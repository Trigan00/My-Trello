'use client'

import { usePathname } from 'next/navigation'

export default function AllBoards() {
	const pathname = usePathname()

	return (
		<div>
			pathname: <b>{pathname}</b>
		</div>
	)
}
