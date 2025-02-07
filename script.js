
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('acceptCookies');

    console.log(localStorage.getItem('cookiesAccepted')); 

    if (localStorage.getItem('cookiesAccepted') === 'true') {
        console.log('Cookies were already accepted.');
        cookieBanner.style.display = 'none'; 
    } else {
        console.log('Cookies have not been accepted yet.');
        cookieBanner.style.display = 'block'; 
    }

    //როცა მომხმარებელი დააჭერს "Accept" შევინახავთ localStorage-ში
    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        console.log('Cookies accepted!');
        cookieBanner.style.display = 'none';
    });
});



//ფორმის ვალიდაცია
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const icon = togglePassword.querySelector("i");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        let isValid = true;

        function validateField(field, regex = null) {
            const value = field.value.trim();
            let errorMessage = field.nextElementSibling;

            if (errorMessage && errorMessage.classList.contains("error-message")) {
                errorMessage.remove();
            }

            if (value === "") {
                isValid = false;
                field.classList.add("error");
                errorMessage = document.createElement("div");
                errorMessage.classList.add("error-message");
                errorMessage.textContent = `${field.placeholder} აუცილებელია!`;
                field.after(errorMessage);
            } else if (regex && !regex.test(value)) {
                isValid = false;
                field.classList.add("error");
                errorMessage = document.createElement("div");
                errorMessage.classList.add("error-message");
                errorMessage.textContent = `არასწორი ${field.placeholder.toLowerCase()}!`;
                field.after(errorMessage);
            } else {
                field.classList.remove("error");
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;


        validateField(firstName);
        validateField(lastName);
        validateField(email, emailRegex);
        validateField(subject);
        validateField(message);
        validateField(password, passwordRegex);

        if (isValid) {
            alert("ფორმა წარმატებით გაიგზავნა!");
            form.reset();
        }
    });

    togglePassword.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        } else {
            password.type = "password";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    });
});




document.addEventListener("DOMContentLoaded", async () => {
    
    //მაგ: თუ URL არის "example.com/page/index.html", აბრუნებს "index.html"
    const path = window.location.pathname.split("/").pop();

    if (path === "index.html" || path === "") {
        try {
            //აგზავნის მოთხოვნას API-ზე რათა მიიღოს ხმაურის ეფექტის გამოსახულება

            const response = await fetch("https://php-noise.com/noise.php?hex=FFFFFF&json");
            
            const data = await response.json();

            if (data && data.uri) {
                document.body.style.backgroundImage = `url(${data.uri})`;
            }
        } catch (error) {
            console.error("Error fetching background:", error);
        }
    }
});







document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { 
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,             
            behavior: "smooth"   
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger-menu");
    const navMenu = document.querySelector("nav ul");

    burger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});




