import { test } from "../../fixtures";

test.describe("Platform integration page", () => {
  test.beforeEach(async ({}) => {});

  test("should successfully search and display search results when valid search criteria are used", async ({
    platformIntegrationPage,
  }) => {
    await platformIntegrationPage.goToAndWaitToLoad();
    await platformIntegrationPage.hoverOnSolutions();
    await platformIntegrationPage.clickFirstLinkPlatformIntegrations();
    await platformIntegrationPage.validateUrlChange();
    await platformIntegrationPage.verifyLocationInputIsVisible();
    await platformIntegrationPage.fillSearchInputField();
    await platformIntegrationPage.selectPartnerType();
    await platformIntegrationPage.selectIndustry();
    await platformIntegrationPage.selectLocation();
    await platformIntegrationPage.verifyAmountOfExpectedResults();
    await platformIntegrationPage.clickOnSelectedResult();
    await platformIntegrationPage.verifyPartnerTitle();
  });
});
