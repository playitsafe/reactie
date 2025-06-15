/* eslint-disable no-unused-vars */
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import type { Type, Key, Ref, Props, ReactElement } from 'shared/ReactTypes'
/**
 * The return type of `jsx` or `React.createElement` is a type of `ReactElement`
 * So we define a constructor for that
 */

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		// Internal property to identify it's a 'React' element
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		// Custom identifier for this project
		__mark: 'aaron'
	}
	return element
}
