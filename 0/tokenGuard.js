(function(){
    // 获取URL参数
    function getUrlParam(key){
        const params = new URLSearchParams(location.search);
        return params.get(key);
    }
    const urlToken = getUrlParam('token');
    let globalToken = sessionStorage.getItem('site_token');

    // 首页0/index.html：从URL读取token存入会话存储
    if(urlToken && location.pathname === '/0/index.html'){
        sessionStorage.setItem('site_token', urlToken);
        globalToken = urlToken;
    }

    // 无token直接拦截，跳转回根目录入口页
    if(!globalToken){
        location.replace("https://aqtw.naling.dpdns.org/");
        return;
    }

    // 自动给页面内所有站内a标签拼接token，跳转不丢失
    document.querySelectorAll('a').forEach(a=>{
        const href = a.getAttribute('href');
        // 仅处理0目录内相对路径页面
        if(href && href.startsWith('./') && !href.includes('token=')){
            a.href = `${href}?token=${encodeURIComponent(globalToken)}`;
        }
    })

    // 刷新页面自动补全URL上的token，防止刷新丢失
    if(!urlToken){
        const newUrl = `${location.origin}${location.pathname}?token=${encodeURIComponent(globalToken)}`;
        history.replaceState(null, '', newUrl);
    }
})();
