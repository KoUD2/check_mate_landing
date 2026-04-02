import Image from 'next/image'
import { FC } from 'react'
import styles from './UserCard.module.css'
import { IUserCard } from './UserCard.props'

const UserCard: FC<IUserCard> = ({ smallText, header, imageSrc }) => {
	return (
		<article className={styles.userCard}>
			<div className={styles.cardHeading}>
				<div className={styles.tip}>
					<p>{smallText}</p>
				</div>

				<h3>{header}</h3>
			</div>

			<Image
				src={imageSrc}
				alt={`Иллюстрация — CheckMate для категории: ${header}`}
				className={styles.userImage}
				draggable={false}
			/>
		</article>
	)
}

export default UserCard
