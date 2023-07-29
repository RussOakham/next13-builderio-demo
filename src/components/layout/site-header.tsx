'use client'

import Link from 'next/link'

import siteConfig from '@/config/site'
import { cn } from '@/lib/utils'

import DarkModeToggle from '../navigation/dark-mode-toggle'
import MainNav from '../navigation/main-nav'
import MobileNav from '../navigation/mobile-nav'
import { buttonVariants } from '../ui/button'

const {
	supercarShow: { mainNav, mainNavFeature, siteEventSwitch },
} = siteConfig

const SiteHeader: React.FC = () => {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 w-full items-center justify-between">
				<MainNav items={mainNav} featuredNavItem={mainNavFeature} />

				<MobileNav mainNavItems={mainNav} />

				<nav>
					<div className="flex items-center gap-3">
						{siteEventSwitch ? (
							<Link href={siteEventSwitch.href}>
								<div
									className={cn(
										buttonVariants({
											variant: 'outline',
											size: 'sm',
										}),
										'font-bold',
									)}
								>
									{siteEventSwitch.label}
									<span className="sr-only">
										{`Go to ${siteEventSwitch.label}`}
									</span>
								</div>
							</Link>
						) : null}
						<DarkModeToggle />
						<Link href="/sign-in">
							<div
								className={cn(
									buttonVariants({
										variant: 'default',
										size: 'sm',
									}),
									'font-bold',
								)}
							>
								Sign In
								<span className="sr-only">Sign In</span>
							</div>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default SiteHeader
