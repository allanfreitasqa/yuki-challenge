import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.js";
import { ROUTES } from "../config/routes.js";

export class PrivacyPage extends BasePage {
  readonly page: Page;
  readonly privacyTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.privacyTitle = page.locator("h1", { hasText: "Privacy Policy" });
  }

  async goto() {
    await this.page.goto(ROUTES.privacy);
  }

  async assertPrivacyTitleIsVisible() {
    await expect(this.privacyTitle).toBeVisible();
  }
}
