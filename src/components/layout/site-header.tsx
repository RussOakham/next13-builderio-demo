'use client'

import siteConfig from '@/config/site'
import useWindowDimension from '@/lib/hooks/useWindowDimension'

import MainNav from '../navigation/main-nav'
import MobileNav from '../navigation/mobile-nav'

const {
	supercarShow: { mainNav, mainNavFeature, siteEventSwitch },
} = siteConfig

const SiteHeader: React.FC = () => {
	const { width } = useWindowDimension()

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center">
				{width > 1024 ? (
					<MainNav
						items={mainNav}
						featuredNavItem={mainNavFeature}
						siteEventSwitch={siteEventSwitch}
					/>
				) : (
					<MobileNav mainNavItems={mainNav} />
				)}
			</div>
		</header>
	)
}

export default SiteHeader
