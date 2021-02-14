export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/__tests__/**/*"],
  testPathIgnorePatterns: ["/node_modules/"],
  globals: { "ts-jest": { diagnostics: false } },
  transform: {},
  resolver: "jest-ts-webcompat-resolver",
};
