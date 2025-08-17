import createJiti from 'jiti'
import { fileURLToPath } from 'node:url'
const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./src/env/client')
jiti('./src/env/server')

/** @type {import('next').NextConfig} */
const config = {}

export default config
