// Marginer.jsx

import styles from "./marginer.module.scss";

export default function Marginer({ direction = "horizontal", margin }: 
  { direction?: "horizontal" | "vertical", margin: number | string }) {
  let marginValue = margin;

  if (typeof margin !== "number" && typeof margin !== "string") {
    // Если margin не является числом или строкой, устанавливаем его в значение по умолчанию
    marginValue = "0";
  }

  const marginStyle =
    direction === "horizontal"
      ? { width: typeof marginValue === "string" ? marginValue : `${marginValue}px` }
      : { height: typeof marginValue === "string" ? marginValue : `${marginValue}px` };

  return <div className={direction === "horizontal" ? styles.horizontal : styles.vertical} style={marginStyle}></div>;
}
