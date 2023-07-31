import { setDelay } from "utils/setDelay";
import { delay } from "utils/const";

export const makeOrder = async () => {
  await setDelay(delay);
  return Promise.resolve();
};
