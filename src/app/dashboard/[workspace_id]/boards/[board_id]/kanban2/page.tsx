import { Metadata } from 'next'
import KanbanBoard from './components/KanbanBoard'

export const metadata: Metadata = {
	title: 'test'
}

export default function Boards() {
	return <KanbanBoard />
}
