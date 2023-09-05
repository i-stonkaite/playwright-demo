import { test as base } from "@playwright/test";
import { PlatformIntegrationPageAssertions } from "../tests/frontend/assertions/platform-integrations-assertions";

type PageFixtures = {
  platformIntegrationPage: PlatformIntegrationPageAssertions;
};

export const test = base.extend<PageFixtures>({
  platformIntegrationPage: async ({ page }, use) => {
    await use(new PlatformIntegrationPageAssertions(page));
  },
});

export { expect } from "@playwright/test";
