export const getMostBubblePosition = (
  currentScroll: number,
  windowHeight: number,
  parentHeight: string,
) => {
  return `calc(${parentHeight} - ${windowHeight + currentScroll}px + ${windowHeight}px)`;
};

export const getFewBubblePosition = (
  currentScroll: number,
  windowHeight: number,
  parentHeight: string,
) => {
  return `calc((${parentHeight} - ${windowHeight + currentScroll}px) / 2 + ${windowHeight / 2}px)`;
};
