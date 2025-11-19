# Electrothon8.0

This is a Next.js project bootstrapped with `create-next-app`  
Initialized with Tailwind CSS and ESLint setup.

## Background video

This project includes a small `VideoBackground` client component that expects a background video file at `public/videos/bg.mp4`.

How to use / replace the background video:

- Add an MP4 file at `public/videos/bg.mp4`. The app will load `/videos/bg.mp4` automatically.
- If you prefer an external URL, edit `src/components/VideoBackground.jsx` and replace the `<source src="/videos/bg.mp4" ... />` with the external URL.
- The component provides a `poster` attribute (defaults to `/next.svg`) and a semi-transparent overlay for legibility. To remove the overlay open `src/app/globals.css` and remove or adjust the `.video-overlay` rule.

After adding a video file, run the dev server:

```bash
npm install
npm run dev
```

Notes:
- Keep the video short and optimized (use H.264 or H.265 with a small bitrate) for better performance.
- For accessibility, ensure text has sufficient contrast over the video or keep the overlay.

## Recommended folder structure

Suggested minimal structure for this repository:

```
.
├─ package.json
├─ public/
│  ├─ videos/        # put bg.mp4 here
│  └─ <images, icons>
├─ src/
│  ├─ app/           # Next.js App Router files (page.js, layout.js)
│  ├─ components/    # reusable React components
│  └─ styles/        # global and component styles (globals.css)
```

I moved the global stylesheet to `src/styles/globals.css` and added `public/videos/README.md` with instructions.
