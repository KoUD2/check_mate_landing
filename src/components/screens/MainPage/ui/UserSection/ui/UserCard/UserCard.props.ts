import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IUserCard
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	smallText: string
	header: string
	imageSrc: string
}
