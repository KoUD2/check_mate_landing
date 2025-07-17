import { FC } from 'react'
import styles from './CardInfo.module.css'
import { ICardInfo } from './CardInfo.props'

const CardInfo: FC<ICardInfo> = ({ number, header, description, children }) => {
	return (
		<div className={styles.cardInfo}>
			<div className={styles.headingCard}>
				<div className={styles.count}>
					<h3>{number}</h3>
				</div>

				<div className={styles.headerCard}>
					<h3>{header}</h3>
					<p>{description}</p>
				</div>
			</div>

			{children}
		</div>
	)
}

export default CardInfo
