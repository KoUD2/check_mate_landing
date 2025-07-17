"use client";

import Q_ImageTariff1 from "@/shared/images/Q_ImageTariff1.svg";
import Q_ImageTariff2 from "@/shared/images/Q_ImageTariff2.svg";
import cn from "classnames";
import { FC, useState } from "react";
import styles from "./TariffSection.module.css";
import TariffCard from "./ui/TariffCard/TariffCard";

const TariffSection: FC = () => {
  const [activePeriod, setActivePeriod] = useState<"month" | "year">("month");

  const handleMonthClick = () => {
    setActivePeriod("month");
  };

  const handleYearClick = () => {
    setActivePeriod("year");
  };

  // Данные для тарифов в зависимости от периода
  const tariffData = {
    month: {
      plus: { count: 50, price: 549, period: "месяц" as const },
      pro: { count: 200, price: 990, period: "месяц" as const },
    },
    year: {
      plus: { count: 600, price: 5490, period: "год" as const },
      pro: { count: 2400, price: 8900, period: "год" as const },
    },
  };

  const currentData = tariffData[activePeriod];

  return (
    <div className={styles.tariffSection}>
      <div className={styles.headSection}>
        <h2>Тарифы</h2>

        <div className={styles.buttonsWrapper}>
          <button
            className={cn(
              styles.buttonPeriod,
              activePeriod === "month" && styles.buttonPeriodActive
            )}
            onClick={handleMonthClick}
          >
            На месяц
          </button>
          <button
            className={cn(
              styles.buttonPeriod,
              activePeriod === "year" && styles.buttonPeriodActive
            )}
            onClick={handleYearClick}
          >
            На год
          </button>
        </div>
      </div>

      <div className={styles.tariffCards}>
        <TariffCard
          count={currentData.plus.count}
          imageSrc={Q_ImageTariff1}
          price={currentData.plus.price}
          subscriptionName="Plus"
          period={currentData.plus.period}
        />
        <TariffCard
          count={currentData.pro.count}
          imageSrc={Q_ImageTariff2}
          price={currentData.pro.price}
          subscriptionName="Pro"
          period={currentData.pro.period}
        />
      </div>
    </div>
  );
};

export default TariffSection;
