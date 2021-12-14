module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^root(.*)$': '<rootDir>/src$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Store(.*)$': '<rootDir>/src/store$1',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
