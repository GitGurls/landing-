# CodeGeass Landing (React + Vite + Tailwind v4, TSX)

## Chalane ke steps
```bash
npm install
npm run assets   # Figma ke saare 143 images/SVGs public/images me download (optional, neeche dekho)
npm run dev
```

## Images
- Saari images `public/images/` se `/images/<naam>` ki tarah load hoti hain.
- `npm run assets` Figma ke links se sab download kar deta hai, lekin ye links **7 din** hi chalte hain.
- Agar wo fail ho, ya tum khud dalna chaho: Figma se export karke **same filename** ke saath `public/images/` me daal do.
  Filenames aur unke Figma links `scripts/assets.json` me hain.
- 13 PNG hain (hero banner, logo avatar, card backgrounds), baaki 130 SVG (icons, cursor, character, dashboard illustration).

## Notes
- Design 1440px fixed canvas hai (Figma jaisa pixel-match). Chhoti screen par horizontal scroll aata hai.
- Fonts `index.html` se load hote hain (Google Fonts + Satoshi Fontshare), variables `src/index.css` me.
- `tailwind.config.ts` ki zaroorat nahi, Tailwind v4 me sab `@theme inline` se hota hai.
