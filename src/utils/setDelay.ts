export function setDelay(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
