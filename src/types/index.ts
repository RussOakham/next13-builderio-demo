import { icons } from 'react-icons'

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	icon?: keyof typeof icons
	label?: string
	description?: string
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
	items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type SideNavItem = NavItemWithChildren

export type FeatureNavItem = {
	label: string
	description: string
}

export type SiteEventSwitch = {
	label: string
	href: string
}

export interface Sponsor {
	name: string
	logoUrl: string
	websiteUrl: string
	description?: string
}
