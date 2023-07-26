import { data } from "./data";
import { setDelay } from "../../utils/setDelay";
import { delay } from "../../utils/const";

export const getOrders = async () => {
  await setDelay(delay);
  return data;
};
