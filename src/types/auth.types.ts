export interface IAuthForm {
	email: string
	password: string
	username?: string
}

export interface IAuthRecoveryForm extends IAuthForm {
	confirm_password: string
}

export interface IUser {
	id: number
	email: string
	username?: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
