'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
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
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

	return (
		<section className="h-[70vh] w-full overflow-hidden">
			<div className="relative w-screen" style={{ height: 'inherit ' }}>
				<motion.div
					className="absolute -z-10 w-full"
					style={{ height: 'inherit ', y }}
				>
					<Image
						src={imageSrc}
						alt={imageAlt}
						height={2000}
						width={2000}
						style={{ width: '100%' }}
						priority
						className="h-full object-cover object-bottom"
					/>
				</motion.div>

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
		</section>
	)
}

export default HeroBannerLarge
