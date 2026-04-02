'use client'

import UserSection from '@/components/screens/MainPage/ui/UserSection/UserSection'
import Button from '@/components/ui/Button/Button'
import useWindowSize from '@/hooks/useWindowSize'
import A_FirstIllustration from '@/shared/images/A_FirstIllustration.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './MainPage.module.css'
import APISection from './ui/APISection/APISection'
import BenefitsSection from './ui/BenefitsSection/BenefitsSection'
import FeedbackSection from './ui/FeedbackSection/FeedbackSection'
import Footer from './ui/Footer/Footer'
import Header from './ui/Header/Header'
import HowItWorksSection from './ui/HowItWorksSection/HowItWorksSection'
import TariffSection from './ui/TariffSection/TariffSection'
import TelegramBotSection from './ui/TelegramBotSection/TelegramBotSection'
import TryBotSection from './ui/TryBotSection/TryBotSection'

const MainPage: FC = () => {
	const { width } = useWindowSize()

	const handleTryButtonClick = () => {
		window.open('https://t.me/checkmate_ai_bot', '_blank')
	}

	return (
		<main>
			<div className={styles.backgraoundHeader}>
				<Header />

				<section className={styles.blockWithButton} aria-label="Главный экран">
					<div className={styles.firstScreenText}>
						<h1>Проверьте письменную часть ЕГЭ по английскому за 2 минуты</h1>

						<ul className={styles.lines} aria-label="Ключевые преимущества">
							<li>Получите такую же точность, как у эксперта</li>
							<li>Проверяйте задания 37 и 38 с помощью ИИ</li>
							<li>Экономьте 3+ часа в день на проверку</li>
						</ul>
					</div>

					{width > 767 && (
						<Button
							color='white'
							size='small'
							text='Попробовать'
							onClick={handleTryButtonClick}
						/>
					)}
				</section>

				<Image
					src={A_FirstIllustration}
					alt='Интерфейс платформы CheckMate — проверка заданий ЕГЭ по английскому'
					className={styles.illustration}
					draggable={false}
					priority
				/>

				{width <= 767 && (
					<Button
						color='white'
						size='large'
						text='Попробовать'
						onClick={handleTryButtonClick}
						className={styles.buttonExp}
					/>
				)}
			</div>

			<UserSection />

			<section id='how-it-works' aria-labelledby='how-it-works-heading'>
				<HowItWorksSection />
			</section>

			<TelegramBotSection />

			<section id='benefits' aria-labelledby='benefits-heading'>
				<BenefitsSection />
			</section>

			<FeedbackSection />

			<APISection />

			<section id='tariffs' aria-labelledby='tariffs-heading'>
				<TariffSection />
			</section>

			<TryBotSection />

			<Footer />
		</main>
	)
}

export default MainPage
