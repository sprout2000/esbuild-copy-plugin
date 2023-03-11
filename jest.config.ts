import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageReporters: ["text", "json-summary"],
};

export default config;
