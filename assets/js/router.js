// Lightweight client-side router for Shia City Basketball.
//
// The site is still real, separate static HTML files (good for direct links,
// refresh, and SEO) but internal nav clicks are intercepted here and handled
// via fetch + DOM swap instead of a full browser navigation. That means the
// document never unloads, so there's no white-flash / reload buffer when
// moving between tabs.
//
// Shared, load-once assets (CSS, fonts, historical-data.js, player-modal.js)
// live outside the #app-content container and are never touched by this
// router, so they only ever load a single time per visit.

(function () {
    const APP_ROUTES = ['/', '/schedule/', '/stats/', '/photos/', '/previousseasons/'];

    function isInternalRoute(pathname) {
        return APP_ROUTES.includes(pathname);
    }

    function runInlineScripts(container) {
        // innerHTML never executes <script> tags, so we manually recreate
        // any inline (non-src) script found in the freshly swapped content.
        const scripts = container.querySelectorAll('script:not([src])');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            newScript.textContent = oldScript.textContent;
            oldScript.replaceWith(newScript);
        });
    }

    async function swapTo(url, addToHistory) {
        let res;
        try {
            res = await fetch(url, { cache: 'no-store' });
        } catch (e) {
            // Network hiccup — fall back to a real navigation rather than
            // leaving the user stuck on a dead link.
            window.location.href = url;
            return;
        }
        if (!res.ok) {
            window.location.href = url;
            return;
        }

        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const newContent = doc.getElementById('app-content');
        const currentContent = document.getElementById('app-content');

        if (!newContent || !currentContent) {
            window.location.href = url;
            return;
        }

        const applySwap = () => {
            currentContent.innerHTML = newContent.innerHTML;
            document.title = doc.title;
            runInlineScripts(currentContent);
            window.scrollTo(0, 0);
        };

        if (document.startViewTransition) {
            document.startViewTransition(applySwap);
        } else {
            applySwap();
        }

        if (addToHistory) {
            history.pushState({ path: url }, '', url);
        }
    }

    document.addEventListener('click', function (e) {
        // Only left-click, unmodified clicks on plain internal links.
        if (e.defaultPrevented || e.button !== 0) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const link = e.target.closest('a');
        if (!link) return;
        if (link.target && link.target !== '_self') return;
        if (link.hasAttribute('download')) return;

        let url;
        try {
            url = new URL(link.href, window.location.origin);
        } catch (err) {
            return;
        }

        if (url.origin !== window.location.origin) return;
        if (!isInternalRoute(url.pathname)) return;

        // Clicking the link for the page we're already on: do nothing.
        if (url.pathname === window.location.pathname) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        swapTo(url.pathname, true);
    });

    window.addEventListener('popstate', function () {
        swapTo(window.location.pathname, false);
    });
})();
