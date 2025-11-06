import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.js";
import { ROUTES } from "../config/routes.js";

export class WelcomePage extends BasePage {
  readonly page: Page;
  readonly welcome: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.welcome = page.locator("h1", { hasText: "Welcome" });
  }

  async goto() {
    await this.page.goto(ROUTES.home);
  }

  async assertWelcomeIsVisible() {
    await expect(this.welcome).toBeVisible();
  }

  async assertThePageTitle() {
    await expect(this.page).toHaveTitle(
      "Home Page - yuki_qa_automation_frontend"
    );
  }
}
