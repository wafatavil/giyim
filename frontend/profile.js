const profileLocalApiHost = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? window.location.hostname
  : "localhost";
const profileApiBase = (window.MODA_API_URL || `http://${profileLocalApiHost}:3000/api`).replace(/\/$/, "");
const profileText = (message) => window.MODA_I18N?.t(message) || message;

const requestProfileApi = async (path, options = {}) => {
  const response = await fetch(`${profileApiBase}${path}`, {
    ...options,
    credentials: "include",
    headers: options.body
      ? { "Content-Type": "application/json", ...options.headers }
      : options.headers,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Profil bilgileri yüklenemedi.");
  return data;
};

const renderProfileOrders = (orders) => {
  const list = document.querySelector("#profile-orders-list");
  const feedback = document.querySelector("#profile-orders-feedback");
  list.replaceChildren();
  feedback.textContent = orders.length ? "" : profileText("Henüz siparişin yok.");

  orders.forEach((order) => {
    const card = document.createElement("article");
    card.className = "profile-order-card";
    const heading = document.createElement("div");
    heading.className = "profile-order-heading";
    const orderName = document.createElement("strong");
    orderName.textContent = `${profileText("Sipariş")} #${order.id}`;
    const status = document.createElement("span");
    status.className = "profile-order-status";
    status.textContent = profileText(order.status);
    heading.append(orderName, status);
    const date = document.createElement("p");
    date.className = "profile-order-date";
    date.textContent = new Intl.DateTimeFormat(document.documentElement.lang || "tr", { dateStyle: "medium" })
      .format(new Date(order.createdAt));
    const items = document.createElement("ul");
    items.className = "profile-order-items";
    (Array.isArray(order.items) ? order.items : []).forEach((item) => {
      const row = document.createElement("li");
      const details = document.createElement("span");
      details.textContent = `${profileText(item.productName)} · ${item.size}${item.color ? ` · ${profileText(item.color)}` : ""} × ${item.quantity}`;
      const amount = document.createElement("span");
      amount.textContent = window.MODA_I18N?.money(Number(item.unitPrice) * Number(item.quantity)) || String(item.unitPrice);
      row.append(details, amount);
      items.append(row);
    });
    const total = document.createElement("p");
    total.className = "profile-order-total";
    total.textContent = `${profileText("Toplam:")} ${window.MODA_I18N?.money(order.total) || order.total}`;
    card.append(heading, date, items, total);
    list.append(card);
  });
};

const renderProfileAddresses = (addresses) => {
  const list = document.querySelector("#profile-addresses-list");
  const feedback = document.querySelector("#profile-addresses-feedback");
  list.replaceChildren();
  feedback.textContent = addresses.length ? "" : profileText("Henüz kayıtlı adresin yok.");
  addresses.forEach((address) => {
    const row = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = address.title;
    const details = document.createElement("span");
    details.textContent = [profileText(address.city), profileText(address.district)].filter(Boolean).join(" · ");
    row.append(title, details);
    list.append(row);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const user = await window.MODA_AUTH_READY;
  if (!user) {
    window.location.replace("./giris.html?next=profilim.html");
    return;
  }

  const form = document.querySelector("#profile-form");
  const feedback = document.querySelector("#profile-feedback");
  const saveButton = form.querySelector("button[type=submit]");
  const updateIdentity = (profile) => {
    form.elements.firstName.value = profile.firstName || "";
    form.elements.lastName.value = profile.lastName || "";
    document.querySelector("#profile-email").value = profile.email || "";
    document.querySelector("#email-verification-status").textContent = profileText(
      profile.emailVerified ? "E-posta doğrulandı" : "E-posta doğrulanmadı"
    );
  };
  updateIdentity(user);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    saveButton.disabled = true;
    feedback.textContent = profileText("Bilgiler kaydediliyor…");
    try {
      const { user: updatedUser } = await requestProfileApi("/auth/me", {
        method: "PATCH",
        body: JSON.stringify({
          firstName: form.elements.firstName.value,
          lastName: form.elements.lastName.value,
        }),
      });
      updateIdentity(updatedUser);
      feedback.textContent = profileText("Bilgilerin güncellendi ♥");
    } catch (error) {
      feedback.textContent = error.message || profileText("Profil bilgileri güncellenemedi.");
    } finally {
      saveButton.disabled = false;
    }
  });

  const ordersFeedback = document.querySelector("#profile-orders-feedback");
  const addressesFeedback = document.querySelector("#profile-addresses-feedback");
  const [ordersResult, addressesResult] = await Promise.allSettled([
    requestProfileApi("/orders"),
    requestProfileApi("/addresses"),
  ]);
  if (ordersResult.status === "fulfilled") renderProfileOrders(ordersResult.value.orders || []);
  else ordersFeedback.textContent = profileText("Siparişler yüklenemedi.");
  if (addressesResult.status === "fulfilled") renderProfileAddresses(addressesResult.value.addresses || []);
  else addressesFeedback.textContent = profileText("Adreslerini görmek için e-posta adresini doğrula.");
});
