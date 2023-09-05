import { Page } from "@playwright/test";

export enum ItemType {
  BUTTON = "button",
  LINK = "link",
  TEXTBOX = "textbox",
  COMBOBOX = "combobox",
  HEADING = "heading",
}

export class BaseTest {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToAndWaitToLoad() {
    await this.page?.goto("/");
    await this.page.waitForLoadState();
  }

  async getByRoleUsingNameAndHover(
    itemType: ItemType,
    nameValue: string
  ): Promise<void> {
    await this.page
      .getByRole(itemType, { name: nameValue, exact: true })
      .hover();
  }

  async getByRoleUsingNameAndClick(
    itemType: ItemType,
    nameValue: string
  ): Promise<void> {
    await this.page
      .getByRole(itemType, { name: nameValue, exact: true })
      .click();
  }

  async getByRoleUsingNameAndFill(
    itemType: ItemType,
    nameValue: string,
    fillValue: string
  ): Promise<void> {
    await this.page
      .getByRole(itemType, { name: nameValue, exact: true })
      .fill(fillValue);
  }
}
