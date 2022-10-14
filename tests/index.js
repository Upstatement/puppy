import test from 'ava';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';

const asyncExec = promisify(exec);

test.afterEach(() => exec('npm run clean'));

test('build for dev', async t => {
  const output = await asyncExec('npm run build:dev');
  t.true(output.stdout.includes('Build Mode: Development'));
  t.pass();
});

test('build for prod', async t => {
  const output = await asyncExec('npm run build');
  t.true(output.stdout.includes('Build Mode: Production'));
  t.pass();
});
