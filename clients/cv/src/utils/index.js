const STARTED_WORKING = new Date('2018-03-20T00:00:00.000Z')
const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25

export const getExperience = () => Math.floor((new Date() - STARTED_WORKING) / MS_IN_YEAR)
