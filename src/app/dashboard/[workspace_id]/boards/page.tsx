export default function Boards({
	params
}: {
	params: { workspace_id: string }
}) {
	return <div>{params.workspace_id}</div>
}
