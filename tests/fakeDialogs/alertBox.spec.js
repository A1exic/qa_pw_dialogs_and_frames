import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.locator('#fakealert').click();

  const dialog = page.locator('#fakealert-box');
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText('This is a Fake Alert');

  await page.locator('#fakealert-ok').click();
  await expect(dialog).toBeHidden();
});
