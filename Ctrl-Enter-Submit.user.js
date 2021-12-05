// ==UserScript==
// @name         Ctrl-Enter-Submit
// @namespace    https://supersonichub1.github.io/
// @version      0.1
// @description  Sumbit a form from within an HTML input or textarea on Ctrl-Enter.
// @author       Kyle Anthony Williams (SuperSonicSpy1)
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function inputHandler(e) {
        const input = e.target
        if (e.ctrlKey && e.key === "Enter") input.form.submit()
    }

    function inputEventAdder() {
        for (const element of document.querySelectorAll("input, textarea")) {
            element.addEventListener("keydown", inputHandler)
        }
    }

    function watch() {
        const observer = new MutationObserver(inputEventAdder)
        const options = {
          childList: true,
          attributes: true,
          subtree: true
        }
        observer.observe(window.document.body, options)
    }
    inputEventAdder()
    watch()
})();