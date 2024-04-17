export enum ROLES {
	ADMIN = 'admin',
	EMPLOYEE = 'employee',
	OBSERVER = 'observer'
}

export interface IUser {
	id: number
	email: string
	username: string
	role: ROLES
}

export interface IAuthForm {
	email: string
	password: string
	username?: string
}

export interface IAuthRecoveryForm extends IAuthForm {
	confirm_password: string
}

export interface IAuthResponse {
	access: string
	user: IUser
	message: string
}

export interface IGetMembersResponse {
	users: IUser[]
}
