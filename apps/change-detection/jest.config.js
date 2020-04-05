module.exports = {
  name: 'change-detection',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/change-detection',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
