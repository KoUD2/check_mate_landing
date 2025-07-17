import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IButton
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string
	color: 'white' | 'orange'
	size: 'small' | 'large'
	pictureSrc?: string
	onClick?: () => void
	className?: string
}
