/**
 * Equation
 * - Get number first digit through loop
 *
 * - Example
 * + n = 12321
 *
 * + i = 0
 *   + firstDigit = 1
 *   + n = 2321
 * + i = 1
 *   + firstDigit = 2
 *   + n = 321
 * + i = 2
 *   + firstDigit = 3
 *   + n = 21
 * + i = 3
 *   + firstDigit = 2
 *   + n = 1
 * + i = 4
 *   + firstDigit = 1
 *   + n = null
 *
 * ----------------------------
 *
 * 12345
 * 12321
 * + c1 = 12321 % 10000 = 2321
 * + c2 = 12321 - 2321  = 10000
 * + c3 = 10000 / 10000 = 1
 *
 * + c1 = n % delta
 * + c2 = n - c1
 * + c3 = c2 / delta
 * + variable = c1
 *
 */
