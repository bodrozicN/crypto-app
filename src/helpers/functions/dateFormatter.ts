export function dateFormatter(date: string | number): string {
  while (date.toString().length < 13) {
    date += "0";
  }

  return new Date(+date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
