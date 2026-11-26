/**
 * Language-based redirection for /index.html.
 */
(() => {
    "use strict";

    const lang = (navigator.language || "en").toLowerCase();

    location.replace(lang.startsWith("es") ? "index-es.html" : "index-en.html");
})();
