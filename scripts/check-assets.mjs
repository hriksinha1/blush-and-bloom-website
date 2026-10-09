import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { imageManifest } from '../src/data/images.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public', 'images')

const missingFiles = []

for (const image of imageManifest) {
  const filePath = path.join(publicDir, path.basename(image.src))
  if (!fs.existsSync(filePath)) {
    missingFiles.push(`${image.id}: ${image.src}`)
  }
}

if (missingFiles.length) {
  console.error('Missing image files referenced by image manifest:')
  for (const item of missingFiles) console.error(` - ${item}`)
  process.exit(1)
}

const ids = imageManifest.map((image) => image.id)
if (new Set(ids).size !== ids.length) {
  console.error('Duplicate image IDs detected in image manifest.')
  process.exit(1)
}

console.log(`Validated ${imageManifest.length} image entries in public/images.`)
