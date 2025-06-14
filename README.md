# Init project

- Init pnpm

```
nvm use
pnpm init
```

- init `pnpm-workspace.yaml`

- Add ESLinit

```
pnpm i eslint -D -w

# init eslint config
npx eslint --init

# add eslint plugin for ts
pnpm i -D -w @typescript-eslint/eslint-plugin
```

- Add Prettier

```
pnpm i prettier -D -w
```

- Add prettier config `.prettier.json`
  Also, to avoid it conflicts with eslint, need to integrate prettier into eslint:

```
pnpm i eslint-config-prettier eslint-plugin-prettier -D -w
```

Add this to `package.json`:

```json
"script": {
    "lint": "eslint --ext .js,.ts,.jsx,.tsx --fix --quiet ./packages",
}

```

- Add Husky

```
pnpm add husky@8  -D -w
npx husky install

npx husky add .husky/pre-commit "pmpm lint"
```

- Add commitlint

```
pnpm i -D -w commitlint  @commitlint/cli @commitlint/config-conventional
```

Create `.commitlintrc.js`:

```js
module.exports = {
	extends: ["@commitlint/config-conventional"]
}
```

Integrate commitlint into husky with conventional commit rules:

```
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"
```

<type>: <subject>
Common types are:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- chore: non-functional changes
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests
- perf: A code change that improves performance
- ci: Changes to our CI configuration files and scripts
