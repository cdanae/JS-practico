const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const btnCloseProductDetail = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
btnCloseProductDetail.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');
    
    desktopMenu.classList.toggle('inactive');

    if (isShoppingCartOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
};
function toggleMobileMenu() {
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');

    if (isShoppingCartOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside()
};
function toggleShoppingCart() {
    const isMobileOpen = !mobileMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    shoppingCartContainer.classList.toggle('inactive');

    if (isMobileOpen) {
        mobileMenu.classList.add('inactive');
    }; 

    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    };
};
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive'); //no se usa el metodo anterior de if debido a que no en esta seccion no estamos trabajando con toggle.
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', product.image);
    productImgCard.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');

    const productIconCart = document.createElement('img');
    productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productIconCart);


    productInfo.append(productInfoDiv,productInfoFigure);
    
    productCard.append(productImgCard, productInfo);

    cardsContainer.appendChild(productCard);
};