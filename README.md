# Responsive Image Resizer

A simple npm package that resizes images for different screen sizes and resolutions, optimizing them for web performance. This package allows developers to easily create responsive image versions that can be used across different devices, including mobile, tablet, and desktop.

## Features

- Resize images to multiple breakpoints for responsiveness.
- Optimize images by setting compression quality.
- Support for various image formats (e.g., JPEG, PNG).
- Automatically creates the output directory if it doesn't exist.

## Installation

To install the package, run the following command:

```bash
npm install responsive-image-resizer
```
or, if using yarn:
```bash
yarn add responsive-image-resizer
```

## Usage

You can use this package to resize images to multiple breakpoints by specifying the image path, output directory, and breakpoints.


Basic Example:
``` bash
js
const responsiveImageResizer = require('responsive-image-resizer');

const options = {
  inputImagePath: 'path/to/your/image.jpg',  // Path to the original image
  outputDirectory: 'path/to/output/directory', // Directory where resized images will be saved
  breakpoints: [320, 768, 1024, 1920],       // Array of breakpoints for resizing
  quality: 80,                                // (Optional) Quality for JPEG images (default is 80)
};

responsiveImageResizer(options)
  .then(() => {
    console.log('Images resized successfully!');
  })
  .catch(err => {
    console.error('Error resizing images:', err);
  });
```
## Parameters
* inputImagePath: Path to the original image (required).
* outputDirectory: Path to the directory where resized images will be stored (required).
* breakpoints: An array of widths (in pixels) to resize the image for. For example, [320, 768, 1024, 1920] (required).
* quality: (Optional) Image quality for JPEG images, on a scale from 0 to 100 (default is 80).
## Example Output:
If you use the breakpoints [320, 768, 1024, 1920], the following images will be created in the output directory:

image-320.jpg,
image-768.jpg,
image-1024.jpg,
image-1920.jpg
