import { test, expect } from '@playwright/test';

test.describe('AZK-1', () => {
  test('should navigate to Create Account page from website header', { tag: ['@functional', '@critical'] }, async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Locate and click the 'Create Account' link in the website header
    // TODO: Verify exact selector for Create Account link in header
    const createAccountLink = page.getByRole('link', { name: /create account/i });
    await createAccountLink.click();

    // Verify user is navigated to the Create Account page
    await page.waitForURL(/\/register|signup|create-account/i);

    // Additional assertion to verify page content
    await expect(page.getByRole('heading', { name: /create account|sign up|register/i })).toBeVisible();
  });
});
