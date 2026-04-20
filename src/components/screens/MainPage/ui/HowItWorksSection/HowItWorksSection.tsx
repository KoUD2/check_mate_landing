'use client'

import useWindowSize from '@/hooks/useWindowSize'
import A_Bulb from '@/shared/images/A_Bulb.svg'
import A_ImageGraph from '@/shared/images/A_ImageGraph.svg'
import A_TaskImage from '@/shared/images/A_TaskImage.svg'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import CardInfo from './CardInfo/CardInfo'
import styles from './HowItWorksSection.module.css'

const HowItWorksSection: FC = () => {
	const { width } = useWindowSize()
	const sliderRef = useRef<HTMLDivElement>(null)
	const [currentCard, setCurrentCard] = useState(0)
	const [isMobile, setIsMobile] = useState(false)

	// Определяем мобилку через matchMedia — не зависит от дефолтного width: 1280
	useEffect(() => {
		const mq = window.matchMedia('(max-width: 1023px)')
		const onChange = (e: MediaQueryList | MediaQueryListEvent) => {
			setIsMobile(e.matches)
			setCurrentCard(0)
		}
		onChange(mq)
		mq.addEventListener('change', onChange)
		return () => mq.removeEventListener('change', onChange)
	}, [])

	const cards = [
		<CardInfo
			key={1}
			number={1}
			header='Составьте задание и отправьте ученику'
			description='Делегируйте рутинную проверку заданий умному помощнику'
		>
			<div className={styles.task}>
				<p>
					...I don&apos;t think it will be a problem for me to choose a good job
					in the future as I&apos;m really interested in foreign languages,
					cultures and countries and I hope I&apos;ll work as a translator or
					teacher of foreign languages some day. Have you already decided on
					your career? What job are you going to choose? Why?
				</p>
				<p>
					I&apos;ve lived in the USA my whole life but I&apos;d really love to
					travel to other countries.
				</p>
			</div>
		</CardInfo>,
		<CardInfo
			key={2}
			number={2}
			header='Получите выполненное задание'
			description='Получите вариант от ученика'
		>
			<div className={styles.wrapperSecondTask}>
				<div className={styles.secondTask}>
					<h3>Задание 38.2</h3>
					<p>
						...I don&apos;t think it will be a problem for me to choose a good
						job in the future as I&apos;m really interested in foreign
						languages, cultures and countries and I hope I&apos;ll work as...
					</p>
				</div>
				<Image src={A_Bulb} alt='Иллюстрация: получение задания от ученика' draggable={false} />
			</div>
		</CardInfo>,
		<CardInfo
			key={3}
			number={3}
			header='Загрузите файл с выполненным заданием'
			description='Или введите текст, или сфотографируйте бланк ответов'
		>
			<Image
				src={A_TaskImage}
				alt='Картинка'
				draggable={false}
				className={styles.imageCard3}
			/>
		</CardInfo>,
		<CardInfo
			key={4}
			number={4}
			header='Получите балл и подробный разбор работы'
			description='CheckMate автоматически оценит задание'
		>
			<div className={styles.rows}>
				<div className={styles.row}>
					<p className={styles.headerRow}>Всего баллов</p>
					<p className={styles.headerRow}>13</p>
				</div>
				<div className={styles.row}>
					<p>К1</p>
					<p>3</p>
				</div>
				<div className={styles.row}>
					<p>К2</p>
					<p>3</p>
				</div>
				<div className={styles.row}>
					<p>К3, К4, К5</p>
					<p>7</p>
				</div>
			</div>
		</CardInfo>,
		<CardInfo
			key={5}
			number={5}
			header='Дополните разбор или запишите рекомендации для ученика'
			description='Автоматический разбор всегда можно дополнить индивидуальными рекомендациями'
		>
			<div className={styles.table}>
				<div className={styles.headerTable}>
					<p>Дополнительно</p>
					<p>13</p>
				</div>
				<div className={styles.rowTable}>
					<p>Оценка использования типовых клише</p>
					<p>0</p>
				</div>
				<div className={styles.textarea}>
					<p>Комментарий...</p>
				</div>
				<Image src={A_ImageGraph} alt='График для анализа результатов' draggable={false} />
			</div>
		</CardInfo>,
	]

	const totalCards = cards.length

	const cardsToRender = cards

	// Размеры карточек соответствуют CSS-брейкпоинтам
	const cardWidth = width <= 767 ? 83.256 : width <= 1023 ? 52.638 : 22.865
	const gap = width <= 767 ? 2.791 : width <= 1023 ? 2.398 : 1.042
	// На мобилке/планшете cardsProcess начинается от левого края (align-self: flex-start),
	// поэтому центрируем первую карточку через отступ
	const centeredOffset = isMobile ? (100 - cardWidth) / 2 : 0
	const translateX = centeredOffset - currentCard * (cardWidth + gap)

	// Мгновенный прыжок без анимации (для бесконечной ленты на мобилке)
	const jumpTo = (index: number) => {
		const el = sliderRef.current
		if (!el) return
		el.style.transition = 'none'
		setCurrentCard(index)
		requestAnimationFrame(() =>
			requestAnimationFrame(() => {
				if (sliderRef.current) sliderRef.current.style.transition = ''
			})
		)
	}

	const handlePrev = () => {
		if (isMobile) {
			// Мобилка: бесконечная лента, один шаг назад
			if (currentCard === 0) jumpTo(totalCards - 1)
			else setCurrentCard(c => c - 1)
		} else {
			// Десктоп: назад к первой позиции (4 карточки слева)
			setCurrentCard(0)
		}
	}

	const handleNext = () => {
		if (isMobile) {
			// Мобилка: бесконечная лента, один шаг вперёд
			if (currentCard === totalCards - 1) jumpTo(0)
			else setCurrentCard(c => c + 1)
		} else {
			// Десктоп: вперёд к второй позиции (4 карточки сдвинуты на 1)
			setCurrentCard(c => (c < 1 ? 1 : 1))
		}
	}

	const ArrowLeft = () => (
		<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
			<path d='M10.0596 2.71979L5.7129 7.06645C5.19957 7.57979 5.19957 8.41978 5.7129 8.93312L10.0596 13.2798'
				stroke='#757575' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)

	const ArrowRight = () => (
		<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
			<path d='M5.94043 13.2802L10.2871 8.93355C10.8004 8.42021 10.8004 7.58021 10.2871 7.06688L5.94043 2.72021'
				stroke='#757575' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)

	return (
		<section className={styles.howItWorksSection} aria-label='Как это работает'>
			<h2 id='how-it-works-heading'>Как это работает</h2>

			<div className={styles.cardsWrapper} role='region' aria-label='Шаги работы с CheckMate'>
				<div
					ref={sliderRef}
					className={styles.cardsProcess}
					style={{
						transform: `translateX(${translateX}vw)`,
						transition: 'transform 0.3s ease-in-out',
					}}
				>
					{cardsToRender}
				</div>

				<div className={styles.buttonsArrows}>
					<button className={styles.buttonNext} onClick={handlePrev} aria-label='Предыдущая карточка'>
						<ArrowLeft />
					</button>
					<button className={styles.buttonNext} onClick={handleNext} aria-label='Следующая карточка'>
						<ArrowRight />
					</button>
				</div>
			</div>
		</section>
	)
}

export default HowItWorksSection
