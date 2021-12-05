// ==UserScript==
// @name         Witch Multitwitch Embed
// @namespace    https://supersonichub1.github.io/
// @version      0.1
// @description  Replace Twitch embeds with Witch embeds!
// @author       Kyle Anthony Williams
// @match        https://www.multitwitch.tv/*
// @grant        none
// @icon         https://icons.duckduckgo.com/ip2/www.multitwitch.tv.ico
// ==/UserScript==
// Takes some code from https://github.com/vijithassar/pingkiller
(function() {
    'use strict';

    function twitchkiller() {
        const frames = document.querySelectorAll("iframe[src*='player.twitch.tv']")
        for (const frame of frames) {
            console.info("Frame found:", frame)
            const src = new URL(frame.src)
            const channel = src.searchParams.get("channel")
            frame.src = `http://127.0.0.1:5000/api/embed/${channel}/`
            // Just to make sure.
            frame.src = frame.src
        }
    }

    function watch() {
        const observer = new MutationObserver(twitchkiller)
        const options = {
            childList: true,
            attributes: true,
            subtree: true
        }
        observer.observe(window.document.body, options)
    }

    twitchkiller()
    watch()
})();