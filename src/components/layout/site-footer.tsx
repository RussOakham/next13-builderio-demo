'use client'

import Link from 'next/link'

import { getFullYear } from '@/lib/utils'
import { FooterNav } from '@/types'

import { Button } from '../ui/button'
import Container from '../ui/container'
import Separator from '../ui/separator'

interface SiteFooterProps {
	footerNav: FooterNav
}

const SiteFooter = ({ footerNav }: SiteFooterProps) => {
	const year = getFullYear()

	return (
		<>
			<Separator className="mt-8" />
			<Container as="footer" aria-label="footer" className="my-2">
				<div className="flex h-20 items-center justify-center gap-x-5 align-middle md:h-28">
					{footerNav.links.map((link) => (
						<div
							key={link.href}
							className="group flex w-16 flex-col items-center justify-center"
						>
							<Button variant="ghost" size="icon" className="group">
								{link.external ? (
									<Link href={link.href} target="_blank" rel="noopener">
										{link.icon}
										<span className="sr-only">{link.title}</span>
									</Link>
								) : (
									<Link href={link.href}>
										{link.icon}
										<span className="sr-only">{link.title}</span>
									</Link>
								)}
							</Button>
							<p className="text-grey-400 truncate opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								{link.title}
							</p>
						</div>
					))}
				</div>
				<div className="flex justify-center">
					&copy;{` ${year}  ${footerNav.copyright}`}
				</div>
			</Container>
		</>
	)
}

export default SiteFooter
