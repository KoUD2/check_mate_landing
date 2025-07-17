import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IFeedbackCard
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	ImageSrc: StaticImageData
	personName: string
	postion: string
	review: string
}
