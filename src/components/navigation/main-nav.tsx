'use client'

import { Award, Car } from 'lucide-react'
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
import NavListItem from './nav-list-item'

const MainNav = () => {
	return (
		<div className="flex py-3">
			<Link
				aria-label="Home"
				href="/"
				className="relative -top-[0.12rem] flex items-center space-x-2 px-4 py-2"
			>
				<Award className="h-6 w-6" />
				<span className="font-bold lg:inline-block">Steeleford</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList className="justify-between">
					<div className="flex">
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-auto">
								Supercar Show
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												href="/"
												aria-label="Home"
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											>
												<Car className="h-6 w-6" />
												<div className="mb-2 mt-4 text-lg font-medium">
													Steeleford Supercar Show
												</div>
												<p className="text-sm leading-tight text-muted-foreground">
													Much loved annual show that brings together all kinds
													of interesting and rare supercars from the south of
													England.
												</p>
											</a>
										</NavigationMenuLink>
									</li>
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
