import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button = ({ size, radius, text }: ButtonProps) => {
  const arrBtnClasses = [];
  arrBtnClasses.push(styles[size]);

  if (radius) {
    arrBtnClasses.push(styles.radius);
  }

  const btnClass = arrBtnClasses.join(" ");

  return <button className={`${styles.root} ${btnClass}`}>{text}</button>;
};
