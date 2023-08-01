'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

import useIsMounted from '@/lib/hooks/useIsMounted'

interface AppThemeProviderProps extends ThemeProviderProps {}

const ThemeProvider = ({ children, ...props }: AppThemeProviderProps) => {
	const isMounted = useIsMounted()

	if (!isMounted) return null

	return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export default ThemeProvider
