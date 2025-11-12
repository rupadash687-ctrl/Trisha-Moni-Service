// Admin password
const adminPassword = "trisha@2025";

function login() {
  const pass = document.getElementById("adminPass").value;
  if (pass === adminPassword) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    alert("অ্যাডমিন লগইন সফল!");
  } else {
    alert("ভুল পাসওয়ার্ড!");
  }
}

// Load & Save data (using localStorage)
const noticeList = document.getElementById("noticeList");
const productList = document.getElementById("productList");

let notices = JSON.parse(localStorage.getItem("notices")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

function showNotices() {
  noticeList.innerHTML = notices.map(n => `<p>📢 ${n}</p>`).join("");
}

function showProducts() {
  productList.innerHTML = products.map(p => `
    <div class="product">
      <h4>${p.title}</h4>
      <img src="${p.img}" alt="${p.title}" width="200">
      <p><button onclick="orderNow('${p.title}')">Order Now</button></p>
    </div>
  `).join("");
}

function addNotice() {
  const n = document.getElementById("newNotice").value;
  if (n) {
    notices.push(n);
    localStorage.setItem("notices", JSON.stringify(notices));
    showNotices();
    document.getElementById("newNotice").value = "";
  }
}

function addProduct() {
  const title = document.getElementById("productTitle").value;
  const img = document.getElementById("productImg").value;
  if (title && img) {
    products.push({ title, img });
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
    document.getElementById("productTitle").value = "";
    document.getElementById("productImg").value = "";
  }
}

function orderNow(name) {
  alert(`"${name}" অর্ডার নেওয়া হয়েছে! ধন্যবাদ 💖`);
}

// Initial load
showNotices();
showProducts();
