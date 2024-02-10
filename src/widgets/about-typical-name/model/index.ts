export const getStyleWithCaret = (showCaret: boolean) =>
  `${showCaret ? "after:content-['|']" : ''} md:text-[3vw] text-[6vw] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#65c4e7] to-[#714aca] whitespace-pre-line`;
