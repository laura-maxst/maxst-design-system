import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom', 'styled-components'];
const config = {
  input: 'src/components/alert/index.tsx',
  plugins: [
    resolve({ extensions }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({ include: 'node_modules/**' }),
    typescript({ tsconfig: './tsconfig.json', clean: true }),
    svgr(),
    image(),
    url({
      include: ['**/*.svg', '**/*.tsx', '**/*.ts'],
      limit: Infinity,
      emitFiles: true,
      fileName: '[name][extname]',
      destDir: 'dist/assets',
      publicPath: '/assets',
    }),
    peerDepsExternal(),
    sourcemaps(),
    del({ targets: ['dist/*'] }),
  ],
  output: [
    {
      sourcemap: true,
      dir: 'dist',
      format: 'cjs',
    },
  ],
};
export default config;
