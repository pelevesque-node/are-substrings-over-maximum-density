/* global describe, it */
'use strict'

const expect = require('chai').expect
const areSubstringsOverMaximumDensity = require('../index')

describe('#areSubstringsOverMaximumDensity()', () => {
  describe('empty string', () => {
    it('should return false with an empty check', () => {
      const str = ''
      const checks = {}
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with a check with maximum === 0', () => {
      const str = ''
      const checks = { 'a': 0 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with a check with maximum === 1', () => {
      const str = ''
      const checks = { 'a': 1 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substring', () => {
    it('should return true when over maximum', () => {
      const str = 'aaaabbbb'
      const checks = { 'a': 0.25 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to maximum', () => {
      const str = 'aaaabbbb'
      const checks = { 'a': 0.5 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when under maximum', () => {
      const str = 'aaaabbbb'
      const checks = { 'a': 1 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substring', () => {
    it('should return true when over maximum', () => {
      const str = 'aaaabbbb'
      const checks = { 'aaaa': 0.25 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to maximum', () => {
      const str = 'aaaabbbb'
      const checks = { 'aaaa': 0.5 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when under maximum', () => {
      const str = 'aaaabbbb'
      const checks = { 'aaaa': 1 }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substrings', () => {
    it('should return true with many over maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 0.1,
        'b': 0.1,
        'c': 0.1
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some over maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 0.1,
        'b': 1,
        'c': 0.1
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 0.25,
        'b': 0.25,
        'c': 0.25,
        'd': 0.25
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many under maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 0.5,
        'b': 0.5,
        'c': 0.5,
        'd': 0.5
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substrings', () => {
    it('should return true with many over maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'aaaa': 0.1,
        'bbbb': 0.1,
        'cccc': 0.1
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some over maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'aaaa': 0.1,
        'bbbb': 1,
        'cccc': 0.1
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'aaaa': 0.25,
        'bbbb': 0.25,
        'cccc': 0.25,
        'dddd': 0.25
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many under maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'aaaa': 0.5,
        'bbbb': 0.5,
        'cccc': 0.5,
        'dddd': 0.5
      }
      const result = areSubstringsOverMaximumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })
})
