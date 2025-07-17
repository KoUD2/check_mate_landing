'use client'

import Image from 'next/image'
import { FC } from 'react'
import styles from './SocialMedia.module.css'
import { ISocialMedia } from './SocialMedia.props'

const SocialMedia: FC<ISocialMedia> = ({ text, imageSrc, func, header }) => {
	return (
		<div className={styles.socialMedia}>
			<h3>{header}</h3>

			<button className={styles.buttonLinkSocialMedia} onClick={func}>
				<Image src={imageSrc} alt='Социальная сеть' />

				{text}
			</button>
		</div>
	)
}

export default SocialMedia
