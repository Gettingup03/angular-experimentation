module.exports = {
  name: 'dom-queries-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dom-queries-api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
