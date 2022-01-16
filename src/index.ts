(function () {
    setTimeout(function () {
        const body = document.body;
        body.className = body.className.replace(/\bis-loading\b/, 'is-playing');
        setTimeout(function () {
            body.className = body.className.replace(/\bis-playing\b/, 'is-ready');
        }, 2750);
    }, 100);
})();
