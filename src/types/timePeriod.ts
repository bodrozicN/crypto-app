export const OTimePeriod = {
  daily: "24h",
  weekly: "7d",
  monthly: "30d",
  yearly: "1y",
} as const;

export type TTimePeriod = typeof OTimePeriod[keyof typeof OTimePeriod];
