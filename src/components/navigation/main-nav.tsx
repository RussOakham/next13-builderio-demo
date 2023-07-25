'use client'

import { IoCarSportSharp } from 'react-icons/io5'
import Link from 'next/link'

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

const MainNav = () => {
	return (
		<div className="flex py-3">
			<SiteLogo title="Steeleford" />
			<NavigationMenu>
				<NavigationMenuList className="justify-between">
					<div className="flex">
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-auto">
								Supercar Show
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<NavListFeatureItem
										label="Steeleford Supercar Show"
										description="Much loved annual show that brings together all kinds of interesting and rare supercars from the south of	England."
										icon={<IoCarSportSharp className="h-6 w-6" />}
									/>
									<NavListItem title="Partners">
										Find our about our our sponsorship opportunities
									</NavListItem>
									<NavListItem title="Scuderia Prestige">
										Our 2023 Show Owner’s Enclosure Host, Partner & Sponsor.
									</NavListItem>
									<NavListItem title="Four Marks Supercar Club">
										South England based high-end sports car club and headline
										sponsor
									</NavListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Information</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									<NavListItem title="Supercar Display Application">
										Apply to display your supercar in our 2023 show paddock
									</NavListItem>
									<NavListItem title="Exhibit">
										We are pleased to offer a range of exhibitor options
									</NavListItem>
									<NavListItem title="Media Application">
										Naturally photogenic and we welcome all media to be a part
										of the day
									</NavListItem>
									<NavListItem title="Getting Here">
										Find local travel options to get to our event
									</NavListItem>
									<NavListItem title="FAQ">
										General information about the event to help you plan your
										day
									</NavListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</div>

					<div className="flex">
						<NavigationMenuItem>
							<Link href="/superhillclimb" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Hill Climb 2023
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
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
