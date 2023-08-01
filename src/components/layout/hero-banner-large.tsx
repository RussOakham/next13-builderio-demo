import Image from 'next/image'

interface HeroBannerLargeProps {
	imageSrc: string
	imageAlt: string
	logoSrc?: string
	logoAlt?: string
	children?: React.ReactNode
}

const HeroBannerLarge = ({
	children,
	imageAlt,
	imageSrc,
	logoAlt,
	logoSrc,
}: HeroBannerLargeProps) => {
	return (
		<div className="h-[70vh] w-full">
			<div className="relative w-screen" style={{ height: 'inherit ' }}>
				<div className="absolute -z-10 w-full" style={{ height: 'inherit ' }}>
					<Image
						src={imageSrc}
						alt={imageAlt}
						height={2000}
						width={2000}
						priority
						className="h-full object-cover object-center"
					/>
				</div>

				<div className="relative flex h-full flex-col items-center justify-center">
					<div className="flex max-w-lg flex-col items-center">
						{logoSrc ? (
							<Image
								src={logoSrc}
								alt={logoAlt ?? ''}
								width={400}
								height={295}
								priority
								style={{ width: 'auto', height: 'auto' }}
							/>
						) : null}

						<div className="text-center font-bold text-white">{children}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroBannerLarge
