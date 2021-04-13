import { toMatchImageSnapshot } from 'jest-image-snapshot'

import { SignInTest, beforeAllTest, page, afterAlltest, timeout } from './index'

expect.extend({ toMatchImageSnapshot })

describe('Converter page', () => {
  beforeAll(async () => {
    await beforeAllTest()
    await SignInTest()
  })

  afterAll(afterAlltest)

  test(
    'Should be rendered',
    async () => {
      const image = await page.screenshot()

      expect(image).toMatchImageSnapshot()
    },
    timeout
  )

  test(
    'Should be finded initial converter field',
    async () => {
      const primaryField = await page.$('[data-testid=primary-converter-input')
      const secondaryField = await page.$('[data-testid=secondary-converter-input')
      expect(primaryField).not.toBeNull()
      expect(secondaryField).not.toBeNull()
    },
    timeout
  )

  test(
    'Should be finded select converter field',
    async () => {
      const converterSelect = await page.$('[data-testid=rfs-btn]')
      expect(converterSelect).not.toBeNull()
    },
    timeout
  )

  test(
    'Should be converted currency after input new value',
    async () => {
      await page.$eval('[data-testid=primary-converter-input]', (el) => el.value === '')
      await page.click('[data-testid=primary-converter-input]')
      await page.keyboard.type('2')
      const secondaryInput = await page.$eval(
        '[data-testid=secondary-converter-input]',
        (element) => element.value
      )
      expect(secondaryInput).toBe('0.0263')
    },
    timeout
  )
})
