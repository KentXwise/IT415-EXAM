# Scenario 1 - Campus Cafeteria POS Master Prompt

## Context

You are my AI-assisted development partner for the IT 415 Midterm Practical Examination. Build only **Scenario 1 - Campus Cafeteria POS**, a computer-based food-ordering and point-of-sale application for a walk-up cafeteria counter where student assistants take orders for rice meals, viands, snacks, and drinks.

The application will run in a desktop web browser and be operated with a mouse and keyboard. I must understand, test, and be able to explain all code you create. Inspect the existing workspace before changing anything, preserve working behavior and unrelated files, and use the smallest clear implementation that satisfies the examination requirements.

Do **not** build the POS immediately. Work through the four stages one at a time. Your first response must perform **Stage 1 only**, without creating, editing, deleting, or formatting any project file. Stop after Stage 1 and wait for my explicit confirmation before continuing to Stage 2.

Use these exact products and prices:

| Product | Price |
|---|---:|
| Rice (Plain) | ₱15.00 |
| Fried Chicken (1 pc) | ₱65.00 |
| Pork Adobo | ₱60.00 |
| Vegetable Side Dish | ₱35.00 |
| Iced Tea (cup) | ₱20.00 |
| Bottled Water | ₱20.00 |

## Objective

Guide the controlled, stage-by-stage creation of a complete, functional, readable, and testable Campus Cafeteria POS using only vanilla HTML, CSS, and JavaScript. The completed application must support one complete transaction from browsing products through payment, receipt generation, and starting a new transaction.

Prioritize correct behavior over elaborate design. Explain the important logic in plain language so I can demonstrate and defend the work during checking. Never move to the next stage based on implied approval, silence, or the original request; require a new explicit confirmation from me at each approval gate.

## Requirements

### A. Required transaction flow

Implement this flow in order:

1. **Browse Products:** Display the available product names and prices.
2. **Add to Cart:** Let the cashier add products and adjust quantities.
3. **Review Order:** Show each cart item, quantity, unit price, subtotal, and the total amount.
4. **Enter Payment:** Accept the cash amount through a numeric input field.
5. **Validate and Compute:** Validate the payment and calculate change when the payment is sufficient.
6. **Confirm Payment:** Display a clear payment confirmation with transaction details.
7. **Receipt / New Transaction:** Generate a digital receipt and provide a button to start a new transaction.

### B. Functional requirements

1. Display all six cafeteria products with their exact names and prices.
2. Provide an on-screen **Add to Cart** button for every product.
3. Allow the cashier to increase and decrease the quantity of an item already in the cart.
4. Do not allow a quantity below zero. Remove an item when its quantity reaches zero, or provide a separate remove action with equivalent clear behavior.
5. Provide a direct way to remove a product from the cart.
6. Recalculate every item subtotal and the overall total immediately whenever the cart changes.
7. Display a clear order summary containing item name, quantity, unit price, and subtotal.
8. Accept cash payment through a numeric input.
9. Do not process payment when the cart is empty.
10. Reject blank, non-numeric, and negative payment values with the message: `Please enter a valid payment amount.`
11. Reject insufficient payment with a dynamic message such as: `Insufficient payment. Please enter at least ₱165.00.` Replace ₱165.00 with the current order total.
12. For valid sufficient payment, calculate `Change = Amount Paid - Total Amount` and format all currency values to two decimal places.
13. Display a clear success confirmation only after payment is valid and sufficient.
14. Generate a digital receipt containing:
    - transaction reference or transaction number;
    - purchased items;
    - quantities;
    - unit prices;
    - subtotals;
    - total amount;
    - amount paid; and
    - change.
15. Provide a **New Transaction** button that clears the cart, payment input, validation messages, confirmation, and receipt from the previous transaction.
16. Provide readable feedback for successful actions and errors.

### C. Interface requirements

- Use a clean, desktop-friendly layout with clearly separated product, cart/order summary, payment, and receipt areas.
- Use semantic HTML, readable typography, consistent spacing, visible button states, and accessible labels.
- Support normal mouse and keyboard operation.
- Keep the interface simple enough to finish and explain within the examination period.
- Make reasonable responsive adjustments for smaller laptop screens, while treating desktop use as the priority.

### D. Required verification cases

Verify the affected behavior with evidence. At minimum, check:

1. Adding each product to the cart.
2. Increasing and decreasing quantities.
3. Removing an item.
4. Automatic subtotal and total updates.
5. Empty cart payment attempt.
6. Blank payment.
7. Non-numeric payment.
8. Negative payment.
9. Insufficient payment.
10. Exact payment.
11. Payment greater than the total.
12. Receipt contents and transaction reference.
13. Complete reset after **New Transaction**.
14. The worked example: 2 Fried Chicken at ₱65.00, 1 Rice at ₱15.00, and 1 Iced Tea at ₱20.00 must total ₱165.00. Cash of ₱200.00 must produce ₱35.00 change.

### E. Development-cycle milestones

If the work continues across multiple prompts, use these milestones:

- **Cycle 1:** Project setup, product display, and basic desktop interface.
- **Cycle 2:** Cart controls, quantities, removal, subtotals, and total calculation.
- **Cycle 3:** Payment validation, change calculation, confirmation, receipt, and new-transaction reset.
- **Cycle 4:** Full-flow testing, debugging, accessibility/readability improvements, documentation, and submission checks.

Every cycle must still use and report all four mandatory stages described under **Expected Output**.

### F. Mandatory stage approval gates

- Complete only one stage per response.
- **Stage 1 is read-only:** inspect the workspace, analyze the requirements, define the scope, and propose acceptance checks. Do not create or modify the POS during Stage 1.
- At the end of Stage 1, stop and ask: `Do you approve Stage 1 and authorize me to continue to Stage 2 - Implement?`
- Begin Stage 2 only after I explicitly approve it in a new message.
- At the end of Stage 2, stop and ask for explicit approval before Stage 3.
- Begin Stage 3 only after I explicitly approve verification and testing.
- At the end of Stage 3, stop and ask for explicit approval before Stage 4.
- Begin Stage 4 only after I explicitly approve documentation and checkpoint work.
- If I request changes to the current stage, revise that stage and ask for approval again. Do not treat revision feedback as permission to advance.
- Never combine two stages in one response unless I explicitly authorize those exact stages together.

## Constraints

- Application technology is limited to **HTML, CSS, and vanilla JavaScript only**.
- Do not use React, Vue, Angular, jQuery, Bootstrap, Tailwind, TypeScript, Node.js servers, package managers, external APIs, back-end services, or third-party libraries.
- Store products, cart state, and the current transaction in JavaScript memory. Do not add a database or require `localStorage`.
- Hard-code the supplied product catalog and prices.
- Do not add login/authentication, inventory management, product editing, real payment gateways, QR/card payment, deployment, or other features outside the stated requirements.
- Keep the app runnable by opening `index.html` in a modern browser; do not require a build step.
- Use separate `index.html`, `style.css`, and `script.js` files. Markdown documentation such as `README.md` and `AI-USAGE-LOG.md` is allowed and does not change the required application stack.
- Preserve existing project work when files already exist. Do not overwrite unrelated changes.
- During Stage 1, perform read-only inspection only. Do not create, edit, delete, rename, format, commit, or push any file.
- Treat approval for one stage as authorization for that stage only. It does not authorize later stages.
- Do not create a GitHub repository, commit, or push unless I explicitly request it. When Git action is not authorized, recommend the appropriate checkpoint and commit message only.
- Never claim a test, screenshot, commit, or push succeeded without direct evidence. Mark unperformed browser checks as pending manual verification.

## Expected Output

Follow the stages sequentially across separate responses. Do not create or update application files until Stage 2 has been explicitly approved. When Stage 2 is authorized and workspace access is available, create or update the actual project files. Otherwise, provide complete copy-ready contents for each file. The expected application files are:

```text
index.html
style.css
script.js
```

Also provide or update concise `README.md` and `AI-USAGE-LOG.md` documentation when appropriate.

For every prompt cycle, process these four stages in order, but complete only the currently authorized stage. Show the status of all four stages at the end of each response so it is clear which stages are complete, awaiting approval, or not started.

### Stage 1 - Scope and Acceptance

- Restate the current requested outcome.
- Identify the relevant transaction-flow steps and functional requirements.
- Inspect the current files using read-only actions and state what would and would not change if Stage 2 is approved.
- Define observable acceptance checks before implementation.
- Do not write code or change any file.
- Present the proposed implementation plan and wait for my decision.
- End the response by asking: `Do you approve Stage 1 and authorize me to continue to Stage 2 - Implement?`

### Stage 2 - Implement

- Start only after I explicitly approve Stage 2.
- Implement the smallest complete increment for the current cycle.
- Preserve existing working behavior and unrelated work.
- Explain the changed HTML, CSS, and JavaScript logic in plain language.
- Keep currency calculations and display formatting consistent to two decimal places.
- Do not begin testing beyond basic implementation safety checks until Stage 3 is approved.
- End the response by asking: `Do you approve Stage 2 and authorize me to continue to Stage 3 - Verify and Evaluate?`

### Stage 3 - Verify and Evaluate

- Start only after I explicitly approve Stage 3.
- Run available checks and exercise the affected flow.
- Report concrete results for every check performed.
- List exact manual browser checks for anything you cannot execute, and mark them as pending.
- Classify the AI-assisted result as **Correct**, **Partially correct**, or **Incorrect**, with a short reason.
- Do not update the AI log, documentation, Git history, or screenshots during this stage unless needed solely to perform an approved test.
- End the response by asking: `Do you approve Stage 3 and authorize me to continue to Stage 4 - Document and Checkpoint?`

### Stage 4 - Document and Checkpoint

- Start only after I explicitly approve Stage 4.
- Produce an AI-usage entry containing the exact prompt, prompt purpose, brief response summary, evaluation, modifications made, and tests performed.
- Append the entry to existing AI documentation instead of replacing earlier entries.
- State which Git milestone the work matches and recommend a descriptive commit message. Perform Git or GitHub actions only when explicitly requested.
- State which required screenshots are ready to capture and which remain pending.
- Recommend the next prompt cycle.

End every response with exactly this status structure. Report future stages as `Awaiting approval` or `Not started`; do not perform them early:

```text
Stage 1 - Scope: [Completed, Awaiting approval, or revision status]
Stage 2 - Implement: [Awaiting approval, In progress, Completed, or Not started]
Stage 3 - Verify: [Awaiting approval, In progress, Completed, or Not started]
Stage 4 - Document/Checkpoint: [Awaiting approval, In progress, Completed, or Not started]
Approval required: [the exact next-stage approval question]
```

Begin with Stage 1 only. Inspect the workspace without modifying it, identify whether the three application files already exist, present the proposed scope and acceptance checks, ask for approval to continue to Stage 2, and then stop.
