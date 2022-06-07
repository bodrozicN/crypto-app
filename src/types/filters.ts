export const OCurrency = {
  usd: "yhjMzLPhuIDl",
  eur: "5k-_VTxqtCEI",
  btc: "Qwsogvtv82FCd",
} as const;

export type TCurrency = typeof OCurrency[keyof typeof OCurrency];

export const OFIlter = {
  currency: "Currency",
  rows: "Rows",
  sortBy: "SortBy",
  order: "Order",
  period: "Period",
} as const;

// defines the type of select and filter component
export type TFilter = typeof OFIlter[keyof typeof OFIlter];

export const OLimitPerPage = {
  fifty: 50,
  eighty: 80,
  hundred: 100,
} as const;

export type TLimitPerPage = typeof OLimitPerPage[keyof typeof OLimitPerPage];

export const OOrderBy = {
  price: "price",
  marketCap: "marketCap",
  "24hVolume": "24hVolume",
  change: "change",
} as const;

export type TOrderBy = typeof OOrderBy[keyof typeof OOrderBy];

export const OOrderDirection = {
  desc: "desc",
  asc: "asc",
} as const;

export type TOrderDirection =
  typeof OOrderDirection[keyof typeof OOrderDirection];

export const OTimePeriod = {
  daily: "24h",
  weekly: "7d",
  monthly: "30d",
  yearly: "1y",
} as const;

export type TTimePeriod = typeof OTimePeriod[keyof typeof OTimePeriod];
