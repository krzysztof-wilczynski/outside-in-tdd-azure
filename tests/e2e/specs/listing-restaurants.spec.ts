import {test, expect} from '@playwright/test'

test('shows restaurants from the server', async ({page}) => {
  const sushiPlace = 'Sushi Place'
  const pizzaPlace = 'Pizza Place'

  await page.route('https://api.outsidein.dev/JI4xJoO0YSYGiqk2fTIUSwqQdkBYFXbC/restaurants',
    async route => {
      const json = [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace}
      ]
      await route.fulfill({json})
    })

  await page.goto('/')
  await expect(page.getByText(sushiPlace)).toBeVisible()
  await expect(page.getByText(pizzaPlace)).toBeVisible()
})
