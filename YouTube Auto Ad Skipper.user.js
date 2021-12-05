// ==UserScript==
// @name         YouTube Auto Ad Skipper
// @namespace    https://supersonichub1.github.io/
// @version      1.0
// @description  Automatically skip ads on YouTube videos.
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @author       Kyle Williams (SuperSonicSpy1)
// @match        https://www.youtube.com/*
// @grant        none
// @license      Unlicense
// ==/UserScript==

(function() {
    const checkInterval = 500
    setInterval(() => {
      const skipButton = document.querySelector(".ytp-ad-skip-button, .ytp-ad-overlay-close-button")
      if (skipButton) skipButton.click()
    }, checkInterval)
})();


