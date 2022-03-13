/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\.tsx?$": "ts-jest"
  },
  testRegex: "\.spec\.tsx?$",
  testPathIgnorePatterns: [
    "./.next/",
    "./node_modules/"
  ],
  globals: {
    "ts-jest": {
      "tsconfig": "tsconfig.jest.json"
    }
  }
};