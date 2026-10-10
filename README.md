# Investment Sarthi

A simple, mobile-friendly static website for exploring insurance plan examples. It is built with plain HTML, CSS, and JavaScript, so it does not need a build step or package installation.

## Preview on your computer

1. Download or open this project folder.
2. Double-click `index.html` to open the home page in a browser.
3. Use the navigation to browse plans, view plan details, and try the enquiry cart.

The cart is saved in your browser using `localStorage`. The checkout form prepares an enquiry message for WhatsApp.

## Website files

- `index.html`, `shop.html`, `product.html`, `cart.html`, `about.html`, and `contact.html` are the website pages.
- `css/style.css` contains the shared layout and styling.
- `js/main.js` contains the navigation, cart, and enquiry behavior.
- `js/products.js` contains the example plan information. Edit this file to change the plans.
- `images/` contains the site's SVG illustrations and QR placeholder.

## Before publishing

Open `js/main.js` and replace the sample WhatsApp number and UPI ID with your business details. The QR image is only a placeholder; it cannot accept payments. No payment processor is connected.

Plan names, premiums, coverage, and benefits are illustrative examples only. They are not insurance offers, quotes, or advice. Confirm all information, authorizations, and policy terms with the relevant insurer before publishing or using the site with customers.

## Hosting

This is a static site and can be hosted by GitHub Pages or another static website host. For GitHub Pages, create a repository, push these files, then enable Pages for the repository's main branch in its settings.
