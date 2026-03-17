import pkg from './package.json'

await Bun.build({
  entrypoints: ['./src/index.js'],
  outdir: './dist',
  external: Object.keys(pkg.peerDependencies),
  sourcemap: 'linked',
  naming: 'index.js',
  format: 'esm',
})

await Bun.build({
  entrypoints: ['./src/index.js'],
  outdir: './dist',
  external: Object.keys(pkg.peerDependencies),
  sourcemap: 'linked',
  naming: 'index.cjs',
  format: 'cjs',
})
