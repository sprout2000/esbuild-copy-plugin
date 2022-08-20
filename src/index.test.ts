import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

import { copyPlugin, getDigest, getFileDigest, filter } from '.';

describe('Test Suites', () => {
  test('getDigest()', () => {
    getDigest('string');
  });

  test('getFileDigest()', () => {
    expect(getFileDigest(path.resolve(__dirname, '../notexist'))).toBeNull();
    expect(getFileDigest(path.resolve(__dirname, '..'))).toBeNull();
    expect(getFileDigest(path.resolve(__dirname, './index.ts'))).toMatch(
      /([a-z]|[0-9]){32}/
    );
  });

  test('filter()', () => {
    expect(filter('foo', path.resolve(__dirname, '../noexist'))).toBeTruthy();
    expect(filter('foo', path.resolve(__dirname, '.'))).toBeTruthy();
    expect(
      filter(
        path.resolve(__dirname, './index.ts'),
        path.resolve(__dirname, './index.ts')
      )
    ).toBeFalsy();
    expect(filter(__dirname, path.resolve(__dirname, '..'))).toBeTruthy();
  });

  test('copyPlugin', async () => {
    const tmpDir = path.join(__dirname, '..', 'assets');
    fs.mkdirSync(tmpDir);

    await build({ plugins: [copyPlugin()] });

    const spy = jest.spyOn(fs, 'cpSync');
    await build({
      plugins: [
        copyPlugin({
          src: path.resolve(__dirname, './index.ts'),
          dest: path.join(tmpDir, 'index.ts'),
        }),
      ],
    });
    expect(spy).toHaveBeenCalled();

    fs.unlinkSync(path.join(tmpDir, 'index.ts'));
    fs.rmdirSync(tmpDir);
  });
});
