const test = require('ava');
const { promisify } = require('util');

const exec = promisify(require('child_process').exec);

test.afterEach(() => exec('npm run clean'));

test('build for dev', async t => {
  const output = await exec('npm run build:dev');
  t.true(output.stdout.includes('Build Mode: Development'));
  t.pass();
});

test('build for prod', async t => {
  const output = await exec('npm run build');
  t.true(output.stdout.includes('Build Mode: Production'));
  t.pass();
});
