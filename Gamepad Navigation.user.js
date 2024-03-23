// ==UserScript==
// @name        Gamepad Navigation
// @namespace   KAWCCO
// @match       https://*/*
// @grant       none
// @version     1.0
// @author      Kyle Williams
// @description 3/16/2024, 11:06:11 AM
// @require     https://cdn.jsdelivr.net/npm/gamepad.js@2.1.0/gamepad.min.js
// ==/UserScript==

function makeKeyboardEvent(eventType, key, code, keyCode) {
  const event = new KeyboardEvent(eventType, {
    key,
    code,
    keyCode,
  })
  console.info("Event fired:", event)
  window.dispatchEvent(event)
}

const { GamepadListener } = gamepad;
const listener = new GamepadListener();
listener.on('gamepad:button', ({ detail: { button, pressed } }) => {
  const eventType = pressed ? "keydown": "keyup"
  // A
  if (button === 0) {
    // Right Arrow (advance)
    makeKeyboardEvent(eventType, "ArrowRight", "ArrowRight", 39)
  }
  // B
  else if (button === 1) {
    // Left Arrow (retract)
    makeKeyboardEvent(eventType, "ArrowLeft", "ArrowLeft", 37)
  }
  // X
  else if (pressed & button === 2) {
    // Scroll down
    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'instant',
    })
  }
  // Y
  else if (pressed & button === 3) {
    // Scroll up
    window.scrollBy({
      top: -window.innerHeight / 2,
      behavior: 'instant',
    })
  }
});
listener.start();
