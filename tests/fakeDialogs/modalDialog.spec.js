import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.locator('#modaldialog').click();

  const dialog = page.locator('#modaldialog-box');
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText('This is a modal dialog box');

  await page.locator('#modal-ok').click();
  await expect(dialog).toBeHidden();
});
