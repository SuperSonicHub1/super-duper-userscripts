// ==UserScript==
// @name         Media Session Support on Bandcamp
// @namespace    https://supersonichub1.github.io
// @version      1.0
// @description  Adds Media Session support to the world's largest host of independent music.
// @author       Kyle Anthony Williams (SuperSonicHub1)
// @match        https://*.bandcamp.com/track/*
// @match        https://*.bandcamp.com/album/*
// @match        https://bandcamp.lacheque.net/track/*
// @match        https://bandcamp.lacheque.net/album/*
// @icon         https://icons.duckduckgo.com/ip2/bandcamp.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const pageType = window.location.pathname.includes("/album/") ? "album" : "track"

    const audio = document.querySelector("audio")
    const prevButton = document.querySelector("div.prevbutton")
    const nextButton = document.querySelector("div.nextbutton")
    const heading = document.querySelector("h2.trackTitle")
    const nowPlaying = document.querySelector("span.title")
    const artist = window.TralbumData.artist
    const albumArt = document.querySelector("a.popupImage > img")

    console.log(albumArt)

    if ("mediaSession" in navigator) {
        let title, album

        const defaultSkipTime = 5
        let actionHandlers = [
            ['seekbackward', (details) => {
                const skipTime = details.seekOffset || defaultSkipTime
                audio.currentTime = Math.max(audio.currentTime - skipTime, 0)
            }],
            ['seekforward', (details) => {
                const skipTime = details.seekOffset || defaultSkipTime
                audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration)
            }],
        ]

        switch (pageType) {
            case "album":
                title = nowPlaying.innerText
                album = heading.innerText
                var callback = () => navigator.mediaSession.metadata.title = nowPlaying.innerText
                var observer = new MutationObserver(callback)
                observer.observe(nowPlaying, { attributes: true, childList: true, subtree: true })
                actionHandlers.push(
                    ['previoustrack', () => prevButton.click()],
                    ['nexttrack', () => nextButton.click()],
                )
                break
            case "track":
                title = heading.innerText
                album = heading.innerText
                break
        }
        navigator.mediaSession.metadata = new MediaMetadata({
            title,
            artist,
            album,
            artwork: [{src: albumArt.src, sizes: "512x512", type: "image/jpeg"}]
        })
        for (const [action, handler] of actionHandlers) {
            try {
                navigator.mediaSession.setActionHandler(action, handler)
            } catch (e) {
                console.info(`The media session action "${action}" is not supported yet.`)
            }
        }
    }
})();