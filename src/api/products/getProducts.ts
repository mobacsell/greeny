import { delay } from "utils/const";
import { setDelay } from "utils/setDelay";
import { data } from "./data";

export const getProducts = async () => {
  await setDelay(delay);
  return data;
};
