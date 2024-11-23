const { resizeImagesForBreakpoints } = require('./resize');

const responsiveImageResizer = async (options) => {
  const { inputImagePath, outputDirectory, breakpoints, quality } = options;
  await resizeImagesForBreakpoints(inputImagePath, outputDirectory, breakpoints, quality);
};

module.exports = responsiveImageResizer;
