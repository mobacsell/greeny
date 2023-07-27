export type ButtonProps = {
  size: "sm" | "md" | "lg";
  radius: boolean;
  text: string;
  handlerType: "openOrder" | "makeOrder";
  orderId?: number;
};
