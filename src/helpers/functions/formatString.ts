export function formatString(
  str: string | undefined,
  length: number,
  includeDots?: boolean
): string {
  if (!str) return "";
  if (length > str.length || length <= 0) return str;
  const cuttedString = str.substring(0, length);
  return includeDots ? `${cuttedString}...` : cuttedString;
}
