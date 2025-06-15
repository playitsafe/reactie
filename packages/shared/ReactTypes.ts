export type Type = any
export type Key = any
export type Ref = any
export type Props = any

export interface ReactElement {
	$$typeof: symbol | number
	type: Type
	key: Key
	ref: Ref
	props: Props
	__mark?: string // Custom identifier for this project, can be removed in production
}
