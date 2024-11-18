// fonction de dark/light mode 
function switchTheme() {
    var theme = document.getElementById('theme');
    if (theme.getAttribute('href')==='lightmode.css') {
        theme.href = 'darkmode.css';
        document.getElementById("night-mode-logo").src = "photos/day-mode.png"; 
    }
    else {
        theme.href = 'lightmode.css';
        document.getElementById("night-mode-logo").src = "photos/night-mode.png";
    }
}





// fonction qui ajoute au basket 
let basket = [];
let basketVisible = false;
function addToBasket(productName, price) {
    let existingProduct = basket.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++; 
    }
    else {
            basket.push({ name: productName, price: price, quantity: 1});
        }
        displayBasket();
        if (!basketVisible) {
            document.getElementById("basket").style.display = "block";
            basketVisible = true;
        }
    }
    function removeFromBasket(productName) {
        let index = basket.findIndex(item => item.name === productName);
        if (index !==-1) {
            if (basket[index].quantity > 1){
                basket[index].quantity--;
            }
            else {
                basket.splice(index,1);
            }
        }
        displayBasket();
    }

    // fonction qui calcule le prix total de basket
    function calculateTotalPrice() {
        return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // fonction qui montre ce qui est dans la basket
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



document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('signinBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.querySelector('#register input[name="password"]').value;
    var confirmPassword = document.querySelector('#register input[name="confirmPassword"]').value;
    if (password!== confirmPassword) {
        alert('Passwords do not match.');
    }  else {
        alert('Registration successful!');
        document.getElementById('registerForm').style.display = 'none';
    }
});
// document.getElementById('exitBtn').addEventListener('click', function() {
//     const forms = document.querySelectorAll('.form');
//     forms.forEach(form => {
//         form.style.display = 'none';
//     });
// });
document.getElementById('loginExitBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
});
document.getElementById('registerExitBtn').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
});
