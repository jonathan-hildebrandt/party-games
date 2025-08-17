const config = { 
   "*.{ts,tsx,js,jsx}": [
      "prettier --write",
      "eslint --fix --cache"
    ],
    "*.{json,md,yml,yaml,css,scss}": [
      "prettier --write"
    ]
 }

 export default config