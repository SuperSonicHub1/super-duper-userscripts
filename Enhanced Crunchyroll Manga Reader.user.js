// ==UserScript==
// @name         Enhanced Crunchyroll Manga Reader
// @namespace    https://supersonichub1.github.io/
// @version      1.0
// @description  Use the arrow keys to navigate pages, go fullscreen on page load, and press Ctrl-Shift-F to toggle full-screen.
// @author       Kyle Williams (SuperSonicSpy1)
// @match        https://www.crunchyroll.com/manga/*/read/*
// @icon         https://icons.duckduckgo.com/ip2/crunchyroll.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const previous = document.querySelector("a.pagination-link.type-prev.js-prev-link")
    const next = document.querySelector("a.pagination-link.type-next.js-next-link")
    const fullscreen = document.querySelector("button.fullscreen-toggle.js-fullscreen-toggle")

    // Go fullscreen on page load
    window.addEventListener("load", () => fullscreen.click())

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowLeft":
                next.click()
                e.preventDefault();
                break;
            case "ArrowRight":
                previous.click()
                e.preventDefault();
                break;
            case "ArrowRight":
                previous.click()
                e.preventDefault();
                break;
            case "F":
                if (e.ctrlKey && e.shiftKey) {
                    fullscreen.click()
                    e.preventDefault()
                }
                break;
        }
    })
})();