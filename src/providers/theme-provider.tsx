'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

interface AppThemeProviderProps extends ThemeProviderProps {}

const ThemeProvider = ({ children, ...props }: AppThemeProviderProps) => {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export default ThemeProvider
