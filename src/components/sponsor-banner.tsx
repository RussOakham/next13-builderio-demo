import Image from 'next/image'
import Link from 'next/link'

import { Sponsor } from '@/types'

import Container from './ui/container'

interface SponsorBannerProps {
	sponsors: Sponsor[]
}

const SponsorBanner = ({ sponsors }: SponsorBannerProps) => {
	return (
		<Container>
			<div className="flex items-center gap-x-3">
				{sponsors.map((sponsor) => (
					<Link href={sponsor.websiteUrl} key={sponsor.name}>
						<Image
							key={sponsor.name}
							src={sponsor.logoUrl}
							alt={sponsor.name}
							height={250}
							width={250}
							className="rounded-md"
						/>
					</Link>
				))}
			</div>
		</Container>
	)
}

export default SponsorBanner
