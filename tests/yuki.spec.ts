import { test } from "../fixtures/base.js";

test.describe("Navigation to all pages", () => {
  test("Visit Home page", async ({ welcomePage }) => {
    await welcomePage.goto();
    await welcomePage.assertWelcomeIsVisible();
    await welcomePage.assertThePageTitle();
  });

  test("Visit Invoices page", async ({ invoicesPage }) => {
    await invoicesPage.goto();
    await invoicesPage.assertInvoiceTitleIsVisible();
  });

  test("Visit Privacy page", async ({ privacyPage }) => {
    await privacyPage.goto();
    await privacyPage.assertPrivacyTitleIsVisible();
  });
});

test("Validate the sum of invoices", async ({ invoicesPage }) => {
  await invoicesPage.goto();
  await invoicesPage.validateTheSumOfInvoices();
});

test("Validate the amount of invoice", async ({ invoicesPage }) => {
  await invoicesPage.goto();
  await invoicesPage.validateInvoiceAmount();
});
