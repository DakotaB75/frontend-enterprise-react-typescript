import { test, expect, Page } from '@playwright/test';

test('app loads', async ({ page }: { page: Page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/App/);
});
