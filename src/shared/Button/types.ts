export type ButtonProps = {
  size: "sm" | "md" | "lg";
  radius: boolean;
  text: string;
  handlerType: "openOrder" | "makeOrder" | "closeModal";
  orderStatus?: "available" | "ordered";
  orderId?: number;
  toggleModal?: (posting: boolean) => Promise<void>;
};
