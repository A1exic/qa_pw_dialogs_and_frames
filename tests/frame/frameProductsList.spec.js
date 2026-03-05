import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByText('Our Products').click();

  await expect(frame.getByText('Special Offers')).toBeVisible();
  await expect(frame.getByText('Cameras')).toBeVisible();
  await expect(frame.getByText('Laptops & Notebooks')).toBeVisible();
  await expect(frame.getByText('Phones & PDAs')).toBeVisible();
  await expect(frame.getByText('MP3 Players')).toBeVisible();
});
