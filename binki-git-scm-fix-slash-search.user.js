// ==UserScript==
// @name binki-git-scm-fix-slash-search
// @version 1.0.0
// @homepageURL https://github.com/binki/binki-git-scm-disable-slash-search
// @match https://git-scm.com/*
// ==/UserScript==

(async () => {
  const searchTextInput = document.querySelector('#search-text');
  searchTextInput.placeholder = 'Type Ctrl+K to search entire site…';
  document.body.addEventListener('keydown', e => {
    if (e.isComposing) return;
    // Interestingly, the page responds to ctrl+/ and alt+/ and ctrl+alt+/. So don’t check modifiers.
    if (e.key === '/') {
      // Prevent the page-listener from seeing this. Let the browser handle it.
      e.stopPropagation();
      // I don’t like Firefox’s Ctrl+K shortcut, so just disable that and use it for the on-page thing.
    } else if (!e.altKey && e.ctrlKey && !e.metaKey && !e.shiftKey && e.key === 'k') {
      searchTextInput.focus();
      e.preventDefault();
    }
  });
})();
