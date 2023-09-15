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

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom'];
const config = {
  input: 'src/index.tsx',
  plugins: [
    resolve({ extensions }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({ include: 'node_modules/**', exclude: ['src/stories/**'] }),
    typescript({ tsconfig: './tsconfig.json', clean: true }),
    svgr(),
    image(),
    url({
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      limit: Infinity,
      emitFiles: true,
      fileName: '[name][extname]',
      destDir: 'dist/assets',
      publicPath: '/assets',
    }),
    peerDepsExternal(),
    sourcemaps(),
    del({ targets: ['dist/*'] }),
    svg(),
  ],
  output: [
    {
      sourcemap: true,
      dir: 'dist',
      format: 'cjs',
    },
  ],
  external: ['src/stories/**'],
};
export default config;
