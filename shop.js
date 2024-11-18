// fonction qui fait les slides
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
showSlides(slideIndex)
nextbtn.addEventListener("click", function() 
{
    slideIndex += 3;
    showSlides(slideIndex);
    prevbtn.style.display = "block";
});
prevbtn.addEventListener("click", function() 
{
    slideIndex -= 3;
    showSlides(slideIndex);
    if (slideIndex < 0){
        slideIndex = slides.length - 3;
    }
    if (slideIndex ===0){
        prevbtn.style.display ="none";
    }
});

function showSlides(startIndex) {
    for (let i=0;i<slides.length; i++) 
    {
        slides[i].style.display ="none";
    }
    for (let i = startIndex; i <startIndex + 3; i++)
    {
        if (i < slides.length) {
            slides[i].style.display ="block";
        }
    }
    updateButtons();
}
function updateButtons() {
    if (slideIndex === 0) {
        prevbtn.style.display = "none";
    }
    else {
        prevbtn.style.display = "block";
    }
    if (slideIndex >= slides.length - 3) {
        nextbtn.style.display = "none";
    }
    else {
        nextbtn.style.display = "block";
    }
}


//gdfgfdrhgfhgfhfh

// Function to add an item to the basket
function addToBasket(productName, price) {
    let existingProduct = basket.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++; 
    } else {
        basket.push({ name: productName, price: price, quantity: 1 });
    }
    saveBasketToStorage(); // Save basket to localStorage
    displayBasket();
    if (!basketVisible) {
        document.getElementById("basket").style.display = "block";
        basketVisible = true;
    }
}

// Function to remove an item from the basket
function removeFromBasket(productName) {
    let index = basket.findIndex(item => item.name === productName);
    if (index !== -1) {
        if (basket[index].quantity > 1) {
            basket[index].quantity--;
        } else {
            basket.splice(index, 1);
        }
    }
    saveBasketToStorage(); // Save basket to localStorage
    displayBasket();
}
function resetBasket() {
    basket = [];
    saveBasketToStorage(); // Save empty basket to localStorage
    displayBasket();
    document.getElementById("basket").style.display = "none";
    basketVisible = false;
}

// Function to save the basket to browser storage
function saveBasketToStorage() {
    localStorage.setItem('basket', JSON.stringify(basket));
}

// Function to load the basket from browser storage
function loadBasketFromStorage() {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
        basket = JSON.parse(savedBasket);
        displayBasket();
        if (basket.length > 0) {
            document.getElementById("basket").style.display = "block";
            basketVisible = true;
        }
    }
}

// Function to calculate the total price of items in the basket
function calculateTotalPrice() {
    return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to display the items in the basket
function displayBasket() {
    const basketItems = document.getElementById("basket-items");
    const totalPriceElement = document.getElementById("total-price");
    basketItems.innerHTML = '';
    basket.forEach(item => {
        const listItem = document.createElement ("li");
        listItem.textContent =`${item.name} x${item.quantity} - ${item.price * item.quantity}DA`;
        basketItems.appendChild(listItem);
    });
    const totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = `${totalPrice}DA`;
}

// Initialize basket and visibility flag
let basket = [];
let basketVisible = false;

// Call loadBasketFromStorage when the script is loaded to load the basket from storage
loadBasketFromStorage();




function showProductDetails(productId) {
    const detailsDivId = `${productId}-details`;
    const productDetailsDiv = document.getElementById(detailsDivId);

    // Toggle the "visible" class to trigger the transition
    productDetailsDiv.classList.toggle('visible');
    document.querySelector(".full-background-container").style.display = "block";
}

function hideProductDetails(detailsDivId) {
    const productDetailsDiv = document.getElementById(detailsDivId);

    // Hide the product details div
    if (productDetailsDiv) {
        productDetailsDiv.classList.remove("visible");
        document.querySelector(".full-background-container").style.display = "none";
    } else {
        console.error(`Product details div with ID '${detailsDivId}' not found.`);
    }
}