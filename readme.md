# Luxe Beauty Studio — Premium Salon Website

Responsive three-page beauty salon demo built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home page and service highlights
- `services.html` — Service descriptions and illustrative pricing
- `booking.html` — Inspiration gallery and booking enquiry form

## Folder structure
```text
luxe-beauty-studio/
├── index.html
├── services.html
├── booking.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        ├── bridal-makeup.png
        ├── reception-glam.png
        ├── hairstyle-finishing.png
        └── facial-skin-prep.png
```

All website photos are stored locally in `assets/images/`, so the pages use the supplied PNGs rather than remote Unsplash images.

## Run locally
1. Extract the ZIP archive.
2. Open this folder with Visual Studio Code.
3. Install the Live Server extension if it is not already installed.
4. Right-click `index.html` and choose **Open with Live Server**.

## WhatsApp enquiry behaviour
The booking form validates required fields, then opens WhatsApp with a prefilled message containing the name, contact number, selected service, event date, preferred time, venue, number of people, budget and optional notes. The visitor must review and tap **Send** in WhatsApp; a website cannot send a WhatsApp message silently on behalf of the visitor.

The destination currently uses the number supplied for testing: `+91 94872 29487`. **Before launching for a real salon, replace `919487229487` in `assets/js/main.js` and the `wa.me` link in `booking.html` with the salon owner's number.**

## Before using with a real business
- Replace the sample brand, photos, service descriptions and prices with approved content.
- Confirm all prices, inclusions, operating hours, location and availability.
- Use images the client owns or has permission to use.
- Update the WhatsApp destination number in JavaScript and HTML.
- Test the booking flow on a phone and desktop.

## Free deployment
1. Create a GitHub repository and upload the extracted files/folders.
2. Sign in to Vercel using GitHub and import the repository.
3. Framework preset: **Other**. No build command is needed for this static website; serve the project root.
4. Deploy and test all three pages and the WhatsApp flow on the live URL.

## Important demo limitations
- The site does not store customer submissions or confirm actual bookings.
- Sample prices/photos are illustrative.
- Google Fonts and Unsplash photos require an internet connection.
