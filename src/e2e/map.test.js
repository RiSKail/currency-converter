import { beforeAllTest, afterAlltest, page, SignInTest, timeout } from './index'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { MAP_PAGE_PATH } from '@/constants'

expect.extend({ toMatchImageSnapshot })

describe('Map page', () => {
  beforeAll(async () => {
    await beforeAllTest()
    await SignInTest()
  })

  afterAll(afterAlltest)

  test('Should be rendered', async () => {
    await page.waitForSelector(`[data-testid=${MAP_PAGE_PATH.substr(1)}]`)
    await page.click(`[data-testid=${MAP_PAGE_PATH.substr(1)}]`)

    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  }, timeout)

  test('Should be rendered initial marker', async () => {
    await page.waitForSelector('.leaflet-popup')
    const popup = await page.$('.leaflet-popup')
    expect(popup).not.toBeNull()
  }, timeout)

  test('Should display information when hovering over marker', async () => {
    const popup = await page.$('.leaflet-popup')
    expect(popup.textContent).not.toBeNull()
  }, timeout)

  test('Should type value in autocomplete input', async () => {
    await page.click('input')
    await page.keyboard.type('belarus')
    const inputValue = await page.$eval(
      'input',
      element => element.value
    )
    expect(inputValue).toBe('belarus')
  }, timeout)
})