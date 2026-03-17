// responsive navbar
const navbar = document.querySelector("nav");
const bars = document.querySelector(".fa-bars-staggered");
const xmark = document.querySelector(".fa-xing");
const humburgerMenu = document.querySelector(".humburger");

if (humburgerMenu) {
  humburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}

// Add scroll event listener to the window
const header = document.querySelector("header");
const links = document.querySelectorAll(".links a");
const cartLink = document.querySelector(".cart a");
const logo = document.querySelector(".logo");
const index = document.querySelector(".main");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 66) {
      header.classList.add("scrolled");
      links.forEach(link => link.classList.add("scrolled"));
      cartLink.classList.add("scrolled");
      if (index) { logo.textContent = "Rosella"; }
      bars.classList.add("scrolled");
      xmark.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      links.forEach(link => link.classList.remove("scrolled"));
      cartLink.classList.remove("scrolled");
      if (index) { logo.textContent = ""; }
      bars.classList.remove("scrolled");
      xmark.classList.remove("scrolled");
    }
  });
}

// scroll button in home page
const scrollBtn = document.querySelector("#scroll");
const sectionTwo = document.querySelector(".featured-flowers");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    sectionTwo.scrollIntoView({ behavior: "smooth" });
  });
}

// share opinion button 

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {
  shareBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

// shop now button 
const shopBtn = document.getElementById("shopBtn");

if (shopBtn) {
  shopBtn.addEventListener("click", () => {
    window.location.href = "bouquets.html";
  });
}

// favourite types
const heartBtns = document.querySelectorAll(".fa-heart");

if (heartBtns) {
  heartBtns.forEach(heartBtn => {
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("fa-regular");
      heartBtn.classList.toggle("fa-solid");
    })
  });
};

// search flowers 
const searchBtn = document.querySelector("#search");
const searchText = document.querySelector("#search-text");
const cards = document.querySelectorAll(".card");

if (searchBtn) {
  function searching() {
    if (searchText.value.trim() === "") {
      cards.forEach(card => card.style.display = "");
      return;
    }
    cards.forEach(card => {
      const flowerName = card.querySelector(".name-flower").textContent.trim().toLowerCase();
      if (flowerName.includes(searchText.value.trim().toLowerCase())) {
        card.style.display = "";
      }
      else {
        card.style.display = "none";
      }
    });
  }
  searchBtn.addEventListener("click", searching);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      searching();
    }
  });
}

// data of flowers 
const flowers = [
  {
    id: 1,
    name: "Rose",
    scientificName: "Rosa",
    family: "Rosaceae",
    colors: ["Red", "Pink", "White", "Yellow"],
    bloomSeason: "Spring – Summer",
    fragrance: "Strong",
    origin: "Asia",
    symbolism: "Love, Passion, Romance",
    care: "Requires full sunlight, regular watering, and well-drained soil.",
    uses: ["Decoration ", " Perfumes ", " Gifts"],
    images: {
      Pink: "images/rose-pink.jpg",
      Red: "images/rose-red.jpg",
      White: "images/rose-white.jpg",
      Yellow: "images/rose-yellow.jpg"
    }
  },
  {
    id: 2,
    name: "Tulip",
    scientificName: "Tulipa",
    family: "Liliaceae",
    colors: ["Yellow", "Pink", "White", "Red"],
    bloomSeason: "Spring",
    fragrance: "Light",
    origin: "Central Asia",
    symbolism: "Perfect love and elegance",
    care: "Prefers cool climates, moderate sunlight, and well-drained soil.",
    uses: ["Gardens ", " Home decoration"],
    images: {
      White: "images/tulip-white.jpg",
      Yellow: "images/tulip-yellow.jpg",
      Pink: "images/tulip-pink.jpg",
      Red: "images/tulip-red.jpg"
    }
  },
  {
    id: 3,
    name: "Lily",
    scientificName: "Lilium",
    family: "Liliaceae",
    colors: ["White", "Orange", "Pink"],
    bloomSeason: "Summer",
    fragrance: "Strong",
    origin: "Europe & Asia",
    symbolism: "Purity, renewal, devotion",
    care: "Needs indirect sunlight and consistently moist soil.",
    uses: ["Bouquets ", " Religious events"],
    images: {
      Pink: "images/lily-pink.jpg",
      White: "images/lily-white.jpg",
      Orange: "images/lily-orange.jpg"
    }
  },
  {
    id: 4,
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
    colors: ["Yellow", "Brown"],
    bloomSeason: "Summer",
    fragrance: "None",
    origin: "North America",
    symbolism: "Happiness, loyalty, positivity",
    care: "Needs full sunlight and regular watering.",
    uses: ["Gardens ", " Seeds & oil"],
    images: {
      Brown: "images/sun-flower-brown.jpg",
      Yellow: "images/sun-flower-yellow.jpg"
    }
  },
  {
    id: 5,
    name: "Orchid",
    scientificName: "Orchidaceae",
    family: "Orchidaceae",
    colors: ["Purple", "White", "Pink"],
    bloomSeason: "Year-round (indoor)",
    fragrance: "Light",
    origin: "Tropical regions",
    symbolism: "Luxury, strength, beauty",
    care: "Requires indirect light and high humidity.",
    uses: ["Indoor decoration ", " Gifts"],
    images: {
      Purple: "images/orchid-purple.jpg",
      White: "images/orchid-white.jpg",
      Pink: "images/orchid-pink.jpg"
    }
  },
  {
    id: 6,
    name: "Daisy",
    scientificName: "Bellis perennis",
    family: "Asteraceae",
    colors: ["White", "Yellow"],
    bloomSeason: "Spring – Summer",
    fragrance: "Light",
    origin: "Europe",
    symbolism: "Innocence, purity, new beginnings",
    care: "Moderate sunlight and watering.",
    uses: ["Gardens ", " Floral decorations"],
    images: {
      White: "images/daisy-white.jpg",
      Yellow: "images/daisy-yellow.jpg"
    }
  },
  {
    id: 7,
    name: "Lavender",
    scientificName: "Lavandula",
    family: "Lamiaceae",
    colors: ["Purple"],
    bloomSeason: "Summer",
    fragrance: "Strong",
    origin: "Mediterranean region",
    symbolism: "Calmness, relaxation, purity",
    care: "Needs full sun and dry soil.",
    uses: ["Aromatherapy ", " Perfumes ", " Decoration"],
    images: {
      Purple: "images/lavender-1.jpg"
    }
  },
  {
    id: 8,
    name: "Jasmine",
    scientificName: "Jasminum",
    family: "Oleaceae",
    colors: ["White", "Yellow"],
    bloomSeason: "Summer",
    fragrance: "Very strong",
    origin: "South Asia",
    symbolism: "Love, beauty, purity",
    care: "Needs sunlight and regular watering.",
    uses: ["Perfumes ", " Tea flavoring"],
    images: {
      White: "images/jasmine-white.jpg",
      Yellow: "images/jasmine-yellow.jpg"
    }
  },
  {
    id: 9,
    name: "Peony",
    scientificName: "Paeonia",
    family: "Paeoniaceae",
    colors: ["Pink", "White", "Red"],
    bloomSeason: "Late Spring",
    fragrance: "Sweet",
    origin: "Asia & Europe",
    symbolism: "Romance, prosperity, good fortune",
    care: "Prefers full sun and well-drained soil with moderate watering.",
    uses: ["Weddings ", " Bouquets ", " Garden decoration"],
    images: {
      White: "images/peony-white.jpg",
      Pink: "images/peony-pink.jpg",
      Red: "images/peony-red.jpg"
    }
  },
  {
    id: 10,
    name: "Carnation",
    scientificName: "Dianthus caryophyllus",
    family: "Caryophyllaceae",
    colors: ["Red", "Pink", "White", "Purple"],
    bloomSeason: "Spring – Summer",
    fragrance: "Spicy-sweet",
    origin: "Mediterranean region",
    symbolism: "Admiration, love, distinction",
    care: "Needs full sunlight and well-drained soil.",
    uses: ["Gifts ", " Corsages ", " Floral arrangements"],
    images: {
      White: "images/carnation-white.jpg",
      Red: "images/carnation-red.jpg",
      Pink: "images/carnation-pink.jpg",
      Purple: "images/carnation-purple.jpg"
    }
  },
  {
    id: 11,
    name: "Chrysanthemum",
    scientificName: "Chrysanthemum",
    family: "Asteraceae",
    colors: ["Yellow", "Pink", "Orange"],
    bloomSeason: "Autumn",
    fragrance: "Light",
    origin: "East Asia",
    symbolism: "Loyalty, friendship, longevity",
    care: "Requires full sun and consistent watering.",
    uses: ["Gardens ", " Decorations ", " Festivals"],
    images: {
      Pink: "images/Chrysanthemum-pink.jpg",
      Yellow: "images/Chrysanthemum-yellow.jpg",
      Orange: "images/Chrysanthemum-orange.jpg"
    }
  },
  {
    id: 12,
    name: "Gardenia",
    scientificName: "Gardenia jasminoides",
    family: "Rubiaceae",
    colors: ["White"],
    bloomSeason: "Spring – Summer",
    fragrance: "Very strong",
    origin: "East Asia",
    symbolism: "Purity, sweetness, secret love",
    care: "Prefers partial shade and moist, acidic soil.",
    uses: ["Perfumes ", " Wedding bouquets"],
    images: {
      White: "images/Gardenia-white.jpg"
    }
  },
  {
    id: 13,
    name: "Anemone",
    scientificName: "Anemone coronaria",
    family: "Ranunculaceae",
    colors: ["Purple"],
    bloomSeason: "Spring",
    fragrance: "None",
    origin: "Mediterranean region",
    symbolism: "Anticipation, protection",
    care: "Needs well-drained soil and moderate sunlight.",
    uses: ["Bouquets ", " Garden beds"],
    images: {
      Purple: "images/Anemone-purple.jpg"
    }
  },
  {
    id: 14,
    name: "Magnolia",
    scientificName: "Magnolia",
    family: "Magnoliaceae",
    colors: ["White", "Pink"],
    bloomSeason: "Spring",
    fragrance: "Sweet",
    origin: "Asia & Americas",
    symbolism: "Dignity, beauty, perseverance",
    care: "Requires full sun to partial shade and moist soil.",
    uses: ["Gardens ", " Landscape decoration"],
    images: {
      White: "images/Magnolia-white.jpg",
      Pink: "images/Magnolia-pink.jpg",
    }
  }
];

// button details book
const detailBtns = document.querySelectorAll(".details-btn");

if (detailBtns) {
  detailBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const card = this.closest(".card");
      const flowerName = card.querySelector(".name-flower").textContent;
      window.location.href = `details.html?name=${flowerName}`;
    });
  });
}

// take data from types.html
const params = new URLSearchParams(window.location.search);
const flowerName = params.get("name")?.trim() || "";

const flower = flowers.find(f =>
  f.name.toLowerCase() === flowerName.toLowerCase()
);

// display data to details.html
if (flower) {
  document.querySelector(".name").textContent = flower.name;
  document.querySelector(".scientificName").textContent = flower.scientificName;
  document.querySelector(".family").textContent = flower.family;
  document.querySelector(".bloomSeason").textContent = flower.bloomSeason;
  document.querySelector(".fragrance").textContent = flower.fragrance;
  document.querySelector(".origin").textContent = flower.origin;
  document.querySelector(".symbolism").textContent = flower.symbolism;
  document.querySelector(".care").textContent = flower.care;
  document.querySelector(".uses").textContent = flower.uses;


  document.querySelector(".image img").src =
    Object.values(flower.images)[0];

  const colorContainer = document.querySelector(".color");
  colorContainer.innerHTML = "";

  for (let color of flower.colors) {

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "color";
    input.value = color;
    input.style.accentColor = color;

    const label = document.createElement("label");
    label.textContent = color;
    label.style.color = color;

    colorContainer.appendChild(input);
    colorContainer.appendChild(label);

    input.addEventListener("change", function () {
      document.querySelector(".image img").src = flower.images[color];
    });

  }
}

// message successfully
const msg = document.querySelector(".msg-success");
const form = document.getElementById("contact-form")

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.style.display = "flex";

    form.reset();

    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  });
}

// data of bouquets
const bouquets = [
  {
    name: "Romantic Red",
    price: 450,
    image: "images/Classic-Red-Rose-Bouquet.jpg"
  },
  {
    name: "Spring Mix",
    price: 380,
    image: "images/spring-bouquet.jpg"
  },
  {
    name: "White Elegance",
    price: 500,
    image: "images/lily-bouquet.jpg"
  },
  {
    name: "Blush Harmony",
    price: 420,
    image: "images/Blush-Harmony-bouquet.jpg"
  },
  {
    name: "Carnation & Lisianthus Bouquet",
    price: 350,
    image: "images/Carnation-Lisianthus-Bouquet.jpg"
  },
  {
    name: "Classic Bridal",
    price: 500,
    image: "images/Classic-Bridal-Bouquet.jpg"
  },
  {
    name: "Cream Rose Daisy",
    price: 600,
    image: "images/Cream-Rose-Daisy-Bouquet.jpg"
  },
  {
    name: "Golden Glow",
    price: 460,
    image: "images/Golden-Glow-bouquet.jpg"
  },
  {
    name: "Lavender Dream",
    price: 390,
    image: "images/Lavender-Dream-bouquet.jpg"
  },
  {
    name: "Pastel Mixed",
    price: 550,
    image: "images/Pastel-Mixed-Bouquet.jpg"
  },
  {
    name: "Pink Rose Lily",
    price: 480,
    image: "images/Pink-Rose-Lily-Bouquet.jpg"
  },
  {
    name: "Rose Lily",
    price: 500,
    image: "images/Rose-Lily-Bouquet.jpg"
  },
  {
    name: "Sunny Delight",
    price: 350,
    image: "images/Sunny-Delight-bouquet.jpg"
  },
  {
    name: "Whisper of Lavender",
    price: 300,
    image: "images/Whisper-of-Lavender.jpg"
  },
  {
    name: "Pastel Harmony",
    price: 600,
    image: "images/Pastel-Harmony.jpg"
  },
  {
    name: "Strawberry Elegance",
    price: 550,
    image: "images/Strawberry-Elegance.jpg"
  }
];

// Card of bouquet shop
const cartContainer = document.querySelector(".products");

if (cartContainer) {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {

    const total = item.price * item.quantity;

    cartContainer.innerHTML += `

<div class="product" data-index="${index}">

<button class="remove-product">
<i class="fa-solid fa-xmark"></i>
</button>

<div class="content">

<div class="image">
<img src="${item.image}" width="150" height="150">
</div>

<div class="info">
<p class="name">${item.name}</p>
<p class="price">${item.price}</p>

<p>
<button class="plus">+</button>
<span class="quantity">${item.quantity}</span>
<button class="minus">-</button>
</p>

</div>

</div>

<div class="script-product">
<p class="total-product">${total}</p>
</div>

</div>

`;

  });

}

// button add to cart
const cartBtns = document.querySelectorAll(".cart-btn")

if (cartBtns) {
  cartBtns.forEach(btn => {
    btn.addEventListener("click", function () {

      const card = this.closest(".card");
      const bouquetName = card.querySelector(".name-bouquet").textContent.trim();

      const bouquet = bouquets.find(b => b.name === bouquetName);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find(item => item.name === bouquet.name);

      if (existing) {
        existing.quantity++;
      } else {
        cart.push({
          ...bouquet,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      window.location.href = "cart.html";
    });
  });
}

// button plus in cart.html and calculate total product
const plusBtn = document.querySelector(".plus");
const Quantity = document.querySelector(".quantity");
const totalProduct = document.querySelector(".total-product");
const priceEl = document.querySelector(".price");
const price = Number(priceEl.textContent.replace("L.E", "").trim());
totalProduct.textContent = price;
document.querySelector(".subtotal").textContent = totalProduct.textContent;
const delivery = document.querySelector(".delivery").textContent;
const total = document.querySelector(".total");
total.textContent = Number(delivery) + Number(totalProduct.textContent);
let QuantityNum = 0;

if (Quantity && !isNaN(Number(Quantity.textContent))) {
  QuantityNum = Number(Quantity.textContent.trim());
}

// button plus and minus
document.addEventListener("click", function (e) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (e.target.classList.contains("plus")) {

    const product = e.target.closest(".product");
    const index = product.dataset.index;

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    product.querySelector(".quantity").textContent = cart[index].quantity;
    product.querySelector(".total-product").textContent =
      cart[index].price * cart[index].quantity;

    updateTotal();

  }
  if (e.target.classList.contains("minus")) {

    const product = e.target.closest(".product");
    const index = product.dataset.index;

    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    product.querySelector(".quantity").textContent = cart[index].quantity;
    product.querySelector(".total-product").textContent =
      cart[index].price * cart[index].quantity;

    updateTotal();

  }
});

// remove product
document.addEventListener("click", function (e) {

  if (e.target.closest(".remove-product")) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = e.target.closest(".product");
    const index = product.dataset.index;

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    product.remove();

    updateTotal();

  }

});

// clear cart 
const clearCart = document.querySelector(".clear-btn");

if (clearCart) {

  clearCart.addEventListener("click", function () {

    localStorage.removeItem("cart");

    document.querySelector(".products").innerHTML = "";

    updateTotal();

  });

}

// calculate of total and subtotal
function updateTotal() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  document.querySelector(".subtotal").textContent = subtotal;

  const delivery = Number(document.querySelector(".delivery").textContent);

  document.querySelector(".total").textContent = subtotal + delivery;

}

updateTotal();