# Scenario 1 - Campus Cafeteria POS Prompt Cycles

Use these prompts in order. Before sending a prompt, replace bracketed placeholders such as `[PROGRAMMING LANGUAGE / FRAMEWORK]` and `[PROJECT PATH]`. Give the AI access only to the project it should inspect or modify.

Each prompt follows the required **Context - Objective - Requirements - Constraints - Expected Output** format. Every response must finish with **Stage 1 through Stage 4** so the work can be evaluated and documented for the examination.

## Prompt Cycle 1 - Project Setup, Product Browsing, and Basic Interface

```text
Context

I am developing Scenario 1 - Campus Cafeteria POS for the IT 415 Midterm Practical Examination. This is a desktop/laptop application operated with a mouse and keyboard. The project uses [PROGRAMMING LANGUAGE / FRAMEWORK] and is located at [PROJECT PATH]. Inspect the existing project before making changes and preserve any working behavior and unrelated files.

The cafeteria products and fixed prices are:
- Rice (Plain) - ₱15.00
- Fried Chicken (1 pc) - ₱65.00
- Pork Adobo - ₱60.00
- Vegetable Side Dish - ₱35.00
- Iced Tea (cup) - ₱20.00
- Bottled Water - ₱20.00

Objective

Create or complete the basic desktop-friendly interface for the first part of the required transaction flow:
1. Browse Products - display all available products with names and prices.
2. Add to Cart - allow each product to be added using a clear on-screen button.

Requirements

- Display all six cafeteria products and their exact Philippine-peso prices.
- Provide an Add to Cart button or equivalent mouse-friendly control for every product.
- Include clearly distinguishable areas for the product list, cart/order summary, payment, and receipt, even if the last areas are placeholders during this cycle.
- Keep the interface readable on a standard desktop or laptop screen.
- Store products in a simple local structure. Hard-coded products are allowed.
- Show clear feedback when an item is added.
- Use consistent currency formatting with two decimal places.
- Explain the project structure and the new code in plain language so I can describe it during checking.

Constraints

- Implement only Scenario 1; do not add the other four scenarios.
- Do not add a database, authentication, inventory management, payment gateway, QR/card payment, deployment, or other unrequired features.
- Prefer a simple working interface over elaborate styling.
- Preserve the existing framework and conventions.
- Do not claim the application works unless you run available checks or clearly mark manual UI testing as pending.
- Do not commit or push changes unless I explicitly ask.

Expected Output

- Inspect the project and identify the files that need changes.
- Implement the product-browsing interface and Add to Cart controls.
- Run available formatting, analysis, build, or test checks.
- Give exact manual steps for verifying that every product and Add to Cart control works.
- Provide a short AI-usage-log entry containing this exact prompt, its purpose, a brief response summary, your evaluation, and any modifications made.
- Recommend the Git checkpoint and commit message: project setup and basic interface.

End your response with exactly these four labeled sections:

Stage 1 - Scope and Acceptance
- State what was included in this cycle and list the acceptance checks.

Stage 2 - Implementation
- List the changed files and explain the implemented behavior in plain language.

Stage 3 - Verification and Evaluation
- Report checks actually run, manual checks still pending, and classify the result as Correct, Partially correct, or Incorrect with a reason.

Stage 4 - Documentation and Checkpoint
- Provide the AI-use record, screenshot readiness, recommended Git checkpoint, commit message, and the next prompt cycle.
```

## Prompt Cycle 2 - Cart Management and Order Review

```text
Context

Continue my IT 415 Scenario 1 - Campus Cafeteria POS project at [PROJECT PATH], using its existing [PROGRAMMING LANGUAGE / FRAMEWORK] implementation. Prompt Cycle 1 should already display the six cafeteria products and allow products to be added. Inspect the current files and test the existing behavior before editing.

Objective

Complete the cart and order-review portion of the required transaction flow:
2. Add to Cart - add one or more products and adjust quantities.
3. Review Order - display every cart item, quantity, unit price, subtotal, and total amount.

Requirements

- Adding the same product again must increase its quantity instead of creating inconsistent duplicate rows.
- Provide clear controls to increase and decrease each cart item's quantity.
- Do not allow a quantity below one; decreasing from one may either leave it at one or remove it, but the behavior must be clear and consistent.
- Provide a separate Remove control for each cart product.
- Recompute every item subtotal and the overall total immediately whenever the cart changes.
- Use `subtotal = quantity × unit price`.
- Display an empty-cart state when no products are selected.
- Format all money values in Philippine pesos with two decimal places.
- Preserve the product-browsing behavior completed in Prompt Cycle 1.
- Explain the cart state, subtotal calculation, and total calculation in plain language.

Constraints

- Work only on the cart and order-review increment; do not add optional features.
- Keep data in memory or simple local structures; no database is required.
- Preserve unrelated user changes and the existing application design.
- Do not permit negative quantities or stale totals.
- Do not claim tests or UI behavior passed without direct evidence.
- Do not commit or push unless I explicitly ask.

Expected Output

- Implement quantity increase, quantity decrease, item removal, item subtotals, and overall total.
- Add or update focused automated tests when the framework supports them.
- Verify the worked calculation: 2 Fried Chicken at ₱65.00, 1 Rice at ₱15.00, and 1 Iced Tea at ₱20.00 must total ₱165.00.
- Provide manual test steps for adding, increasing, decreasing, removing, and emptying cart items.
- Append a new AI-usage-log entry for this prompt cycle without replacing earlier entries.
- Recommend the Git checkpoint and commit message for core ordering and total computation.

End your response with exactly these four labeled sections:

Stage 1 - Scope and Acceptance
- Map this cycle to Add to Cart and Review Order, then list its acceptance checks.

Stage 2 - Implementation
- List the changed files and explain cart and calculation logic in plain language.

Stage 3 - Verification and Evaluation
- Report actual test evidence, the ₱165.00 worked-example result, pending manual checks, and classify the result as Correct, Partially correct, or Incorrect with a reason.

Stage 4 - Documentation and Checkpoint
- Provide the appended AI-use record, screenshot readiness, recommended Git checkpoint, commit message, and the next prompt cycle.
```

## Prompt Cycle 3 - Cash Payment, Validation, Change, and Confirmation

```text
Context

Continue my IT 415 Scenario 1 - Campus Cafeteria POS project at [PROJECT PATH]. The application should already support browsing products, adding products, managing quantities, removing items, and reviewing item subtotals and the total. Inspect and preserve the current working implementation.

Objective

Implement the payment portion of the required transaction flow:
4. Enter Payment - accept a cash amount through a numeric input field.
5. Validate and Compute - validate the input and calculate change.
6. Confirm Payment - display a clear successful-payment confirmation with transaction details.

Requirements

- Do not accept payment when the cart is empty.
- Validate blank, non-numeric, negative, and insufficient payment values.
- For blank, non-numeric, or negative input, show: `Please enter a valid payment amount.`
- For insufficient payment, show: `Insufficient payment. Please enter at least ₱[CURRENT TOTAL].`
- For sufficient payment, calculate `Change = Amount Paid - Total Amount`.
- Format amount paid, total, and change as Philippine pesos with two decimal places.
- Show clear payment confirmation after a valid payment.
- Prevent accidental duplicate confirmation if the payment action is triggered more than once.
- Preserve the cart and its values after payment so the receipt can be generated in the next cycle.
- Explain validation order and change computation in plain language.

Constraints

- Accept cash only; do not add card, QR, online, or real payment processing.
- Do not clear the cart immediately after successful payment.
- Do not allow invalid input to create confirmation or receipt data.
- Do not add a database or unrelated features.
- Preserve earlier product and cart behavior.
- Do not claim tests passed unless they were run; label unperformed UI checks as pending.
- Do not commit or push unless I explicitly ask.

Expected Output

- Implement the payment input, validation messages, change calculation, and confirmation state.
- Add or update focused tests for blank, non-numeric, negative, insufficient, exact, and excess payments.
- Verify the worked example: total ₱165.00, cash ₱200.00, change ₱35.00.
- Provide exact manual steps for every payment-validation case and successful confirmation.
- Append a separate AI-usage-log entry for this cycle.
- Recommend the Git checkpoint and commit message for payment validation and confirmation.

End your response with exactly these four labeled sections:

Stage 1 - Scope and Acceptance
- Map this cycle to Enter Payment, Validate and Compute, and Confirm Payment, then list acceptance checks.

Stage 2 - Implementation
- List changed files and explain the validation and change-computation logic in plain language.

Stage 3 - Verification and Evaluation
- Report actual test evidence for every payment case, the ₱35.00 worked-example result, pending manual checks, and classify the result as Correct, Partially correct, or Incorrect with a reason.

Stage 4 - Documentation and Checkpoint
- Provide the appended AI-use record, payment screenshot readiness, recommended Git checkpoint, commit message, and the next prompt cycle.
```

## Prompt Cycle 4 - Digital Receipt, New Transaction, and Final Verification

```text
Context

Complete my IT 415 Scenario 1 - Campus Cafeteria POS project at [PROJECT PATH]. The application should already support product browsing, cart management, order review, cash validation, change computation, and payment confirmation. Inspect the complete project before editing and preserve all verified behavior.

Objective

Finish the last required transaction step and validate the complete application:
7. Receipt / New Transaction - display a digital receipt and allow the cashier to start a clean new transaction.

Requirements

- After successful payment, generate a readable digital receipt containing:
  - transaction reference or transaction number;
  - every purchased item;
  - quantity of each item;
  - unit price and item subtotal;
  - total amount;
  - amount paid;
  - change.
- Keep the receipt stable after payment even if display state changes.
- Provide a New Transaction control.
- Starting a new transaction must clear the cart, quantities, payment input, validation messages, payment confirmation, and receipt.
- The product list must remain ready for the next customer.
- Verify the complete seven-step transaction flow from browsing products through starting a new transaction.
- Update the project README or short documentation with setup, run instructions, features, and a short explanation of the transaction flow.
- Explain receipt creation and reset logic in plain language.

Constraints

- Keep the receipt digital; printing and external file export are optional and must not be added unless I request them.
- Do not add authentication, database, inventory, deployment, or advanced Git features.
- Fix only demonstrated problems found during verification; avoid unnecessary refactoring or visual redesign.
- Never report a screenshot, commit, GitHub repository, or push as completed without evidence.
- Do not commit or push unless I explicitly ask.

Expected Output

- Implement the digital receipt, transaction reference, and complete reset behavior.
- Run all available formatting, analysis, automated tests, and build checks.
- Test the worked transaction: 2 Fried Chicken, 1 Rice, and 1 Iced Tea; total ₱165.00; payment ₱200.00; change ₱35.00.
- Test blank, non-numeric, negative, insufficient, exact, and excess payment cases.
- Test quantity changes, removal, empty cart, duplicate payment action, receipt accuracy, and complete new-transaction reset.
- Provide precise manual steps for any checks that cannot be automated.
- Append the final AI-usage-log entry and update the submission checklist without overwriting earlier evidence.
- Identify which screenshots are ready: product list, cart, payment, receipt, and Git history.
- Recommend the final validation/debugging commit message and clearly state whether commit and push remain pending.

End your response with exactly these four labeled sections:

Stage 1 - Scope and Acceptance
- Map this cycle to Receipt / New Transaction and the complete seven-step flow, then list final acceptance checks.

Stage 2 - Implementation
- List changed files and explain receipt and reset logic in plain language.

Stage 3 - Verification and Evaluation
- Report actual automated and manual evidence, all remaining pending checks, and classify the complete result as Correct, Partially correct, or Incorrect with a reason.

Stage 4 - Documentation and Checkpoint
- Provide the appended AI-use record, README/checklist status, screenshot readiness, recommended final commit message, GitHub push status, and any remaining submission work.
```

## Required Transaction Flow Coverage

| Transaction step | Covered in prompt cycle |
|---|---:|
| 1. Browse Products | 1 |
| 2. Add to Cart | 1 and 2 |
| 3. Review Order | 2 |
| 4. Enter Payment | 3 |
| 5. Validate and Compute | 3 |
| 6. Confirm Payment | 3 |
| 7. Receipt / New Transaction | 4 |
