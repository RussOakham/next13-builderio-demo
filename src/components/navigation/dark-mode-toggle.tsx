'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '../ui/button'

const DarkModeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			{theme === 'light' ? (
				<Sun
					className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-0"
					aria-hidden="true"
				/>
			) : (
				<Moon
					className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					aria-hidden="true"
				/>
			)}

			<span className="sr-only">Toggle Theme</span>
		</Button>
	)
}

export default DarkModeToggle
