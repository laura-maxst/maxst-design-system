import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from '@rollup/plugin-babel';
import svg from 'rollup-plugin-svg';
import del from 'rollup-plugin-delete';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = [
  'react',
  'react-dom',
  'src/stories/**',
  'src/pages/**',
  '.storybook',
];
const config = {
  input: 'index.tsx',
  output: [
    {
      sourcemap: true,
      dir: 'dist',
      format: 'cjs',
      exports: 'auto',
    },
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: ['src/stories/**', 'src/pages/**'],
    }),
    typescript({ tsconfig: './tsconfig.json', clean: true }),
    sass({
      insert: true,
    }),
    svgr(),
    image(),
    url({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
      limit: Infinity,
      emitFiles: true,
      fileName: '[name][extname]',
      destDir: 'dist/assets',
      publicPath: '/assets',
    }),
    copy({
      targets: [{ src: 'public/fonts/*', dest: 'dist/fonts' }],
    }),
    peerDepsExternal(),
    sourcemaps(),
    del({ targets: ['dist/*'] }),
    svg(),
  ],
  external,
};
export default config;
