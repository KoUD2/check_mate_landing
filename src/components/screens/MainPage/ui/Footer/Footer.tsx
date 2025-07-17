"use client";

import logo from "@/shared/images/A_Logo.svg";
import Telegram_logo_icon from "@/shared/images/Telegram_logo_icon.svg";
import Vk_icon from "@/shared/images/Vk_icon.svg";
import Yandex_Zen_logo_icon from "@/shared/images/Yandex_Zen_logo_icon.svg";
import Image from "next/image";
import { FC } from "react";
import styles from "./Footer.module.css";
import SocialMedia from "./ui/SocialMedia/SocialMedia";

const Footer: FC = () => {
  const handleDzenButtonClick = () => {
    window.open("https://dzen.ru/profile/editor/pro_tebya_i_menya", "_blank");
  };
  const handleVkButtonClick = () => {
    window.open("https://vk.com/egenius_ai", "_blank");
  };
  const handleTelegramButtonClick = () => {
    window.open("https://t.me/checkmateai", "_blank");
  };

  return (
    <footer className={styles.footer}>
      <Image
        src={logo}
        alt="Логотип"
        draggable={false}
        className={styles.logo}
      />

      <div className={styles.footerContainer}>
        <h2>Делимся обновлениями продукта и полезными материалами</h2>

        <div className={styles.containerInner}>
          <div className={styles.contacts}>
            <SocialMedia
              text="Читать статьи"
              imageSrc={Yandex_Zen_logo_icon}
              header="Дзен"
              func={handleDzenButtonClick}
            />
            <SocialMedia
              text="Наш канал"
              imageSrc={Telegram_logo_icon}
              header="Telegram"
              func={handleTelegramButtonClick}
            />
            <SocialMedia
              text="Группа ВК"
              imageSrc={Vk_icon}
              header="ВКонтакте"
              func={handleVkButtonClick}
            />
          </div>

          <div className={styles.docs}>
            <p>Документы</p>

            <div className={styles.lines}>
              <p>Политика конфиденциальности</p>
              <p>Условия использования</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
