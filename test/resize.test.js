const fs = require('fs-extra');
const path = require('path');
const resize = require('../src/resize');

describe('Image Resizing', () => {
  const inputImagePath = path.join(__dirname, 'banner2.jpg'); // Replace with actual image path
  const outputDir = path.join(__dirname, 'output');
  const breakpoints = [320, 768, 1024, 1920];

  it('should resize the image for all breakpoints', async () => {
    await resize.resizeImagesForBreakpoints(inputImagePath, outputDir, breakpoints);
    
    for (let breakpoint of breakpoints) {
      const outputImagePath = path.join(outputDir, `image-${breakpoint}.jpg`);
      expect(fs.existsSync(outputImagePath)).toBe(true);
    }
  });
});
