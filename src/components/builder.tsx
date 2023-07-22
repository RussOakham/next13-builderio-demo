'use client'

import { BuilderComponent, useIsPreviewing } from '@builder.io/react'
import { builder, BuilderContent } from '@builder.io/sdk'
import DefaultErrorPage from 'next/error'

interface BuilderPageProps {
	content?: BuilderContent
}

// Replace with your Public API Key
builder.init('3814bd0c1f9245cd9bfd8597f36b266b')

const RenderBuilderContent = ({ content }: BuilderPageProps) => {
	// Call the useIsPreviewing hook to determine if
	// the page is being previewed in Builder
	const isPreviewing = useIsPreviewing()
	// If `content` has a value or the page is being previewed in Builder,
	// render the BuilderComponent with the specified content and model props.
	if (content || isPreviewing) {
		return <BuilderComponent content={content} model="page" />
	}
	// If the `content` is falsy and the page is
	// not being previewed in Builder, render the
	// DefaultErrorPage with a 404.
	return <DefaultErrorPage statusCode={404} />
}

export default RenderBuilderContent
