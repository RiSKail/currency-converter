import { toMatchImageSnapshot } from 'jest-image-snapshot'

import {
  DEFAULT_PORT,
  EMAIL,
  PASSWORD,
  SIGNIN,
  ADMIN_LOGIN,
  CONVERTER_PAGE_PATH,
  ADMIN_PASSWORD,
  FIRST_NAME,
  LAST_NAME,
  SIGN_PAGE_PATH,
  SIGN_SWAP,
  SIGNUP,
  CONFIRM,
} from '@/constants'
import { beforeAllTest, afterAlltest, page, timeout } from './index'

expect.extend({ toMatchImageSnapshot })

describe('Sign page tests', () => {
  beforeAll(beforeAllTest)

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
    'Should be finded login and password fields',
    async () => {
      const loginField = await page.$(`[data-testid=${EMAIL}]`)
      const passwordField = await page.$(`[data-testid=${PASSWORD}]`)

      expect(loginField && passwordField).not.toBeNull()
    },
    timeout
  )

  test(
    "Can't sign in without login or password",
    async () => {
      const signInBtn = await page.$(`[data-testid=${SIGNIN}]`)
      expect(signInBtn).not.toBeNull()
      await page.click(`[data-testid=${SIGNIN}]`)

      expect(page.url()).toBe(`http://localhost:${DEFAULT_PORT}${SIGN_PAGE_PATH}`)
    },
    timeout
  )

  test(
    'Page has sign in validation',
    async () => {
      await page.click(`[data-testid=${EMAIL}]`)
      await page.keyboard.type('asd')
      await page.click(`[data-testid=${PASSWORD}]`)
      await page.keyboard.type('asd')
      await page.click(`[data-testid=${SIGNIN}]`)

      await page.waitForSelector('[data-testid=error]', { visible: true })
      const error = await page.$eval('[data-testid=error]', (element) => element.textContent)

      expect(error).toBe('×Error! The email address is badly formatted.')
    },
    timeout
  )

  test(
    'Page has sign up validation',
    async () => {
      await page.click(`[data-testid=${SIGN_SWAP}]`)
      await page.click(`[data-testid=${FIRST_NAME}]`, { clickCount: 3 })
      await page.keyboard.type('test')
      await page.click(`[data-testid=${LAST_NAME}]`, { clickCount: 3 })
      await page.keyboard.type('test')
      await page.click(`[data-testid=${EMAIL}]`, { clickCount: 3 })
      await page.keyboard.type('test@gmail.com')
      await page.click(`[data-testid=${EMAIL}]`, { clickCount: 3 })
      await page.keyboard.type('test@gmail.com')
      await page.click(`[data-testid=${PASSWORD}]`, { clickCount: 3 })
      await page.keyboard.type('12345')
      await page.click(`[data-testid=${CONFIRM}]`, { clickCount: 3 })
      await page.keyboard.type('12345')
      await page.click(`[data-testid=${SIGNUP}]`)
      await page.waitForSelector('[data-testid=error]', { visible: true })
      const error = await page.$eval('[data-testid=error]', (element) => element.textContent)

      expect(error).toBe('×Error! The email address is badly formatted.')
    },
    timeout
  )

  test(
    'Sign in with valid credentials',
    async () => {
      await page.click(`[data-testid=${SIGN_SWAP}]`)
      await page.click(`[data-testid=${EMAIL}]`, { clickCount: 3 })
      await page.keyboard.type(ADMIN_LOGIN)
      await page.click(`[data-testid=${PASSWORD}]`, { clickCount: 3 })
      await page.keyboard.type(ADMIN_PASSWORD)
      await page.click(`[data-testid=${SIGNIN}]`)
      await page.waitForNavigation()

      expect(page.url()).toBe(`http://localhost:${DEFAULT_PORT}${CONVERTER_PAGE_PATH}`)
    },
    timeout
  )
})
