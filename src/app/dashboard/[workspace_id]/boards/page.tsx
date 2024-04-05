import { Heading } from '@/components/UI/Heading'
import { Metadata } from 'next'
import { AllBoards } from './AllBoards'

export const metadata: Metadata = {
	title: 'Boards'
}

export default function Boards({
	params
}: {
	params: { workspace_id: number }
}) {
	return <AllBoards workspace_id={params.workspace_id} />
}
