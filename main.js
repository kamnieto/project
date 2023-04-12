const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMovileMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector(".my-shopping-cart");
const cardsContainer = document.querySelector('.cards-container')


navEmail.addEventListener('click',ToggleDesktopMenu);
iconMovileMenu.addEventListener('click',ToggleMobileMenu);
shoppingCart.addEventListener('click',ToggleShoppingMenu);

function ToggleDesktopMenu(){
    const isShoppingMenuClosed = shoppingCartMenu.classList.contains('inactive');
     
    if (!isShoppingMenuClosed){
        shoppingCartMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function ToggleMobileMenu(){
    const isShoppingMenuClosed = shoppingCartMenu.classList.contains('inactive');
     
    if (!isShoppingMenuClosed){
        shoppingCartMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function ToggleShoppingMenu(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
     
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    shoppingCartMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'screen',
    price: 310,
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/03/Duplicar-pantalla-PC.jpg'
});
productList.push({
    name: 'Lamp',
    price: 50,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY9QwGzBAruvZqVw2pJB4yLNJaJvtyyzmTw&usqp=CAU'
});
productList.push({
    name: 'Keyboard',
    price: 95,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8F5QYhuJDwkVpRqprf-2tqZiHI5QP_mU3g&usqp=CAU'
});
productList.push({
    name: 'blouse',
    price: 150,
    image: 'https://www.bhg.com/thmb/CncCZc1gfEglguf3TWxYWqdJBQ8=/4500x0/filters:no_upscale():strip_icc()/how-to-organize-clothes-02-08b0d74085b9416e8376116e51dd83e4.jpg'
});
productList.push({
    name: 'pants',
    price: 310,
    image: 'https://patprimo.vteximg.com.br/arquivos/ids/1072085-550-660/pantalones-para-hombre-44070968-10_2.jpg?v=637744944826300000'
});
productList.push({
    name: 'armchair',
    price: 410,
    image: 'https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg'
});
productList.push({
    name: 'cupboard',
    price: 480,
    image: 'https://cdn.shopify.com/s/files/1/0564/3816/1489/products/kazuhiko-4-door-wardrobe-in-columbia-walnut-finish--by-valuewud-kazuhiko-4-door-wardrobe-in-columbia-zo3nmc_600x.jpg?v=1662197146'
});
productList.push({
    name: 'car',
    price: 280,
    image: 'https://media1.popsugar-assets.com/files/thumbor/fnp-zNi5yUcsmOGMgi6xwAx8UWs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/06/660/n/24155406/a23ef94e4d5d1eed_netimgcTujc4/i/Radio-Flyer-Little-Red-Roadster.jpg'
});
productList.push({
    name: 'dog',
    price: 245,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637760158-51FBPNbMEVL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'screen',
    price: 310,
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/03/Duplicar-pantalla-PC.jpg'
});
productList.push({
    name: 'Lamp',
    price: 50,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY9QwGzBAruvZqVw2pJB4yLNJaJvtyyzmTw&usqp=CAU'
});
productList.push({
    name: 'Keyboard',
    price: 95,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8F5QYhuJDwkVpRqprf-2tqZiHI5QP_mU3g&usqp=CAU'
});
productList.push({
    name: 'blouse',
    price: 150,
    image: 'https://www.bhg.com/thmb/CncCZc1gfEglguf3TWxYWqdJBQ8=/4500x0/filters:no_upscale():strip_icc()/how-to-organize-clothes-02-08b0d74085b9416e8376116e51dd83e4.jpg'
});
productList.push({
    name: 'pants',
    price: 310,
    image: 'https://patprimo.vteximg.com.br/arquivos/ids/1072085-550-660/pantalones-para-hombre-44070968-10_2.jpg?v=637744944826300000'
});
productList.push({
    name: 'armchair',
    price: 410,
    image: 'https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg'
});
productList.push({
    name: 'cupboard',
    price: 480,
    image: 'https://cdn.shopify.com/s/files/1/0564/3816/1489/products/kazuhiko-4-door-wardrobe-in-columbia-walnut-finish--by-valuewud-kazuhiko-4-door-wardrobe-in-columbia-zo3nmc_600x.jpg?v=1662197146'
});
productList.push({
    name: 'car',
    price: 280,
    image: 'https://media1.popsugar-assets.com/files/thumbor/fnp-zNi5yUcsmOGMgi6xwAx8UWs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/06/660/n/24155406/a23ef94e4d5d1eed_netimgcTujc4/i/Radio-Flyer-Little-Red-Roadster.jpg'
});
productList.push({
    name: 'dog',
    price: 245,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637760158-51FBPNbMEVL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'screen',
    price: 310,
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/03/Duplicar-pantalla-PC.jpg'
});
productList.push({
    name: 'Lamp',
    price: 50,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY9QwGzBAruvZqVw2pJB4yLNJaJvtyyzmTw&usqp=CAU'
});
productList.push({
    name: 'Keyboard',
    price: 95,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8F5QYhuJDwkVpRqprf-2tqZiHI5QP_mU3g&usqp=CAU'
});
productList.push({
    name: 'blouse',
    price: 150,
    image: 'https://www.bhg.com/thmb/CncCZc1gfEglguf3TWxYWqdJBQ8=/4500x0/filters:no_upscale():strip_icc()/how-to-organize-clothes-02-08b0d74085b9416e8376116e51dd83e4.jpg'
});
productList.push({
    name: 'pants',
    price: 310,
    image: 'https://patprimo.vteximg.com.br/arquivos/ids/1072085-550-660/pantalones-para-hombre-44070968-10_2.jpg?v=637744944826300000'
});
productList.push({
    name: 'armchair',
    price: 410,
    image: 'https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg'
});
productList.push({
    name: 'cupboard',
    price: 480,
    image: 'https://cdn.shopify.com/s/files/1/0564/3816/1489/products/kazuhiko-4-door-wardrobe-in-columbia-walnut-finish--by-valuewud-kazuhiko-4-door-wardrobe-in-columbia-zo3nmc_600x.jpg?v=1662197146'
});
productList.push({
    name: 'car',
    price: 280,
    image: 'https://media1.popsugar-assets.com/files/thumbor/fnp-zNi5yUcsmOGMgi6xwAx8UWs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/06/660/n/24155406/a23ef94e4d5d1eed_netimgcTujc4/i/Radio-Flyer-Little-Red-Roadster.jpg'
});
productList.push({
    name: 'dog',
    price: 245,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637760158-51FBPNbMEVL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'screen',
    price: 310,
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/03/Duplicar-pantalla-PC.jpg'
});
productList.push({
    name: 'Lamp',
    price: 50,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY9QwGzBAruvZqVw2pJB4yLNJaJvtyyzmTw&usqp=CAU'
});
productList.push({
    name: 'Keyboard',
    price: 95,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8F5QYhuJDwkVpRqprf-2tqZiHI5QP_mU3g&usqp=CAU'
});
productList.push({
    name: 'blouse',
    price: 150,
    image: 'https://www.bhg.com/thmb/CncCZc1gfEglguf3TWxYWqdJBQ8=/4500x0/filters:no_upscale():strip_icc()/how-to-organize-clothes-02-08b0d74085b9416e8376116e51dd83e4.jpg'
});
productList.push({
    name: 'pants',
    price: 310,
    image: 'https://patprimo.vteximg.com.br/arquivos/ids/1072085-550-660/pantalones-para-hombre-44070968-10_2.jpg?v=637744944826300000'
});
productList.push({
    name: 'armchair',
    price: 410,
    image: 'https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg'
});
productList.push({
    name: 'cupboard',
    price: 480,
    image: 'https://cdn.shopify.com/s/files/1/0564/3816/1489/products/kazuhiko-4-door-wardrobe-in-columbia-walnut-finish--by-valuewud-kazuhiko-4-door-wardrobe-in-columbia-zo3nmc_600x.jpg?v=1662197146'
});
productList.push({
    name: 'car',
    price: 280,
    image: 'https://media1.popsugar-assets.com/files/thumbor/fnp-zNi5yUcsmOGMgi6xwAx8UWs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/06/660/n/24155406/a23ef94e4d5d1eed_netimgcTujc4/i/Radio-Flyer-Little-Red-Roadster.jpg'
});
productList.push({
    name: 'dog',
    price: 245,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637760158-51FBPNbMEVL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*'
});


{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
       </div>
    </div> */}

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);