'use Client'

import { IoCarSportOutline } from 'react-icons/io5'
import Link from 'next/link'

interface SiteLogoProps {
	title: string
}

const SiteLogo = ({ title }: SiteLogoProps) => {
	return (
		<Link
			aria-label="Home"
			href="/"
			className="relative -top-[0.12rem] flex items-center space-x-2 px-4 py-2"
		>
			<IoCarSportOutline className="h-6 w-6" />
			<span className="font-bold lg:inline-block">{title}</span>
		</Link>
	)
}

export default SiteLogo
