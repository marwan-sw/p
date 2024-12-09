const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

let cart = [];

const products = [
    { id: 1, name: "دهان أحمر ساطع", price: 30, image: "image/red-paint.jpg" },
    { id: 2, name: "دهان أزرق داكن", price: 25, image: "image/dark-blue-paint.jpg" },
    { id: 3, name: "دهان أخضر زاهي", price: 35, image: "image/vibrant-green-paint.jpg" },
    { id: 4, name: "دهان أصفر ليموني", price: 20, image: "image/lemon-yellow-paint.jpg" },
    { id: 5, name: "دهان أبيض مطفي", price: 18, image: "image/matte-white-paint.jpg" },
    { id: 6, name: "دهان بني خشبي", price: 28, image: "image/wood-brown-paint.jpg" },
    { id: 7, name: "دهان رمادي قاتم", price: 22, image: "image/dark-gray-paint.jpg" },
    { id: 8, name: "دهان برتقالي دافئ", price: 26, image: "image/warm-orange-paint.jpg" },
    { id: 9, name: "دهان وردي هادئ", price: 32, image: "image/soft-pink-paint.jpg" },
    { id: 10, name: "دهان تركواز لامع", price: 27, image: "image/glossy-turquoise-paint.jpg" },
    { id: 11, name: "خشب بلوط طبيعي", price: 120, image: "image/oak-wood.jpg" },
    { id: 12, name: "خشب صنوبر قوي", price: 80, image: "image/pine-wood.jpg" },
    { id: 13, name: "خشب ماهوجني فاخر", price: 150, image: "image/mahogany-wood.jpg" },
    { id: 14, name: "خشب تيتا اللامع", price: 100, image: "image/tita-wood.jpg" },
    { id: 15, name: "رخام أبيض فاخر", price: 250, image: "image/luxury-white-marble.jpg" },
    { id: 16, name: "رخام تركي طبيعي", price: 270, image: "image/turkish-marble.jpg" },
    { id: 17, name: "رخام أسود فخم", price: 300, image: "image/luxury-black-marble.jpg" },
    { id: 18, name: "رخام أحمر مميز", price: 280, image: "image/unique-red-marble.jpg" },
    { id: 19, name: "دهان معدني لامع", price: 45, image: "image/metallic-paint.jpg" },
    { id: 20, name: "دهان زيتي فاخر", price: 55, image: "image/luxury-oil-paint.jpg" }
];


// عرض المنتجات
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} ريال</p>
            <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// تحديث السلة
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((product, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${product.name} - ${product.price} ريال 
            <button onclick="removeFromCart(${index})">حذف</button>`;
        cartItems.appendChild(cartItem);
        total += product.price;
    });
    totalPrice.innerText = `الإجمالي: ${total} ريال`;
    cartButton.innerText = `سلة المشتريات (${cart.length})`;
}

// حذف منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// فتح السلة
cartButton.addEventListener('click', () => {
    cartSidebar.style.left = '0'; // فتح السلة
});

// إغلاق السلة
closeSidebar.addEventListener('click', () => {
    cartSidebar.style.left = '-400px'; // إغلاق السلة
});

// عرض المنتجات عند تحميل الصفحة
displayProducts();
