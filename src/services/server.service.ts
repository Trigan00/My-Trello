export const addUserToWS = async (access: string, invite_token: string) => {
	try {
		const res = await fetch(process.env.URL_API + '/workspaces/members/', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${access}`
			},
			body: invite_token
		})
		return res
	} catch (error) {
		console.log(error)
	}
}
