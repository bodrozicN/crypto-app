export const OFIlter = {
  currency: "Currency",
  rows: "Rows",
  sortBy: "SortBy",
  order: "Order",
  period: "Period",
} as const;

// defines the type of select and filter component
export type TFilter = typeof OFIlter[keyof typeof OFIlter];
