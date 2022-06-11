export function dateFormatter(date: number | string | undefined): string {
  if (!date) return "";
  while (date.toString().length < 13) {
    date += "0";
  }

  return new Date(+date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
