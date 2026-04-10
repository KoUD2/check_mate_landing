"use client";

import Q_ImageTariff1 from "@/shared/images/Q_ImageTariff1.svg";
import Q_ImageTariff2 from "@/shared/images/Q_ImageTariff2.svg";
import { FC } from "react";
import styles from "./TariffSection.module.css";
import TariffCard from "./ui/TariffCard/TariffCard";

const PLANS = [
  { name: "Lite",  price: 149,   checks: 10,   image: Q_ImageTariff1 },
  { name: "Plus",  price: 549,   checks: 50,   image: Q_ImageTariff1 },
  { name: "Pro",   price: 1449,  checks: 200,  image: Q_ImageTariff2 },
  { name: "Ultra", price: 3990,  checks: 600,  image: Q_ImageTariff1 },
  { name: "Mega",  price: 14490, checks: 2400, image: Q_ImageTariff1 },
];

const TariffSection: FC = () => {
  return (
    <section className={styles.tariffSection} aria-label="Тарифные планы">
      <div className={styles.headSection}>
        <h2 id="tariffs-heading">Тарифы</h2>
      </div>

      <div className={styles.tariffCards} role="list">
        {PLANS.map((plan) => (
          <TariffCard
            key={plan.name}
            count={plan.checks}
            imageSrc={plan.image}
            price={plan.price}
            subscriptionName={plan.name}
          />
        ))}
      </div>
    </section>
  );
};

export default TariffSection;
