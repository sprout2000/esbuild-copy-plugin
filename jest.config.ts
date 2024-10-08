import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageReporters: ["text", "json-summary"],
};

export default config;
