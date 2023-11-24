export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
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
  },
  setupFilesAfterEnv: ['<rootDir>./tests/config/jest/jest.setup.ts'],
}
