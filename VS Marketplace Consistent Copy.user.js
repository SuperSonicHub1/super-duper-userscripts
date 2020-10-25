// ==UserScript==
// @name         VS Marketplace Consistent Copy
// @icon         https://visualstudio.microsoft.com/wp-content/uploads/2019/06/BrandVisualStudioWin2019-3.svg
// @namespace    https://supersonichub1.github.io/
// @version      1.0
// @description  The majorety of the time, the VS Marketplace's "Copy" button simply doesn't work, so I fixed it! Made with Tampermonkey.
// @author       Kyle Anthony Williams
// @match        https://marketplace.visualstudio.com/items*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    const $ = unsafeWindow.jQuery;
    const $command = $("#vscode-command-input");
    const $button = $("#copy-to-clipboard-button");
    $button.on("click", function(e) {
        const command = $command.val();
        navigator.clipboard.writeText(command).then(function() {
          console.log(`Copied "${command}."`)
        }, function() {
          console.warn("Guess it didn't work. Try refreshing.")
        });
    })
})();