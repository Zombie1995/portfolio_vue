export const getStyleWithCaret = (showCaret: boolean) =>
  `${showCaret ? "after:content-['|']" : ''} text-[48px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#65c4e7] to-[#714aca] whitespace-pre-line`;
