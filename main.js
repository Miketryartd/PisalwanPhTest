/*function of sliding ads*/
document.body.addEventListener('click', function(event){
    var searchWrapper = document.getElementById('results');
    var serachInput = document.getElementById('searchInput');

    if (!searchWrapper.contains(event.target) && event.target !== serachInput){
        searchWrapper.style.display = 'none'
       if (searchWrapper.style.display === 'none'){
        searchWrapper.style.display = 'block';
       } else {
        searchWrapper.style.display = 'none';
       }
    }
});

var images = ['imgcard/frag.jpg', 'imgcard/ABOUT-US1.jpg', 'imgcard/ww.jpg', 'imgcard/Apple_Macbook_Pro_2021_10_19_17_09_32.jpg', 'imgcard/gh-best-skincare-products-6557978b58b57.png', ];
var imageElement = document.getElementById('image');
var nextBtn = document.getElementById('nad');
let currentimg = 0;
function updateImage(){
    imageElement.src = images[currentimg];
}
function nextads(){
    currentimg++;

    if (currentimg >= images.length){
        currentimg = 0;
    }

    updateImage();
}

function backads() {
    currentimg--;

    if (currentimg < 0) {
        currentimg = images.length - 1;
    }

    updateImage();
}
/*function of slidingads-close*/

// menu function //
function menufunction(){
    var menuContainer = document.getElementById('menucon');

    if (menuContainer.style.visibility === 'visible'){
        menuContainer.style.visibility = 'hidden';
    } else{
        menuContainer.style.visibility = 'visible';
    }
}
//menufunctuin-close/
//featured 1//
function featured1(){
    
}
// featured1//
  
// function of cart function //

function cartFunction(){
   
 var cartIcon = document.querySelector('#cart i');
 if (cartIcon.classList.contains('bx-cart')){
    cartIcon.classList.remove('bx-cart');
    cartIcon.classList.add('bxs-cart');
 } else {
    cartIcon.classList.remove('bxs-cart');
    cartIcon.classList.add('bx-cart');
 }
    var cartContainer = document.getElementById('cartcon');
    if(cartContainer.style.display === 'block'){
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }


}

//function of cart function//
// featured1//

    var images1 = ['imgcard/ph-11134207-7qukx-lgnjnjg8t7mub4.jpg', 'imgcard/swat1.jpg', 'imgcard/swat2.jpg', 'imgcard/swat3.jpg', 'imgcard/swat4.jpg', ];
    var imageElement1 = document.getElementById('image1');
    var nextarrow1 = document.getElementById('f1arrow');
    let currentImg1 = 0;

function updateImage1(){
  imageElement1.src = images1[currentImg1];
}
function f1arrow() {
    currentImg1++;
    if (currentImg1 >= images1.length) {
        currentImg1 = 0;
    }
    updateImage1();
}

function f1arrowback(){
    currentImg1--;
    if (currentImg1 < 0){
        currentImg1 = images1.length - 1;
    }
    updateImage1();
}








function featured1(){
    var featured1 = document.getElementById('featured1');
    var overflow = document.getElementById('overflow');
    var navflex = document.getElementById('navflex');
    var wish = document.getElementById('wish');
    var cart = document.getElementById('cart');
    var home = document.getElementById('home');
    var menu = document.getElementById('menu');
    if (overflow.style.display === 'block'){
        overflow.style.display = 'none';
        wish.style.color = 'rgba(0, 0, 0, 0.676)';
        cart.style.color = 'rgba(0, 0, 0, 0.676)';
        navflex.style.backgroundColor = 'White';
        home.style.color = 'rgba(0, 0, 0, 0.676)';
        menu.style.backgroundColor = ' rgba(205, 210, 222, 0.274)';
    } else {
        overflow.style.display = 'block';
        navflex.style.backgroundColor = 'black';
        wish.style.color = 'White';
        cart.style.color = 'White';
        home.style.color = 'white';
        menu.style.backgroundColor = 'White';
    }

    if (featured1.style.display === 'none'){
        featured1.style.display = 'block';
    } else {
        featured1.style.display = 'block';
    }
}

function cancelfeatured1(){
    var featured1 = document.getElementById('featured1');
   var overflow = document.getElementById('overflow');
   var navflex = document.getElementById('navflex');
   var cart = document.getElementById('cart');
  var wish = document.getElementById('wish');
  wish.style.color = 'rgba(0, 0, 0, 0.676)';
  cart.style.color = 'rgba(0, 0, 0, 0.676)';
 
   navflex.style.backgroundColor = 'White';
    featured1.style.display = 'none';
    overflow.style.display = 'none';
}

// ffeatured1-close//

// array//
let shoppingCart = [];
//done//

//fetch////
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    var products = data.products;
    var mainshopContainer = document.getElementById('mainshopContainer');

    products.forEach(product => {
        var productDiv = document.createElement('div');
        productDiv.className = 'mainshopimgbox';

        // Add click event listener to each product
        productDiv.addEventListener('click', () => {
            handleProductClick(product);
        });

        var shopCategory = document.createElement('div');
        shopCategory.className = 'spanCategory';
        shopCategory.innerHTML = `<span><i class='bx bx-purchase-tag' ></i>${product.category}</span>`

        productDiv.appendChild(shopCategory);

        var mainshopdescription = document.createElement('div');
        mainshopdescription.className = 'mainshopdescription';
        mainshopdescription.innerHTML = `<h1>${product.title}</h1> <p>Price:  ₱${product.price}</p`;
        
        var discountedPrice = document.createElement('div');
        discountedPrice.innerHTML = `<p id="discounted">${product.discountPercentage}% OFF</p>`;

        var productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;

        productDiv.appendChild(discountedPrice);
        productDiv.appendChild(mainshopdescription);
        productDiv.appendChild(productImage);
       
        mainshopContainer.appendChild(productDiv);
    });
})
.catch(error => {
    console.error('Error fetching data: ', error);
});

// Function to handle product click event
function handleProductClick(product) {
    var navflex = document.getElementById('navflex');
    var cart = document.getElementById('cart');
   var wish = document.getElementById('wish');
    var mainProductContainer = document.getElementById('mainProductContainer');
    let cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    var home = document.getElementById('home');
    var menu = document.getElementById('menu');
    var overflow = document.getElementById('overflow');

    // Display the container and overlay
    mainProductContainer.style.display = 'block';
    var overflow = document.getElementById('overflow');
    var navflex = document.getElementById('navflex');
    var wish = document.getElementById('wish');
    var cart = document.getElementById('cart');
   

    if (overflow.style.display === 'block'){
        overflow.style.display = 'none';
        wish.style.color = 'rgba(0, 0, 0, 0.676)';
        cart.style.color = 'rgba(0, 0, 0, 0.676)';
        navflex.style.backgroundColor = 'White';
        home.style.color = 'rgba(0, 0, 0, 0.676)';
        menu.style.backgroundColor = ' rgba(205, 210, 222, 0.274)';
    } else {
        overflow.style.display = 'block';
        navflex.style.backgroundColor = 'black';
        wish.style.color = 'White';
        cart.style.color = 'White';
        home.style.color = 'White';
        menu.style.backgroundColor = 'White';
    }


if (cartItems.includes(product.id)){
    localStorage.removeItem('cartItems');
    
}

    
    // Clear previous image (if any)
    var productImage = mainProductContainer.querySelector('img');
    if (productImage) {
        productImage.remove();
    }

    mainProductContainer.innerHTML = '';
    productImage = product.images;

    let currentImgIndex = 0;

   var imageElement = document.createElement('img');
   imageElement.src = productImage[currentImgIndex];
   imageElement.alt = product.title;
   imageElement.style.height = '300px';
   imageElement.style.marginTop = '80px';
   imageElement.style.marginLeft = '30px';
   imageElement.style.width = '50%';
   imageElement.style.objectFit = 'contain';
  
  
   mainProductContainer.appendChild(imageElement);

   var nextBtn = document.createElement('button');
   nextBtn.textContent = 'Next';
   nextBtn.id = 'nextBtnNew';
   nextBtn.innerHTML = `<i class='bx bx-right-arrow-alt'></i>`;
   nextBtn.addEventListener('click', nextImage);
   mainProductContainer.appendChild(nextBtn);

   // Create and append the back button
   var backButton = document.createElement('button');
   backButton.textContent = 'Back';
   backButton.id = 'backBtnNew';
   backButton.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>`;
   backButton.addEventListener('click', previousImage);
   mainProductContainer.appendChild(backButton);

   // Function to update the current image
   function updateImage() {
       imageElement.src = productImage[currentImgIndex];
   }

   // Function to handle next image button click
   function nextImage() {
       currentImgIndex++;
       if (currentImgIndex >= productImage.length) {
           currentImgIndex = 0;
       }
       updateImage();
   }

   // Function to handle previous image button click
   function previousImage() {
       currentImgIndex--;
       if (currentImgIndex < 0) {
           currentImgIndex = productImage.length - 1;
       }
       updateImage();



   }
   var container = document.createElement('div');
   container.className = 'containerOfThings';
   mainProductContainer.appendChild(container);
   var h1 = document.createElement('h1');
   h1.textContent = product.title;
   h1.className = 'title';
  container.appendChild(h1);
   var ratings = document.createElement('div');
   var brand = document.createElement('div');
   brand.className = 'brand';
   brand.innerHTML = `<h1>${product.brand}<i class='bx bx-check' ></i><h1> `
  container.appendChild(brand);
   var description = document.createElement('p');
   description.className = 'description';
   description.textContent = product.description;
  container.appendChild(description);
   var categoryy = document.createElement('div');
   categoryy.innerHTML = `<h1><i class='bx bx-purchase-tag'></i>${product.category}</h1>`;
   categoryy.className = 'category';
  container.appendChild(categoryy);
   ratings.className = 'ratings';
   ratings.innerHTML = `<span><i class='bx bxs-star' ></i>${product.rating}</span>`;
  container.appendChild(ratings);
   var prices = document.createElement('div');
  prices.innerHTML = `<h1>₱${product.price}</h1>`;
   prices.className = 'prices';
  container.appendChild(prices);
  var stock = document.createElement('div');
  stock.innerHTML = `<h2><i class='bx bx-package' ></i>${product.stock} in stock</h2>`;
  stock.className = 'stock';
  container.appendChild(stock);
var wishlist = document.createElement('button');
wishlist.innerHTML = `<i class='bx bx-heart' ></i> Add to wishlist`;
wishlist.id = 'wishBtn';
wishlist.onclick = function(){
    wishlistAdd(product);
}
wishlist.className = 'wishlistBtne';
container.appendChild(wishlist);
let isInCart = Array.isArray(cartItems) && cartItems.includes(product.id);
console.log('Cart Items:', cartItems);
console.log('Is in Cart:', isInCart);
if (isInCart){
console.log('Counter',
 isInCart);
}
   var addToCart = document.createElement('button');
   addToCart.innerHTML = isInCart ? `<h2><i class='bx bxs-cart' ></i>Added to cart</h2>` : `<h2><i class='bx bx-cart' ></i>Add to cart</h2>`;
   console.log('Added!', isInCart);
   addToCart.onclick = function(){
    cartAddFunction(product);
   }
  
  addToCart.innerHTML = isInCart ? `<h2><i class='bx bxs-cart' ></i>Added to cart</h2>` : `<h2><i class='bx bx-cart' ></i>Add to cart</h2>`;
   addToCart.className = 'cartBtn';
   mainProductContainer.appendChild(addToCart);
   
   

   var xBtn = document.createElement('button');

   xBtn.id = 'eliminate';
   xBtn.textContent = 'Cancel';
   xBtn.addEventListener('click', eliminate);
   
   mainProductContainer.appendChild(xBtn);

  
}
let cartArray = [];
function updateContainerHeight(){
    var cartContainer = document.getElementById('cartcon');
    var cartApex = document.querySelectorAll('#list li');
    var length = cartApex.length + 1;
    var cartHeight = 200;
    var add = cartHeight * length;
console.log('number of items in cart', length);
console.log('height', cartHeight);
    cartContainer.style.height = add + 'px';
    cartContainer.style.maxHeight = '500px';
    cartArray.push(length);
    console.log('Added products Array in container', cartArray);

    if (length < 0){
        cartContainer.style.height = add - 'px';
        cartContainer.style.maxHeight = '200px';
    }
    
   
}
let containerOfProducts = JSON.parse(localStorage.getItem('wishItems')) || [];
function updateWishContainer(){
    var wishParent = document.getElementById('wishlistContainer');
    var wishList = document.querySelectorAll('#wishList li');
    var wishLength = wishList.length + 1;
    var wishHeight = 200;
    var addPixel = wishHeight * wishLength;
    console.log('number of items in wish', wishLength);
    console.log('height', wishHeight);
    wishParent.style.height = addPixel + 'px';
    wishParent.style.maxHeight = '10000px';
    
}






let wishlistArray = JSON.parse(localStorage.getItem('wishlistValue')) || [];
function wishlistAdd(product){
    var wishBtn = document.getElementById('wishBtn');
   wishBtn.id = 'wishBtn';
   if (wishlistArray.includes(product.id)){
    wishBtn.classList.add('addedToWish');
    wishBtn.innerHTML = `Added to wishlist`;
   let checker = Array.isArray(wishlistArray) && wishlistArray.includes(product.id);
    console.log('product is in wish!', checker);

    
   } else {
    updateWishContainer();
    wishBtn.classList.remove('addedToCart');
    wishBtn.innerHTML = `Add to wishlist`;
    wishlistArray.push(product.id);
    console.log('Added to wishlist', wishlistArray);
    var wishList = document.getElementById('wishList');
    var li = document.createElement('li');
    li.id = product.id;
    var img = document.createElement('img');
    img.src = product.thumbnail;
    var h1 = document.createElement('h1');
    h1.textContent = product.title;
    var h2 = document.createElement('div');
    h2.innerHTML = `<h2>${product.discountPercentage}%</h2>`;
    var h3 = document.createElement('div');
    var box = document.createElement('div');
    box.id = 'wishdesc';
    box.appendChild(h1);
    box.appendChild(h2);
    box.appendChild(h3);
    h3.innerHTML = `<h3>${product.stock}<i class='bx bx-package'></i></h3>`;
  li.appendChild(box);
  li.appendChild(img);
    wishList.appendChild(li);
   }
}

function cartAddFunction(product) {
    var list = document.getElementById('list');
    var addtocart = document.querySelector('.cartBtn');
    let arrayOfProductsString = localStorage.getItem('cartItems');
    let arrayOfProducts = arrayOfProductsString ? JSON.parse(arrayOfProductsString) : [];

    if (!Array.isArray(arrayOfProducts)){
        arrayOfProducts = [];
    } else {

    }

    if (addtocart.classList.contains('addedToCart')) {
        // Product is already in cart, so remove it
        var listItemToRemove = document.getElementById(product.id);
        list.removeChild(listItemToRemove);
        addtocart.innerHTML = `<h2><i class='bx bx-cart' ></i>Add to cart</h2>`;
        addtocart.classList.remove('addedToCart');
         var token = localStorage.removeItem(arrayOfProducts);
         console.log('succesfully remove',token + arrayOfProducts);
         let updatedCartItems = arrayOfProducts.filter(itemId => itemId !== product.id);
         list.querySelectorAll('li').forEach(li => {
            if (li.id === product.id){
                list.removeChild(li);
                cartArray.splice(0);
                console.log('Product removed!', li);
            }
         });
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        console.log('removed', updatedCartItems);
     
        
    } else {
        // Product is not in cart, so add it
        arrayOfProducts.push(product.id);
        console.log(`Product successfully added ${product.id}`);
        
        updateContainerHeight();
        
        var li = document.createElement('li');
        li.id = product.id; // Set unique ID for the list item
        var productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        var title = document.createElement('h1');
        title.textContent = product.title;
        var stock = document.createElement('div');
        stock.innerHTML = `<h2><i class='bx bx-package'></i>${product.stock}</h2>`;
        var closeButton = document.createElement('button');
        var price = document.createElement('div');
        price.innerHTML = `<h3>₱${product.price}</h3>`;
      
        
        var box = document.createElement('div');
        box.appendChild(productImage);
        box.appendChild(closeButton);
        
     box.className = 'box';
     var desc = document.createElement('div');
     desc.className = 'desc';
     box.appendChild(desc);
     desc.appendChild(title)
        desc.appendChild(price);
        desc.appendChild(stock);
        li.appendChild(box);
        closeButton.textContent = 'X';
        closeButton.onclick = function(){
            smallCancelButton(li);
        }
       
        list.appendChild(li);
        addtocart.innerHTML = `<h2><i class='bx bxs-cart' ></i>Added to cart</h2>`;
        addtocart.classList.add('addedToCart');
    
        localStorage.setItem(('cartItems'), JSON.stringify(arrayOfProducts)); // Store product data in local storage

        
    }
}
function smallCancelButton(li){
  var list = document.getElementById('list');
  list.removeChild(li);
}

function eliminate() {
    var home = document.getElementById('home');
    home.style.color = 'rgba(0, 0, 0, 0.676)';
    var mainProductContainer = document.getElementById('mainProductContainer');
    var overflow = document.getElementById('overflow');
    var overflow = document.getElementById('overflow');
    var navflex = document.getElementById('navflex');
    var wish = document.getElementById('wish');
    var cart = document.getElementById('cart');
    var home = document.getElementById('home');
    var menu = document.getElementById('menu');
    home.style.color = 'rgba(0, 0, 0, 0.676)';
    menu.style.backgroundColor = ' rgba(205, 210, 222, 0.274)';

    overflow.style.display = 'none';
    wish.style.color = 'rgba(0, 0, 0, 0.676)';
    cart.style.color = 'rgba(0, 0, 0, 0.676)';
    navflex.style.backgroundColor = 'White';
    
    mainProductContainer.style.display = 'none';
    overflow.style.display = 'none';
}


//done

// fetch categories//

fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(categories => {
       
        categories.forEach(category => {
         
            const categoryElement = document.createElement('div');
            categoryElement.id = 'categoryele';
         
         
            var ulcategory = document.createElement('ul');
            
            var licategory = document.createElement('li');
            licategory.textContent = category;
            

            categoryElement.appendChild(ulcategory);

            categoryElement.appendChild(licategory);
            document.getElementById('navside').appendChild(categoryElement);

           
            categoryElement.addEventListener('click', () => {
            
                fetchItems(category);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
    });
//fetch categories//

document.getElementById('recommended').addEventListener('click', function(){
    fetchAllProducts();
    function fetchAllProducts(){
        fetchItems('');
    }
});
//feth product category//
function fetchItems(category){
    const url = category === '' ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${category}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (Array.isArray(data.products)){
                displayItems(data.products);
            } else {
                console.error(`Items array not found in the data for category '${category}' :`, data);
            }
        })
        .catch(error => {
            console.error('Error fetching items:', error);
        });





    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (Array.isArray(data.products)){
            displayItems(data.products);
        } else {
            console.error(`Items array not found in the data for category '${category}' :`, data);
        }
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    });

  


}
// display categories items//
function displayItems(products){
    var mainshopContainer = document.getElementById('mainshopContainer');
    if (!mainshopContainer){
        console.error('Main shop container not found');
        return;
    }
    mainshopContainer.innerHTML = '';

     if (products.length === 0 ){
        console.log('No items found');
     } else {

        products.forEach(product => {
            var productDiv = document.createElement('div');
            productDiv.className = 'mainshopimgbox';
            var mainshopdescription = document.createElement('div');
            var categories = document.createElement('div');
            categories.className = 'spanCategory';
            categories.innerHTML = `<span><i class='bx bx-purchase-tag' ></i>${product.category}</span>`
            productDiv.appendChild(categories);
            mainshopdescription.className = 'mainshopdescription';
            mainshopdescription.innerHTML = `<h1>${product.title}</h1> <p>Price:  ₱${product.price}</p`;
            var discountedPrice = document.createElement('div');
            productDiv.onclick = () => handleProductClick(product);
            function handleProductClick(product){
                var navflex = document.getElementById('navflex');
                var cart = document.getElementById('cart');
               var wish = document.getElementById('wish');
                var mainProductContainer = document.getElementById('mainProductContainer');
                let cartItemsString = localStorage.getItem('cartItems');
                let cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
                var home = document.getElementById('home');
                var menu = document.getElementById('menu');
                var overflow = document.getElementById('overflow');
            
                // Display the container and overlay
                mainProductContainer.style.display = 'block';
                var overflow = document.getElementById('overflow');
                var navflex = document.getElementById('navflex');
                var wish = document.getElementById('wish');
                var cart = document.getElementById('cart');
               
            
                if (overflow.style.display === 'block'){
                    overflow.style.display = 'none';
                    wish.style.color = 'rgba(0, 0, 0, 0.676)';
                    cart.style.color = 'rgba(0, 0, 0, 0.676)';
                    navflex.style.backgroundColor = 'White';
                    home.style.color = 'rgba(0, 0, 0, 0.676)';
                    menu.style.backgroundColor = ' rgba(205, 210, 222, 0.274)';
                } else {
                    overflow.style.display = 'block';
                    navflex.style.backgroundColor = 'black';
                    wish.style.color = 'White';
                    cart.style.color = 'White';
                    home.style.color = 'White';
                    menu.style.backgroundColor = 'White';
                }
if (cartItems.includes(product.id)){
    localStorage.removeItem('cartItems');
    
}

    
    // Clear previous image (if any)
    var productImage = mainProductContainer.querySelector('img');
    if (productImage) {
        productImage.remove();
    }

    mainProductContainer.innerHTML = '';
    productImage = product.images;

    let currentImgIndex = 0;

   var imageElement = document.createElement('img');
   imageElement.src = productImage[currentImgIndex];
   imageElement.alt = product.title;
   imageElement.style.height = '300px';
   imageElement.style.marginTop = '80px';
   imageElement.style.marginLeft = '30px';
   imageElement.style.width = '50%';
   imageElement.style.objectFit = 'contain';
  
  
   mainProductContainer.appendChild(imageElement);

   var nextBtn = document.createElement('button');
   nextBtn.textContent = 'Next';
   nextBtn.id = 'nextBtnNew';
   nextBtn.innerHTML = `<i class='bx bx-right-arrow-alt'></i>`;
   nextBtn.addEventListener('click', nextImage);
   mainProductContainer.appendChild(nextBtn);

   // Create and append the back button
   var backButton = document.createElement('button');
   backButton.textContent = 'Back';
   backButton.id = 'backBtnNew';
   backButton.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>`;
   backButton.addEventListener('click', previousImage);
   mainProductContainer.appendChild(backButton);

   // Function to update the current image
   function updateImage() {
       imageElement.src = productImage[currentImgIndex];
   }

   // Function to handle next image button click
   function nextImage() {
       currentImgIndex++;
       if (currentImgIndex >= productImage.length) {
           currentImgIndex = 0;
       }
       updateImage();
   }

   // Function to handle previous image button click
   function previousImage() {
       currentImgIndex--;
       if (currentImgIndex < 0) {
           currentImgIndex = productImage.length - 1;
       }
       updateImage();



   }
   var container = document.createElement('div');
   container.className = 'containerOfThings';
   mainProductContainer.appendChild(container);
   var h1 = document.createElement('h1');
   h1.textContent = product.title;
   h1.className = 'title';
  container.appendChild(h1);
   var ratings = document.createElement('div');
   var brand = document.createElement('div');
   brand.className = 'brand';
   brand.innerHTML = `<h1>${product.brand}<i class='bx bx-check' ></i><h1> `
  container.appendChild(brand);
   var description = document.createElement('p');
   description.className = 'description';
   description.textContent = product.description;
  container.appendChild(description);
   var categoryy = document.createElement('div');
   categoryy.innerHTML = `<h1><i class='bx bx-purchase-tag'></i>${product.category}</h1>`;
   categoryy.className = 'category';
  container.appendChild(categoryy);
   ratings.className = 'ratings';
   ratings.innerHTML = `<span><i class='bx bxs-star' ></i>${product.rating}</span>`;
  container.appendChild(ratings);
   var prices = document.createElement('div');
  prices.innerHTML = `<h1>₱${product.price}</h1>`;
   prices.className = 'prices';
  container.appendChild(prices);
  var stock = document.createElement('div');
  stock.innerHTML = `<h2><i class='bx bx-package' ></i>${product.stock} in stock</h2>`;
  stock.className = 'stock';
  container.appendChild(stock);
var wishlist = document.createElement('div');
wishlist.innerHTML = `<button><i class='bx bx-heart' ></i> Add to wishlist</button>`;
wishlist.className = 'wishlistBtne';
container.appendChild(wishlist);
let isInCart = Array.isArray(cartItems) && cartItems.includes(product.id);
console.log('Cart Items:', cartItems);
console.log('Is in Cart:', isInCart);
if (isInCart){
console.log('Counter',
 isInCart);
}
   var addToCart = document.createElement('button');
   addToCart.innerHTML = isInCart ? `<h2>Remove from cart</h2>` : `<h2>Add to cart</h2>`;
   console.log('Added!', isInCart);
   addToCart.onclick = function(){
    cartAddFunction(product);
   }
  
  addToCart.innerHTML = isInCart ? `<h2>Remove from cart</h2>` : `<h2>Add to cart</h2>`;
   addToCart.className = 'cartBtn';
   mainProductContainer.appendChild(addToCart);
   
   

   var xBtn = document.createElement('button');

   xBtn.id = 'eliminate';
   xBtn.textContent = 'Cancel';
   xBtn.addEventListener('click', eliminate);
   
   mainProductContainer.appendChild(xBtn);

  
              
            }
            discountedPrice.innerHTML = `<p id="discounted">${product.discountPercentage}% OFF</p>`
            productDiv.appendChild(discountedPrice);
            var productImage = new Image();
            productImage.src = product.thumbnail;
            productImage.alt = product.title;
            productDiv.appendChild(mainshopdescription);
            productDiv.appendChild(productImage);
            mainshopContainer.appendChild(productDiv);
        });
     }

    
}

// done//


//fgetch product category//
//done//

//fetch ratings//

//done //done//

// adding buttons to products//


//done//


//function of searchBar//

let products = [];

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        products = data.products;
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

function renderProducts(products) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    var searchInput = document.getElementById('searchinput').value;

   var inv = document.getElementById('invWrapper').style.display = searchInput !== '' ? 'block' : 'none';
    products.forEach(product => {
        var wrapper = document.createElement('div');
        const wrapperBox = document.createElement('div');
        wrapperBox.className = 'wrapperBox';

        const wrapperImg = document.createElement('div');
        wrapperImg.className = 'wrapperImg';

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.className = 'descriptionWrapper';
      wrapperBox.onclick = () => handleProductClick(product);
      function handleProductClick(product){
         var navflex = document.getElementById('navflex');
    var cart = document.getElementById('cart');
   var wish = document.getElementById('wish');
    var mainProductContainer = document.getElementById('mainProductContainer');
    let cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    var home = document.getElementById('home');
    var menu = document.getElementById('menu');
    var overflow = document.getElementById('overflow');

    // Display the container and overlay
    mainProductContainer.style.display = 'block';
    var overflow = document.getElementById('overflow');
    var navflex = document.getElementById('navflex');
    var wish = document.getElementById('wish');
    var cart = document.getElementById('cart');
   

    if (overflow.style.display === 'block'){
        overflow.style.display = 'none';
        wish.style.color = 'rgba(0, 0, 0, 0.676)';
        cart.style.color = 'rgba(0, 0, 0, 0.676)';
        navflex.style.backgroundColor = 'White';
        home.style.color = 'rgba(0, 0, 0, 0.676)';
        menu.style.backgroundColor = ' rgba(205, 210, 222, 0.274)';
    } else {
        overflow.style.display = 'block';
        navflex.style.backgroundColor = 'black';
        wish.style.color = 'White';
        cart.style.color = 'White';
        home.style.color = 'White';
        menu.style.backgroundColor = 'White';
    }
    
    if (cartItems.includes(product.id)){
        localStorage.removeItem('cartItems');
        
    }
    
        
        // Clear previous image (if any)
        var productImage = mainProductContainer.querySelector('img');
        if (productImage) {
            productImage.remove();
        }
    
        mainProductContainer.innerHTML = '';
        productImage = product.images;
    
        let currentImgIndex = 0;
    
       var imageElement = document.createElement('img');
       imageElement.src = productImage[currentImgIndex];
       imageElement.alt = product.title;
       imageElement.style.height = '300px';
       imageElement.style.marginTop = '80px';
       imageElement.style.marginLeft = '30px';
       imageElement.style.width = '50%';
       imageElement.style.objectFit = 'contain';
      
      
       mainProductContainer.appendChild(imageElement);
    
       var nextBtn = document.createElement('button');
       nextBtn.textContent = 'Next';
       nextBtn.id = 'nextBtnNew';
       nextBtn.innerHTML = `<i class='bx bx-right-arrow-alt'></i>`;
       nextBtn.addEventListener('click', nextImage);
       mainProductContainer.appendChild(nextBtn);
    
       // Create and append the back button
       var backButton = document.createElement('button');
       backButton.textContent = 'Back';
       backButton.id = 'backBtnNew';
       backButton.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>`;
       backButton.addEventListener('click', previousImage);
       mainProductContainer.appendChild(backButton);
    
       // Function to update the current image
       function updateImage() {
           imageElement.src = productImage[currentImgIndex];
       }
    
       // Function to handle next image button click
       function nextImage() {
           currentImgIndex++;
           if (currentImgIndex >= productImage.length) {
               currentImgIndex = 0;
           }
           updateImage();
       }
    
       // Function to handle previous image button click
       function previousImage() {
           currentImgIndex--;
           if (currentImgIndex < 0) {
               currentImgIndex = productImage.length - 1;
           }
           updateImage();
    
    
    
       }

       var container = document.createElement('div');
       container.className = 'containerOfThings';
       mainProductContainer.appendChild(container);
       var h1 = document.createElement('h1');
       h1.textContent = product.title;
       h1.className = 'title';
      container.appendChild(h1);
       var ratings = document.createElement('div');
       var brand = document.createElement('div');
       brand.className = 'brand';
       brand.innerHTML = `<h1>${product.brand}<i class='bx bx-check' ></i><h1> `
      container.appendChild(brand);
       var description = document.createElement('p');
       description.className = 'description';
       description.textContent = product.description;
      container.appendChild(description);
       var categoryy = document.createElement('div');
       categoryy.innerHTML = `<h1><i class='bx bx-purchase-tag'></i>${product.category}</h1>`;
       categoryy.className = 'category';
      container.appendChild(categoryy);
       ratings.className = 'ratings';
       ratings.innerHTML = `<span><i class='bx bxs-star' ></i>${product.rating}</span>`;
      container.appendChild(ratings);
       var prices = document.createElement('div');
      prices.innerHTML = `<h1>₱${product.price}</h1>`;
       prices.className = 'prices';
      container.appendChild(prices);
      var stock = document.createElement('div');
      stock.innerHTML = `<h2><i class='bx bx-package' ></i>${product.stock} in stock</h2>`;
      stock.className = 'stock';
      container.appendChild(stock);
    var wishlist = document.createElement('div');
    wishlist.innerHTML = `<button><i class='bx bx-heart' ></i> Add to wishlist</button>`;
    wishlist.className = 'wishlistBtne';
    container.appendChild(wishlist);
    let isInCart = Array.isArray(cartItems) && cartItems.includes(product.id);
    console.log('Cart Items:', cartItems);
    console.log('Is in Cart:', isInCart);
    if (isInCart){
    console.log('Counter',
     isInCart);
    }
       var addToCart = document.createElement('button');
       addToCart.innerHTML = isInCart ? `<h2>Remove from cart</h2>` : `<h2>Add to cart</h2>`;
       console.log('Added!', isInCart);
       addToCart.onclick = function(){
        cartAddFunction(product);
       }
      
      addToCart.innerHTML = isInCart ? `<h2>Remove from cart</h2>` : `<h2>Add to cart</h2>`;
       addToCart.className = 'cartBtn';
       mainProductContainer.appendChild(addToCart);
       
       
    
       var xBtn = document.createElement('button');
    
       xBtn.id = 'eliminate';
       xBtn.textContent = 'Cancel';
       xBtn.addEventListener('click', eliminate);
       
       mainProductContainer.appendChild(xBtn);
    
      
    
      }
        const h1 = document.createElement('h1');
        h1.textContent = product.title;
        
        const p = document.createElement('p');
        p.textContent = `Price: ₱${product.price}`;

        descriptionWrapper.appendChild(h1);
        descriptionWrapper.appendChild(p);

        wrapperImg.appendChild(img);
        wrapperImg.appendChild(descriptionWrapper);

        wrapperBox.appendChild(wrapperImg);
        resultsContainer.appendChild(wrapperBox);
    });

    // Show the wrapper only when there are search results
  var productCount = products.length;
  var maxHeight = 400;
  var minHeight = 50;
  var heightIncrement = 150;

  let containerHeight = minHeight + heightIncrement * productCount;
  containerHeight = Math.min(containerHeight, maxHeight);
  resultsContainer.style.height = containerHeight + 'px';
}

function searchProducts() {
    const searchInput = document.getElementById('searchinput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

   

    const searchResults = products.filter(product => {
        return product.title.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput);
    });

    renderProducts(searchResults);
}
var searchInp = document.getElementById('searchinput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Call searchProducts function when Enter key is pressed
        searchProducts();
    }
});

//end//



// function of wishlist//


function wishlistfunction(){
    var wishlistContainer = document.getElementById('wishlistContainer');
    if (wishlistContainer.style.display === 'block'){
        wishlistContainer.style.display = 'none';
    } else {
        wishlistContainer.style.display = 'block';
    }
}




//end//





// function of chatBot//

function chatBtn(){
    var chatBotContainer = document.getElementById('chatBotContainer');

   
    if (chatBotContainer.style.display === 'block'){
        chatBotContainer.style.display = 'none';
    } else {
        chatBotContainer.style.display = 'block';
    }

}


//first option//
let optionClicked = false;
function firstOption(){
    var chatBotContainer = document.getElementById('chatBotContainer');
   

      
    if (!optionClicked){
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = ' What do you need help with?';
        chatBotContainer.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(span);
        optionClicked = true;
    } else {
    
    }

    
  
    
}

// end//


// end//



