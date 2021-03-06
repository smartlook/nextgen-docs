/** @jsx jsx*/

import { jsx } from 'theme-ui'
import MDX from '@mdx-js/runtime'

import { usePlatforms } from 'hooks'
import { useRuntimeComponents } from './useRuntimeComponents'

import * as styles from './styles'

const getMatch = (items, matchTo) =>
	items
		.split(',')
		.map((i) => i.trim())
		.includes(matchTo)

export const TextBlock = ({ visibleOn, invisibleOn, kind, children }) => {
	const { currentPlatform } = usePlatforms()
	const components = useRuntimeComponents()

	let isMatch = true

	if (visibleOn !== undefined) {
		isMatch = getMatch(visibleOn, currentPlatform)
	}

	if (invisibleOn !== undefined) {
		isMatch = !getMatch(invisibleOn, currentPlatform)
	}

	if (!isMatch) {
		return null
	}

	const getStyles = (kind) => {
		switch (kind) {
			case 'note':
				return styles.note

			case 'important':
				return styles.important

			case 'example':
				return styles.example

			default:
				return undefined
		}
	}

	return (
		<div sx={getStyles(kind)}>
			<MDX components={components}>{children}</MDX>
		</div>
	)
}
