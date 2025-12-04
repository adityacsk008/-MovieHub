# Movies Details Folder

This folder contains all movie detail pages for MovieHub.

## Files to Move Here:
- Chokeddetails.html ✅ (Already moved)
- Tigerdetails.html
- kalkidetails.html
- Deewaniyat.html (if it's a details page)
- WatchRRR.html (if it's a details page)

## After Moving Files:

Update all links in main movie pages to point to `moviesdetails/` folder.

Example:
```html
<!-- Old -->
<a href="Chokeddetails.html">View Details</a>

<!-- New -->
<a href="moviesdetails/Chokeddetails.html">View Details</a>
```

## Folder Structure:
```
-MovieHub/
├── index.html (Homepage)
├── admin.html (Admin Panel) ✅
├── moviesdetails/ (This folder)
│   ├── Chokeddetails.html ✅
│   ├── Tigerdetails.html
│   ├── kalkidetails.html
│   └── ... (other detail pages)
├── 12thFail.html
├── ArjunReddy.html
└── ... (other movie pages)
```
