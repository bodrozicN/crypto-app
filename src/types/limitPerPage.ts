export const OLimitPerPage = {
  fifty: 50,
  eighty: 80,
  hundred: 100,
} as const;

export type TLimitPerPage = typeof OLimitPerPage[keyof typeof OLimitPerPage];
