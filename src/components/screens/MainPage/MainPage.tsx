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
		<div>
			<div className={styles.backgraoundHeader}>
				<Header />

				<div className={styles.blockWithButton}>
					<div className={styles.firstScreenText}>
						<h1>Проверьте письменную часть ЕГЭ по английскому за 2 минуты</h1>

						<div className={styles.lines}>
							<p>Получите такую же точность, как у эксперта</p>
							<p>Проверяйте задания 37 и 38 с помощью ИИ</p>
							<p>Экономьте 3+ часа в день на проверку</p>
						</div>
					</div>

					{width > 767 && (
						<Button
							color='white'
							size='small'
							text='Попробовать'
							onClick={handleTryButtonClick}
						/>
					)}
				</div>

				<Image
					src={A_FirstIllustration}
					alt='Иллюстрация к первому слайду'
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

			<div id='how-it-works'>
				<HowItWorksSection />
			</div>

			<TelegramBotSection />

			<div id='benefits'>
				<BenefitsSection />
			</div>

			<FeedbackSection />

			<APISection />

			<div id='tariffs'>
				<TariffSection />
			</div>

			<TryBotSection />

			<Footer />
		</div>
	)
}

export default MainPage
