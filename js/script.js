// ===== PRODUCT DATA (Local Image Paths) =====
// Replace the images in the corresponding folders inside assets/images/
// Example: assets/images/dryfruits/almonds.jpg

const dryFruits = [
  { name: "Almonds (Badam)", price: "₹900/kg", desc: "Premium California almonds rich in protein and healthy fats.", img: "assets/images/dryfruits/Almonds.webp", badge: "Best Seller" },
//   { name: "Mamra Almonds", price: "₹1,600/kg", desc: "Rare Mamra variety — lighter, crunchier, naturally rich in oils.", img: "assets/images/dryfruits/mamra-almonds.jpg", badge: "Premium" },
//   { name: "Cashews W320", price: "₹850/kg", desc: "Whole cashews W320 grade — creamy, buttery and nutritious.", img: "assets/images/dryfruits/cashews-w320.jpg", badge: "Popular" },
  { name: "Cashews W240", price: "₹950/kg", desc: "Larger W240 cashews, perfect for gifting and snacking.", img: "assets/images/dryfruits/cashews-w240.webp", badge: "" },
  { name: "Pistachios", price: "₹1,200/kg", desc: "Vibrant green pistachios — a heart-healthy, satisfying snack.", img: "assets/images/dryfruits/pistachios.webp", badge: "Premium" },
  { name: "Walnuts", price: "₹1,100/kg", desc: "Brain-boosting walnuts loaded with Omega-3 fatty acids.", img: "assets/images/dryfruits/walnuts.webp", badge: "" },
  { name: "Pine Nuts", price: "₹400/kg", desc: "Plump, sun-dried pine nuts bursting with natural sweetness.", img: "assets/images/dryfruits/pineNuts.webp", badge: "" },
  { name: "Black Raisins", price: "₹450/kg", desc: "Dark, juicy black raisins — great for baking and direct snacking.", img: "assets/images/dryfruits/black-raisins.webp", badge: "" },
  { name: "Dry Dates", price: "₹350/kg", desc: "Natural dry dates — a wholesome source of energy and iron.", img: "assets/images/dryfruits/dry-dates.webp", badge: "" },
  { name: "KIMIA-DATES", price: "₹1,000/kg", desc: "Naturally sweet dates packed with fibre and minerals.", img: "assets/images/dryfruits/KIMIA-DATES.webp", badge: "Premium" },
  { name: "Masala Makhana", price: "₹1,200/kg", desc: "Rich, buttery Masala Makhana — perfect in chocolates and as a snack.", img: "assets/images/dryfruits/makhana.webp", badge: "Premium" },
];

const spices = [
  { name: "Cardamom", price: "₹400/kg", desc: " Cardamom has a complex flavour that makes it equally spicy and sweet.", img: "assets/images/spices/CARDAMOM.webp" },
  { name: "BAY LEAF", price: "₹350/kg", desc: "It is a popular spice mainly used in pickles for flavouring dishes, stuffing.", img: "assets/images/spices/BAY_LEAF.webp" },
  { name: "Star Anise", price: "₹250/kg", desc: "Star Anise, with its unique star-shaped pods and sweet, licorice-like flavor.", img: "assets/images/spices/ANISEED.webp" },
  { name: "Cumin Seeds", price: "₹450/kg", desc: "Earthy, aromatic cumin seeds — essential in Indian cooking.", img: "assets/images/spices/CUMIN-SEED.webp" },
  { name: "Black Pepper", price: "₹800/kg", desc: "King of spices — sharp and aromatic whole black pepper.", img: "assets/images/spices/BLACK-PEPPER.webp" },
  { name: "POPY SEED", price: "₹2,500/kg", desc: "Poppy seeds, tiny and kidney-shaped, have a mild, nutty flavor and a pleasant crunch.", img: "assets/images/spices/POPY-SEED.webp" },
  { name: "Cloves", price: "₹900/kg", desc: "Aromatic cloves packed with antioxidants and warm flavour.", img: "assets/images/spices/CLOVE.webp" },
  { name: "Cinnamon Sticks", price: "₹600/kg", desc: "Ceylon cinnamon sticks with warm, sweet aroma.", img: "assets/images/spices/CINNAMON-ROLL.webp" },
  { name: "Garam Masala Mix", price: "₹500/kg", desc: "Authentic blend of whole spices ground to perfection.", img: "assets/images/spices/GARAM-MASALA-MIX.webp" },
];

const chocolates = [
  { name: "Almond Chocolate Bites", price: "₹350/box", desc: "Crispy almonds enrobed in rich dark chocolate — a luxurious bite.", img: "assets/images/chocolates/almond-chocolate.jpg" },
  { name: "Cashew Chocolate Clusters", price: "₹400/box", desc: "Creamy cashews in smooth milk chocolate clusters.", img: "assets/images/chocolates/Cashew_Clusters.png" },
  { name: "Dry Fruit Chocolate Bars", price: "₹300/pack", desc: "Artisan chocolate bars loaded with mixed premium dry fruits.", img: "assets/images/chocolates/Dry_fruit_bar.png" },
  { name: "Pistachio Chocolate Delight", price: "₹450/box", desc: "Vibrant pistachio pieces in premium white and dark chocolate.", img: "assets/images/chocolates/Pistachio-Chocolate.png" },
  { name: "Hazelnut Chocolate Truffles", price: "₹500/box", desc: "Velvety truffles filled with hazelnut praline — sheer indulgence.", img: "assets/images/chocolates/Hazelnut-Truffles.png" },
  { name: "Dark Chocolate Dry Fruit Mix", price: "₹450/box", desc: "Bold dark chocolate bark studded with mixed premium dry fruits.", img: "assets/images/chocolates/Dark-Chocolate.png" },
];

// WhatsApp link generator
function waLink(name) {
  return `https://wa.me/917353921921?text=Hello+Happiistaa,+I+would+like+to+order+${encodeURIComponent(name)}.`;
}

// Render product cards
function renderProducts(arr, selector, isChoc = false) {
  const grid = document.querySelector(selector);
  if (!grid) return;
  grid.innerHTML = arr.map((p, i) => `
    <div class="product-card ${isChoc ? 'choc-card' : ''} fade-up" style="animation-delay:${i * 0.06}s">
      <div class="product-img-wrap">
        <!-- Replace this image with your own product image by placing it in the corresponding folder inside assets/images/ -->
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&q=80'">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">${p.price}</div>
          <a class="wa-btn" href="${waLink(p.name)}" target="_blank">📱 Order</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize product grids
renderProducts(dryFruits, '#dryfruits-grid');
renderProducts(spices, '#spices-grid');
renderProducts(chocolates, '#chocolates-grid', true);

// ===== ROTATING QUOTES =====
const quotes = [
  '"Healthy snacks start with premium dry fruits."',
  '"Authentic spices bring life to every dish."',
  '"Sweet moments begin with handmade chocolates."',
  '"Quality you can taste — freshness you can trust."',
];
let qi = 0;
const quoteEl = document.getElementById('heroQuote');
if (quoteEl) {
  setInterval(() => {
    quoteEl.style.opacity = 0;
    setTimeout(() => {
      qi = (qi + 1) % quotes.length;
      quoteEl.textContent = quotes[qi];
      quoteEl.style.opacity = 1;
    }, 500);
  }, 4000);
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
}

// Expose functions globally
window.toggleMenu = toggleMenu;

window.closeMenu = closeMenu;
