import Image from 'next/image'

import HeroBannerLarge from '@/components/layout/hero-banner-large'
import SponsorBanner from '@/components/sponsor-banner'
import Container from '@/components/ui/container'
import Separator from '@/components/ui/separator'
import sponsors from '@/config/sponsors'

const Homepage: React.FC = () => {
	return (
		<>
			<HeroBannerLarge
				imageSrc="/images/heroes/steeleford-green-lotus.webp"
				imageAlt="Steeleford Green Lotus"
				logoSrc="/images/logos/Steeleford-Prime-Logo-Red.webp"
				logoAlt="Steeleford Supercar Show"
			>
				<h1 className="sr-only hidden">Steeleford Supercar Show</h1>
				<h3 className="mb-4 text-4xl md:text-7xl">2nd July 2023.</h3>
				<p className="text-sm md:text-2xl">Thank you all so much for coming!</p>
			</HeroBannerLarge>
			<Separator className="mb-4 mt-6 md:mb-6 md:mt-14" />
			<SponsorBanner sponsors={sponsors} />
			<Separator className="md:mt-66 mb-6 mt-4 md:mb-14" />
			<Container className="mb-6 flex gap-x-9 md:mb-14">
				<div className="w-1/2 text-center">
					<Image
						src="/images/supercars-on-display.webp"
						alt="Supercars on display at Standsted House"
						height={1000}
						width={1500}
						style={{ width: '100%' }}
						className="h-full rounded-md object-cover object-bottom"
					/>
				</div>
				<div className="flex w-1/2 flex-col gap-y-3">
					<h3 className="font-sans text-3xl font-medium">
						2023. Bigger, better, louder.
					</h3>
					<p>
						We are taking over Stansted House in Hampshire again for another
						huge display of supercars for our much loved annual supercar show.
					</p>
					<ul className="ml-4 list-inside list-disc">
						<li>Open access supercar paddock.</li>
						<li>VIP exclusive supercar zone.</li>
						<li>Supercar club parking.</li>
						<li>Renowned supercar &apos;sound-off&apos;.</li>
						<li>Exhibitor stands.</li>
						<li>Food trucks / drinks.</li>
						<li>Welcome to bring a picnic.</li>
						<li>Free public parking.</li>
						<li>Beautiful manor house grounds.</li>
					</ul>
					<p>
						We can’t wait to see you all in July! We know it’s going to be a
						good one!
					</p>
				</div>
			</Container>
			<Container>
				<Image
					src="/images/stansted-house-forecourt.webp"
					alt="Supercars on show outside Standsted House"
					height={1000}
					width={1500}
					style={{ width: '100%' }}
					className="h-full rounded-md object-cover object-bottom"
				/>
			</Container>
		</>
	)
}

export default Homepage
