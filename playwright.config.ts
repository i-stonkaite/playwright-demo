import { PlaywrightTestConfig, devices } from "@playwright/test";
import environmentValues from "./environment";

const RPconfig = {
  apiKey: environmentValues.reportPortalApiKey,
  endpoint: "https://demo.reportportal.io/api/v1",
  project: "i-stonkaite_personal",
  launch: "report-portal",
  attributes: [
    {
      key: "key",
      value: "value",
    },
    {
      value: "value",
    },
  ],
  description: "Playwright demo with Report Portal config",
};

const config: PlaywrightTestConfig = {
  testDir: ".",
  testMatch: ["**/*spec.ts"],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["@reportportal/agent-js-playwright", RPconfig]],

  use: {
    trace: "on-first-retry",
    ignoreHTTPSErrors: true,
    baseURL: environmentValues.baseUrl,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

export default config;
