/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useDocs, useCurrentDoc } from 'docz'
import { usePlatforms } from 'hooks'
import { get } from 'lodash/fp'

import * as styles from './styles'

const getHeadings = (route, docs) => {
	const doc = docs.find((doc) => doc.route === route)
	const headings = get('headings', doc)
	return headings ?? []
}

const getCurrentHash = () => {
	if (typeof window === 'undefined') {
		return ''
	}
	return window.location ? decodeURI(window.location.hash) : ''
}

export const NavLink = React.forwardRef(({ item, ...props }, ref) => {
	const docs = useDocs()
	const current = useCurrentDoc()
	const { currentPlatform } = usePlatforms()

	if (item.hidden) {
		return null
	}

	const to = item.route
	const headings = docs && getHeadings(to, docs)
	const isCurrent = item.route === current.route
	const showHeadings = isCurrent && headings && headings.length > 0
	const currentHash = getCurrentHash()
	return (
		<React.Fragment>
			<Link
				{...props}
				to={`${to}?platform=${currentPlatform}`}
				sx={styles.link}
				activeClassName="active"
				ref={ref}
			/>
			{showHeadings &&
				headings.map((heading) => (
					<Link
						key={heading.slug}
						to={`${to}?platform=${currentPlatform}#${heading.slug}`}
						sx={styles.smallLink}
						className={currentHash === `#${heading.slug}` ? 'active' : ''}
					>
						{heading.value}
					</Link>
				))}
		</React.Fragment>
	)
})
