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
		try {
			const tokenResponse = await getToken()
			const tokenResponseData = await tokenResponse?.json()
			if (tokenResponse.status == 201) {
				const res = await addUserToWS(
					tokenResponseData.data.access,
					invite_token
				)
				return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
			} else {
				return NextResponse.redirect(
					new URL(`/auth?invite_token=${invite_token}`, url) // это
				)
			}
		} catch (error: any) {
			return NextResponse.redirect(
				new URL(`/auth?invite_token=${invite_token}`, url)
			) //и это если access не получилось получить
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
