"use strict";

const PRODUCTS = Object.freeze([
  { id: "rice", name: "Rice (Plain)", price: 1500, icon: "🍚" },
  { id: "chicken", name: "Fried Chicken (1 pc)", price: 6500, icon: "🍗" },
  { id: "adobo", name: "Pork Adobo", price: 6000, icon: "🍲" },
  { id: "vegetables", name: "Vegetable Side Dish", price: 3500, icon: "🥬" },
  { id: "iced-tea", name: "Iced Tea (cup)", price: 2000, icon: "🥤" },
  { id: "water", name: "Bottled Water", price: 2000, icon: "💧" },
]);

const state = {
  cart: new Map(),
  completedTransaction: null,
};

const elements = {
  productGrid: document.querySelector("#product-grid"),
  cartList: document.querySelector("#cart-list"),
  cartCount: document.querySelector("#cart-count"),
  totalAmount: document.querySelector("#total-amount"),
  feedback: document.querySelector("#feedback"),
  paymentForm: document.querySelector("#payment-form"),
  paymentAmount: document.querySelector("#payment-amount"),
  payButton: document.querySelector("#pay-button"),
  receiptSection: document.querySelector("#receipt-section"),
  receiptContent: document.querySelector("#receipt-content"),
  newTransactionButton: document.querySelector("#new-transaction-button"),
  terminalStatus: document.querySelector("#terminal-status-text"),
};

const pesoFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  minimumFractionDigits: 2,
});

function formatMoney(centavos) {
  return pesoFormatter.format(centavos / 100).replace("PHP", "₱").trim();
}

function getProduct(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function getCartEntries() {
  return Array.from(state.cart, ([productId, quantity]) => ({
    product: getProduct(productId),
    quantity,
  }));
}

function getCartCount() {
  return getCartEntries().reduce((sum, entry) => sum + entry.quantity, 0);
}

function getOrderTotal() {
  return getCartEntries().reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0,
  );
}

function setFeedback(message, type = "neutral") {
  elements.feedback.textContent = message;
  elements.feedback.className = "feedback";
  if (type !== "neutral") elements.feedback.classList.add(type);
}

function updateTerminalStatus() {
  if (state.completedTransaction) {
    elements.terminalStatus.textContent = "Payment complete";
  } else if (state.cart.size > 0) {
    elements.terminalStatus.textContent = "Order in progress";
  } else {
    elements.terminalStatus.textContent = "Cashier terminal ready";
  }
}

function renderProducts() {
  const locked = Boolean(state.completedTransaction);

  elements.productGrid.innerHTML = PRODUCTS.map(
    (product) => `
      <article class="product-card">
        <div class="product-card-top">
          <span class="product-icon" aria-hidden="true">${product.icon}</span>
          <div>
            <h3>${product.name}</h3>
            <span class="price">${formatMoney(product.price)}</span>
          </div>
        </div>
        <button
          class="add-button"
          type="button"
          data-product-id="${product.id}"
          ${locked ? "disabled" : ""}
        >Add to cart</button>
      </article>
    `,
  ).join("");
}

function renderCart() {
  const entries = getCartEntries();
  const locked = Boolean(state.completedTransaction);
  const itemCount = getCartCount();

  elements.cartCount.textContent = String(itemCount);
  elements.cartCount.setAttribute(
    "aria-label",
    `${itemCount} ${itemCount === 1 ? "item" : "items"} in cart`,
  );
  elements.totalAmount.textContent = formatMoney(getOrderTotal());

  if (entries.length === 0) {
    elements.cartList.innerHTML = `
      <div class="empty-cart">
        <div><strong>Your cart is empty</strong>Add a menu item to start the order.</div>
      </div>
    `;
  } else {
    elements.cartList.innerHTML = entries
      .map(
        ({ product, quantity }) => `
          <article class="cart-item">
            <div>
              <div class="cart-item-name">${product.name}</div>
              <div class="cart-item-price">${formatMoney(product.price)} each</div>
            </div>
            <div class="cart-subtotal">${formatMoney(product.price * quantity)}</div>
            <div class="cart-actions" aria-label="Change quantity for ${product.name}">
              <button
                class="quantity-button"
                type="button"
                data-action="decrease"
                data-product-id="${product.id}"
                aria-label="Decrease ${product.name} quantity"
                ${locked ? "disabled" : ""}
              >−</button>
              <span class="quantity-value" aria-label="Quantity ${quantity}">${quantity}</span>
              <button
                class="quantity-button"
                type="button"
                data-action="increase"
                data-product-id="${product.id}"
                aria-label="Increase ${product.name} quantity"
                ${locked ? "disabled" : ""}
              >+</button>
              <button
                class="remove-button"
                type="button"
                data-action="remove"
                data-product-id="${product.id}"
                ${locked ? "disabled" : ""}
              >Remove</button>
            </div>
          </article>
        `,
      )
      .join("");
  }

  elements.paymentAmount.disabled = locked;
  elements.payButton.disabled = locked;
  updateTerminalStatus();
}

function renderReceipt() {
  const transaction = state.completedTransaction;

  if (!transaction) {
    elements.receiptSection.hidden = true;
    elements.receiptContent.innerHTML = "";
    return;
  }

  const itemLines = transaction.items
    .map(
      ({ product, quantity }) => `
        <div class="receipt-line">
          <span>${product.name}<small>${quantity} × ${formatMoney(product.price)}</small></span>
          <strong>${formatMoney(product.price * quantity)}</strong>
        </div>
      `,
    )
    .join("");

  elements.receiptContent.innerHTML = `
    <div class="receipt-meta"><span>Reference</span><strong>${transaction.reference}</strong></div>
    <div class="receipt-meta"><span>Date</span><span>${transaction.date}</span></div>
    <hr class="receipt-divider" />
    ${itemLines}
    <hr class="receipt-divider" />
    <div class="receipt-summary-row total"><span>Total</span><span>${formatMoney(transaction.total)}</span></div>
    <div class="receipt-summary-row"><span>Cash paid</span><span>${formatMoney(transaction.amountPaid)}</span></div>
    <div class="receipt-summary-row"><span>Change</span><strong>${formatMoney(transaction.change)}</strong></div>
  `;
  elements.receiptSection.hidden = false;
  elements.receiptSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  renderProducts();
  renderCart();
  renderReceipt();
}

function addToCart(productId) {
  if (state.completedTransaction) return;

  const product = getProduct(productId);
  if (!product) return;

  state.cart.set(productId, (state.cart.get(productId) ?? 0) + 1);
  setFeedback(`${product.name} added to the order.`, "success");
  renderCart();
}

function updateQuantity(productId, change) {
  if (state.completedTransaction || !state.cart.has(productId)) return;

  const product = getProduct(productId);
  const nextQuantity = state.cart.get(productId) + change;

  if (nextQuantity <= 0) {
    state.cart.delete(productId);
    setFeedback(`${product.name} removed from the order.`);
  } else {
    state.cart.set(productId, nextQuantity);
    setFeedback(`${product.name} quantity updated to ${nextQuantity}.`, "success");
  }

  renderCart();
}

function removeFromCart(productId) {
  if (state.completedTransaction || !state.cart.has(productId)) return;

  const product = getProduct(productId);
  state.cart.delete(productId);
  setFeedback(`${product.name} removed from the order.`);
  renderCart();
}

function createTransactionReference() {
  return `CAF-${Date.now().toString(36).toUpperCase()}`;
}

function handlePayment(event) {
  event.preventDefault();

  if (state.completedTransaction) {
    setFeedback("This transaction is already complete. Start a new transaction to continue.", "error");
    return;
  }

  if (state.cart.size === 0) {
    setFeedback("Add at least one product to the cart before payment.", "error");
    return;
  }

  const rawPayment = elements.paymentAmount.value.trim();
  const paymentInPesos = Number(rawPayment);

  if (rawPayment === "" || !Number.isFinite(paymentInPesos) || paymentInPesos < 0) {
    setFeedback("Please enter a valid payment amount.", "error");
    return;
  }

  const amountPaid = Math.round(paymentInPesos * 100);
  const total = getOrderTotal();

  if (amountPaid < total) {
    setFeedback(`Insufficient payment. Please enter at least ${formatMoney(total)}.`, "error");
    return;
  }

  state.completedTransaction = {
    reference: createTransactionReference(),
    date: new Intl.DateTimeFormat("en-PH", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date()),
    items: getCartEntries().map(({ product, quantity }) => ({
      product: { ...product },
      quantity,
    })),
    total,
    amountPaid,
    change: amountPaid - total,
  };

  setFeedback(`Payment successful. Change: ${formatMoney(amountPaid - total)}.`, "success");
  render();
}

function startNewTransaction() {
  state.cart.clear();
  state.completedTransaction = null;
  elements.paymentForm.reset();
  setFeedback("New transaction started. Select an item to begin.", "success");
  render();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
}

elements.productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) addToCart(button.dataset.productId);
});

elements.cartList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const { action, productId } = button.dataset;
  if (action === "increase") updateQuantity(productId, 1);
  if (action === "decrease") updateQuantity(productId, -1);
  if (action === "remove") removeFromCart(productId);
});

elements.paymentForm.addEventListener("submit", handlePayment);
elements.newTransactionButton.addEventListener("click", startNewTransaction);

render();
