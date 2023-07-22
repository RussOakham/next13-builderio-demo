import { Roboto, Urbanist } from 'next/font/google'

export const roboto = Roboto({
	display: 'swap',
	subsets: ['latin'],
	variable: '--roboto',
	weight: ['300', '400', '500', '700'],
})

export const urbanist = Urbanist({
	display: 'swap',
	subsets: ['latin'],
	variable: '--urbanist',
	weight: ['300', '400', '500', '700'],
})
