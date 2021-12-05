// ==UserScript==
// @name         Arrow Key Navigation on Webtoon
// @namespace    https://supersonichub1.github.io
// @version      0.1
// @description  Read the label on the tin.
// @author       Kyle Anthony Williams
// @match        https://www.webtoons.com/en/*
// @icon         https://www.google.com/s2/favicons?domain=webtoons.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.addEventListener("keydown", (e) => {
        const prev = document.querySelector(".pg_prev")
        const next = document.querySelector(".pg_next")
        console.log(e.key)
        switch(e.key) {
            case "ArrowLeft":
                prev.click()
                break
            case "ArrowRight":
                next.click()
                break
        }
    })
})();