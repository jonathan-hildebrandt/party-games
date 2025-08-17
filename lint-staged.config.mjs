const config = {
  '**/*.{ts,tsx,js,jsx,mjs,cjs}': [
    'eslint --fix',
    'prettier --write --ignore-unknown',
  ],
  '**/*.{json,md,mdx,css,scss,html,yml,yaml}': [
    'prettier --write --ignore-unknown',
  ],
}

export default config
