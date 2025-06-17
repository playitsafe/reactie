/* eslint-disable no-unused-vars */
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType,
} from 'shared/ReactTypes'
/**
 * The return type of `jsx` or `React.createElement` is a type of `ReactElement`
 * So we define a constructor for that
 */

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props,
): ReactElementType {
	const element = {
		// Internal property to identify it's a 'React' element
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		// Custom identifier for this project
		__mark: 'aaron',
	}
	return element
}

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	// deal with `key` and `ref` properties respectively
	let key: Key = null
	let ref: Ref = null

	const props: Props = {}

	// Iterate over the config object, assign every property to `props`
	for (const prop in config) {
		const val = config[prop]
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val // Convert to string
			}
			continue
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val // Keep the ref as is
			}
			continue
		}
		// For other properties, need to check if it's a prop on the prototype
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val // Assign to props
		}
	}

	// maybeChildren
	const childrenLength = maybeChildren.length
	if (childrenLength) {
		// child, or [child, child, ...]
		if (childrenLength === 1) {
			// If there's only one child, assign it directly
			props.children = maybeChildren[0]
		} else {
			props.children = maybeChildren
		}
	}

	return ReactElement(type, key, ref, props)
}

export const jsxDEV = jsx
