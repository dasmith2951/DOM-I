const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav anchor tags section

let navAnchor1 = document.querySelectorAll('a')[0]
navAnchor1.textContent = siteContent["nav"]["nav-item-1"]

let navAnchor2 =document.querySelectorAll('a')[1]
navAnchor2.textContent = siteContent["nav"]["nav-item-2"]

let navAnchor3 =document.querySelectorAll('a')[2]
navAnchor3.textContent= siteContent["nav"]["nav-item-3"]

let navAnchor4 = document.querySelectorAll('a')[3]
navAnchor4.textContent = siteContent["nav"]["nav-item-4"]

let navAnchor5 = document.querySelectorAll('a')[4]
navAnchor5.textContent = siteContent["nav"]["nav-item-5"]

let navAnchor6 = document.querySelectorAll('a') [5]
navAnchor6.textContent = siteContent["nav"]["nav-item-6"]

// **END OF NAV SECTION**

//header, button, & header image section

let headerTitle = document.querySelector(".cta .cta-text h1");
headerTitle.innerHTML ="DOM <br> IS <br> AWESOME";

document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

// **END OF HEADER, BUTTON, & HEADER IMAGE SECTION**

//main content - top section

//features section

let featTitle = document.querySelectorAll('h4')[0];
featTitle.textContent  = siteContent["main-content"] ["features-h4"];

let featTextContent = document.querySelectorAll('p')[0];
featTextContent.textContent = siteContent["main-content"]["features-content"];

//about section

let aboutTitle = document.querySelectorAll('h4')[1];
aboutTitle.textContent = siteContent["main-content"] ["about-h4"];

let aboutTextContent = document.querySelectorAll('p')[1];
aboutTextContent.textContent =siteContent["main-content"] ["about-content"]

//middle image section

let middleImageSection = document.querySelector(".middle-img");
middleImageSection.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

// **END OF TOP SECTION**

//main content - bottom section

//services section

let servicesTitle = document.querySelectorAll('h4')[2]
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

let servicesTextContent = document.querySelectorAll('p')[2]
servicesTextContent.textContent = siteContent["main-content"]["services-content"]

//product section

let productTitle = document.querySelectorAll('h4')[3]
productTitle.textContent =siteContent["main-content"]["product-h4"]

let productTextContent = document.querySelectorAll('p')[3]
productTextContent.textContent = siteContent["main-content"]["product-content"]

//vision section

let visionTitle = document.querySelectorAll('h4')[4]
visionTitle.textContent= siteContent["main-content"]["vision-h4"]

let visionTextContent = document.querySelectorAll('p')[4]
visionTextContent.textContent = siteContent["main-content"]["vision-content"]

//**END OF MAIN CONTENT & BOTTOM SECTION**

//contact section

let contactTitle = document.querySelectorAll('h4')[5]
contactTitle.textContent = siteContent["contact"]["contact-h4"]

let contactTextContent =document.querySelectorAll('.contact p')
contactTextContent[0].textContent = siteContent["contact"]["address"]
contactTextContent[1].textContent = siteContent["contact"]["phone"]
contactTextContent[2].textContent = siteContent["contact"]["email"]

//**END OF CONTACT SECTION**

//footer

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

//**CONTAINER ENDS**