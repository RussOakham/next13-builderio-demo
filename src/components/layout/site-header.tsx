import siteConfig from '@/config/site'

import MainNav from '../navigation/main-nav'

const {
	supercarShow: { mainNav, mainNavFeature, siteEventSwitch },
} = siteConfig

const SiteHeader: React.FC = () => {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center">
				<MainNav
					items={mainNav}
					featuredNavItem={mainNavFeature}
					siteEventSwitch={siteEventSwitch}
				/>
			</div>
		</header>
	)
}

export default SiteHeader
