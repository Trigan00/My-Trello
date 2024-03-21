export interface IAuthForm {
	email: string
	password: string
}

export interface IAuthRecoveryForm extends IAuthForm {
	confirm_password: string
}

export interface IUser {
	id: number
	name?: string
	email: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
