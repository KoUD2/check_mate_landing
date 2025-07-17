'use client'

import useWindowSize from '@/hooks/useWindowSize'
import A_ChatBubbles from '@/shared/images/A_ChatBubbles.svg'
import A_ImageAdv2 from '@/shared/images/A_ImageAdv2.svg'
import A_Rocket from '@/shared/images/A_Rocket.svg'
import benefit1 from '@/shared/images/benefit1.svg'
import Q_Iphone from '@/shared/images/Q_Iphone.png'
import Subtract from '@/shared/images/Subtract.svg'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './BenefitsSection.module.css'

const BenefitsSection: FC = () => {
	const { width } = useWindowSize()

	return (
		<div className={styles.benefitsSection}>
			<h2>Ускорьте проверку заданий с Checkmate</h2>

			<div className={styles.advantagesCards}>
				<div className={styles.cardsRow}>
					<div className={styles.card}>
						<h3>Больше времени на работу с учениками</h3>

						{width <= 767 && (
							<p>Делегируйте рутинную проверку заданий умному помощнику</p>
						)}

						<Image
							src={benefit1}
							alt='Больше времени на работу с учениками'
							draggable={false}
						/>

						{width > 767 && (
							<p>Делегируйте рутинную проверку заданий умному помощнику</p>
						)}
					</div>

					<div className={styles.card}>
						<h3 className={styles.headerWidth}>Проверка по критериям ФИПИ</h3>

						{width <= 767 && (
							<p className={styles.topMessage}>
								Учитываем методические рекомендации
							</p>
						)}

						<div className={styles.fullMessage}>
							<Image src={Subtract} alt='Часть сообщения' />
							<div className={styles.message}>
								<p>Despite I don&apos;t have much time for cooking</p>

								<div>
									<p>К0</p>
								</div>
							</div>
						</div>

						<Image
							src={A_ChatBubbles}
							alt='Проверка по критериям ФИПИ'
							draggable={false}
							className={styles.image1}
						/>

						<Image
							src={A_ImageAdv2}
							alt='Проверка по критериям ФИПИ'
							draggable={false}
							className={styles.image2}
						/>

						{width > 767 && (
							<p className={styles.topMessage}>
								Учитываем методические рекомендации
							</p>
						)}
					</div>
				</div>

				<div className={cn(styles.card, styles.card2)}>
					<h3>Такая же точность, как у эксперта ЕГЭ</h3>

					{width <= 767 && (
						<p>
							Точная и детальная проверка за счёт дообучения модели на реальных
							работах
						</p>
					)}

					<Image
						src={A_Rocket}
						alt='Такая же точность, как у эксперта ЕГЭ'
						draggable={false}
					/>

					{width > 767 && (
						<p>
							Точная и детальная проверка за счёт дообучения модели на реальных
							работах
						</p>
					)}

					<Image
						src={Q_Iphone}
						alt='Такая же точность, как у эксперта ЕГЭ'
						className={styles.handImage}
						draggable={false}
					/>
				</div>
			</div>
		</div>
	)
}

export default BenefitsSection
