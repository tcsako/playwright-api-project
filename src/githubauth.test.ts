import { test, expect, request } from '@playwright/test';

const baseURL = 'https://api.github.com';
const githubUser = 'your_github_user';
const yourToken = 'your_github_token'; // Replace with GitHub token

// Test case for GET /users/tcsako/repos endpoint (repositories for user tcsako)
test('GET repositories for user tcsako', async ({ request }) => {
  const startTime = Date.now(); // Capture start time

  // Send GET request to the endpoint with authentication header
  const response = await request.get(`${baseURL}/users/${githubUser}/repos`, {
    headers: {
      'Authorization': `Bearer ${yourToken}`
    },
    ignoreHTTPSErrors: true
  });

  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  console.log(`Request URL: ${baseURL}/users/${githubUser}/repos`);
  console.log(`Response Status: ${response.status()}`);
  const data = await response.json();
  console.log(`Response Data: ${JSON.stringify(data, null, 2)}`);

  // Assert the response status
  expect(response.status()).toBe(200);

  // Assert the response headers
  const headers = response.headers();
  expect(headers['content-type']).toContain('application/json');

  // Assert the response body
  expect(Array.isArray(data)).toBe(true); // Ensure the response is an array
  expect(data.length).toBeGreaterThan(0); // Ensure there is at least one repository

  // Additional assertions for the first repository
  const firstRepo = data[0];
  expect(firstRepo.name).toBeDefined(); // Repository name should be defined
  expect(firstRepo.id).toBeGreaterThan(0); // Repository ID should be greater than 0
  expect(firstRepo.owner.login).toBe(githubUser); // Owner's login should be 'tcsako'
  
  // Assert the response time
  console.log(`Response Time: ${responseTime}ms`);
  expect(responseTime).toBeLessThan(1000); // Example threshold for response time
});
