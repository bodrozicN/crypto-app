export const OFontWeight = {
  bold: 700,
  light: 400,
} as const;

export type TFontWeight = typeof OFontWeight[keyof typeof OFontWeight];
