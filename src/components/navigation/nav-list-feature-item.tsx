/* eslint-disable react/jsx-no-useless-fragment */

'use client'

import { IconType } from 'react-icons'

import { NavigationMenuLink } from '../ui/navigation-menu'

interface NavListFeatureItemProps {
	description: string
	icon: IconType | JSX.Element
	label: string
}

const NavListFeatureItem = ({
	description,
	icon,
	label,
}: NavListFeatureItemProps) => {
	return (
		<li className="row-span-3">
			<NavigationMenuLink asChild>
				<a
					href="/"
					aria-label={`Go to ${label}`}
					className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
				>
					<>{icon}</>
					<div className="mb-2 mt-4 text-lg font-medium">{label}</div>
					<p className="text-sm leading-tight text-muted-foreground">
						{description}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
}

export default NavListFeatureItem
