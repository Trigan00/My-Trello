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
	const isHomePage = url.includes('/home')
	const isInvite = url.includes('/invite')

	if (isInvite) {
		const invite_token =
			request.nextUrl.searchParams.get(EnumTokens.INVITE_TOKEN) || ''

		const res = await addUserToWS(accessToken || '', invite_token)
		if (res.status == 201) {
			return NextResponse.redirect(new URL(DASHBOARD_PAGES.DASHBOARD, url))
		} else if (res.status == 401) {
			return NextResponse.redirect(
				new URL(`/auth?invite_token=${invite_token}`, url) // это
			)
		} else {
			return NextResponse.redirect(new URL(DASHBOARD_PAGES.DASHBOARD, url))
		}
	}

	if (accessToken && (isAuthPage || isHomePage)) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.DASHBOARD, url))
	}

	if (isAuthPage || isHomePage) {
		return NextResponse.next()
	}

	if (!accessToken) {
		cookies.delete(EnumTokens.ACCESS_TOKEN)
		return NextResponse.redirect(new URL('/home', url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*', '/auth/:path', '/invite', '/home']
}
