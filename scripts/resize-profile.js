/**
 * Redimensiona public/assets/profile.jpg em três variantes:
 * - profile-256.jpg  (256x256)
 * - profile-512.jpg  (512x512)
 * - profile-1024.jpg (1024x1024)
 * Também gera profile-512.webp (opcional, melhor performance).
 *
 * Uso:
 * 1) npm install sharp --save-dev
 * 2) node scripts/resize-profile.js
 *
 * Certifique-se de ter o arquivo original em:
 * public/assets/profile.jpg
 */
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const assetsDir = path.resolve('public', 'assets')
const input = path.join(assetsDir, 'profile.jpg')

if (!fs.existsSync(input)) {
  console.error('Arquivo não encontrado:', input)
  process.exit(1)
}

const outputVariants = [
  { name: 'profile-256.jpg', size: 256, opts: { quality: 85 } },
  { name: 'profile-512.jpg', size: 512, opts: { quality: 86 } },
  { name: 'profile-1024.jpg', size: 1024, opts: { quality: 88 } }
]

async function build() {
  try {
    await Promise.all(
      outputVariants.map(v =>
        sharp(input)
          .resize(v.size, v.size, { fit: 'cover', position: 'centre' })
          .jpeg(v.opts)
          .toFile(path.join(assetsDir, v.name))
      )
    )

    // opcional: WebP para melhor compressão (512)
    await sharp(input)
      .resize(512, 512, { fit: 'cover', position: 'centre' })
      .webp({ quality: 78 })
      .toFile(path.join(assetsDir, 'profile-512.webp'))

    console.log('Imagens geradas em', assetsDir)
  } catch (err) {
    console.error('Erro ao redimensionar:', err)
    process.exit(1)
  }
}

build()
