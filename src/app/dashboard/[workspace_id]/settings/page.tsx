import { Metadata } from 'next'
import { NameChanger } from './NameChanger'
import { Users } from './Users'
import { Delete } from './Delete'

export const metadata: Metadata = {
	title: 'Settings'
}

export default function Settings({
	params
}: {
	params: { workspace_id: number }
}) {
	return (
		<>
			<NameChanger workspace_id={params.workspace_id} />
			<Users workspace_id={params.workspace_id} />
			<Delete workspace_id={params.workspace_id} />
		</>
	)
}
