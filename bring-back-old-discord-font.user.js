// ==UserScript==
// @name         Discord custom nicknames
// @namespace    https://github.com/rugmj/bring-back-old-discord-font
// @version      0.3.5
// @description  Reverts the discord font back to the old one
// @author       RUGMJ
// @match        https://discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @resource      customCss https://github.com/rugmj/bring-back-old-discord-font
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText('customCss'));
