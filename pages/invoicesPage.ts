import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.js";
import { ROUTES } from "../config/routes.js";

export class InvoicesPage extends BasePage {
  readonly page: Page;
  readonly invoiceTitle: Locator;
  readonly amountCells: Locator;
  readonly totalCell: Locator;
  readonly invoiceRow: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.invoiceTitle = page.locator("h1", { hasText: "Invoice" });
    this.amountCells = page.locator("table tbody tr td:nth-child(3)");
    this.totalCell = page.locator(".summary-row td:nth-child(2)");
    this.invoiceRow = page.locator("table tbody tr", {
      hasText: "I634",
    });
  }

  async goto() {
    await this.page.goto(ROUTES.invoices);
  }

  async assertInvoiceTitleIsVisible() {
    await expect(this.invoiceTitle).toBeVisible();
  }

  async validateTheSumOfInvoices() {
    const count = await this.amountCells.count();

    let sum = 0;

    for (let i = 0; i < count; i++) {
      let value = await this.amountCells.nth(i).innerText();
      sum += Number(value.replace(/[^0-9.-]+/g, ""));
    }

    // Get total displayed in table footer
    const displayedTotal = Number(
      (await this.totalCell.innerText()).replace(/[^0-9.-]+/g, "").trim()
    );

    expect(sum).toBe(displayedTotal);
  }

  async validateInvoiceAmount() {
    const expectedAmount = 423.99;

    const invoiceAmount = Number(
      (await this.invoiceRow.locator("td:nth-child(3)").innerText())
        .replace(/[^0-9.-]+/g, "")
        .trim()
    );

    expect(invoiceAmount).toBe(expectedAmount);
  }
}
