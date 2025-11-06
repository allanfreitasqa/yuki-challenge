import { test as base } from "@playwright/test";
import { WelcomePage } from "../pages/welcomePage.js";
import { InvoicesPage } from "../pages/invoicesPage.js";
import { PrivacyPage } from "../pages/privacyPage.js";

type MyFixtures = {
  welcomePage: WelcomePage;
  invoicesPage: InvoicesPage;
  privacyPage: PrivacyPage;
};

export const test = base.extend<MyFixtures>({
  welcomePage: async ({ page }, use) => {
    await use(new WelcomePage(page));
  },

  invoicesPage: async ({ page }, use) => {
    await use(new InvoicesPage(page));
  },

  privacyPage: async ({ page }, use) => {
    await use(new PrivacyPage(page));
  },
});
