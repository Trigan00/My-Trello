import { axiosWithAuth } from '@/api/interceptors'
import { IProfile } from '@/types/auth.types'

class AccountService {
	private BASE_URL = '/account'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>(this.BASE_URL + '/')
		return response
	}

	async editProfile(data: Omit<IProfile, 'email'>) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/`,
			{ ...data }
		)
		return response
	}

	async changePassword(data: { old_password: string; new_password: string }) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/change_password`,
			{ ...data }
		)
		return response
	}
}

export const accountService = new AccountService()
