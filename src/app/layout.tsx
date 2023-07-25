import type { Metadata } from 'next'

import MainNav from '@/components/navigation/main-nav'
import Container from '@/components/ui/container'
import ThemeProvider from '@/providers/theme-provider'

import { urbanist } from './fonts'

import './globals.css'

export const metadata: Metadata = {
	title: 'Steeleford',
	description:
		'Steeleford Events are bringing two massive supercar shows to 2023!  Our much loved Supercar Show on the 2nd July in Hampshire.  As well as our new Supercar Hill Climb on the 20th August in Cheltenham.',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className={urbanist.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Container className="h-full">
						<MainNav />
						{children}
					</Container>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
