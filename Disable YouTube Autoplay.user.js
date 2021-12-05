// ==UserScript==
// @name         Disable YouTube Autoplay
// @namespace    https://supersonichub1.github.io/
// @version      1.0
// @description  try to take over the world!
// @author       Kyle Williams
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const el = document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]')
    // setTimeout is used because if you instantly try
    // to click the button it will not go through
    if (el && el.title == "Autoplay is on") setTimeout(() => el.click(), 2000)
})();