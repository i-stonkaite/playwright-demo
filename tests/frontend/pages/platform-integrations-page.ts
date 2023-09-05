import { Locator, Page, expect } from "@playwright/test";
import { BaseTest, ItemType } from "base-test";

export class PlatformIntegrationPage extends BaseTest {
  override readonly page: Page;

  readonly solutionsButtonName: string = "Solutions";
  readonly platformIntegrationsLinkName: string = "Platform integrations";
  readonly locationComboboxName: string = "Location";
  readonly partnerTypeComboboxName: string = "Partner Type";
  readonly industryComboboxName: string = "Industry";
  readonly searchFillValue: string = "Commerce";
  readonly linkCount: number = 4;
  readonly selectedResultNumber: number = 3;
  readonly selectedResultTitleText: string = "BigCommerce";

  readonly optionECommercePlatform: Locator;
  readonly optionDigitalGoods: Locator;
  readonly optionCanada: Locator;
  readonly optionGreatBritain: Locator;
  readonly partnerList: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.optionECommercePlatform = this.page.locator("#bs-select-1-4");
    this.optionDigitalGoods = this.page.locator("#bs-select-2-1");
    this.optionCanada = this.page.locator("#bs-select-3-2");
    this.optionGreatBritain = this.page.locator("#bs-select-3-7");
    this.partnerList = this.page.locator("#partner-list");
  }

  async hoverOnSolutions(): Promise<void> {
    await this.getByRoleUsingNameAndHover(
      ItemType.BUTTON,
      this.solutionsButtonName
    );
  }

  async clickFirstLinkPlatformIntegrations(): Promise<void> {
    await this.page
      .getByRole(ItemType.LINK, {
        name: this.platformIntegrationsLinkName,
        exact: true,
      })
      .first()
      .click();
  }

  async fillSearchInputField(): Promise<void> {
    await this.page.getByRole(ItemType.TEXTBOX).fill(this.searchFillValue);
  }

  async selectPartnerType(): Promise<void> {
    await this.getByRoleUsingNameAndClick(
      ItemType.COMBOBOX,
      this.partnerTypeComboboxName
    );
    await this.optionECommercePlatform.click();
  }

  async selectIndustry(): Promise<void> {
    await this.getByRoleUsingNameAndClick(
      ItemType.COMBOBOX,
      this.industryComboboxName
    );
    await this.optionDigitalGoods.click();
  }

  async selectLocation(): Promise<void> {
    await this.getByRoleUsingNameAndClick(
      ItemType.COMBOBOX,
      this.locationComboboxName
    );
    await this.optionGreatBritain.click();
    await this.optionCanada.click();
  }

  async clickOnSelectedResult(): Promise<void> {
    await this.partnerList
      .getByRole(ItemType.LINK)
      .nth(this.selectedResultNumber - 1)
      .click();
  }
}
