// ==UserScript==
// @name         Functional Ctrl Commands on nano-editor.org
// @icon         https://www.nano-editor.org/favicon.ico
// @namespace    https://supersonichub1.github.io/
// @version      1.0
// @description  Make the Nano Editor website's dummy shortcuts functional! Well, some of them.
// @author       Kyle Williams (SuperSonicHub1)
// @match        https://www.nano-editor.org/*
// @grant        unsafeWindow
// @require      https://code.jquery.com/jquery-3.5.1.slim.min.js

// ==/UserScript==

(function() {
    'use strict';

    $(window).bind('keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
                case 'g':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/download.php";
                    break;
                case 'd':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/docs.php";
                    break;
                /*case 'n':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/news.php";
                    break;*/
                /*case 'w':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/who.php";
                    break;*/
                case 's':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/screenshots.php";
                    break;
                /*case 't':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/git.php";
                    break;*/
                case 'c':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/git.php";
                    break;
                case 'h':
                    event.preventDefault();
                    unsafeWindow.location.href = "https://www.nano-editor.org/history.php";
                    break;
            }
        }
    });
})();