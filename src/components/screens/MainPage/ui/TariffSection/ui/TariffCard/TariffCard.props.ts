import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITariffCard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageSrc: string;
  subscriptionName: string;
  count: number;
  price: number;
  period: "месяц" | "год";
}
