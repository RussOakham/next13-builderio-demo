'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { NavigationMenuLink } from '../ui/navigation-menu'

const NavListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
	({ children, className, href, title, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<Link
						ref={ref}
						href={String(href)}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
							className,
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</Link>
				</NavigationMenuLink>
			</li>
		)
	},
)

NavListItem.displayName = 'NavListItem'

export default NavListItem
