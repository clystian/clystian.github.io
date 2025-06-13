import { beforeAll, afterAll, test, expect } from 'vitest';
import { execSync, spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

let server;

beforeAll(async () => {
  execSync('npm run build', { stdio: 'inherit' });
  server = spawn('npm', ['run', 'preview', '--', '--port', '4321'], {
    stdio: 'inherit',
  });
  // give the server some time to start
  await delay(3000);
});

afterAll(() => {
  if (server) server.kill();
});

test('main page loads', async () => {
  const res = await fetch('http://localhost:4321/');
  expect(res.status).toBe(200);
});
