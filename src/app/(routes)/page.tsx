import HeroBannerLarge from '@/components/layout/hero-banner-large'

const Homepage: React.FC = () => {
	return (
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
	)
}

export default Homepage
