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
    '!**/cypress.config.ts',
    '!**/main.tsx',
    '!**/App.tsx',
    '!**/vite-env.d.ts',
    '!**/index.ts',
    '!**/routes/**',
    '!**/providers/**',
    '!**/cypress/**',
    '!**/tests/**',
    '!**/@types/**',
  ],

  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@components$': '<rootDir>/src/components',
    '^@functions$': '<rootDir>/src/functions',
    '^@middlewares/$': '<rootDir>/src/middlewares',
    '^@constants$': '<rootDir>/src/constants',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@store/$': '<rootDir>/src/store',
    '^@services$': '<rootDir>/src/services',
    '^@utils$': '<rootDir>/src/utils',
    '^@providers$': '<rootDir>/src/providers',
    '^@pages$': '<rootDir>/src/pages',
  },
}
