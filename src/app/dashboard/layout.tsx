import DashboardLayoutWrapper from '@/components/dashboard-layout'

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
}
