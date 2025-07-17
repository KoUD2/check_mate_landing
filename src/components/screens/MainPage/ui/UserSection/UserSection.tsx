import A_UserImage1 from '@/shared/images/A_UserImage1.svg'
import A_UserImage2 from '@/shared/images/A_UserImage2.svg'
import A_UserImage3 from '@/shared/images/A_UserImage3.svg'
import { FC } from 'react'
import UserCard from './ui/UserCard/UserCard'
import styles from './UserSection.module.css'

const UserSection: FC = () => {
	return (
		<div className={styles.userSection}>
			<UserCard
				smallText='Меньше времени на проверку'
				header='Репетиторам'
				imageSrc={A_UserImage1}
				key={1}
			/>
			<UserCard
				smallText='Быстрый фидбек'
				header='Ученикам'
				imageSrc={A_UserImage2}
				key={2}
			/>
			<UserCard
				smallText='Контроль прогресса'
				header='Родителям'
				imageSrc={A_UserImage3}
				key={3}
			/>
		</div>
	)
}

export default UserSection
