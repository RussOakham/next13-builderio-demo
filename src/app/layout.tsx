import type { Metadata } from 'next'

import SiteHeader from '@/components/layout/site-header'
import siteConfig from '@/config/site'
import ThemeProvider from '@/providers/theme-provider'

import { urbanist } from './fonts'

import './globals.css'

const { name, description } = siteConfig

export const metadata: Metadata = {
	title: name,
	description,
	icons: {
		icon: '/favicon.ico',
	},
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en-GB" suppressHydrationWarning>
			<body className={urbanist.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<SiteHeader />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
