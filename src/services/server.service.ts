export const addUserToWS = async (access: string, invite_token: string) => {
	try {
		const res = await fetch(process.env.URL_API + '/add_user', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${access}`
			},
			body: JSON.stringify({ invite_token })
		})
		return res
	} catch (error) {
		console.log(error)
	}
}
