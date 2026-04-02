"use client";

import Button from "@/components/ui/Button/Button";
import useWindowSize from "@/hooks/useWindowSize";
import logo from "@/shared/images/A_Logo.svg";
import Image from "next/image";
import { FC, useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleTryButtonClick = () => {
    window.open("https://t.me/checkmate_ai_bot", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleHowItWorksClick = () => {
    scrollToSection("how-it-works");
  };

  const handleBenefitsClick = () => {
    scrollToSection("benefits");
  };

  const handleTariffsClick = () => {
    scrollToSection("tariffs");
  };

  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt="Логотип CheckMate"
        draggable={false}
        className={styles.logo}
      />

      <nav className={styles.linksGroupe} aria-label="Основная навигация">
        <button className={styles.link} onClick={handleHowItWorksClick}>
          Как это работает
        </button>
        <button className={styles.link} onClick={handleBenefitsClick}>
          Преимущества
        </button>
        <button className={styles.link} onClick={handleTariffsClick}>
          Тарифы
        </button>
      </nav>

      {width > 1023 && (
        <Button
          color="white"
          size="small"
          text="Попробовать"
          onClick={handleTryButtonClick}
        />
      )}

      {width <= 1023 && (
        <>
          <button
            className={styles.buttonHumburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню навигации"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          {menuOpen && (
            <div
              className={styles.menuOverlay}
              onClick={() => setMenuOpen(false)}
            >
              <div
                className={styles.mobileMenu}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.closeButton}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Закрыть меню"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M10.0977 33.9012L33.9002 10.0986"
                      stroke="#292929"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.9002 33.9012L10.0977 10.0986"
                      stroke="#292929"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul className={styles.menuList} role="menu">
                  <li className={styles.menuItemActive} role="menuitem">
                    <span className={styles.menuNumberActive}>01</span>
                    <span className={styles.menuTextActive}>
                      Как это работает
                    </span>
                  </li>
                  <hr className={styles.menuDivider} />
                  <li
                    className={styles.menuItem}
                    role="menuitem"
                    onClick={handleBenefitsClick}
                  >
                    <span className={styles.menuNumber}>02</span>
                    <span className={styles.menuText}>Преимущества</span>
                  </li>
                  <hr className={styles.menuDivider} />
                  <li className={styles.menuItem} role="menuitem" onClick={handleTariffsClick}>
                    <span className={styles.menuNumber}>03</span>
                    <span className={styles.menuText}>Тарифы</span>
                  </li>
                  <hr className={styles.menuDivider} />
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
