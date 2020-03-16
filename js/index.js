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

// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content


// img selectors
const headerLine = document.getElementById("cta-img");
headerLine.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// nav selectors
const navBar = document.querySelectorAll('a')
navBar[0].textContent = 'Services'
navBar[1].textContent = 'Product'
navBar[2].textContent = 'Vision'
navBar[3].textContent = 'Features'
navBar[4].textContent = 'About'
navBar[5].textContent = 'Contract'


// Header text
const pageTitle = document.querySelector('h1')
pageTitle.textContent = siteContent["cta"]["h1"]
const buttonLink = document.querySelector("button")
buttonLink.textContent = siteContent["cta"]["button"]

// main Content

// header elements
const headerBlock = document.getElementsByTagName("h4");
const hFeature = headerBlock[0]
hFeature.textContent = siteContent["main-content"]["features-h4"]
const hAbout = headerBlock[1]
hAbout.textContent = siteContent["main-content"]["about-h4"]
const hServices = headerBlock[2]
hServices.textContent = siteContent["main-content"]["services-h4"]
const hProduct = headerBlock[3]
hProduct.textContent = siteContent["main-content"]["product-h4"]
const hVision = headerBlock[4]
hVision.textContent = siteContent["main-content"]["vision-h4"]
const hContact = headerBlock[5]
hContact.textContent = siteContent["contact"]["contact-h4"]

// Main content drop

let paraBlock = document.getElementsByTagName("p");
const pFeatures = paraBlock[0]
pFeatures.textContent = siteContent["main-content"]["features-content"]
const pAbout = paraBlock[1]
pAbout.textContent = siteContent["main-content"]["about-content"]
const pServices = paraBlock[2]
pServices.textContent = siteContent["main-content"]["services-content"]
const pProduct = paraBlock[3]
pProduct.textContent = siteContent["main-content"]["product-content"]
const pVision = paraBlock[4]
pVision.textContent = siteContent["main-content"]["vision-content"]

//bottom contact section content
const pAd = paraBlock[5]
pAd.textContent = siteContent["contact"]["address"]
const pPhone = paraBlock[6]
pPhone.textContent = siteContent["contact"]["phone"]
const pEmail = paraBlock[7]
pEmail.textContent = siteContent["contact"]["email"]

// copyrite content
let foot = document.querySelector("footer");
foot.textContent = siteContent["footer"]["copyrite"]

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images



// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser
navBar.forEach(el => {
  el.style.color = 'green';
});