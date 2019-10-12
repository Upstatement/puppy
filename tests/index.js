const test = require('ava');
const vfs = require('vinyl-fs');
const concat = require('concat-stream');
const through = require('through2');
const { promisify } = require('util');

const exec = promisify(require('child_process').exec);
const pipeline = promisify(require('stream').pipeline);

// Transform Vinyl files into a more snapshot-friendly structure.
const jsonify = through.obj((file, enc, cb) =>
  cb(null, { path: file.relative, contents: file.contents && file.contents.toString() }),
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

  await pipeline(vfs.src('dist/**/*'), jsonify, concat(files => t.snapshot(files)));
});
