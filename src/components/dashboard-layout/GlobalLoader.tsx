'use client'

import { CircularProgress } from '@mui/material'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? <CircularProgress /> : null
}
