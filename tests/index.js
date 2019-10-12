const test = require('ava');
const vfs = require('vinyl-fs');
const crypto = require('crypto');
const concat = require('concat-stream');
const through = require('through2');
const { promisify } = require('util');

const exec = promisify(require('child_process').exec);
const pipeline = promisify(require('stream').pipeline);

// Transform Vinyl files into a more snapshot-friendly structure.
const jsonify = through.obj((file, enc, cb) =>
  file.contents ? cb(null, { path: file.relative, contents: file.contents }) : cb(),
);

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

  await pipeline(
    vfs.src('dist/**/*'),
    jsonify,
    concat(files => {
      const hashes = files.reduce((prev, curr) => {
        prev[curr.path] = crypto
          .createHash('md5')
          .update(curr.contents.toString())
          .digest('hex');
        return prev;
      }, {});
      t.snapshot(hashes);
    }),
  );
});
