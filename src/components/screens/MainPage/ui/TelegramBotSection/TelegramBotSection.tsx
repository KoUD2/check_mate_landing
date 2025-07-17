'use client'

import Button from '@/components/ui/Button/Button'
import cn from 'classnames'
import { FC } from 'react'
import styles from './TelegramBotSection.module.css'

const TelegramBotSection: FC = () => {
	const handleTryButtonClick = () => {
		window.open('https://t.me/checkmate_ai_bot', '_blank')
	}

	return (
		<div className={styles.telegramBotSection}>
			<div className={styles.blockWithButton}>
				<div className={styles.headingGroup}>
					<h2>Попробуйте проверку в Telegram</h2>

					<div className={styles.lines}>
						<p>Проверка по актуальным критериям ФИПИ</p>
						<p>Checkmate учитывает все методические рекомендации</p>
					</div>
				</div>

				<Button
					color='orange'
					size='small'
					text='Перейти в бота'
					onClick={handleTryButtonClick}
					className={styles.buttonExp}
				/>
			</div>

			<div className={styles.cardsWrapper}>
				<div className={styles.cardInfo}>
					<h3>Обнаруженные ошибки</h3>

					<p>
						1. Композиционная/Структурная: Использована неожидаемая переходная
						фраза к своим вопросам (“You mentioned your uncle Keith”) вместо
						требуемой (“By the way...”).
					</p>
				</div>
				<div className={cn(styles.cardInfo, styles.cardInfo2)}>
					<div>
						<h3>Организация текста</h3>

						<p>К2</p>
					</div>

					<p>
						В письме используются простые связующие элементы (and, because,
						That&apos;s, I&apos;m travelling, I hope). Переходы
						между предложениями внутри абзацев логичны. Присутствуют фразы,
						связывающие ответ с вопросами адресата (“In your previous message
						you asked me about…”, “As for me”). Есть переход к новой теме (“You
						mentioned your uncle Keith”). Связность текста на хорошем уровне
						для неформального письма
					</p>
				</div>
				<div className={cn(styles.cardInfo, styles.cardInfo3)}>
					<div>
						<h3>Рекомендации</h3>

						<p>К3</p>
					</div>

					<p>
						Для соответствия формальным требованиям задания, используйте точные
						переходные фразы: “Regarding your questions,” перед ответами и ”By
						the way,” перед вашими вопросами
					</p>
				</div>
			</div>
		</div>
	)
}

export default TelegramBotSection
