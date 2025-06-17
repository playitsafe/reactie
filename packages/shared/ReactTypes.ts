export type Type = any
export type Key = any
export type Ref = any
export type Props = any
/** div, h1, h2, a, p ... */
export type ElementType = any

export interface ReactElementType {
	$$typeof: symbol | number
	type: Type
	key: Key
	ref: Ref
	props: Props
	__mark?: string // Custom identifier for this project, can be removed in production
}
