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
