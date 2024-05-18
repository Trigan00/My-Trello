export const addUserToWS = async (access: string, invite_token: string) => {
	try {
		const res: any = await fetch(process.env.URL_API + 'workspaces/members/', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${access}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ invite_token })
		})
		return res
	} catch (error) {
		console.log(error)
	}
}

export const getToken = async () => {
	try {
		const res: any = await fetch(process.env.URL_API + 'auth/token/refresh/', {
			method: 'POST'
		})
		return res
	} catch (error) {
		console.log(error)
	}
}
