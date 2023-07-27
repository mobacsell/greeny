import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { useNavigate } from "react-router-dom";

export const Button = ({
  size,
  radius,
  text,
  handlerType,
  orderId,
}: ButtonProps) => {
  const navigate = useNavigate();

  const arrBtnClasses = [];
  arrBtnClasses.push(styles[size]);
  if (radius) {
    arrBtnClasses.push(styles.radius);
  }
  const btnClass = arrBtnClasses.join(" ");

  const handlerClick = (orderId?: number) => {
    if (handlerType === "openOrder") {
      navigate("/order?id=" + orderId);
    }
  };

  return (
    <button
      className={`${styles.root} ${btnClass}`}
      onClick={() => handlerClick(orderId)}
    >
      {text}
    </button>
  );
};
