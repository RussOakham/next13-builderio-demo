import type { Metadata } from 'next'

import MainNav from '@/components/navigation/main-nav'
import Container from '@/components/ui/container'
import siteConfig from '@/config/site'
import ThemeProvider from '@/providers/theme-provider'

import { urbanist } from './fonts'

import './globals.css'

const {
	name,
	description,
	supercarShow: { mainNav, mainNavFeature, siteEventSwitch },
} = siteConfig

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
		<html lang="en" suppressHydrationWarning>
			<body className={urbanist.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Container className="h-full">
						<MainNav
							items={mainNav}
							featuredNavItem={mainNavFeature}
							siteEventSwitch={siteEventSwitch}
						/>
						{children}
					</Container>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
