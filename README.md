# Social Media Profile Page

A lightweight, customizable **Link-in-Bio style profile page** built with pure HTML, CSS, and JavaScript.  
Designed to be fast, responsive, and easy to configure without any frameworks or build tools.

This project is ideal for creators, streamers, developers, or anyone who wants a simple landing page for social links.

---

## Features

- Fully static (no backend required)
- Easy customization via `config.js`
- Light and dark themes
- Custom background (color, gradient, or image)
- Optional container background image
- Profile picture with fallback placeholder
- Auto-detected brand icons and colors
- Responsive and mobile-friendly
- Zero dependencies

---

## File Structure

```/
├── index.html
├── config.js
└── README.md
```

---

## Getting Started

1. Place `index.html` and `config.js` in the same directory  
2. Open `index.html` in any modern web browser  
3. Edit `config.js` to customize your profile

No server or build process required.

---

## Configuration

All customization is done in `config.js`.

### Basic Info

```js
name: 'Your Name',
bio: 'Your bio goes here',
profilePicture: 'https://example.com/image.jpg'
```

---

### Background Options

```js
background: '#667eea'
background: 'linear-gradient(135deg, #667eea, #764ba2)'
background: 'url(https://example.com/background.jpg)'
```

---

### Theme

```js
theme: 'light' // or 'dark'
```

---

### Links

```js
links: [
  { title: 'Twitch', url: 'https://twitch.tv/yourname' },
  { title: 'YouTube', url: 'https://youtube.com/yourname' },
  { title: 'Discord', url: 'https://discord.gg/yourinvite' }
]
```

---

## Deployment

This site can be hosted on any static hosting provider:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- Traditional web hosting

Simply upload the files.

---

## License

Free to use, modify, and distribute.
