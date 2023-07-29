'use client'

import { useState } from 'react'
import { IoCarSportOutline } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import siteConfig from '@/config/site'
import useWindowDimension from '@/lib/hooks/useWindowDimension'
import { MainNavItem } from '@/types'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

import NavListItemMobile from './nav-list-item-mobile'

const { name } = siteConfig

interface MobileNavProps {
	mainNavItems?: MainNavItem[]
}

const MobileNav = ({ mainNavItems }: MobileNavProps) => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const { width } = useWindowDimension()

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
				>
					<LuMenu className="h-6 w-6" />
					<span className="sr-only">Toggle Navigation</span>
				</Button>
			</SheetTrigger>
			{width < 1024 ? (
				<SheetContent side="left">
					<div className="px-1 py-2">
						<Link
							aria-label="Home"
							href="/"
							className="flex items-center"
							onClick={() => setIsOpen(false)}
						>
							<IoCarSportOutline className=",r-2 h-4 w-4" aria-hidden="true" />
							<span className="sr-only">{name}</span>
						</Link>
					</div>
					<ScrollArea>
						<div className="pl-1 pr-7">
							<Accordion type="single" collapsible className="w-full">
								{mainNavItems?.map((item) => (
									<AccordionItem key={item.title} value={item.title}>
										<AccordionTrigger className="text-sm capitalize">
											{item.title}
										</AccordionTrigger>

										<AccordionContent>
											<div className="flex flex-col space-y-2">
												{item.items?.map((subItem) =>
													subItem.href ? (
														<NavListItemMobile
															key={subItem.title}
															href={subItem.href}
															pathname={pathname}
															setIsOpen={setIsOpen}
															disabled={subItem.disabled}
														>
															{subItem.title}
														</NavListItemMobile>
													) : (
														<div
															key={subItem.title}
															className="text-foreground/70 transition-colors"
														>
															{subItem.title}
														</div>
													),
												)}
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</ScrollArea>
				</SheetContent>
			) : null}
		</Sheet>
	)
}

export default MobileNav
