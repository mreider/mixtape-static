# (re)mix tape

A static mixtape/playlist app with a synthwave aesthetic. Create playlists, share them via URL, and let others remix them.

**Features:**
- Search for songs via iTunes API
- Automatic YouTube video lookup for playback
- Shareable URLs with compressed playlist data (no database needed)
- Synthwave/retrowave visual design
- Fully static - host on GitHub Pages or any static host

## Demo

[mixtape.mreider.com](https://mixtape.mreider.com)

## How It Works

1. **Search** - Uses the free iTunes Search API to find songs
2. **YouTube Lookup** - A Cloudflare Worker calls YouTube Data API to find video IDs
3. **Playback** - YouTube iframe player handles playback
4. **Sharing** - Playlist data is compressed and encoded in the URL hash

No backend or database required. All playlist data lives in the shareable URL.

---

## Self-Hosting Guide

### Step 1: Fork or Clone

```bash
git clone https://github.com/mreider/mixtape-static.git
cd mixtape-static
```

### Step 2: Set Up YouTube API

You need a YouTube Data API key. The free tier allows ~100 searches/day.

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Navigate to **APIs & Services** → **Enable APIs**
4. Search for **YouTube Data API v3** and enable it
5. Go to **Credentials** → **Create Credentials** → **API Key**
6. Copy the key for the next step

### Step 3: Create Cloudflare Worker

The Worker keeps your API key secure and handles CORS.

1. Sign up at [workers.cloudflare.com](https://workers.cloudflare.com) (free)
2. Click **Create a Service** → name it (e.g., `mixtape-yt`)
3. Click **Quick Edit** and paste this code:

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    // CORS - replace with your domain
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://YOUR-DOMAIN.com',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (!query) {
      return new Response(JSON.stringify({ error: 'Missing query' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=1&q=${encodeURIComponent(query)}&key=${env.YT_API_KEY}`;

    const ytResponse = await fetch(ytUrl);
    const data = await ytResponse.json();

    const videoId = data.items?.[0]?.id?.videoId || null;

    return new Response(JSON.stringify({ videoId }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
```

4. Click **Save and Deploy**
5. Go to **Settings** → **Variables** → **Add Variable**
   - Name: `YT_API_KEY`
   - Value: your YouTube API key
   - Click **Encrypt** to make it a secret
6. Note your Worker URL (e.g., `https://your-worker.username.workers.dev`)

### Step 4: Update the Code

Edit `app.js` and replace the Worker URL:

```javascript
const YT_WORKER_URL = 'https://your-worker.username.workers.dev';
```

### Step 5: Deploy to GitHub Pages

1. Push to your GitHub repo
2. Go to repo **Settings** → **Pages**
3. Set **Source** to **GitHub Actions**
4. The included workflow (`.github/workflows/deploy.yml`) will auto-deploy

Your site will be live at `https://USERNAME.github.io/REPO-NAME/`

### Step 6: Custom Domain (Optional)

1. Add a `CNAME` file to your repo containing your domain:
   ```
   mixtape.yourdomain.com
   ```

2. Add a DNS CNAME record:
   ```
   Type: CNAME
   Name: mixtape
   Value: USERNAME.github.io
   ```

3. In GitHub repo **Settings** → **Pages**, add your custom domain

4. Update your Cloudflare Worker CORS to match:
   ```javascript
   'Access-Control-Allow-Origin': 'https://mixtape.yourdomain.com',
   ```

---

## Project Structure

```
├── index.html      # Main HTML - landing, create, and player pages
├── styles.css      # Synthwave CSS styling
├── app.js          # Application logic, search, playback
├── cassette.png    # Cassette tape graphic
├── CNAME           # Custom domain (optional)
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## Tech Stack

- **iTunes Search API** - Free song metadata search
- **YouTube Data API v3** - Video ID lookup (via Cloudflare Worker)
- **YouTube IFrame API** - Video playback
- **LZString** - URL compression for shareable links
- **GitHub Pages** - Static hosting
- **Cloudflare Workers** - Serverless API key protection

## Credits

- Synthwave aesthetic inspired by [Speckyboy CSS snippets](https://speckyboy.com/css-javascript-snippets-synthwave/)
- Original concept from [remixtape.vercel.app](https://remixtape.vercel.app)

## License

MIT
