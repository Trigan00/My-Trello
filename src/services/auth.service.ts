import { IAuthForm, IAuthRecoveryForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async main(
		type: 'signin' | 'signup',
		data: IAuthForm,
		invite_token: string | null
	) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}/`, {
			...data,
			invite_token
		})
		if (response.data.access && type === 'signin')
			saveTokenStorage(response.data.access)
		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/token/refresh/'
		)

		if (response.data.access) saveTokenStorage(response.data.access)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout/')

		if (response.data) removeFromStorage()

		return response
	},

	async recovery(
		type: 'forgotpassword' | 'resetpassword',
		data: IAuthRecoveryForm,
		token: string | null
	) {
		const response = await axiosClassic.post<true>(
			`/auth/${type}/`,
			type === 'forgotpassword'
				? { email: data.email }
				: { password: data.password, token }
		)
		return response
	}
}
