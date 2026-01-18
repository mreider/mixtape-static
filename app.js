// Mixtape Static - URL Hash Based Playlist App
// With LZ compression and YouTube search

// ==========================================
// LZString Compression Library (minified)
// https://github.com/pieroxy/lz-string
// ==========================================

var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},e={compressToEncodedURIComponent:function(o){return null==o?"":e._compress(o,6,function(o){return n.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),e._decompress(r.length,32,function(t){return o(n,r.charAt(t))}))},_compress:function(o,n,t){if(null==o)return"";var e,i,s,u={},c={},a="",p="",h="",l=2,f=3,d=2,m=[],v=0,g=0;for(s=0;s<o.length;s+=1)if(a=o.charAt(s),Object.prototype.hasOwnProperty.call(u,a)||(u[a]=f++,c[a]=!0),p=h+a,Object.prototype.hasOwnProperty.call(u,p))h=p;else{if(Object.prototype.hasOwnProperty.call(c,h)){if(h.charCodeAt(0)<256){for(e=0;e<d;e++)v<<=1,g==n-1?(g=0,m.push(t(v)),v=0):g++;for(i=h.charCodeAt(0),e=0;e<8;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1}else{for(i=1,e=0;e<d;e++)v=v<<1|i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i=0;for(i=h.charCodeAt(0),e=0;e<16;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[h]}else for(i=u[h],e=0;e<d;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1;0==--l&&(l=Math.pow(2,d),d++),u[p]=f++,h=String(a)}if(""!==h){if(Object.prototype.hasOwnProperty.call(c,h)){if(h.charCodeAt(0)<256){for(e=0;e<d;e++)v<<=1,g==n-1?(g=0,m.push(t(v)),v=0):g++;for(i=h.charCodeAt(0),e=0;e<8;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1}else{for(i=1,e=0;e<d;e++)v=v<<1|i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i=0;for(i=h.charCodeAt(0),e=0;e<16;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[h]}else for(i=u[h],e=0;e<d;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1;0==--l&&(l=Math.pow(2,d),d++)}for(i=2,e=0;e<d;e++)v=v<<1|1&i,g==n-1?(g=0,m.push(t(v)),v=0):g++,i>>=1;for(;;){if(v<<=1,g==n-1){m.push(t(v));break}g++}return m.join("")},_decompress:function(o,n,t){var e,i,s,u,c,a,p,h=[],l=4,f=4,d=3,m="",v=[],g={val:t(0),position:n,index:1};for(e=0;e<3;e+=1)h[e]=e;for(s=0,c=Math.pow(2,2),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=t(g.index++)),s|=(u>0?1:0)*a,a<<=1;switch(s){case 0:for(s=0,c=Math.pow(2,8),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=t(g.index++)),s|=(u>0?1:0)*a,a<<=1;p=r(s);break;case 1:for(s=0,c=Math.pow(2,16),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=t(g.index++)),s|=(u>0?1:0)*a,a<<=1;p=r(s);break;case 2:return""}for(h[3]=p,i=p,v.push(p);;){if(g.index>o)return"";for(s=0,c=Math.pow(2,d),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=t(g.index++)),s|=(u>0?1:0)*a,a<<=1;switch(p=s){case 0:for(s=0,c=Math.pow(2,8),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=t(g.index++)),s|=(u>0?1:0)*a,a<<=1;h[f++]=r(s),p=f-1,l--;break;case 1:for(s=0,c=Math.pow(2,16),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=t(g.index++)),s|=(u>0?1:0)*a,a<<=1;h[f++]=r(s),p=f-1,l--;break;case 2:return v.join("")}if(0==l&&(l=Math.pow(2,d),d++),h[p])m=h[p];else{if(p!==f)return null;m=i+i.charAt(0)}v.push(m),h[f++]=i+m.charAt(0),i=m,0==--l&&(l=Math.pow(2,d),d++)}}};return e}();

// ==========================================
// URL Encoding/Decoding with LZ Compression
// ==========================================

/**
 * Encode mixtape data using LZ compression
 * Achieves ~40-60% size reduction compared to base64
 */
function encodeMixtape(mixtape) {
    const json = JSON.stringify(mixtape);
    return LZString.compressToEncodedURIComponent(json);
}

/**
 * Decode LZ-compressed mixtape data
 * Also supports legacy base64 format for backwards compatibility
 */
function decodeMixtape(encoded) {
    try {
        // Try LZ decompression first
        const json = LZString.decompressFromEncodedURIComponent(encoded);
        if (json) {
            return JSON.parse(json);
        }
    } catch (e) {
        // Fall through to legacy decoder
    }

    // Legacy base64url decoder for backwards compatibility
    try {
        let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
            base64 += '=';
        }
        const json = decodeURIComponent(escape(atob(base64)));
        return JSON.parse(json);
    } catch (e) {
        console.error('Failed to decode mixtape:', e);
        return null;
    }
}

// ==========================================
// iTunes Search API (reliable, free, no auth required)
// ==========================================

/**
 * Search iTunes for songs matching query
 * This is the same API that remixtape.vercel.app uses
 */
async function searchiTunes(query) {
    try {
        const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=20`,
            { signal: AbortSignal.timeout(8000) }
        );

        if (!response.ok) {
            throw new Error('iTunes API request failed');
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            return [];
        }

        return data.results.map(song => ({
            id: song.trackId,
            title: song.trackName,
            artist: song.artistName,
            album: song.collectionName,
            albumArt: song.artworkUrl100?.replace('100x100', '300x300') || song.artworkUrl60,
            previewUrl: song.previewUrl, // 30-second preview
            duration: formatDuration(Math.floor(song.trackTimeMillis / 1000)),
            // We'll look up YouTube video when user selects the track
            videoId: null
        }));
    } catch (e) {
        console.error('iTunes search failed:', e);
        return [];
    }
}

// ==========================================
// YouTube Video Lookup (via Cloudflare Worker)
// ==========================================

const YT_WORKER_URL = 'https://wandering-queen-ee3f.mreider.workers.dev';

/**
 * Find YouTube video ID for a song
 * Uses our Cloudflare Worker which calls YouTube Data API
 */
async function findYouTubeVideo(artist, title) {
    const query = `${artist} ${title}`;

    try {
        const response = await fetch(
            `${YT_WORKER_URL}?q=${encodeURIComponent(query)}`,
            { signal: AbortSignal.timeout(8000) }
        );

        const data = await response.json();

        // Check for quota exceeded error
        if (data.error && (data.error.includes('quota') || data.error.includes('limit'))) {
            showApiLimitPage();
            return null;
        }

        // Check for 403/quota error from YouTube API passthrough
        if (response.status === 403 || data.error?.code === 403) {
            showApiLimitPage();
            return null;
        }

        if (!response.ok) {
            throw new Error('YouTube search failed');
        }

        return data.videoId || null;
    } catch (e) {
        console.error('YouTube lookup failed:', e);
        return null;
    }
}

/**
 * Show the API limit page
 */
function showApiLimitPage() {
    showPage('apiLimit');
}

function formatDuration(seconds) {
    if (!seconds) return '';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatViews(count) {
    if (!count) return '';
    if (count >= 1000000000) return (count / 1000000000).toFixed(1) + 'B';
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count.toString();
}

// ==========================================
// State Management
// ==========================================

const state = {
    currentPage: 'landing',
    mixtape: {
        name: '',
        tracks: []
    },
    currentTrackIndex: 0,
    player: null,
    isPlaying: false,
    searchResults: [],
    isSearching: false
};

// ==========================================
// Page Navigation
// ==========================================

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageName).classList.remove('hidden');
    state.currentPage = pageName;
}

// ==========================================
// Track List UI
// ==========================================

function renderTrackList() {
    const trackList = document.getElementById('trackList');
    const generateBtn = document.getElementById('generateLink');

    if (state.mixtape.tracks.length === 0) {
        trackList.innerHTML = '<div class="empty-state">No tracks yet. Search for songs below.</div>';
        generateBtn.disabled = true;
        return;
    }

    generateBtn.disabled = !state.mixtape.name.trim();

    trackList.innerHTML = state.mixtape.tracks.map((track, index) => `
        <div class="track-item" data-index="${index}">
            <span class="track-number">${index + 1}</span>
            <div class="track-info">
                <div class="track-title">${escapeHtml(track.t)}</div>
                <div class="track-artist">${escapeHtml(track.a)}</div>
            </div>
            <button class="track-remove" onclick="removeTrack(${index})">&times;</button>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==========================================
// Search UI
// ==========================================

let searchDebounceTimer = null;

async function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query.length < 2) {
        hideSearchResults();
        return;
    }

    // Debounce search
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(async () => {
        await performSearch(query);
    }, 300);
}

async function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');

    state.isSearching = true;
    resultsContainer.innerHTML = '<div class="search-loading">Searching...</div>';
    resultsContainer.classList.remove('hidden');

    try {
        const results = await searchiTunes(query);
        state.searchResults = results;

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-empty">No results found. Try a different search.</div>';
            return;
        }

        resultsContainer.innerHTML = results.map((result, index) => `
            <div class="search-result" onclick="selectSearchResult(${index})" data-index="${index}">
                <img class="search-thumb" src="${result.albumArt}" alt="" loading="lazy">
                <div class="search-result-info">
                    <div class="search-result-title">${escapeHtml(result.title)}</div>
                    <div class="search-result-meta">
                        <span class="search-result-author">${escapeHtml(result.artist)}</span>
                        ${result.album ? `<span class="search-result-album">${escapeHtml(result.album)}</span>` : ''}
                        ${result.duration ? `<span class="search-result-duration">${result.duration}</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    } catch (e) {
        resultsContainer.innerHTML = '<div class="search-error">Search failed. Please try again.</div>';
    } finally {
        state.isSearching = false;
    }
}

async function selectSearchResult(index) {
    const result = state.searchResults[index];
    if (!result) return;

    // Show loading state on the clicked result
    const resultElement = document.querySelector(`.search-result[data-index="${index}"]`);
    if (resultElement) {
        resultElement.classList.add('loading');
        resultElement.innerHTML = `
            <img class="search-thumb" src="${result.albumArt}" alt="">
            <div class="search-result-info">
                <div class="search-result-title">${escapeHtml(result.title)}</div>
                <div class="search-result-meta">Finding YouTube video...</div>
            </div>
        `;
    }

    // Look up YouTube video for this song
    let videoId = await findYouTubeVideo(result.artist, result.title);

    if (!videoId) {
        showToast('Could not find video. Try a different track.');
        if (resultElement) {
            resultElement.classList.remove('loading');
            // Restore original content
            resultElement.innerHTML = `
                <img class="search-thumb" src="${result.albumArt}" alt="">
                <div class="search-result-info">
                    <div class="search-result-title">${escapeHtml(result.title)}</div>
                    <div class="search-result-meta">
                        <span class="search-result-author">${escapeHtml(result.artist)}</span>
                    </div>
                </div>
            `;
        }
        return;
    }

    state.mixtape.tracks.push({
        t: result.title,
        a: result.artist,
        v: videoId
    });

    // Clear search
    document.getElementById('searchInput').value = '';
    hideSearchResults();

    renderTrackList();
    updateGenerateButton();
    showToast('Track added!');
}

function hideSearchResults() {
    document.getElementById('searchResults').classList.add('hidden');
    state.searchResults = [];
}

/**
 * Extract YouTube video ID from various URL formats
 */
function extractYouTubeId(input) {
    if (!input) return null;
    input = input.trim();

    // If it's already an 11-character ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
        return input;
    }

    // Various YouTube URL patterns
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/
    ];

    for (const pattern of patterns) {
        const match = input.match(pattern);
        if (match) return match[1];
    }

    return null;
}

/**
 * Add track via YouTube URL - fetches metadata automatically
 */
async function addManualTrack() {
    const urlInput = document.getElementById('manualUrl');
    const addBtn = document.getElementById('manualAddBtn');
    const videoId = extractYouTubeId(urlInput.value);

    if (!videoId) {
        showToast('Please enter a valid YouTube URL');
        urlInput.focus();
        return;
    }

    // Show loading state
    addBtn.textContent = '...';
    addBtn.disabled = true;

    try {
        // Fetch video metadata from YouTube oEmbed
        const response = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
        );

        if (!response.ok) throw new Error('Could not fetch video info');

        const data = await response.json();

        // Parse title - usually "Song - Artist" or "Artist - Song"
        let title = data.title || 'Unknown';
        let artist = data.author_name || 'Unknown';

        // Try to split "Artist - Song" format
        if (title.includes(' - ')) {
            const parts = title.split(' - ');
            artist = parts[0].trim();
            title = parts.slice(1).join(' - ').trim();
        }

        // Clean up common suffixes
        title = title
            .replace(/\s*\(Official\s*(Music\s*)?Video\)/gi, '')
            .replace(/\s*\[Official\s*(Music\s*)?Video\]/gi, '')
            .replace(/\s*\(Official\s*Audio\)/gi, '')
            .replace(/\s*\[Official\s*Audio\]/gi, '')
            .replace(/\s*\(Lyrics?\)/gi, '')
            .replace(/\s*\[Lyrics?\]/gi, '')
            .replace(/\s*\(HD\)/gi, '')
            .replace(/\s*\|.*$/, '')
            .trim();

        // Clean artist name
        artist = artist
            .replace(/VEVO$/i, '')
            .replace(/ - Topic$/i, '')
            .trim();

        state.mixtape.tracks.push({
            t: title,
            a: artist,
            v: videoId
        });

        urlInput.value = '';
        renderTrackList();
        updateGenerateButton();
        showToast('Track added!');

    } catch (e) {
        console.error('Failed to fetch video info:', e);
        showToast('Could not fetch video info');
    } finally {
        addBtn.textContent = 'Add';
        addBtn.disabled = false;
    }
}

function removeTrack(index) {
    state.mixtape.tracks.splice(index, 1);
    renderTrackList();
    updateGenerateButton();
}

function updateGenerateButton() {
    const generateBtn = document.getElementById('generateLink');
    generateBtn.disabled = !state.mixtape.name.trim() || state.mixtape.tracks.length === 0;
}

// ==========================================
// Share Link Generation
// ==========================================

function generateShareLink() {
    const mixtapeData = {
        n: state.mixtape.name,
        t: state.mixtape.tracks
    };

    const encoded = encodeMixtape(mixtapeData);
    const url = `${window.location.origin}${window.location.pathname}#${encoded}`;

    document.getElementById('shareLink').value = url;
    document.getElementById('shareSection').classList.remove('hidden');

    // Show compression stats
    const jsonSize = JSON.stringify(mixtapeData).length;
    const compressedSize = encoded.length;
    const savings = Math.round((1 - compressedSize / (jsonSize * 1.37)) * 100); // 1.37 = base64 overhead
    console.log(`Compression: ${jsonSize} chars JSON → ${compressedSize} chars (${savings}% smaller than base64)`);
}

function copyShareLink() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    navigator.clipboard.writeText(shareLink.value).then(() => {
        showToast('Link copied to clipboard!');
    }).catch(() => {
        document.execCommand('copy');
        showToast('Link copied to clipboard!');
    });
}

// ==========================================
// YouTube Player
// ==========================================

let playerReady = false;

function loadYouTubeAPI() {
    if (window.YT) {
        onYouTubeIframeAPIReady();
        return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function() {
    playerReady = true;
    if (state.currentPage === 'player' && state.mixtape.tracks.length > 0) {
        initPlayer();
    }
};

function initPlayer() {
    if (!playerReady || state.mixtape.tracks.length === 0) return;

    const firstTrack = state.mixtape.tracks[state.currentTrackIndex];

    if (state.player) {
        state.player.destroy();
    }

    state.player = new YT.Player('youtubePlayer', {
        height: '100%',
        width: '100%',
        videoId: firstTrack.v,
        playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    updateNowPlaying();
    renderPlaylist();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        playNext();
    } else if (event.data === YT.PlayerState.PLAYING) {
        state.isPlaying = true;
        document.getElementById('playPauseBtn').textContent = 'Pause';
    } else if (event.data === YT.PlayerState.PAUSED) {
        state.isPlaying = false;
        document.getElementById('playPauseBtn').textContent = 'Play';
    }
}

function updateNowPlaying() {
    const track = state.mixtape.tracks[state.currentTrackIndex];
    if (track) {
        document.getElementById('currentTrackTitle').textContent = track.t;
        document.getElementById('currentTrackArtist').textContent = track.a;
    }
}

function renderPlaylist() {
    const playlistTracks = document.getElementById('playlistTracks');

    playlistTracks.innerHTML = state.mixtape.tracks.map((track, index) => `
        <div class="playlist-track ${index === state.currentTrackIndex ? 'active' : ''}"
             onclick="playTrack(${index})">
            <span class="playlist-track-number">${index + 1}</span>
            <div class="playlist-track-info">
                <div class="playlist-track-title">${escapeHtml(track.t)}</div>
                <div class="playlist-track-artist">${escapeHtml(track.a)}</div>
            </div>
        </div>
    `).join('');
}

function playTrack(index) {
    if (index < 0 || index >= state.mixtape.tracks.length) return;

    state.currentTrackIndex = index;
    const track = state.mixtape.tracks[index];

    if (state.player && state.player.loadVideoById) {
        state.player.loadVideoById(track.v);
    }

    updateNowPlaying();
    renderPlaylist();
}

function playPause() {
    if (!state.player) return;

    if (state.isPlaying) {
        state.player.pauseVideo();
    } else {
        state.player.playVideo();
    }
}

function playNext() {
    const nextIndex = (state.currentTrackIndex + 1) % state.mixtape.tracks.length;
    playTrack(nextIndex);
}

function playPrev() {
    const prevIndex = state.currentTrackIndex === 0
        ? state.mixtape.tracks.length - 1
        : state.currentTrackIndex - 1;
    playTrack(prevIndex);
}

// ==========================================
// Toast Notifications
// ==========================================

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==========================================
// Initialize App
// ==========================================

function init() {
    loadYouTubeAPI();

    // Always set up event listeners first
    setupEventListeners();

    // Check for hash in URL
    const hash = window.location.hash.slice(1);
    if (hash) {
        const mixtapeData = decodeMixtape(hash);
        if (mixtapeData && mixtapeData.t && mixtapeData.t.length > 0) {
            state.mixtape.name = mixtapeData.n || 'Untitled Mixtape';
            state.mixtape.tracks = mixtapeData.t;

            document.getElementById('playerTapeName').textContent = state.mixtape.name;
            showPage('player');

            if (playerReady) {
                initPlayer();
            }
            return;
        }
    }

    showPage('landing');
}

function setupEventListeners() {
    // Landing page
    document.getElementById('startBtn').addEventListener('click', () => {
        state.mixtape = { name: '', tracks: [] };
        document.getElementById('tapeName').value = '';
        document.getElementById('searchInput').value = '';
        document.getElementById('shareSection').classList.add('hidden');
        hideSearchResults();
        renderTrackList();
        showPage('create');
    });

    // Create page - home link
    document.getElementById('createHomeLink').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '';
        showPage('landing');
    });

    document.getElementById('tapeName').addEventListener('input', (e) => {
        state.mixtape.name = e.target.value;
        updateGenerateButton();
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && state.searchResults.length > 0) {
            selectSearchResult(0);
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer && !searchContainer.contains(e.target)) {
            hideSearchResults();
        }
    });

    // Manual YouTube URL entry
    document.getElementById('manualAddBtn').addEventListener('click', addManualTrack);
    document.getElementById('manualUrl').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addManualTrack();
        }
    });

    document.getElementById('generateLink').addEventListener('click', generateShareLink);
    document.getElementById('copyLink').addEventListener('click', copyShareLink);

    document.getElementById('previewTape').addEventListener('click', () => {
        document.getElementById('playerTapeName').textContent = state.mixtape.name;
        state.currentTrackIndex = 0;
        showPage('player');
        if (playerReady) {
            initPlayer();
        }
    });

    // Player page - home link
    document.getElementById('playerHomeLink').addEventListener('click', (e) => {
        e.preventDefault();
        if (state.player) {
            state.player.pauseVideo();
        }
        window.location.hash = '';
        showPage('landing');
    });

    // API Limit page
    document.getElementById('apiLimitHome').addEventListener('click', () => {
        window.location.hash = '';
        showPage('landing');
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
        const mixtapeData = {
            n: state.mixtape.name,
            t: state.mixtape.tracks
        };
        const encoded = encodeMixtape(mixtapeData);
        const url = `${window.location.origin}${window.location.pathname}#${encoded}`;

        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied to clipboard!');
        }).catch(() => {
            // Fallback for older browsers
            const input = document.createElement('input');
            input.value = url;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            showToast('Link copied to clipboard!');
        });
    });

    document.getElementById('remixBtn').addEventListener('click', () => {
        document.getElementById('tapeName').value = state.mixtape.name + ' [(re)mix]';
        state.mixtape.name = state.mixtape.name + ' [(re)mix]';
        if (state.player) {
            state.player.pauseVideo();
        }
        document.getElementById('shareSection').classList.add('hidden');
        renderTrackList();
        showPage('create');
    });

    document.getElementById('playPauseBtn').addEventListener('click', playPause);
    document.getElementById('nextBtn').addEventListener('click', playNext);
    document.getElementById('prevBtn').addEventListener('click', playPrev);

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const mixtapeData = decodeMixtape(hash);
            if (mixtapeData && mixtapeData.t && mixtapeData.t.length > 0) {
                state.mixtape.name = mixtapeData.n || 'Untitled Mixtape';
                state.mixtape.tracks = mixtapeData.t;
                state.currentTrackIndex = 0;

                document.getElementById('playerTapeName').textContent = state.mixtape.name;
                showPage('player');

                if (playerReady) {
                    initPlayer();
                }
            }
        } else {
            showPage('landing');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
