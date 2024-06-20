import { NextRequest, NextResponse } from 'next/server'
import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'
import { authService } from './services/auth.service'
import { addUserToWS, getToken } from './services/server.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	// const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const isAuthPage = url.includes('/auth')
	const isInvite = url.includes('/invite')

	if (isInvite) {
		const invite_token =
			request.nextUrl.searchParams.get(EnumTokens.INVITE_TOKEN) || ''

		// const tokenResponse = await getToken()
		// const tokenResponseData = await tokenResponse?.json()
		// console.log(tokenResponse.status)
		// if (tokenResponse.status == 201) {
		// 	const res = await addUserToWS(
		// 		tokenResponseData.data.access,
		// 		invite_token
		// 	)
		// 	return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))

		const res = await addUserToWS(accessToken || '', invite_token)
		if (res.status == 201) {
			return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
		} else if (res.status == 401) {
			return NextResponse.redirect(
				new URL(`/auth?invite_token=${invite_token}`, url) // это
			)
		} else {
			return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
		}
	}

	if (isAuthPage && accessToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!accessToken) {
		cookies.delete(EnumTokens.ACCESS_TOKEN)
		return NextResponse.redirect(new URL('/auth', url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*', '/auth/:path', '/invite']
}
