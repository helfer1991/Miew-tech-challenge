export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^axios$': '<rootDir>/__mocks__/axios.ts',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
};
  