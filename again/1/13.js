/**
 * 13. Roman To Integer
 * - Roman numerals are represented by seven
 * different symbols: I, V, X, L, C, D and M
 *
 * - Chart
 * Symbol  Value
 * I       1
 * V       5
 * X       10
 * L       50
 * C       100
 * D       500
 * M       1000
 *
 * - Rules
 * + Usually written largest to smallest from left to right
 * + if small to large from left to right subtract it, large
 * subtract small
 *
 * - Example 1
 * + input: III
 * + output: 3
 * + explain:
 *   + I: 1
 *   + 1 + 1 + 1 = 3
 *
 * - Example 2
 * + input: IV
 * + output: 4
 * + explain: IV = 1 5 = 5 - 1 = 4
 *
 * - Example 3
 * + input: MMLCD
 * + output:
 * + explain:
 *   + MMLCD = 1000 + 1000 + 50 + 100 + 500
 *   + MMLCD = 2000 + 50 + 500
 *   + MMLCD = 2050 + 500
 *   + MMLCD = 2550
 *
 *
 *
 */
