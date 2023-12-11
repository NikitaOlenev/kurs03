document.addEventListener('DOMContentLoaded', function() {
    const tabBtn = document.querySelectorAll('.tabs-nav-btn');
    const tabItems = document.querySelectorAll('.tabs-item')
  
    tabBtn.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
  
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {

            tabBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
      });
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
const filterButtons = document.querySelectorAll('.filter-button');
const photos = document.querySelectorAll('.photos-container img');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    const filter = button.dataset.filter;

    photos.forEach(function(photo) {
        const photoFilters = photo.dataset.filter.split(' ');

        if (filter === 'all' || photoFilters.includes(filter)) {
        photo.style.display = 'block';
        } else {
        photo.style.display = 'none';
        }
    });

    filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');
  
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        icon.style.transform = content.style.display === 'block' ? 'rotate(45deg)' : 'none';
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var burgerIcon = document.querySelector('.burger-icon');
    var menu = document.querySelector('.menu');
  
    menu.style.display = 'none'; 
  
    burgerIcon.addEventListener('click', function() {
      menu.style.display = menu.style.display === 'none' ? 'flex' : 'none'; 
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    const productCatalog = document.getElementById('productCatalog');

    // Пример данных о товарах (замените их своими)
    const products = [
        { name: 'KUUGO', price: 53000, image: 'GLAV_img/kuugo m4/M4Pro-1-1200x800.jpg' },
        { name: 'MOTION', price: 48000, image: 'GLAV_img/Motion L8/motion_l8_elektrosamokat_skladnoy.webp' },
        { name: 'NINEBOT', price: 63000, image: 'GLAV_img/ninebot air/91d51d57a27a5d0f1d2db189415064c1.jpg' }
    ];

    // Генерация карточек товаров
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} руб.</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Добавить в корзину</button>
        `;
        productCatalog.appendChild(card);
    });
});


function addToCart(productName, productPrice, productImage) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice, image: productImage});
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
  

document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');
  const clearCartButton = document.querySelector('button');
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  
  cart.forEach((item, index) => {
      const card = createCard(item, index);
      cartItems.appendChild(card);
  });

  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = totalPrice;

  updateCartCount();

  
  clearCartButton.addEventListener('click', clearCart);
});


function createCard(item, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} руб.</p>
      <button onclick="removeFromCart(${index})">Убрать из корзины</button>
  `;
  return card;
}


function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  updateCartCount();
}


function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

 
  cartItems.innerHTML = '';

  
  cart.forEach((item, index) => {
      const card = createCard(item, index);
      cartItems.appendChild(card);
  });

  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = totalPrice;
  updateCartCount();
}


function clearCart() {
  localStorage.removeItem('cart');
  updateCart();
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement1 = document.getElementById('card01');
  const cartCountElement2 = document.getElementById('card02');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const itemCount = cart.length;
  cartCountElement1.textContent = `${itemCount}`;
  cartCountElement2.textContent = `${itemCount}`;
}