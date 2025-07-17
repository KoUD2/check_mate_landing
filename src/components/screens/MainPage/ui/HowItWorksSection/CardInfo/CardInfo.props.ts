import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'

export interface ICardInfo
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	number: number
	header: string
	description: string
	children: ReactElement
}
