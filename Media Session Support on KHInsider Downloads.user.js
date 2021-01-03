// ==UserScript==
// @name         Media Session Support on KHInsider Downloads
// @namespace    https://supersonichub1.github.io
// @version      1.0
// @description  Adds Media Session support to the world's largest host of VGM.
// @author       Kyle Anthony Williams (SuperSonicHub1)
// @match        https://downloads.khinsider.com/game-soundtracks/album/*
// @grant        none
// @icon         https://downloads.khinsider.com/images/favicon.ico
// ==/UserScript==

/* global $:false, MediaMetadata */

(async function() {
    'use strict';

    // Since this website doesn't show the names of composers or artists, I've created a default.
    const ARTIST = "KHInsider Downloads // SuperSonicHub1"

    // Elements to grab
    const audio = document.querySelector("audio")
    const nowPlaying = document.getElementById('audioplayerCurrentSong')
    const playButton = $(".audioplayerPlayPause")[0]
    const prevButton = document.getElementById('btnPrev')
    const nextButton = document.getElementById('btnNext')
    const $content = $("#EchoTopic")
    const album_name = $("h2").first().text()
    const $img = $('a[target="_blank"] > img').parent().first()

    // Mutation observer setup
    const config = { attributes: true, childList: true, subtree: true }
    const callback = () => navigator.mediaSession.metadata.title = nowPlaying.innerText

    // Code starts here
    if ("mediaSession" in navigator) {
        // Media Session
        navigator.mediaSession.metadata = new MediaMetadata({
            title: nowPlaying.innerText,
            artist: ARTIST,
            album: album_name
        })

        try {
            let artwork = []
            artwork.push({src: $img.attr("href"), sizes: "512x512", type: "image/jpeg"})
            navigator.mediaSession.metadata.artwork = artwork
        } catch (e) {
            console.warn("There must be no image on this page...")
        }

        const observer = new MutationObserver(callback)
        observer.observe(nowPlaying, config)

        const defaultSkipTime = 5
        const actionHandlers = [
            ['previoustrack', () => prevButton.click()],
            ['nexttrack', () => nextButton.click()],
            ['seekbackward', (details) => {
                const skipTime = details.seekOffset || defaultSkipTime
                audio.currentTime = Math.max(audio.currentTime - skipTime, 0)
            }],
            ['seekforward', (details) => {
                const skipTime = details.seekOffset || defaultSkipTime
                audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration)
            }],
        ]

        for (const [action, handler] of actionHandlers) {
            try {
                navigator.mediaSession.setActionHandler(action, handler)
            } catch (e) {
                console.log(`The media session action "${action}" is not supported yet.`)
            }
        }
    }
})();