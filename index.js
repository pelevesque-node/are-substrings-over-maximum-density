'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  if (str === '') return false
  let areSubstringsOverMaximumDensity = false
  checks = Object.entries(checks)
  for (let i = 0, len = checks.length; i < len; i++) {
    const substring = checks[i][0]
    const allowedDensity = checks[i][1]
    const substringDensity = substrOccurrence(substring, str) * substring.length / str.length
    if (substringDensity > allowedDensity) {
      areSubstringsOverMaximumDensity = true
      break
    }
  }
  return areSubstringsOverMaximumDensity
}
