const yearsBehindZero: number = 624
const startYear: number = yearsBehindZero * -1
const endYear: number = 1902
export const totalYears: number = endYear - startYear
export const years: number[] = Array.from(
  { length: totalYears + 1 },
  (_, i) => i + -yearsBehindZero,
)
export const getYearPercentualPosition = (year: number) =>
  ((year - startYear) / totalYears) * 100
export const getYearFromPercentage = (percentage: number) =>
  Math.round(totalYears * percentage) - yearsBehindZero
