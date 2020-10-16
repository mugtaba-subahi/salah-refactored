module.exports = {
  purge: ['./src/*.vue', './src/**/*.vue'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  }
};
