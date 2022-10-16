/**
 * Exports version of running NodeJs application extracted out of `version`
 * property of appʼs package.json
 *
 * @module node-pkgver
 */

import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

let version = null
let path = dirname(fileURLToPath(import.meta.url))

while (path !== dirname(path)) {
    path = dirname(path)

    const packageJson = join(path, 'package.json')

    if (existsSync(packageJson)) {
        try {
            version = JSON.parse(readFileSync(packageJson, 'utf8')).version
        } finally {
            typeof version === 'string' && version.length || (version = null)
        }

        break
    }
}

/**
 * @export {string|null} String containing version of running NodeJs application
 *                       extracted out of `version` property of appʼs package.json
 *                       or Null if `version` property is empty or missing from
 *                       appʼs package.json, or appʼs package.json is missing per
 *                       se
 */
export default version
