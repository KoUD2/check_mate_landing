import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from 'react'

export interface ISocialMedia
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string
	imageSrc: string
	header: string
	func: MouseEventHandler<HTMLButtonElement>
}
