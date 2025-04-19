import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './src',
    timeout: 30000,
    expect: {
      timeout: 5000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: 'html',
    use: {
      trace: 'on-first-retry',
    },
   });