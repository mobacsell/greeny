import styles from "./Modal.module.scss";
import { Button } from "../../../../../shared/Button";
import { ModalProps } from "./types";

export function Modal({ showModal, toggleModal }: ModalProps) {
  const modalStyles = showModal ? styles.root : styles.none;

  return (
    <div className={modalStyles}>
      <div className={styles.modal}>
        <p className={styles.content}>Заказ оформлен</p>
        <Button
          size="sm"
          radius={true}
          text="Ок"
          handlerType="closeModal"
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
}
