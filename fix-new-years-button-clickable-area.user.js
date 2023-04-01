// ==UserScript==
// @name         🐭️ MouseHunt - Fix New Year's Button Clickable Area
// @version      1.0.0
// @description  Fixes the clickable area for the New Year's Button in the HUD.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://brrad.com/mouse.png
// @grant        none
// @run-at       document-end
// ==/UserScript==
((function () {
  'use strict';

  const addStyles = document.createElement('style');
  addStyles.innerHTML = '.headsUpDisplayWinterHuntRegionView__newYearsButton { z-index: 10; }';
  document.head.appendChild(addStyles);
})());
