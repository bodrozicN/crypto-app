export const OCurrency = {
  usd: "yhjMzLPhuIDl",
  eur: "5k-_VTxqtCEI",
  btc: "Qwsogvtv82FCd",
} as const;

export type TCurrency = typeof OCurrency[keyof typeof OCurrency];
