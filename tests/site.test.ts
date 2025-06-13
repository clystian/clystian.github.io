import { beforeAll, afterAll, test, expect } from 'vitest';
import { execSync, spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

let server;

beforeAll(async () => {
  execSync('npm run build', { stdio: 'inherit' });
  // Avoid searching PATH for npm; use the current npm CLI when available
  const npmPath = process.env.npm_execpath;
  const cmd = npmPath ? [process.execPath, npmPath] : ['npm'];
  server = spawn(cmd[0], [...cmd.slice(1), 'run', 'preview', '--', '--port', '4321'], {
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
