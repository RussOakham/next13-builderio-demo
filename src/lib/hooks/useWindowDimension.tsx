import { useEffect, useState } from 'react'

interface WindowDimensions {
	width: number
	height: number
}

const useWindowDimension = (): WindowDimensions => {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
		width: 1025,
		height: 1025,
	})

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth !== undefined && window.innerHeight !== undefined) {
				setWindowDimensions({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			} else {
				setWindowDimensions({
					width: 1025,
					height: 1025,
				})
			}
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}

export default useWindowDimension
