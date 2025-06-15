const supportsSymbols =
	typeof Symbol === 'function' && typeof Symbol.for === 'function'

// Whys symbols? Need to ensure the types won’t be abused，they need to be unique
export const REACT_ELEMENT_TYPE = supportsSymbols
	? Symbol.for('react.element')
	: 0xeac7
