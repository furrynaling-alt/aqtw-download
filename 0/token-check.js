/* ============================================================
   星耀电竞 · Token 访问验证模块
   功能：
   1. 从 URL 参数中读取 token，验证格式后存入 sessionStorage
   2. 若无有效 token，从 sessionStorage 恢复
   3. 若 token 无效或缺失，自动跳回网关页
   4. 拦截所有内部链接，自动附带 token 参数
   ============================================================ */
(function () {
    "use strict";

    var TOKEN_KEY = "aqtw_access_token";
    var SALT = "_salt_2026";
    var GATEWAY_URL = "../index.html"; // 跳回网关页

    // ---- Token 验证 ----
    function isValidToken(token) {
        if (!token || typeof token !== "string" || token.length < 10) return false;
        try {
            var decoded = atob(decodeURIComponent(token));
            return decoded.endsWith(SALT);
        } catch (e) {
            return false;
        }
    }

    // ---- 从 URL 获取 token ----
    function getTokenFromURL() {
        var params = new URLSearchParams(window.location.search);
        return params.get("token");
    }

    // ---- 主验证逻辑 ----
    var urlToken = getTokenFromURL();
    var storedToken = null;

    try {
        storedToken = sessionStorage.getItem(TOKEN_KEY);
    } catch (e) {}

    if (urlToken && isValidToken(urlToken)) {
        // URL 中有有效 token → 存入 sessionStorage
        try {
            sessionStorage.setItem(TOKEN_KEY, urlToken);
        } catch (e) {}
    } else if (storedToken && isValidToken(storedToken)) {
        // URL 无 token 但 sessionStorage 中有 → 恢复 token 到 URL（净化地址栏）
        var cleanUrl = window.location.origin + window.location.pathname;
        var newSearch = "?token=" + encodeURIComponent(storedToken);
        // 保留 token 以外的其他参数
        var currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("token");
        var extraParams = currentParams.toString();
        if (extraParams) newSearch += "&" + extraParams;
        // 不立即 replace，避免循环；仅在无 token 时才补
        if (!urlToken) {
            window.history.replaceState(null, "", newSearch);
        }
    } else {
        // 无有效 token → 跳回网关
        window.location.replace(GATEWAY_URL);
        return;
    }

    // ---- 获取当前有效 token ----
    function getCurrentToken() {
        try {
            var t = sessionStorage.getItem(TOKEN_KEY);
            if (isValidToken(t)) return t;
        } catch (e) {}
        return null;
    }

    // ---- 为所有内部链接自动附带 token ----
    function patchLinks() {
        var token = getCurrentToken();
        if (!token) return;

        var encodedToken = encodeURIComponent(token);
        var links = document.querySelectorAll("a");

        links.forEach(function (link) {
            var href = link.getAttribute("href");
            if (!href) return;

            // 只处理同目录下的内部页面
            if (href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
            if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) return;
            if (href.startsWith("#")) return;
            if (href.startsWith("../") || href === "./" || href === ".") return;

            try {
                // 分离 fragment（#锚点）
                var fragment = "";
                var fragmentIdx = href.indexOf("#");
                var base = href;
                if (fragmentIdx >= 0) {
                    fragment = href.slice(fragmentIdx);
                    base = href.slice(0, fragmentIdx);
                }

                // 检查是否已有 token 参数
                if (base.indexOf("token=") === -1) {
                    var separator = base.indexOf("?") >= 0 ? "&" : "?";
                    link.setAttribute("href", base + separator + "token=" + encodedToken + fragment);
                }
            } catch (e) {}
        });
    }

    // ---- 页面加载完成后补丁链接 ----
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", patchLinks);
    } else {
        patchLinks();
    }

    // ---- 监听动态添加的链接（MutationObserver） ----
    var observer = new MutationObserver(function () {
        patchLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // ---- 暴露 API ----
    window.AQTW_TOKEN = {
        get: getCurrentToken,
        isValid: isValidToken,
        gateway: GATEWAY_URL
    };
})();
