// ==UserScript==
// @name         YouTube Playlist RSS
// @namespace    https://supersonichub1.github.io/
// @version      1.0
// @description  Open up a YouTube playlist's RSS feed from your context menu.
// @author       Kyle Williams (SuperSonicSpy1)
// @match        https://www.youtube.com/playlist*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       context-menu
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    const playlist_id = (new URL(window.location)).searchParams.get("list")
    GM_openInTab(`https://www.youtube.com/feeds/videos.xml?playlist_id=${playlist_id}`)
})();