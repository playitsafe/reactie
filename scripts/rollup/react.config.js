import { getBaseRollupPlugins, getPackageJson, resolvePkgPath } from './utils'

const { name, module } = getPackageJson('react')

// path of the react package
const pkgPath = resolvePkgPath(name)
// path of the dist directory for the react package
const pkgDistPath = resolvePkgPath(name, true)

export default [
	// react package
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			// compatible with both ESM and CommonJS
			format: 'umd',
		},
		plugins: getBaseRollupPlugins(),
	},

	// jsx-runtime package
	{
		input: `${pkgPath}/src/jsx.ts`,
		// use array as we want to output dev and prod versions
		output: [
			// jsx-runtime
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd',
			},
			// jsx-dev-runtime
			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd',
			},
		],
		plugins: getBaseRollupPlugins(),
	},
]
