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
    ├── screens-flow.js   Splash, Onboarding, Login, Register, Booking, Checkout, Payment, Success, Ticket, Receipt
    ├── screens-organizer.js  Organizer studio, Manage activity, Create activity
    ├── screens-chat.js       Chat rooms: Messages list + conversation (demo)
    ├── screens-admin.js      Admin dashboard (GMV, revenue, net profit)
    └── app.js            router + startup
```

## Change photos
Overwrite the file in `assets/images/` with your own `.jpg` using the **same name**.
Each placeholder has its own path written on it. See `IMAGE-GUIDE.md` for sizes.

## Receipts
Every paid booking gets a receipt (receipt no., booking ID, time paid, price breakdown, check-in QR).
Open it from: Success screen → *View receipt*, My Bookings → *Receipt*, Profile → Transaction history → tap a row.
*Download PDF* uses the browser print dialog → choose **Save as PDF**. Only the receipt is printed.
Layout: `receipt()` in `js/screens-flow.js`, print rules at the bottom of `css/style.css`.

## Business model (js/data.js)
`COMMISSION = 0.10` (charged to organizer) and `fee()` = participant service fee (10%).
Set `COMMISSION` to 0 if you only want the service fee. GMV, revenue and net profit are shown separately in the Admin dashboard.

## Demo vs real
Payment is **simulated** (clearly labeled DEMO). A booking is created only after the simulated confirmation.
To go live, replace `pay()` in `js/screens-flow.js` with a real payment gateway and confirm via its webhook.

## Chat rooms (demo)
Room types: community group (`c<index>`), activity group (`a<id>`, only for activities you booked), direct message to the organizer (`o<id>`).
Messages are stored in memory and replies are simulated (`reply()` in `js/screens-chat.js`).
For real chat you need a backend (e.g. Firebase, Supabase Realtime or WebSocket) – replace `pushMsg()` and `reply()`.
