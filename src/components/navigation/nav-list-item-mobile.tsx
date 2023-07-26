'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NavListItemMobileProps {
	children: React.ReactNode
	disabled?: boolean
	href: string
	pathname: string
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavListItemMobile = ({
	children,
	disabled,
	href,
	pathname,
	setIsOpen,
}: NavListItemMobileProps) => {
	return (
		<Link
			href={href}
			className={cn(
				'text-foreground/70 transition-colors hover:text-foreground',
				pathname === href && 'text-foreground',
				disabled && 'pointer-events-none opacity-60',
			)}
			onClick={() => setIsOpen(false)}
		>
			{children}
		</Link>
	)
}

export default NavListItemMobile
