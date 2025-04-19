import { test, expect, request } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

// Test case for GET /posts/1 endpoint
test('GET /posts/1', async ({ request }) => {
  const startTime = Date.now(); // Capture start time

  // Send GET request to the endpoint
  const response = await request.get(`${baseURL}/posts/1`, { ignoreHTTPSErrors: true });

  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  console.log(`Request URL: ${baseURL}/posts/1`);
  console.log(`Response Status: ${response.status()}`);
  const data = await response.json();
  console.log(`Response Data: ${JSON.stringify(data, null, 2)}`);

  // Assert the response status
  expect(response.status()).toBe(200);

  // Assert the response headers
  const headers = response.headers();
  expect(headers['content-type']).toContain('application/json');

  // Assert the response body
  expect(data.id).toBe(1);
  expect(data.title).toBeDefined();
  expect(data.body).toBeDefined();

  // Additional assertions
  expect(data.userId).toBeGreaterThan(0); // userId should be greater than 0
  expect(data.title).not.toBeNull(); // title should not be null
  expect(data.body).not.toBeNull(); // body should not be null
  expect(data.title).toMatch(/sunt aut facere/); // title should match the given regex
  expect(Object.keys(data)).toEqual(['userId', 'id', 'title', 'body']); // keys should match the expected array

  // Assert the response time
  console.log(`Response Time: ${responseTime}ms`);
  expect(responseTime).toBeLessThan(1000); // Example threshold for response time
});

// Test case for POST /posts endpoint
test('POST /posts', async ({ request }) => {
  // Define the new post data
  const newPost = {
    title: 'test title',
    body: 'test body',
    userId: 1
  };
  
  const startTime = Date.now(); // Capture start time
  // Send POST request to the endpoint
  const response = await request.post(`${baseURL}/posts`, { data: newPost, ignoreHTTPSErrors: true });
  
  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  expect(response.status()).toBe(201);
  const data = await response.json();
  console.log(`Response Data: ${JSON.stringify(data, null, 2)}`);

  // Assert the response body
  expect(data.title).toBe('test title');
  expect(data.body).toBe('test body');
  expect(data.userId).toBe(1);

  // Additional assertions
  expect(data.id).toBeGreaterThan(0); // id should be greater than 0
  expect(data.title).not.toBeNull(); // title should not be null
  expect(data.body).not.toBeNull(); // body should not be null
  expect(Object.keys(data)).toEqual(['title', 'body', 'userId', 'id']); // keys should match the expected array

  // Assert the response time
  console.log(`Response Time: ${responseTime}ms`);
  expect(responseTime).toBeLessThan(1000); // Example threshold for response time
});

// Test case for PUT /posts/1 endpoint
test('PUT /posts/1', async ({ request }) => {
  // Define the updated post data
  const updatedPost = {
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1
  };

  const startTime = Date.now(); // Capture start time
  // Send PUT request to the endpoint
  const response = await request.put(`${baseURL}/posts/1`, { data: updatedPost, ignoreHTTPSErrors: true });
  
  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(`Response Data: ${JSON.stringify(data, null, 2)}`);

  // Assert the response body
  expect(data.title).toBe('updated title');
  expect(data.body).toBe('updated body');

  // Additional assertions
  expect(data.id).toBe(1); // id should be 1
  expect(data.userId).toBe(1); // userId should be 1
  expect(data.title).not.toBeNull(); // title should not be null
  expect(data.body).not.toBeNull(); // body should not be null
  expect(Object.keys(data)).toEqual(['id', 'title', 'body', 'userId']); // keys should match the expected array

  // Assert the response time
  console.log(`Response Time: ${responseTime}ms`);
  expect(responseTime).toBeLessThan(1000); // Example threshold for response time
});

// Test case for PATCH /posts/1 endpoint
test('PATCH /posts/1', async ({ request }) => {
  // Define the partial update data
  const partialUpdate = {
    title: 'patched title'
  };

  const startTime = Date.now(); // Capture start time
  // Send PATCH request to the endpoint
  const response = await request.patch(`${baseURL}/posts/1`, { data: partialUpdate, ignoreHTTPSErrors: true });
  
  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(`Response Data: ${JSON.stringify(data, null, 2)}`);

  // Assert the response body
  expect(data.title).toBe('patched title');

  // Additional assertions
  expect(data.id).toBe(1); // id should be 1
  expect(data.userId).toBeGreaterThan(0); // userId should be greater than 0
  expect(data.title).not.toBeNull(); // title should not be null
  expect(Object.keys(data)).toEqual(['userId', 'id', 'title', 'body']); // keys should match the expected array

  // Assert the response time
  console.log(`Response Time: ${responseTime}ms`);
  expect(responseTime).toBeLessThan(1000); // Example threshold for response time
});

// Test case for DELETE /posts/1 endpoint
test('DELETE /posts/1', async ({ request }) => {
  const startTime = Date.now(); // Capture start time
  // Send DELETE request to the endpoint
  const response = await request.delete(`${baseURL}/posts/1`, { ignoreHTTPSErrors: true });
  
  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  expect(response.status()).toBe(200);

  // Additional assertions
  expect(response.statusText()).toBe('OK'); // status text should be 'OK'
  console.log(`Response Time: ${responseTime}ms`); // Log response time
});

// Test case for HEAD /posts/1 endpoint
test('HEAD /posts/1', async ({ request }) => {
  const startTime = Date.now(); // Capture start time
  // Send HEAD request to the endpoint
  const response = await request.head(`${baseURL}/posts/1`, { ignoreHTTPSErrors: true });
  
  const endTime = Date.now(); // Capture end time
  const responseTime = endTime - startTime; // Calculate response time

  expect(response.status()).toBe(200);

  // Additional assertions
  const headers = response.headers();
  expect(headers['content-type']).toContain('application/json'); // content-type should contain 'application/json'
  console.log(`Response Time: ${responseTime}ms`); // Log response time
});
