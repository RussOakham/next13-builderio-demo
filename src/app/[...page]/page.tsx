import { builder } from '@builder.io/sdk'

import RenderBuilderContent from '@/components/builder'

// Replace with your Public API Key
builder.init('3814bd0c1f9245cd9bfd8597f36b266b')

interface PageProps {
	params: {
		page: string[]
	}
}

const Page = async (props: PageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const content = await builder
		// Get the page content from Builder with the specified options
		.get('page', {
			userAttributes: {
				// Use the page path specified in the URL to fetch the content
				urlPath: `/${props?.params?.page?.join('/') || ''}`,
			},
			// Set prerender to false to return JSON instead of HTML
			prerender: false,
		})
		// Convert the result to a promise
		.toPromise()

	return (
		<>
			{/* Render the Builder page */}
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<RenderBuilderContent content={content} />
		</>
	)
}

export default Page
