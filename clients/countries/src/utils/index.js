const formatter = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 })

export const formatPopulation = (number) => formatter.format(number)
