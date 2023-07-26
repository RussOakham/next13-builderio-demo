'use client'

import { IoCarSportSharp } from 'react-icons/io5'
import Link from 'next/link'

import { FeatureNavItem, MainNavItem, SiteEventSwitch } from '@/types'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu'

import DarkModeToggle from './dark-mode-toggle'
import NavListFeatureItem from './nav-list-feature-item'
import NavListItem from './nav-list-item'
import SiteLogo from './site-logo'

interface MainNavProps {
	featuredNavItem?: FeatureNavItem
	items?: MainNavItem[]
	siteEventSwitch?: SiteEventSwitch
}

const MainNav = ({ featuredNavItem, items, siteEventSwitch }: MainNavProps) => {
	let firstMenuItems

	if (items?.[0]?.items) {
		firstMenuItems = items[0].items
	}

	let secondMenuItems

	if (items?.[1]?.items) {
		secondMenuItems = items[1].items
	}

	return (
		<div className="flex w-full py-3">
			<SiteLogo title="Steeleford" />
			<NavigationMenu className="h-full">
				<NavigationMenuList className="justify-between">
					<div className="flex">
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-auto">
								{items?.[0]?.title}
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									{featuredNavItem ? (
										<NavListFeatureItem
											label={featuredNavItem.label}
											description={featuredNavItem.description}
											icon={<IoCarSportSharp className="h-6 w-6" />}
										/>
									) : null}

									{firstMenuItems
										? firstMenuItems.map((item) => (
												<NavListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</NavListItem>
										  ))
										: null}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>{items?.[1]?.title}</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{secondMenuItems
										? secondMenuItems.map((item) => (
												<NavListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</NavListItem>
										  ))
										: null}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</div>

					<div className="flex">
						{siteEventSwitch ? (
							<NavigationMenuItem>
								<Link href={siteEventSwitch.href} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{siteEventSwitch.label}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						) : null}

						<NavigationMenuItem className="ml-auto">
							<DarkModeToggle />
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Sign In
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

export default MainNav
