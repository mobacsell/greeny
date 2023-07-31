import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { useNavigate } from "react-router-dom";

export const Button = ({
  size,
  radius,
  text,
  handlerType,
  orderStatus,
  orderId,
  toggleModal,
}: ButtonProps) => {
  const navigate = useNavigate();

  const arrBtnClasses =
    orderStatus === "ordered" ? [styles.disabled] : [styles.root];
  arrBtnClasses.push(styles[size]);
  if (radius) {
    arrBtnClasses.push(styles.radius);
  }
  const btnClass = arrBtnClasses.join(" ");
  const btnDisabled = orderStatus === "ordered" ? true : false;

  const handlerClick = (orderId?: number) => {
    if (handlerType === "openOrder") {
      navigate("/order?id=" + orderId);
    } else if (handlerType === "makeOrder") {
      toggleModal!(true);
      document.body.style.overflow = "hidden";
    } else if (handlerType === "closeModal") {
      toggleModal!(false);
      document.body.style.overflow = "visible";
    }
  };

  return (
    <button
      className={`${btnClass}`}
      onClick={() => handlerClick(orderId)}
      disabled={btnDisabled}
    >
      {text}
    </button>
  );
};
