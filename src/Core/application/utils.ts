export const delay = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))
