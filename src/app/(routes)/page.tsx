import Image from 'next/image'

const Homepage = () => {
	return (
		<div className="h-[70vh] w-full">
			<div className="relative w-screen" style={{ height: 'inherit ' }}>
				<div className="absolute -z-10 w-full" style={{ height: 'inherit ' }}>
					<Image
						src="/images/heroes/steeleford-green-lotus.webp"
						alt="Steeleford Green Lotus"
						height={2000}
						width={2000}
						priority
						className="h-full object-cover object-center"
					/>
				</div>

				<div className="relative flex h-full flex-col items-center justify-center">
					<div className="flex max-w-lg flex-col items-center">
						<Image
							src="/images/logos/Steeleford-Prime-Logo-Red.webp"
							alt="Steeleford Supercar Show"
							width={400}
							height={300}
						/>
						<div className="text-center font-bold text-white">
							<h1 className="sr-only hidden">Steeleford Supercar Show</h1>
							<h3 className="mb-4 text-4xl md:text-7xl">2nd July 2023.</h3>
							<p className="text-sm md:text-2xl">
								Thank you all so much for coming!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
