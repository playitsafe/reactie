import path from 'path'
import fs from 'fs'
import ts from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'

const pkgPath = path.resolve(__dirname, '../../packages')
const distPath = path.resolve(__dirname, '../../dist/node_modules')

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return path.resolve(distPath, pkgName)
	}
	return `${pkgPath}/${pkgName}`
}

export function getPackageJson(pknName) {
	// Find the path of `package.json` for each package
	const pkgPath = `${resolvePkgPath(pknName)}/package.json`
	// read the package.json file into string
	const pkgJson = fs.readFileSync(pkgPath, 'utf-8')
	return JSON.parse(pkgJson)
}

export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [
		// plugin to resolve commonjs modules
		cjs(),
		// plugin to compile TypeScript into JS
		ts(typescript),
	]
}
