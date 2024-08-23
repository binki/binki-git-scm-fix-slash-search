Disable the in-page forward-slash shortcut so that Firefox’s own search UI appears and provide C-k as a shortcut for the in-page search experience instead.

When searching within a page of Git documentation, it is common to want to quickly search for text within the page. This can be done using the browser’s quick-search feature activated by the `/` key. However, some websites intercept this keyboard shortcut and override the browser-provided implementation, providing a jarring experience which tries to search outside of the current page and does not perform like the browser-provided one.

This script disabled the `/` shortcut for the webpage and instead provides a `C-k` shortcut which focuses the in-page search UI.

[Install](binki-git-scm-fix-slash-search.user.js?raw=1)
