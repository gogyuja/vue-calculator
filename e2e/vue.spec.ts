import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('div > h1')).toHaveText('계산기')
  await page.keyboard.press('1')
  await page.keyboard.press('+')
  await page.keyboard.press('2')
  await page.keyboard.press('Enter')
  await expect(page.locator('div.inputarea')).toHaveText('3')
})
