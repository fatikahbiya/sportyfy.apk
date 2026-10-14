# Sportyfy prototype

Open `index.html` in a browser (needs internet for the font and Lucide icons).
In VS Code: install **Live Server**, right-click `index.html` → *Open with Live Server*.

```
sportyfy/
├── index.html
├── IMAGE-GUIDE.md        which photo goes where
├── assets/images/
│   ├── onboarding/cover.jpg
│   ├── home/hero-skate-day.jpg
│   ├── sports/           skateboard, badminton, basketball, futsal, running, volleyball
│   ├── communities/      6 community photos
│   └── people/           coach-raka.jpg, profile-fatikah.jpg
├── css/style.css
└── js/
    ├── images.js         image paths (edit here if you rename files)
    ├── data.js           helpers, dummy activities, state
    ├── components.js     shared UI, QR code
    ├── screens-main.js   Home, Explore, Search, Detail, Bookings, Community, Profile, ...
    ├── screens-flow.js   Splash, Onboarding, Login, Register, Booking, Checkout, Payment, Success
    └── app.js            router + startup
```

## Change photos
Overwrite the file in `assets/images/` with your own `.jpg` using the **same name**.
Each placeholder has its own path written on it. See `IMAGE-GUIDE.md` for sizes.
