import pkg from './package.json'

const shared = {
  entrypoints: ['./src/index.js'],
  outdir: './dist',
  external: Object.keys(pkg.peerDependencies),
  sourcemap: 'linked',
  define: { 'process.env.NODE_ENV': '"production"' },
}

await Bun.build({
  ...shared,
  naming: 'index.js',
  format: 'esm',
})

await Bun.build({
  ...shared,
  naming: 'index.cjs',
  format: 'cjs',
})
