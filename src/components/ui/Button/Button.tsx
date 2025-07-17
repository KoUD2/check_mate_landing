'use client'

import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Button.module.css'
import { IButton } from './Button.props'

const Button: FC<IButton> = ({
	color,
	size,
	text,
	pictureSrc,
	onClick,
	className,
	...props
}) => {
	return (
		<button
			className={cn(
				styles.button,
				{
					[styles.buttonOrange]: color === 'orange',
				},
				{
					[styles.buttonSmall]: size === 'small',
				},
				{
					[styles.buttonLarge]: size === 'large',
				},
				className
			)}
			onClick={onClick}
			{...props}
		>
			{pictureSrc ? (
				<Image src={pictureSrc} alt='логотип' className={styles.imageLogo} />
			) : null}
			{text}
		</button>
	)
}

export default Button
