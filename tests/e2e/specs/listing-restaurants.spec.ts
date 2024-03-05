import {test, expect} from '@playwright/test'

test('shows restaurants from the server', async ({page}) => {
  const pastaPlace = 'Pasta Place'
  const saladPlace = 'Salad Place'

  await page.route('https://api.outsidein.dev/JI4xJoO0YSYGiqk2fTIUSwqQdkBYFXbC/restaurants',
    async route => {
      const json = [
        {id: 1, name: pastaPlace},
        {id: 2, name: saladPlace}
      ]
      await route.fulfill({json})
    })

  await page.goto('/')
  await expect(page.getByText(pastaPlace)).toBeVisible()
  await expect(page.getByText(saladPlace)).toBeVisible()
})
