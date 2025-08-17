const config = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  objectWrap: 'preserve',
  bracketSameLine: false,
  proseWrap: 'preserve',
  arrowParens: 'always',
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-tailwindcss',
  ],
  tailwindStylesheet: '.src/styles/global.css',
  tailwindFunctions: ['cn', 'clsx', 'cva', 'twMerge'],
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
}

export default config
