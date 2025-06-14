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
