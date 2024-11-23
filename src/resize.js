const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const resizeImage = async (inputPath, outputPath, width, quality = 80) => {
  try {
    await sharp(inputPath)
      .resize(width)
      .jpeg({ quality })  // Adjust the quality of the JPEG image (can be changed based on format)
      .toFile(outputPath);
    console.log(`Resized image saved to: ${outputPath}`);
  } catch (err) {
    console.error('Error resizing image:', err);
  }
};

// Function to resize images to multiple sizes (mobile, tablet, desktop)
const resizeImagesForBreakpoints = async (inputImagePath, outputDir, breakpoints) => {
  await fs.ensureDir(outputDir);  // Ensure the output directory exists

  for (let breakpoint of breakpoints) {
    const outputImagePath = path.join(outputDir, `image-${breakpoint}.jpg`);
    await resizeImage(inputImagePath, outputImagePath, breakpoint);
  }
};

module.exports = {
  resizeImage,
  resizeImagesForBreakpoints,
};
