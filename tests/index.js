const test = require('ava');
const vfs = require('vinyl-fs');
const crypto = require('crypto');
const { promisify } = require('util');

const exec = promisify(require('child_process').exec);

const md5 = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex');

const hashDirectory = glob =>
  new Promise((resolve, reject) => {
    const files = {};

    vfs
      .src(glob)
      .on('data', file => {
        // Transform Vinyl files into a more snapshot-friendly structure.
        if (!file.contents) {
          return;
        }

        files[file.relative] = md5(file.contents.toString());
      })
      .on('end', () => resolve(files))
      .on('error', err => reject(err));
  });

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

test('snapshot files in dist', async t => {
  await exec('npm run build');
  const distHashes = await hashDirectory('dist/**/*');
  t.snapshot(distHashes);
});
