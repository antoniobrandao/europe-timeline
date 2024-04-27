
  const yearsBehindZero = 624
  const startYear = yearsBehindZero * -1
  const endYear = 1902
  export const totalYears = endYear - startYear
  export const years = Array.from({ length: totalYears + 1 }, (_, i) => i + -624)
  export const getYearPercentualPosition = (year: number) => Math.round(((year - startYear) / totalYears) * 100)
  export const getYearFromPercentage = (percentage: number) => Math.round(totalYears * percentage) - yearsBehindZero
