import { test, expect } from '@playwright/test';

test.describe('RN-24', () => {
  test('should mask password input for security', { tag: ['@security', '@high-priority'] }, async ({ page }) => {
    // Navigate to the login page
    await page.goto('/');

    // Locate the password input field
    const passwordField = page.locator('input[type="password"], input[name="password"], #password');
    await passwordField.waitFor();

    // Enter password text
    await passwordField.fill('password123');

    // Verify the input type is 'password' which ensures masking
    await expect(passwordField).toHaveAttribute('type', 'password');

    // Verify the actual value is stored correctly but not visible
    await expect(passwordField).toHaveValue('password123');

    // Additional check: verify the field appears masked visually
    // The input should not display the actual text due to type="password"
    const inputType = await passwordField.getAttribute('type');
    expect(inputType).toBe('password');
  });
});
