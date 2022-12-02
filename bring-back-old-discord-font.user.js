// ==UserScript==
// @name         Bring Back Old Discord Font
// @namespace    https://github.com/rugmj/bring-back-old-discord-font
// @version      0.3.5
// @description  Reverts the discord font back to the old one
// @author       RUGMJ
// @match        https://discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

GM_addStyle(`
    :root {
        --font-primary: "Noto Sans" !important;
    }
`);
