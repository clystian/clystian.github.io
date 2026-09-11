import { execSync, spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { afterAll, beforeAll, expect, test } from 'vitest';

let server: ReturnType<typeof spawn>;

beforeAll(async () => {
  execSync('pnpm build', { stdio: 'inherit' });
  server = spawn('pnpm', ['preview', '--', '--port', '4321'], {
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
