//cookies ლოგიკა

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('acceptCookies');

    // console.log, რომ დავინახოთ რა ხდება
    console.log(localStorage.getItem('cookiesAccepted')); 

    // დავამოწმოთ, თუ უკვე არსებობს "cookiesAccepted" localStorage-ში
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        console.log('Cookies were already accepted.');
        cookieBanner.style.display = 'none'; // notification არ გამოჩნდება
    } else {
        console.log('Cookies have not been accepted yet.');
        cookieBanner.style.display = 'block'; // notification გამოჩნდება
    }

    //როცა მომხმარებელი დააჭერს "Accept" შევინახავთ localStorage-ში
    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        console.log('Cookies accepted!');
        cookieBanner.style.display = 'none';
    });
});



// ფორმის ვალიდაციის ლოგიკა
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
        e.preventDefault(); // ფორმის ავტომატური გაგზავნის თავიდან აცილება
        
        let isValid = true;

        //ველის ვალიდაციის ფუნქცია
        function validateField(field, regex = null) {
            const value = field.value.trim();
            let errorMessage = field.nextElementSibling;

            //ძველი შეცდომების წაშლა
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

        // რეგულარული გამოსახულებები ვალიდაციისთვის
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ელფოსტის ვალიდაციის რეგულარული გამოსახულება
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/; // პაროლის ვალიდაციის რეგულარული გამოსახულება

        validateField(firstName);
        validateField(lastName);
        validateField(email, emailRegex);
        validateField(subject);
        validateField(message);
        validateField(password, passwordRegex);

        // თუ ყველა ველი სწორია, ფორმა გაიგზავნება
        if (isValid) {
            alert("ფორმა წარმატებით გაიგზავნა!");
            form.reset();
        }
    });

    // პაროლის ჩვენება/დამალვის ფუნქციონალი
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
    //იღებს მიმდინარე URL-დან ფაილის სახელს
    //მაგ: თუ URL არის "example.com/page/index.html", აბრუნებს "index.html"
    const path = window.location.pathname.split("/").pop();

    //ამოწმებს არის თუ არა გვერდი მთავარი (index.html ან ცარიელი path)
    if (path === "index.html" || path === "") {
        try {
            //აგზავნის მოთხოვნას API-ზე რათა მიიღოს ხმაურის ეფექტის გამოსახულება
            //hex=FFFFFF პარამეტრი განსაზღვრავს თეთრ ფერს
            const response = await fetch("https://php-noise.com/noise.php?hex=FFFFFF&json");
            
            //პასუხს გარდაქმნის JSON ფორმატში
            const data = await response.json();

            //ამოწმებს არსებობს თუ არა მიღებულ მონაცემებში uri ველი
            if (data && data.uri) {
                // აყენებს მიღებულ გამოსახულებას როგორც გვერდის ფონს
                document.body.style.backgroundImage = `url(${data.uri})`;
            }
        } catch (error) {
            //თუ რაიმე შეცდომა მოხდა ბეჭდავს  შეტყობინებას კონსოლში
            console.error("Error fetching background:", error);
        }
    }
});







//Scroll To Top 
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        //ამოწმებს თუ გვერდი ჩამოსქროლილია 300 პიქსელზე მეტად
        if (window.scrollY > 300) { 
            // თუ კი - აჩვენებს ღილაკს
            scrollToTopBtn.style.display = "block";
        } else {
            // თუ არა - მალავს ღილაკს
            scrollToTopBtn.style.display = "none";
        }
    });

    //ღილაკზე დაჭერისას გვერდს აბრუნებს თავში
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,             
            behavior: "smooth"   //smooth ანიმაცია სქროლისას
        });
    });
});

//Burger Menu 
document.addEventListener("DOMContentLoaded", function() {
    //პოულობს ბურგერ მენიუს და ნავიგაციის ელემენტებს
    const burger = document.querySelector(".burger-menu");
    const navMenu = document.querySelector("nav ul");

    //ბურგერზე დაჭერისას ამატებს/აშორებს "active" კლასს
    burger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});




