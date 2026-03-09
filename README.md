# Chester Events Scraper

A simple scraper that pulls upcoming events in Chester from public feeds and displays them in a clean card layout.

Built with Node.js for the scraper and plain HTML/CSS/JS for the frontend.

## How It Works

1. `scraper.js` fetches events from public RSS/JSON feeds
2. Events are saved to `data/sample-events.json`
3. The frontend reads the JSON and shows events in cards

## Quick Start

```bash
# Install dependencies
npm install

# Run the scraper
node scraper.js

# Open the frontend
open public/index.html
```

Sample data is included so you can preview the frontend without running the scraper first.

## Sample Events

The `data/sample-events.json` file includes real Chester events like:
- Chester Races
- Christmas Markets
- Storyhouse Theatre shows
- Chester Food & Drink Festival
- and more

## Customising

You can point `scraper.js` at any RSS or JSON feed. Just update the `FEED_URL` constant at the top of the file.

## About Hand On Web
We build AI chatbots, voice agents, and automation tools for businesses.
- 🌐 [handonweb.com](https://www.handonweb.com)
- 📧 outreach@handonweb.com
- 📍 Chester, UK

## Licence
MIT
