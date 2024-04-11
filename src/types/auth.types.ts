export interface IAuthForm {
	email: string
	password: string
	username?: string
}

export interface IAuthRecoveryForm extends IAuthForm {
	confirm_password: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

enum roles {
	ADMIN = 'admin',
	EMPLOYEE = 'employee',
	OBSERVER = 'observer'
}

export interface IUser {
	id: number
	email: string
	username: string
	role: roles
}
