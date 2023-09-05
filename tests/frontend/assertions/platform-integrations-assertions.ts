import { expect, Page } from "@playwright/test";
import { PlatformIntegrationPage } from "frontend/pages/platform-integrations-page";
import environmentValues from "../../../environment";
import { ItemType } from "base-test";

export class PlatformIntegrationPageAssertions extends PlatformIntegrationPage {
  override readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async validateUrlChange(): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(
      `${environmentValues.baseUrl}/partner-integrations/`
    );
  }

  async verifyLocationInputIsVisible(): Promise<void> {
    await expect(
      this.page.getByRole(ItemType.COMBOBOX, {
        name: this.locationComboboxName,
      })
    ).toBeVisible();
  }

  async verifyAmountOfExpectedResults(): Promise<void> {
    const linkCountInResults = await this.partnerList
      .getByRole(ItemType.LINK)
      .count();
    expect(linkCountInResults).toBe(this.linkCount);
  }

  async verifyPartnerTitle(): Promise<void> {
    const partnerTitle = this.page.getByRole(ItemType.HEADING, {
      name: this.selectedResultTitleText,
    });
    await expect(partnerTitle).toBeVisible();
  }
}
