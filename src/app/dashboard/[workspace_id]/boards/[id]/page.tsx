export default function Board({
	params
}: {
	params: { workspace_id: string; id: string }
}) {
	return (
		<div>
			{params.workspace_id} <br /> {params.id}
		</div>
	)
}
