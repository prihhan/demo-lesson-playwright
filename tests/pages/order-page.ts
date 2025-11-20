// import { Locator, Page } from '@playwright/test'

import type { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  readonly usernameField: Locator
  readonly orderButton: Locator
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.usernameField = page.getByTestId('username-input')
    this.orderButton = page.getByTestId('createOrder-button')
  }
}
