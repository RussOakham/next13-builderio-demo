import { LuContact, LuFacebook, LuFileText, LuInstagram } from 'react-icons/lu'

import { FooterNav, MainNavItem } from '@/types'

const siteConfig = {
	name: 'Steeleford',
	description:
		'Steeleford Events are bringing two massive supercar shows to 2023!  Our much loved Supercar Show on the 2nd July in Hampshire.  As well as our new Supercar Hill Climb on the 20th August in Cheltenham.',
	url: 'https://www.steeleford.co.uk/',
	supercarShow: {
		mainNavFeature: {
			label: 'Steeleford Supercar Show',
			description:
				'Much loved annual show that brings together all kinds of interesting and rare supercars from the south of	England.',
		},
		mainNav: [
			{
				title: 'Supercar Show',
				items: [
					{
						title: 'Partners',
						href: '/supercarshow/partners',
						description: 'Find our about our our sponsorship opportunities.',
						items: [],
					},
					{
						title: 'Scuderia Prestige',
						href: '/supercarshow/scuderiaprestige',
						description:
							'Our 2023 Show Owner’s Enclosure Host, Partner & Sponsor.',
						items: [],
					},
					{
						title: 'Four Marks Supercar Club',
						href: '/supercarshow/fmsc',
						description:
							'South England based high-end sports car club and headline sponsor.',
						items: [],
					},
				],
			},
			{
				title: 'Information',
				items: [
					{
						title: 'Supercar Display Application',
						href: '/supercarshow/display-your-supercar',
						description:
							'Apply to display your supercar in our 2023 show paddock.',
						items: [],
					},
					{
						title: 'Exhibit',
						href: '/supercarshow/exhibit',
						description:
							'We are pleased to offer a range of exhibitor options.',
						items: [],
					},
					{
						title: 'Media Application',
						href: '/supercarshow/media',
						description:
							'Naturally photogenic and we welcome all media to be a part of the day.',
						items: [],
					},
					{
						title: 'Getting Here',
						href: '/supercarshow/gettinghere',
						description: 'Find local travel options to get to our event.',
						items: [],
					},
					{
						title: 'FAQ',
						href: '/supercarshow/faq',
						description:
							'General information about the event to help you plan your day.',
						items: [],
					},
				],
			},
		] satisfies MainNavItem[],
		siteEventSwitch: { label: 'Hill Climb 2023', href: '/superhillclimb' },
		footerNav: {
			copyright: 'Steeleford Events Ltd. All rights reserved.',
			links: [
				{
					title: 'Contact Us',
					href: '/supercarshow/contactus',
					external: false,
					icon: <LuContact className="h-6 w-6" />,
				},
				{
					title: 'Instagram',
					href: 'http://instagram.com/steeleford_events',
					external: true,
					icon: <LuInstagram className="h-6 w-6" />,
				},
				{
					title: 'Facebook',
					href: 'https://www.facebook.com/SteelefordSupercarShow',
					external: true,
					icon: <LuFacebook className="h-6 w-6" />,
				},
				{
					title: 'Terms & Conditions',
					href: '/terms-conditions',
					external: false,
					icon: <LuFileText className="h-6 w-6" />,
				},
			],
		} satisfies FooterNav,
	},
}

export default siteConfig
