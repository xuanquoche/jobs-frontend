import type { Config } from "@jest/types";

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: "src",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|css|jpg)$":
      "<rootDir>/src/test/__mocks__/fileMock.ts",
  },
  collectCoverageFrom: ["./**/*.(t|j)s"],
};
