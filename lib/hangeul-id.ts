import { ksx1001_letters } from "./hangeul/ksx1001";

/**
 * Generate Hanguel id from decimal integer.
 * @param {number} integer - A decimal integer value
 * @param {string} [charGroup="ksx1001"] - An optional value of charGroup. Default value is ksx1001
 * @returns {string} Hanguel id string
 * @example
 * import { integerToHangeulId } from "./hangeul-id";
 * integerToHangeulId(5529549, "ksx1001");
 * // returns "각간힝"
 */
export function integerToHangeulId(
  integer: number,
  charGroup: string = "ksx1001"
): string {
  if (charGroup === "ksx1001") {
    return ksx1001_letters(integer);
  } else {
    throw "Invalid CharGroup";
  }
}
