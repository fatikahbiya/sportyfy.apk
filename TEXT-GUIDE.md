# Where to change the text

HTML is short on purpose: every screen is built by JavaScript in `js/`. `index.html` only holds the empty app frame.

## Safe way to edit (so you can't break the zip)
1. Keep the original zip untouched. Extract it, then copy the folder (e.g. `sportyfy` -> `sportyfy-edit`) and open **sportyfy-edit** in VS Code.
2. Press **Ctrl+Shift+F** (Cmd+Shift+F on Mac), paste the text you see in the app, and VS Code shows the exact file and line.
3. Change only the words *between* tags or quotes. Do not touch anything inside `${ ... }`, `< >`, or `onclick="..."`.
4. Save, refresh the browser (Ctrl+Shift+R). Wrong? Press **Ctrl+Z** or copy the file back from the original folder.

## Most common texts
| What you see | Text to search | Where |
|---|---|---|
| Splash tagline | `Find. Join. Book. Pay. Play.` | `js/screens-flow.js` line 2 |
| Onboarding headline | `Find your next` | `js/screens-flow.js` line 3 |
| Onboarding buttons | `Get started` | `js/screens-flow.js` line 3 |
| Home greeting | `Good morning, Fatikah` | `js/screens-main.js` line 2 |
| Home subtitle | `Ready to play?` | `js/screens-flow.js` line 4, `js/screens-main.js` line 2 |
| Home search placeholder | `What do you want to play?` | `js/screens-main.js` line 3, `js/screens-main.js` line 10 |
| Home hero headline | `Your first ride` | `js/screens-main.js` line 4 |
| Home hero button | `Join Activity` | `js/screens-main.js` line 4, `js/screens-main.js` line 38 |
| Home sports section | `What are you into?` | `js/images.js` line 22, `js/screens-main.js` line 5 |
| Home sports subtext | `Find something that feels like you.` | `js/screens-main.js` line 5 |
| Home near you | `Playing near you` | `js/screens-main.js` line 6 |
| Home popular | `Popular this week` | `js/screens-main.js` line 14 |
| Home community section | `Find your` | `js/images.js` line 33, `js/screens-flow.js` line 3 |
| Home community subtext | `Good games are better with good people.` | `js/screens-main.js` line 8, `js/screens-main.js` line 46 |
| Explore title | `>Explore<` | `js/screens-main.js` line 19 |
| Explore subtitle | `Find something worth playing.` | `js/screens-main.js` line 19 |
| Detail: learn the basics | `Learn the basics.` | `js/screens-main.js` line 32 |
| Detail: safety card | `Play it safe` | `js/screens-main.js` line 35 |
| Detail: cancellation line | `Free cancellation up to 24 hours` | `js/components.js` line 28, `js/screens-flow.js` line 19 |
| Booking title | `your spot` | `js/screens-chat.js` line 33, `js/screens-flow.js` line 11 |
| Checkout title | `Booking<br>summary` | `js/screens-flow.js` line 17 |
| Payment title | `Scan to pay` | `js/screens-flow.js` line 22 |
| Payment demo banner | `DEMO · simulated payment` | `js/screens-flow.js` line 22 |
| Success headline | `You're in!` | `js/screens-flow.js` line 31 |
| Bookings title | `Your bookings` | `js/screens-main.js` line 43 |
| Community title | `Find your<br>people` | `js/screens-main.js` line 8, `js/screens-main.js` line 46 |
| Profile subtitle | `Sports Explorer` | `js/screens-main.js` line 56 |
| Receipt title | `Payment receipt` | `js/screens-flow.js` line 41 |
| Help: contact | `Contact support` | `js/screens-main.js` line 62 |
| Help: privacy | `Your data` | `js/screens-main.js` line 62 |
| Messages title | `>Messages<` | `js/screens-chat.js` line 40 |
| Studio title | `Organizer` | `js/screens-admin.js` line 10, `js/screens-admin.js` line 13 |
| Admin title | `Admin<br>dashboard` | `js/screens-admin.js` line 8 |
| Cancel sheet | `Cancel this booking?` | `js/components.js` line 28 |
| Login title | `Welcome` | `js/screens-chat.js` line 19, `js/screens-flow.js` line 4 |
| Register title | `Create your` | `js/screens-flow.js` line 5 |

## Tips
- Text with `<br>` is a deliberate line break. Keep it to keep the headline look.
- Line numbers can shift after you edit; use search (Ctrl+Shift+F) if a line is not where listed.
- An apostrophe inside quotes (`'...'`) can break the code. Write `It\'s` or use a different wording.
- Prices, dates and activity names are in `js/data.js`. Photos are in `js/images.js` and `assets/images/`.
