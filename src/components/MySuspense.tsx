'use client'

import { Suspense } from 'react'

export default function MySuspense({
	children
}: {
	children: React.ReactNode
}) {
	return <Suspense>{children}</Suspense>
}
