export default {
  setupFiles: ['<rootDir>./tests/config/jest/jest.polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>./tests/config/jest/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vite.config.ts',
    '!**/jest.config.ts',
    '!**/main.tsx',
    '!**/App.tsx',
    '!**/App.tsx',
    '!**/vite-env.d.ts',
    '!**/index.ts',
    '!**/routes/**',
  ],

  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/functions/(.*)$': '<rootDir>/src/functions/$1',
    '^@/middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/providers/(.*)$': '<rootDir>/src/providers/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
}
