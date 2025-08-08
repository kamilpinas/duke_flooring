import sharp from "sharp"
import fs from "fs"
import path from "path"

const inputDir = "./public/images/raw"
const outputDir = "./public/images/optimized"
const sizes = [400, 800, 1200, 1600]

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const isImage = (file) => /\.(jpe?g|png|webp)$/i.test(file)

const processImage = async (imagePath) => {
  const fileName = path.basename(imagePath, path.extname(imagePath))

  console.log(`Processing ${imagePath}...`)

  for (const size of sizes) {
    // WebP
    const resizedWebpPath = path.join(outputDir, `${fileName}-${size}w.webp`)
    await sharp(imagePath)
      .resize(size)
      .webp({ quality: 80 })
      .toFile(resizedWebpPath)
    console.log(`  - Saved ${resizedWebpPath}`)
  }
}

const processAllImages = async () => {
  const files = fs.readdirSync(inputDir)
  for (const file of files) {
    if (!isImage(file)) continue
    const filePath = path.join(inputDir, file)
    if (fs.statSync(filePath).isFile()) {
      await processImage(filePath)
    }
  }
  console.log("All images processed!")
}

processAllImages().catch(console.error)
