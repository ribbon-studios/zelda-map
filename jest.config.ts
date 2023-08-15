import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  roots: ['<rootDir>/app'],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },

  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/app/**/*'],

  coveragePathIgnorePatterns: ['__tests__'],

  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/__tests__/identity-obj-proxy-esm.ts',
  },
  transformIgnorePatterns: ['^.+\\.js$'],
};

export default jestConfig;
