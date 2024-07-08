import { useParams } from 'next/navigation'
import { useWorkspaces } from './workspace-hooks/useWorkspaces'

export function useIsAdmin() {
	const { items: Workspaces } = useWorkspaces()
	const params = useParams<{ workspace_id: string }>()

	const isAdmin =
		(Workspaces &&
			Workspaces.find(ws => ws.id == Number(params.workspace_id))?.is_admin) ||
		false
	return isAdmin
}
