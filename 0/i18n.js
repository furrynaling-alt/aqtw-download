/* ============================================================
   星耀电竞 · 暗区突围项目 — 多语言国际化模块
   支持：简体中文 / 繁体中文 / English / 日本語 / 藏文
   ============================================================ */
(function () {
    "use strict";

    var TRANS = {
        /* ===== 简体中文 zh-CN ===== */
        "zh-CN": {
            "_meta": { html_lang: "zh-CN", title_suffix: " · 星耀电竞暗区突围项目" },

            /* ---- 导航 ---- */
            "nav.brand_cn": "星耀电竞",
            "nav.brand_en": "XINGYAO ESPORTS",
            "nav.toggle_aria": "打开菜单",

            /* ---- 菜单 ---- */
            "menu.01": "首页",
            "menu.02": "下载中心",
            "menu.03": "关于我们",
            "menu.04": "公告资讯",
            "menu.version": "CURRENT VERSION / V26.7.26",
            "menu.download": "立即下载",
            "menu.lang_label": "LANGUAGE / 语言",

            /* ---- 首页 ---- */
            "home.title": "星耀电竞",
            "home.tag": "暗区突围 · 打手与老板的协作平台",
            "home.h1_l1": "连接打手与老板",
            "home.h1_l2": "星耀启航",
            "home.desc": "星耀电竞暗区突围项目，由洛阳市永恒网络科技工作室运营，是游戏电竞行业专注连接「打手」与「老板」的专业服务平台。为执行任务的打手提供趁手工具，为发布需求的老板提供透明管理，让每一次代打协作都高效、可追溯。",
            "home.btn_download": "立即下载",
            "home.btn_about": "了解平台",
            "home.stat_ver": "当前版本",
            "home.stat_support": "在线支持",

            "home.intro_eyebrow": "PLATFORM / 平台简介",
            "home.intro_title": "打手与老板的电竞协作平台",
            "home.intro_sub": "星耀电竞暗区突围项目是游戏电竞行业的专业代打协作平台。老板在这里发布代打需求与目标，打手在这里接单执行、回报进度，平台全程保障流程透明、资金安全与结果可追溯。",

            "home.f1_num": "01 / 需求对接",
            "home.f1_title": "老板发单",
            "home.f1_desc": "老板一键发布代打需求：指定段位、目标、预算与时效，平台智能匹配最合适的打手接单。",
            "home.f2_num": "02 / 专业执行",
            "home.f2_title": "打手接单",
            "home.f2_desc": "打手端实时推送适配订单，一键接单后即可开始执行，全程记录战绩与进度，每一步都可回溯。",
            "home.f3_num": "03 / 结果验收",
            "home.f3_title": "验收留档",
            "home.f3_desc": "任务完成后老板在线验收，自动留档，历史订单随时可查，保障双方权益。",
            "home.f4_num": "04 / 资金安全",
            "home.f4_title": "担保结算",
            "home.f4_desc": "平台担保交易，资金验收通过后自动结算给打手，杜绝跑单与纠纷，让双方都安心。",

            "home.cta_title": "准备接入？立即获取客户端",
            "home.cta_desc": "星耀电竞与星耀易手通均已更新至 V26.7.26，覆盖六大平台。下载安装即可接入星耀电竞协作体系。",
            "home.cta_btn": "前往下载中心",

            /* ---- 下载页 ---- */
            "dl.eyebrow": "DOWNLOAD CENTER / 客户端下载",
            "dl.title": "客户端下载",
            "dl.desc": "星耀电竞与星耀易手通覆盖六大平台，请根据你的设备选择对应版本下载安装。各平台版本号与包大小以实际为准。",
            "dl.android": "Android 版",
            "dl.android_sub": "ANDROID PLATFORM",
            "dl.ios": "iOS 版",
            "dl.ios_sub": "IOS PLATFORM",
            "dl.harmony": "鸿蒙版",
            "dl.harmony_sub": "HARMONYOS PLATFORM",
            "dl.windows": "Windows 版",
            "dl.windows_sub": "WINDOWS PLATFORM",
            "dl.macos": "macOS 版",
            "dl.macos_sub": "MACOS PLATFORM",
            "dl.linux": "Linux 版",
            "dl.linux_sub": "LINUX PLATFORM",
            "dl.name_xy": "星耀电竞",
            "dl.name_yst": "星耀易手通",
            "dl.badge_soon": "即将开放",
            "dl.badge_wait": "敬请期待",
            "dl.btn_soon": "下载（即将开放）",
            "dl.btn_wait": "下载（敬请期待）",
            "dl.meta_v": "V",
            "dl.meta_size": "约",
            "dl.size_mb": "MB",

            /* ---- 关于页 ---- */
            "about.eyebrow": "ABOUT US / 关于我们",
            "about.title": "星耀电竞",
            "about.desc": "洛阳市永恒网络科技工作室旗下电竞品牌，游戏电竞行业专注连接打手与老板的专业服务平台。",
            "about.logo_alt": "星耀电竞 Logo",
            "about.k_brand": "品牌名称",
            "about.k_brand_en": "英文名称",
            "about.k_company": "所属团队",
            "about.k_industry": "所属行业",
            "about.k_audience": "服务对象",
            "about.k_founded": "成立时间",
            "about.v_brand": "星耀电竞",
            "about.v_brand_en": "XINGYAO ESPORTS",
            "about.v_company": "洛阳市永恒网络科技工作室",
            "about.v_industry": "游戏电竞服务",
            "about.v_audience": "打手 / 老板",
            "about.v_founded": "2024 年",

            "about.h_origin": "品牌起源",
            "about.p1": "「星耀」二字取自品牌 Logo 中的五角星意象 —— 寓意为电竞行业的从业者点亮一盏指路之星。品牌隶属于洛阳市永恒网络科技工作室，自 2024 年成立以来，深耕游戏电竞服务赛道，专注解决「打手」与「老板」之间的协作痛点。",
            "about.p2": "我们看到，在电竞代打行业中，信息不透明、资金无保障、进度难追溯是长期困扰双方的三大难题。打手苦于接不到稳定订单、结算不及时；老板苦于找不到靠谱打手、进度不可控。星耀电竞正是为打破这一困局而生。",

            "about.h_pos": "平台定位",
            "about.p3": "星耀电竞暗区突围项目是一个连接打手与老板的专业代打协作平台。老板在平台发布代打需求与目标，打手在平台接单执行、回报进度，平台全程保障流程、资金安全。",
            "about.p4": "打手端提供实时接单推送、战绩截图上传、进度回报与收益结算；老板端提供一键发单、查看进度、在线验收结算。双端协同，让每一次代打协作都高效、可信赖。",

            "about.h_values": "核心价值观",
            "about.v_safe": "安全",
            "about.v_safe_d": " —— 平台担保交易，资金验收通过后自动结算，杜绝跑单与纠纷。",
            "about.v_pro": "专业",
            "about.v_pro_d": " —— 工具为实战而生，打手端与老板端各司其职，专注各自场景。",
            "about.v_win": "共赢",
            "about.v_win_d": " —— 优质打手与诚信老板获得更高曝光，生态良性循环。",

            "about.h_history": "发展历程",
            "about.t1_date": "2024.06",
            "about.t1_title": "品牌成立",
            "about.t1_desc": "洛阳市永恒网络科技工作室创立「星耀电竞」品牌，正式切入游戏电竞服务赛道。",
            "about.t2_date": "2024.07",
            "about.t2_title": "第一条订单",
            "about.t2_desc": "通过微信群聊，我们服务了第一位老板。",
            "about.t3_date": "2026.07",
            "about.t3_title": "网站正式上线",
            "about.t3_desc": "历经波折，我们终于上线了属于我们自己的网站。",

            "about.cta_title": "加入星耀电竞",
            "about.cta_desc": "无论你是接单的打手，还是发单的老板，星耀电竞都为你准备了趁手的工具。",
            "about.cta_btn": "立即下载",

            /* ---- 公告页 ---- */
            "news.eyebrow": "NEWS & ANNOUNCEMENTS / 公告资讯",
            "news.title": "公告资讯",
            "news.desc": "星耀电竞暗区突围项目官方公告与最新动态。",

            /* ---- 页脚 ---- */
            "footer.desc": "洛阳市永恒网络科技工作室旗下星耀电竞品牌，游戏电竞行业连接打手与老板的专业服务平台。",
            "footer.nav": "导航",
            "footer.dl": "下载",
            "footer.contact": "联系",
            "footer.f_home": "首页",
            "footer.f_download": "下载中心",
            "footer.f_about": "关于我们",
            "footer.f_news": "公告资讯",
            "footer.f_xy": "星耀电竞",
            "footer.f_yst": "星耀易手通",
            "footer.chairman": "（董事长）",
            "footer.service": "（客服）",
            "footer.copy": "© 2026 洛阳市永恒网络科技工作室 · 星耀电竞 — 暗区突围项目",
            "footer.brand_line": "XINGYAO ESPORTS / AQTW PROJECT"
        },

        /* ===== 繁体中文 zh-TW ===== */
        "zh-TW": {
            "_meta": { html_lang: "zh-TW", title_suffix: " · 星耀電競暗區突圍項目" },
            "nav.brand_cn": "星耀電競",
            "nav.brand_en": "XINGYAO ESPORTS",
            "nav.toggle_aria": "開啟選單",
            "menu.01": "首頁",
            "menu.02": "下載中心",
            "menu.03": "關於我們",
            "menu.04": "公告資訊",
            "menu.version": "CURRENT VERSION / V26.7.26",
            "menu.download": "立即下載",
            "menu.lang_label": "LANGUAGE / 語言",
            "home.title": "星耀電競",
            "home.tag": "暗區突圍 · 打手與老闆的協作平台",
            "home.h1_l1": "連接打手與老闆",
            "home.h1_l2": "星耀啟航",
            "home.desc": "星耀電競暗區突圍項目，由洛陽市永恆網絡科技工作室營運，是遊戲電競行業專注連接「打手」與「老闆」的專業服務平台。為執行任務的打手提供趁手工具，為發布需求的老闆提供透明管理，讓每一次代打協作都高效、可追溯。",
            "home.btn_download": "立即下載",
            "home.btn_about": "了解平台",
            "home.stat_ver": "當前版本",
            "home.stat_support": "線上支援",
            "home.intro_eyebrow": "PLATFORM / 平台簡介",
            "home.intro_title": "打手與老闆的電競協作平台",
            "home.intro_sub": "星耀電競暗區突圍項目是遊戲電競行業的專業代打協作平台。老闆在這裡發布代打需求與目標，打手在這裡接單執行、回報進度，平台全程保障流程透明、資金安全與結果可追溯。",
            "home.f1_num": "01 / 需求對接",
            "home.f1_title": "老闆發單",
            "home.f1_desc": "老闆一鍵發布代打需求：指定段位、目標、預算與時效，平台智能匹配最合適的打手接單。",
            "home.f2_num": "02 / 專業執行",
            "home.f2_title": "打手接單",
            "home.f2_desc": "打手端即時推送適配訂單，一鍵接單後即可開始執行，全程記錄戰績與進度，每一步都可回溯。",
            "home.f3_num": "03 / 結果驗收",
            "home.f3_title": "驗收留檔",
            "home.f3_desc": "任務完成後老闆線上驗收，自動留檔，歷史訂單隨時可查，保障雙方權益。",
            "home.f4_num": "04 / 資金安全",
            "home.f4_title": "擔保結算",
            "home.f4_desc": "平台擔保交易，資金驗收通過後自動結算給打手，杜絕跑單與糾紛，讓雙方都安心。",
            "home.cta_title": "準備接入？立即取得用戶端",
            "home.cta_desc": "星耀電競與星耀易手通均已更新至 V26.7.26，涵蓋六大平台。下載安裝即可接入星耀電競協作體系。",
            "home.cta_btn": "前往下載中心",
            "dl.eyebrow": "DOWNLOAD CENTER / 用戶端下載",
            "dl.title": "用戶端下載",
            "dl.desc": "星耀電競與星耀易手通涵蓋六大平台，請根據你的裝置選擇對應版本下載安裝。各平台版本號與套件大小以實際為準。",
            "dl.android": "Android 版",
            "dl.android_sub": "ANDROID PLATFORM",
            "dl.ios": "iOS 版",
            "dl.ios_sub": "IOS PLATFORM",
            "dl.harmony": "鴻蒙版",
            "dl.harmony_sub": "HARMONYOS PLATFORM",
            "dl.windows": "Windows 版",
            "dl.windows_sub": "WINDOWS PLATFORM",
            "dl.macos": "macOS 版",
            "dl.macos_sub": "MACOS PLATFORM",
            "dl.linux": "Linux 版",
            "dl.linux_sub": "LINUX PLATFORM",
            "dl.name_xy": "星耀電競",
            "dl.name_yst": "星耀易手通",
            "dl.badge_soon": "即將開放",
            "dl.badge_wait": "敬請期待",
            "dl.btn_soon": "下載（即將開放）",
            "dl.btn_wait": "下載（敬請期待）",
            "dl.meta_v": "V",
            "dl.meta_size": "約",
            "dl.size_mb": "MB",
            "about.eyebrow": "ABOUT US / 關於我們",
            "about.title": "星耀電競",
            "about.desc": "洛陽市永恆網絡科技工作室旗下電競品牌，遊戲電競行業專注連接打手與老闆的專業服務平台。",
            "about.logo_alt": "星耀電競 Logo",
            "about.k_brand": "品牌名稱",
            "about.k_brand_en": "英文名稱",
            "about.k_company": "所屬團隊",
            "about.k_industry": "所屬行業",
            "about.k_audience": "服務對象",
            "about.k_founded": "成立時間",
            "about.v_brand": "星耀電競",
            "about.v_brand_en": "XINGYAO ESPORTS",
            "about.v_company": "洛陽市永恆網絡科技工作室",
            "about.v_industry": "遊戲電競服務",
            "about.v_audience": "打手 / 老闆",
            "about.v_founded": "2024 年",
            "about.h_origin": "品牌起源",
            "about.p1": "「星耀」二字取自品牌 Logo 中的五角星意象 —— 寓意為電競行業的從業者點亮一盞指路之星。品牌隸屬於洛陽市永恆網絡科技工作室，自 2024 年成立以來，深耕遊戲電競服務賽道，專注解決「打手」與「老闆」之間的協作痛點。",
            "about.p2": "我們看到，在電競代打行業中，資訊不透明、資金無保障、進度難追溯是長期困擾雙方的三大難題。打手苦於接不到穩定訂單、結算不及時；老闆苦於找不到靠譜打手、進度不可控。星耀電競正是為打破這一困局而生。",
            "about.h_pos": "平台定位",
            "about.p3": "星耀電競暗區突圍項目是一個連接打手與老闆的專業代打協作平台。老闆在平台發布代打需求與目標，打手在平台接單執行、回報進度，平台全程保障流程、資金安全。",
            "about.p4": "打手端提供即時接單推送、戰績截圖上傳、進度回報與收益結算；老闆端提供一鍵發單、查看進度、線上驗收結算。雙端協同，讓每一次代打協作都高效、可信賴。",
            "about.h_values": "核心價值觀",
            "about.v_safe": "安全",
            "about.v_safe_d": " —— 平台擔保交易，資金驗收通過後自動結算，杜絕跑單與糾紛。",
            "about.v_pro": "專業",
            "about.v_pro_d": " —— 工具為實戰而生，打手端與老闆端各司其職，專注各自場景。",
            "about.v_win": "共贏",
            "about.v_win_d": " —— 優質打手與誠信老闆獲得更高曝光，生態良性循環。",
            "about.h_history": "發展歷程",
            "about.t1_date": "2024.06",
            "about.t1_title": "品牌成立",
            "about.t1_desc": "洛陽市永恆網絡科技工作室創立「星耀電競」品牌，正式切入遊戲電競服務賽道。",
            "about.t2_date": "2024.07",
            "about.t2_title": "第一條訂單",
            "about.t2_desc": "透過微信群聊，我們服務了第一位老闆。",
            "about.t3_date": "2026.07",
            "about.t3_title": "網站正式上線",
            "about.t3_desc": "歷經波折，我們終於上線了屬於我們自己的網站。",
            "about.cta_title": "加入星耀電競",
            "about.cta_desc": "無論你是接單的打手，還是發單的老闆，星耀電競都為你準備了趁手的工具。",
            "about.cta_btn": "立即下載",
            "news.eyebrow": "NEWS & ANNOUNCEMENTS / 公告資訊",
            "news.title": "公告資訊",
            "news.desc": "星耀電競暗區突圍項目官方公告與最新動態。",
            "footer.desc": "洛陽市永恆網絡科技工作室旗下星耀電競品牌，遊戲電競行業連接打手與老闆的專業服務平台。",
            "footer.nav": "導航",
            "footer.dl": "下載",
            "footer.contact": "聯絡",
            "footer.f_home": "首頁",
            "footer.f_download": "下載中心",
            "footer.f_about": "關於我們",
            "footer.f_news": "公告資訊",
            "footer.f_xy": "星耀電競",
            "footer.f_yst": "星耀易手通",
            "footer.chairman": "（董事長）",
            "footer.service": "（客服）",
            "footer.copy": "© 2026 洛陽市永恆網絡科技工作室 · 星耀電競 — 暗區突圍項目",
            "footer.brand_line": "XINGYAO ESPORTS / AQTW PROJECT"
        },

        /* ===== English en ===== */
        "en": {
            "_meta": { html_lang: "en", title_suffix: " · XINGYAO ESPORTS AQTW Project" },
            "nav.brand_cn": "XINGYAO ESPORTS",
            "nav.brand_en": "XINGYAO ESPORTS",
            "nav.toggle_aria": "Open menu",
            "menu.01": "Home",
            "menu.02": "Download",
            "menu.03": "About Us",
            "menu.04": "News",
            "menu.version": "CURRENT VERSION / V26.7.26",
            "menu.download": "Download Now",
            "menu.lang_label": "LANGUAGE / Language",
            "home.title": "XINGYAO ESPORTS",
            "home.tag": "AQTW · A Collaboration Platform for Boosters & Clients",
            "home.h1_l1": "Connecting Boosters and Clients",
            "home.h1_l2": "Xingyao Sets Sail",
            "home.desc": "The XINGYAO ESPORTS Dark Zone Breakout project, operated by Luoyang Yongheng Network Technology Studio, is a professional service platform in the esports industry dedicated to connecting boosters with clients. It provides handy tools for boosters executing tasks and transparent management for clients posting requests, making every collaboration efficient and traceable.",
            "home.btn_download": "Download Now",
            "home.btn_about": "Learn More",
            "home.stat_ver": "Current Version",
            "home.stat_support": "Online Support",
            "home.intro_eyebrow": "PLATFORM / Overview",
            "home.intro_title": "An Esports Collaboration Platform for Boosters & Clients",
            "home.intro_sub": "The XINGYAO ESPORTS Dark Zone Breakout project is a professional boosting collaboration platform in the esports industry. Clients post boosting needs and goals here, boosters accept orders and report progress here, and the platform safeguards process transparency, fund security, and traceable results.",
            "home.f1_num": "01 / Requirement Matching",
            "home.f1_title": "Client Posts Order",
            "home.f1_desc": "Clients post boosting requests in one tap: specifying rank, goal, budget, and deadline. The platform smart-matches the most suitable booster to accept.",
            "home.f2_num": "02 / Professional Execution",
            "home.f2_title": "Booster Accepts",
            "home.f2_desc": "The booster app pushes matching orders in real time. Accept with one tap, start executing, and record match results and progress — every step is traceable.",
            "home.f3_num": "03 / Result Acceptance",
            "home.f3_title": "Acceptance & Archive",
            "home.f3_desc": "After task completion, the client accepts online with automatic archiving. Historical orders are always queryable, protecting both parties' rights.",
            "home.f4_num": "04 / Fund Security",
            "home.f4_title": "Escrow Settlement",
            "home.f4_desc": "The platform provides escrow transactions. Funds auto-settle to the booster after the client's acceptance, eliminating no-shows and disputes for peace of mind.",
            "home.cta_title": "Ready to join? Get the client now",
            "home.cta_desc": "Both XINGYAO ESPORTS and XINGYAO Yishoutong have been updated to V26.7.26, covering six major platforms. Download and install to join the collaboration system.",
            "home.cta_btn": "Go to Download Center",
            "dl.eyebrow": "DOWNLOAD CENTER / Client Download",
            "dl.title": "Client Download",
            "dl.desc": "XINGYAO ESPORTS and XINGYAO Yishoutong cover six major platforms. Choose the version matching your device to download and install. Version numbers and package sizes are subject to actual release.",
            "dl.android": "Android",
            "dl.android_sub": "ANDROID PLATFORM",
            "dl.ios": "iOS",
            "dl.ios_sub": "IOS PLATFORM",
            "dl.harmony": "HarmonyOS",
            "dl.harmony_sub": "HARMONYOS PLATFORM",
            "dl.windows": "Windows",
            "dl.windows_sub": "WINDOWS PLATFORM",
            "dl.macos": "macOS",
            "dl.macos_sub": "MACOS PLATFORM",
            "dl.linux": "Linux",
            "dl.linux_sub": "LINUX PLATFORM",
            "dl.name_xy": "XINGYAO ESPORTS",
            "dl.name_yst": "XINGYAO YISHOUTONG",
            "dl.badge_soon": "Coming Soon",
            "dl.badge_wait": "Stay Tuned",
            "dl.btn_soon": "Download (Coming Soon)",
            "dl.btn_wait": "Download (Stay Tuned)",
            "dl.meta_v": "V",
            "dl.meta_size": "approx.",
            "dl.size_mb": "MB",
            "about.eyebrow": "ABOUT US / About Us",
            "about.title": "XINGYAO ESPORTS",
            "about.desc": "An esports brand under Luoyang Yongheng Network Technology Studio, a professional service platform connecting boosters and clients in the gaming esports industry.",
            "about.logo_alt": "XINGYAO ESPORTS Logo",
            "about.k_brand": "Brand Name",
            "about.k_brand_en": "English Name",
            "about.k_company": "Parent Team",
            "about.k_industry": "Industry",
            "about.k_audience": "Target Users",
            "about.k_founded": "Founded",
            "about.v_brand": "XINGYAO ESPORTS",
            "about.v_brand_en": "XINGYAO ESPORTS",
            "about.v_company": "Luoyang Yongheng Network Technology Studio",
            "about.v_industry": "Esports Services",
            "about.v_audience": "Boosters / Clients",
            "about.v_founded": "Year 2024",
            "about.h_origin": "Brand Origin",
            "about.p1": "The name \"Xingyao\" is derived from the five-pointed star imagery in the brand logo — symbolizing lighting a guiding star for practitioners in the esports industry. The brand belongs to Luoyang Yongheng Network Technology Studio. Since its establishment in 2024, it has深耕 the gaming esports service track, focusing on solving the collaboration pain points between boosters and clients.",
            "about.p2": "We have observed that in the boosting industry, information opacity, lack of fund security, and untraceable progress are the three major problems that have long plagued both parties. Boosters struggle with unstable orders and delayed settlements; clients struggle with finding reliable boosters and uncontrollable progress. XINGYAO ESPORTS was born to break this predicament.",
            "about.h_pos": "Platform Positioning",
            "about.p3": "The XINGYAO ESPORTS Dark Zone Breakout project is a professional boosting collaboration platform connecting boosters and clients. Clients post boosting needs and goals, boosters accept orders and report progress, and the platform safeguards the process and fund security throughout.",
            "about.p4": "The booster app provides real-time order push, match screenshot uploads, progress reporting, and earnings settlement; the client app provides one-tap order posting, progress viewing, and online acceptance settlement. Dual-end collaboration makes every boosting collaboration efficient and trustworthy.",
            "about.h_values": "Core Values",
            "about.v_safe": "Security",
            "about.v_safe_d": " — Platform escrow transactions; funds auto-settle after acceptance, eliminating no-shows and disputes.",
            "about.v_pro": "Professional",
            "about.v_pro_d": " — Tools built for real combat; booster and client apps each serve their own scenario.",
            "about.v_win": "Win-Win",
            "about.v_win_d": " — Quality boosters and honest clients gain higher exposure for a virtuous ecosystem.",
            "about.h_history": "Milestones",
            "about.t1_date": "2024.06",
            "about.t1_title": "Brand Founded",
            "about.t1_desc": "Luoyang Yongheng Network Technology Studio established the \"XINGYAO ESPORTS\" brand, officially entering the gaming esports service track.",
            "about.t2_date": "2024.07",
            "about.t2_title": "First Order",
            "about.t2_desc": "Through a WeChat group chat, we served our first client.",
            "about.t3_date": "2026.07",
            "about.t3_title": "Website Launched",
            "about.t3_desc": "After many twists and turns, we finally launched our own website.",
            "about.cta_title": "Join XINGYAO ESPORTS",
            "about.cta_desc": "Whether you are a booster taking orders or a client posting orders, XINGYAO ESPORTS has the right tools for you.",
            "about.cta_btn": "Download Now",
            "news.eyebrow": "NEWS & ANNOUNCEMENTS / News",
            "news.title": "News & Announcements",
            "news.desc": "Official announcements and latest updates from the XINGYAO ESPORTS Dark Zone Breakout project.",
            "footer.desc": "An esports brand under Luoyang Yongheng Network Technology Studio, a professional service platform connecting boosters and clients in the gaming esports industry.",
            "footer.nav": "Navigation",
            "footer.dl": "Download",
            "footer.contact": "Contact",
            "footer.f_home": "Home",
            "footer.f_download": "Download Center",
            "footer.f_about": "About Us",
            "footer.f_news": "News",
            "footer.f_xy": "XINGYAO ESPORTS",
            "footer.f_yst": "XINGYAO YISHOUTONG",
            "footer.chairman": " (Chairman)",
            "footer.service": " (Support)",
            "footer.copy": "© 2026 Luoyang Yongheng Network Technology Studio · XINGYAO ESPORTS — AQTW Project",
            "footer.brand_line": "XINGYAO ESPORTS / AQTW PROJECT"
        },

        /* ===== 日本語 ja ===== */
        "ja": {
            "_meta": { html_lang: "ja", title_suffix: " · 星耀電競暗区突囲プロジェクト" },
            "nav.brand_cn": "星耀電競",
            "nav.brand_en": "XINGYAO ESPORTS",
            "nav.toggle_aria": "メニューを開く",
            "menu.01": "ホーム",
            "menu.02": "ダウンロード",
            "menu.03": "私たちについて",
            "menu.04": "お知らせ",
            "menu.version": "CURRENT VERSION / V26.7.26",
            "menu.download": "今すぐダウンロード",
            "menu.lang_label": "LANGUAGE / 言語",
            "home.title": "星耀電競",
            "home.tag": "暗区突囲 · 代行者とクライアントの協業プラットフォーム",
            "home.h1_l1": "代行者とクライアントを繋ぐ",
            "home.h1_l2": "星耀 航海へ",
            "home.desc": "星耀電競暗区突囲プロジェクトは、洛陽市永恆ネットワーク科技ワークショップが運営する、ゲーム電競業界において「代行者」と「クライアント」の連携に特化した専門サービスプラットフォームです。任務を遂行する代行者に使いやすいツールを、ニーズを投稿するクライアントに透明な管理を提供し、すべての代打ち協業を効率的かつ追跡可能にします。",
            "home.btn_download": "今すぐダウンロード",
            "home.btn_about": "プラットフォームを知る",
            "home.stat_ver": "現在のバージョン",
            "home.stat_support": "オンラインサポート",
            "home.intro_eyebrow": "PLATFORM / プラットフォーム概要",
            "home.intro_title": "代行者とクライアントの電競協業プラットフォーム",
            "home.intro_sub": "星耀電競暗区突囲プロジェクトは、ゲーム電競業界の専門代打ち協業プラットフォームです。クライアントはここで代打ちニーズと目標を投稿し、代行者はここで受注・遂行・進捗報告を行い、プラットフォームが全程においてプロセスの透明性、資金の安全性、結果の追跡可能性を保障します。",
            "home.f1_num": "01 / ニーズマッチング",
            "home.f1_title": "クライアントが発注",
            "home.f1_desc": "クライアントがワンタップで代打ちニーズを投稿：ランク、目標、予算、期限を指定し、プラットフォームが最適な代行者をスマートマッチングして受注させます。",
            "home.f2_num": "02 / プロフェッショナル実行",
            "home.f2_title": "代行者が受注",
            "home.f2_desc": "代行者アプリが適合する注文をリアルタイムでプッシュ通知。ワンタップで受注後、すぐに実行を開始し、戦績と進捗を全程記録 — すべてのステップが追跡可能です。",
            "home.f3_num": "03 / 結果検収",
            "home.f3_title": "検収・保管",
            "home.f3_desc": "タスク完了後、クライアントがオンラインで検収し、自動的に保管されます。履歴注文はいつでも照会可能で、双方の権益を保障します。",
            "home.f4_num": "04 / 資金安全",
            "home.f4_title": "エスクロー決済",
            "home.f4_desc": "プラットフォームがエスクロー取引を提供。資金はクライアントの検収通過後に代行者へ自動決済され、逃げ注文や紛争を排除し、双方に安心を提供します。",
            "home.cta_title": "参加の準備は？クライアントを今すぐ入手",
            "home.cta_desc": "星耀電競と星耀易手通はともに V26.7.26 に更新済み、六大プラットフォームをカバー。ダウンロード・インストールするだけで星耀電競協業システムに参加できます。",
            "home.cta_btn": "ダウンロードセンターへ",
            "dl.eyebrow": "DOWNLOAD CENTER / クライアントダウンロード",
            "dl.title": "クライアントダウンロード",
            "dl.desc": "星耀電競と星耀易手通は六大プラットフォームをカバーしています。お使いのデバイスに合ったバージョンを選んでダウンロード・インストールしてください。各プラットフォームのバージョン番号とパッケージサイズは実際のリリース为准です。",
            "dl.android": "Android 版",
            "dl.android_sub": "ANDROID PLATFORM",
            "dl.ios": "iOS 版",
            "dl.ios_sub": "IOS PLATFORM",
            "dl.harmony": "HarmonyOS 版",
            "dl.harmony_sub": "HARMONYOS PLATFORM",
            "dl.windows": "Windows 版",
            "dl.windows_sub": "WINDOWS PLATFORM",
            "dl.macos": "macOS 版",
            "dl.macos_sub": "MACOS PLATFORM",
            "dl.linux": "Linux 版",
            "dl.linux_sub": "LINUX PLATFORM",
            "dl.name_xy": "星耀電競",
            "dl.name_yst": "星耀易手通",
            "dl.badge_soon": "近日公開",
            "dl.badge_wait": "お楽しみに",
            "dl.btn_soon": "ダウンロード（近日公開）",
            "dl.btn_wait": "ダウンロード（お楽しみに）",
            "dl.meta_v": "V",
            "dl.meta_size": "約",
            "dl.size_mb": "MB",
            "about.eyebrow": "ABOUT US / 私たちについて",
            "about.title": "星耀電競",
            "about.desc": "洛陽市永恆ネットワーク科技ワークショップ傘下の電競ブランド、ゲーム電競業界において代行者とクライアントを繋ぐ専門サービスプラットフォーム。",
            "about.logo_alt": "星耀電競 ロゴ",
            "about.k_brand": "ブランド名",
            "about.k_brand_en": "英語名",
            "about.k_company": "所属チーム",
            "about.k_industry": "業種",
            "about.k_audience": "サービス対象",
            "about.k_founded": "設立年",
            "about.v_brand": "星耀電競",
            "about.v_brand_en": "XINGYAO ESPORTS",
            "about.v_company": "洛陽市永恆ネットワーク科技ワークショップ",
            "about.v_industry": "ゲーム電競サービス",
            "about.v_audience": "代行者 / クライアント",
            "about.v_founded": "2024 年",
            "about.h_origin": "ブランドの起源",
            "about.p1": "「星耀」の二文字はブランドロゴの五角星のイメージに由来します — 電競業界の従事者ために導きの星を灯すという寓意です。ブランドは洛陽市永恆ネットワーク科技ワークショップに属し、2024年の設立以来、ゲーム電競サービス領域を深耕し、「代行者」と「クライアント」間の協業の課題解決に注力しています。",
            "about.p2": "私たちは、電競代打ち業界において、情報の不透明性、資金の無保障、進捗の追跡困難という三大問題が長く双方を悩ませていることを観察してきました。代行者は安定した注文を受けられない・決済が遅れることに苦しみ、クライアントは信頼できる代行者を見つけられない・進捗がコントロールできないことに苦しんでいます。星耀電競はまさにこの困境を打破するために誕生しました。",
            "about.h_pos": "プラットフォーム位置づけ",
            "about.p3": "星耀電競暗区突囲プロジェクトは、代行者とクライアントを繋ぐ専門代打ち協業プラットフォームです。クライアントはプラットフォームで代打ちニーズと目標を投稿し、代行者はプラットフォームで受注・遂行・進捗報告を行い、プラットフォームが全程でプロセスと資金の安全を保障します。",
            "about.p4": "代行者アプリはリアルタイム受注プッシュ、戦績スクリーンショット投稿、進捗報告、収益決済を提供し、クライアントアプリはワンタップ発注、進捗確認、オンライン検収決済を提供します。両端の協業により、すべての代打ち協業を効率的かつ信頼できるものにします。",
            "about.h_values": "核心価値観",
            "about.v_safe": "安全",
            "about.v_safe_d": " —— プラットフォームのエスクロー取引、資金は検収通過後に自動決済、逃げ注文や紛争を排除。",
            "about.v_pro": "プロフェッショナル",
            "about.v_pro_d": " —— 実戦のために作られたツール、代行者アプリとクライアントアプリがそれぞれのシーンに特化。",
            "about.v_win": "ウィンウィン",
            "about.v_win_d": " —— 優秀な代行者と誠実なクライアントがより高い露出を獲得し、エコシステムの良性循環を実現。",
            "about.h_history": "発展の歩み",
            "about.t1_date": "2024.06",
            "about.t1_title": "ブランド設立",
            "about.t1_desc": "洛陽市永恆ネットワーク科技ワークショップが「星耀電競」ブランドを創立、ゲーム電競サービス領域に本格参入。",
            "about.t2_date": "2024.07",
            "about.t2_title": "最初の注文",
            "about.t2_desc": "WeChatグループチャットを通じて、最初のクライアントにサービスを提供しました。",
            "about.t3_date": "2026.07",
            "about.t3_title": "ウェブサイト正式公開",
            "about.t3_desc": "多くの曲折を経て、ついに私たち自身のウェブサイトを公開しました。",
            "about.cta_title": "星耀電競に参加",
            "about.cta_desc": "受注する代行者であれ、発注するクライアントであれ、星耀電競はあなたに適したツールを用意しています。",
            "about.cta_btn": "今すぐダウンロード",
            "news.eyebrow": "NEWS & ANNOUNCEMENTS / お知らせ",
            "news.title": "お知らせ",
            "news.desc": "星耀電競暗区突囲プロジェクト公式発表と最新情報。",
            "footer.desc": "洛陽市永恆ネットワーク科技ワークショップ傘下の星耀電競ブランド、ゲーム電競業界において代行者とクライアントを繋ぐ専門サービスプラットフォーム。",
            "footer.nav": "ナビゲーション",
            "footer.dl": "ダウンロード",
            "footer.contact": "お問い合わせ",
            "footer.f_home": "ホーム",
            "footer.f_download": "ダウンロードセンター",
            "footer.f_about": "私たちについて",
            "footer.f_news": "お知らせ",
            "footer.f_xy": "星耀電競",
            "footer.f_yst": "星耀易手通",
            "footer.chairman": "（会長）",
            "footer.service": "（サポート）",
            "footer.copy": "© 2026 洛陽市永恆ネットワーク科技ワークショップ · 星耀電競 — 暗区突囲プロジェクト",
            "footer.brand_line": "XINGYAO ESPORTS / AQTW PROJECT"
        },

        /* ===== 藏文 bo ===== */
        "bo": {
            "_meta": { html_lang: "bo", title_suffix: " · སྐར་འོད་གློག་འགུལ་ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ།རྣམ་གྲངས" },
            "nav.brand_cn": "སྐར་འོད་གློག་འགུལ",
            "nav.brand_en": "XINGYAO ESPORTS",
            "nav.toggle_aria": "མ་སྒྲིག་དངོས་པོ་ཁ་ཕྱེ",
            "menu.01": "ཁྱིམ་ཤོག",
            "menu.02": "མར་འཇུག་ལྟེ་གནས",
            "menu.03": "ང་ཚོའི་སྐོར",
            "menu.04": "བརྡ་ཁྱབ་ཆ་འཕྲིན",
            "menu.version": "CURRENT VERSION / V26.7.26",
            "menu.download": "མྱུར་དུ་མར་འཇུག",
            "menu.lang_label": "LANGUAGE / སྐད་ཡིག",
            "home.title": "སྐར་འོད་གློག་འགུལ",
            "home.tag": "ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ། · ལག་པ་དང་སྦྱིན་བདག་གི་མཉམ་སྒྲུབ་སྟེགས་བུ",
            "home.h1_l1": "ལག་པ་དང་སྦྱིན་བདག་སྦྲེལ་མཐུད",
            "home.h1_l2": "སྐར་འོད་ཀྱིས་འགྲུལ་བཞུད་འགོ་ཚུགས",
            "home.desc": "སྐར་འོད་གློག་འགུལ་ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ།རྣམ་གྲངས་ནི་ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་གྱིས་གཉེར་སྐྱོང་བྱེད་པ་དང་། རོལ་རྩེད་གློག་འགུལ་ལས་རིགས་ཁྲོད་「ལག་པ」དང་「སྦྱིན་བདག」བར་སྦྲེལ་མཐུད་བྱེད་པར་དམིགས་པའི་ཆེད་ལས་ཞབས་ཞུའི་སྟེགས་བུ་ཞིག་ཡིན། ལས་འགན་ལག་བསྟར་བྱེད་པའི་ལག་པར་ཆ་ཚང་བའི་ཡོ་བྱད་མཁོ་སྤྲོད་དང་། དགོས་མཁོ་ཁྱབ་བསྒྲགས་བྱེད་པའི་སྦྱིན་བདག་ལ་དྭངས་གསལ་དོ་དམ་མཁོ་སྤྲོད་བྱས་ཏེ། ཐེངས་རེ་རེའི་ཚབ་སྒྲུབ་མཉམ་སྒྲུབ་དེ་ལས་ཆེ་བ་དང་རྗེས་འདེད་ཆོག་པ་ཞིག་ཏུ་འགྱུར་བར་བྱེད།",
            "home.btn_download": "མྱུར་དུ་མར་འཇུག",
            "home.btn_about": "སྟེགས་བུ་རྒྱུས་ལོན",
            "home.stat_ver": "མིག་སྔའི་པར་གཞི",
            "home.stat_support": "དྲ་ཐོག་རྒྱབ་སྐྱོར",
            "home.intro_eyebrow": "PLATFORM / སྟེགས་བུ་ངོ་སྤྲོད",
            "home.intro_title": "ལག་པ་དང་སྦྱིན་བདག་གི་གློག་འགུལ་མཉམ་སྒྲུབ་སྟེགས་བུ",
            "home.intro_sub": "སྐར་འོད་གློག་འགུལ་ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ།རྣམ་གྲངས་ནི་རོལ་རྩེད་གློག་འགུལ་ལས་རིགས་ཀྱི་ཆེད་ལས་ཚབ་སྒྲུབ་མཉམ་སྒྲུབ་སྟེགས་བུ་ཞིག་ཡིན། སྦྱིན་བདག་གིས་འདིར་ཚབ་སྒྲུབ་དགོས་མཁོ་དང་དམིགས་ཡུལ་ཁྱབ་བསྒྲགས་བྱེད་པ་དང་། ལག་པས་འདིར་མངག་ཉོ་ལེན་པ་དང་ལག་བསྟར་བྱེད་པ། ཡར་ཐོན་སྙན་ཞུ་བྱེད་པ་བཅས་བྱེད་ཅིང་། སྟེགས་བུས་བརྒྱུད་རིམ་ཧྲིལ་པོར་དྭངས་གསལ་དང་མ་དངུལ་བདེ་འཇགས། འབྲས་བུ་རྗེས་འདེད་ཆོག་པ་བཅས་ཀྱི་འགན་ལེན་བྱེད།",
            "home.f1_num": "01 / དགོས་མཁོ་སྦྲེལ་མཐུད",
            "home.f1_title": "སྦྱིན་བདག་གིས་མངག་ཉོ་སྤེལ",
            "home.f1_desc": "སྦྱིན་བདག་གིས་ཐེངས་གཅིག་ལ་ཚབ་སྒྲུབ་དགོས་མཁོ་ཁྱབ་བསྒྲགས་བྱེད་ཆོག་པ་སྟེ། རིམ་པ་དང་དམིགས་ཡུལ། སྔོན་རྩིས། དུས་ཚད་བཅས་གཏན་འཁེལ་བྱས་ནས། སྟེགས་བུས་ཆེས་འཚམ་པའི་ལག་པ་མཉམ་སྦྲེལ་གྱིས་མངག་ཉོ་ལེན་པར་བྱེད།",
            "home.f2_num": "02 / ཆེད་ལས་ལག་བསྟར",
            "home.f2_title": "ལག་པས་མངག་ཉོ་ལེན",
            "home.f2_desc": "ལག་པའི་མཐའ་སྣེས་དུས་ཐོག་ཏུ་འཚམ་པའི་མངག་ཉོ་མཉམ་སྤྲོད་བྱེད་ཅིང་། ཐེངས་གཅིག་ལ་མངག་ཉོ་ལེན་རྗེས་ལག་བསྟར་འགོ་ཚུགས་ཆོག་ལ། བརྒྱུད་རིམ་ཧྲིལ་པོར་དམག་འཐབ་གྲུབ་འབྲས་དང་ཡར་ཐོན་ཟིན་ཐོ་བཀོད་དེ། གོ་རིམ་རེ་རེ་ཚང་མ་རྗེས་འདེད་ཆོག",
            "home.f3_num": "03 / འབྲས་བུ་ཞིབ་བཤེར་རྩིས་ལེན",
            "home.f3_title": "ཞིབ་བཤེར་རྩིས་ལེན་ཡིག་ཚགས",
            "home.f3_desc": "ལས་འགན་ལེགས་གྲུབ་བྱུང་རྗེས་སྦྱིན་བདག་གིས་དྲ་ཐོག་ནས་ཞིབ་བཤེར་རྩིས་ལེན་བྱེད་ཅིང་། རང་འགུལ་གྱིས་ཡིག་ཚགས་ཉར་བ་དང་། ལོ་རྒྱུས་མངག་ཉོ་དུས་ངེས་མེད་དུ་འདྲི་རྩད་ཆོག་པས། ཕྱོགས་གཉིས་ཀའི་ཁེ་དབང་འགན་ལེན་བྱེད།",
            "home.f4_num": "04 / མ་དངུལ་བདེ་འཇགས",
            "home.f4_title": "ཁག་ཐེག་བཀོད་སྤྲོད་",
            "home.f4_desc": "སྟེགས་བུས་ཁག་ཐེག་ཚོང་གཏོང་བྱེད་ཅིང་། མ་དངུལ་ནི་ཞིབ་བཤེར་རྩིས་ལེན་བརྒྱུད་རྗེས་རང་འགུལ་གྱིས་ལག་པར་བཀོད་སྤྲོད་བྱེད་པས། མངག་ཉོ་བྲོས་བྱོལ་དང་རྩོད་གླེང་མེད་པར་བཟོས་ཏེ། ཕྱོགས་གཉིས་ཀར་བློ་བདེ་པོ་ཡོང་བ་བྱེད།",
            "home.cta_title": "མཉམ་སྦྲེལ་གྱི་གྲ་སྒྲིག་ཡོད་དམ། མྱུར་དུ་མཐའ་སྣེ་ལེན་པ",
            "home.cta_desc": "སྐར་འོད་གློག་འགུལ་དང་སྐར་འོད་ཡི་ཧྲོ་ཐུང་གཉིས་ཀ་ V26.7.26 ལ་གསར་བསྒྱུར་བྱས་ཟིན་ཞིང་། སྟེགས་བུ་ཆེན་པོ་དྲུག་ལ་ཁྱབ་ཡོད། མར་འཇུག་དང་སྒྲིག་འཇུག་བྱས་ན་སྐར་འོད་གློག་འགུལ་མཉམ་སྒྲུབ་མ་ལག་ནང་ཞུགས་ཆོག",
            "home.cta_btn": "མར་འཇུག་ལྟེ་གནས་སུ་སྐྱོད",
            "dl.eyebrow": "DOWNLOAD CENTER / མཐའ་སྣེ་མར་འཇུག",
            "dl.title": "མཐའ་སྣེ་མར་འཇུག",
            "dl.desc": "སྐར་འོད་གློག་འགུལ་དང་སྐར་འོད་ཡི་ཧྲོ་ཐུང་གིས་སྟེགས་བུ་ཆེན་པོ་དྲུག་ལ་ཁྱབ་ཡོད། རང་གི་སྒྲིག་ཆས་དང་བསྟུན་ནས་འཚམ་པའི་པར་གཞི་འདེམས་ཏེ་མར་འཇུག་དང་སྒྲིག་འཇུག་བྱེད་རོགས། སྟེགས་བུ་ཁག་གི་པར་གཞི་ཨང་གྲངས་དང་ཐུམ་ཆེ་ཆུང་ནི་དངོས་ཡོད་གཞིར་བཟུང་ངེས།",
            "dl.android": "Android པར་གཞི",
            "dl.android_sub": "ANDROID PLATFORM",
            "dl.ios": "iOS པར་གཞི",
            "dl.ios_sub": "IOS PLATFORM",
            "dl.harmony": "ཧུང་མེང་པར་གཞི",
            "dl.harmony_sub": "HARMONYOS PLATFORM",
            "dl.windows": "Windows པར་གཞི",
            "dl.windows_sub": "WINDOWS PLATFORM",
            "dl.macos": "macOS པར་གཞི",
            "dl.macos_sub": "MACOS PLATFORM",
            "dl.linux": "Linux པར་གཞི",
            "dl.linux_sub": "LINUX PLATFORM",
            "dl.name_xy": "སྐར་འོད་གློག་འགུལ",
            "dl.name_yst": "སྐར་འོད་ཡི་ཧྲོ་ཐུང་",
            "dl.badge_soon": "མྱུར་དུ་སྒོ་ཕྱེ",
            "dl.badge_wait": "རེ་སྒུག་གནང་",
            "dl.btn_soon": "མར་འཇུག（མྱུར་དུ་སྒོ་ཕྱེ）",
            "dl.btn_wait": "མར་འཇུག（རེ་སྒུག་གནང་）",
            "dl.meta_v": "V",
            "dl.meta_size": "ཧ་ལམ་",
            "dl.size_mb": "MB",
            "about.eyebrow": "ABOUT US / ང་ཚོའི་སྐོར",
            "about.title": "སྐར་འོད་གློག་འགུལ",
            "about.desc": "ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་གྱི་གློག་འགུལ་ཚོང་རྟགས་ཏེ། རོལ་རྩེད་གློག་འགུལ་ལས་རིགས་ཁྲོད་ལག་པ་དང་སྦྱིན་བདག་སྦྲེལ་མཐུད་བྱེད་པའི་ཆེད་ལས་ཞབས་ཞུའི་སྟེགས་བུ།",
            "about.logo_alt": "སྐར་འོད་གློག་འགུལ་ Logo",
            "about.k_brand": "ཚོང་རྟགས་མིང་",
            "about.k_brand_en": "དབྱིན་ཡིག་མིང་",
            "about.k_company": "ཁོངས་གཏོགས་ཀུང་སི",
            "about.k_industry": "ཁོངས་གཏོགས་ལས་རིགས",
            "about.k_audience": "ཞབས་ཞུའི་ object",
            "about.k_founded": "གསར་འཛུགས་དུས་ཚོད",
            "about.v_brand": "སྐར་འོད་གློག་འགུལ",
            "about.v_brand_en": "XINGYAO ESPORTS",
            "about.v_company": "ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་",
            "about.v_industry": "རོལ་རྩེད་གློག་འགུལ་ཞབས་ཞུ་",
            "about.v_audience": "ལག་པ / སྦྱིན་བདག",
            "about.v_founded": "2024 ལོ་",
            "about.h_origin": "ཚོང་རྟགས་ཀྱི་འབྱུང་ཁུངས་",
            "about.p1": "「སྐར་འོད」ཞེས་པའི་ཡི་གེ་གཉིས་ནི་ཚོང་རྟགས་ Logo ནང་གི་སྐར་མ་ལྔ་པའི་བསམ་བློ་ལས་བླངས་པ་ཡིན — གློག་འགུལ་ལས་རིགས་ཀྱི་ལས་གཉེར་བར་ལམ་སྟོན་སྐར་མ་སྤར་བའི་ཆེད་དུ་ཡིན། ཚོང་རྟགས་འདི་ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་ལ་གཏོགས་ཤིང་། 2024ལོར་གསར་འཛུགས་བྱས་པ་ནས་བཟུང་། རོལ་རྩེད་གློག་འགུལ་ཞབས་ཞུའི་ཁྱབ་ཁོངས་ལ་ཞིབ་འཇུག་ཟབ་མོ་བྱས་ཏེ། 「ལག་པ」དང་「སྦྱིན་བདག」བར་གྱི་མཉམ་སྒྲུབ་དཀའ་གནད་ཐག་གཅོད་པར་དམིགས་ཡོད།",
            "about.p2": "ང་ཚོས་མཐོང་བ་ལྟར་ན། གློག་འགུལ་ཚབ་སྒྲུབ་ལས་རིགས་ཁྲོད། ཆ་འཕྲིན་མི་དྭངས་བ་དང་མ་དངུལ་སྲུང་སྐྱོབ་མེད་པ། ཡར་ཐོན་རྗེས་འདེད་དཀའ་བ་བཅས་ནི་དུས་ཡུན་རིང་པོར་ཕྱོགས་གཉིས་ཀར་དཀའ་ངལ་བཟོ་བའི་དཀའ་གནད་ཆེན་པོ་གསུམ་ཡིན། ལག་པ་ལ་བརྟན་པོའི་མངག་ཉོ་མེད་པ་དང་བཀོད་སྤྲོད་དུས་ཐོག་མི་ཡོང་བར་དཀའ་ངལ་འཕྲད་ཅིང་། སྦྱིན་བདག་ལ་ཡང་བློས་འགེལ་ཆོག་པའི་ལག་པ་རྙེད་དཀའ་བ་དང་ཡར་ཐོན་ཚོད་འཛིན་མི་ཐུབ་པར་དཀའ་ངལ་འཕྲད། སྐར་འོད་གློག་འགུལ་ནི་དཀའ་གནད་འདི་གཏོར་ཕྱིར་དུ་བྱུང་བ་ཡིན།",
            "about.h_pos": "སྟེགས་བུའི་གནས་ས་",
            "about.p3": "སྐར་འོད་གློག་འགུལ་ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ།རྣམ་གྲངས་ནི་ལག་པ་དང་སྦྱིན་བདག་སྦྲེལ་མཐུད་བྱེད་པའི་ཆེད་ལས་ཚབ་སྒྲུབ་མཉམ་སྒྲུབ་སྟེགས་བུ་ཞིག་ཡིན། སྦྱིན་བདག་གིས་སྟེགས་བུར་ཚབ་སྒྲུབ་དགོས་མཁོ་དང་དམིགས་ཡུལ་ཁྱབ་བསྒྲགས་བྱེད་ཅིང་། ལག་པས་སྟེགས་བུར་མངག་ཉོ་ལེན་པ་དང་ལག་བསྟར་བྱེད་པ། ཡར་ཐོན་སྙན་ཞུ་བྱེད་པ་བཅས་བྱེད་ལ། སྟེགས་བུས་བརྒྱུད་རིམ་ཧྲིལ་པོར་བདེ་འཇགས་འགན་ལེན་བྱེད།",
            "about.p4": "ལག་པའི་མཐའ་སྣེས་དུས་ཐོག་ཏུ་མངག་ཉོ་མཉམ་སྤྲོད་དང་དམག་འཐབ་པར་རིས་ཡར་སྐྱེལ་བ། ཡར་ཐོན་སྙན་ཞུ་དང་ཡོང་འབབ་བཀོད་སྤྲོད་བཅས་མཁོ་སྤྲོད་བྱེད་ཅིང་། སྦྱིན་བདག་གི་མཐའ་སྣེས་ཐེངས་གཅིག་ལ་མངག་ཉོ་སྤེལ་བ་དང་། ཡར་ཐོན་ལྟ་ཞིབ། དྲ་ཐོག་ཞིབ་བཤེར་རྩིས་ལེན་བཅས་མཁོ་སྤྲོད་བྱེད། མཐའ་སྣེ་གཉིས་ཀྱི་མཉམ་སྒྲུབ་ལས་ཐེངས་རེ་རེའི་ཚབ་སྒྲུབ་མཉམ་སྒྲུབ་དེ་ལས་ཆེ་ཞིང་བློས་འགེལ་ཆོག་པ་ཞིག་ཏུ་འགྱུར་བ་བྱེད།",
            "about.h_values": "སྲོག་ཤིང་རིན་ཐང་ལྟ་བ་",
            "about.v_safe": "བདེ་འཇགས་",
            "about.v_safe_d": " —— སྟེགས་བུས་ཁག་ཐེག་ཚོང་གཏོང་བྱེད་ཅིང་། མ་དངུལ་ནི་ཞིབ་བཤེར་རྩིས་ལེན་བརྒྱུད་རྗེས་རང་འགུལ་གྱིས་བཀོད་སྤྲོད་བྱེད་པས། མངག་ཉོ་བྲོས་བྱོལ་དང་རྩོད་གླེང་མེད་པར་བཟོས།",
            "about.v_pro": "ཆེད་ལས་",
            "about.v_pro_d": " —— ཡོ་བྱད་ནི་དངོས་གཏུག་དམག་འཐབ་ཆེད་དུ་བཟོས་པ་དང་། ལག་པའི་མཐའ་སྣེ་དང་སྦྱིན་བདག་གི་མཐའ་སྣེ་གཉིས་ཀས་རང་རང་གི་བྱ་ཡུལ་ལ་དམིགས།",
            "about.v_win": "མཉམ་རྒྱལ་",
            "about.v_win_d": " —— སྤུས་ལེགས་ལག་པ་དང་དྲང་བདེན་སྦྱིན་བདག་ལ་དེ་ལས་མཐོ་བའི་མངོན་གསལ་ཐོབ་ཅིང་། སྐྱེ་ཁམས་བཟང་ཕྱོགས་སུ་འཁོར་སྐྱོད་བྱེད།",
            "about.h_history": "འཕེལ་རྒྱས་ལོ་རྒྱུས་",
            "about.t1_date": "2024.06",
            "about.t1_title": "ཚོང་རྟགས་གསར་འཛུགས་",
            "about.t1_desc": "ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་ཀྱིས་「སྐར་འོད་གློག་འགུལ」ཚོང་རྟགས་གསར་དུ་བཙུགས་ཤིང་། རོལ་རྩེད་གློག་འགུལ་ཞབས་ཞུའི་ཁྱབ་ཁོངས་སུ་དངོས་སུ་ཞུགས།",
            "about.t2_date": "2024.07",
            "about.t2_title": "མངག་ཉོ་དང་པོ་",
            "about.t2_desc": "WeChatཚོགས་པའི་ཁ་བརྡ་བརྒྱུད་དེ། ང་ཚོས་སྦྱིན་བདག་དང་པོར་ཞབས་ཞུ་བསྒྲུབས།",
            "about.t3_date": "2026.07",
            "about.t3_title": "དྲ་ཚིགས་དངོས་སུ་སྒོ་ཕྱེ་",
            "about.t3_desc": "དཀའ་ངལ་མང་པོ་བརྒྱུད་རྗེས། ང་ཚོས་མཐར་རང་ཉིད་ཀྱི་དྲ་ཚིགས་སྒོ་ཕྱེས་པ་ཡིན།",
            "about.cta_title": "སྐར་འོད་གློག་འགུལ་ནང་ཞུགས་",
            "about.cta_desc": "ཁྱོད་མངག་ཉོ་ལེན་པའི་ལག་པ་ཡིན་ནའང་འདྲ། མངག་ཉོ་སྤེལ་བའི་སྦྱིན་བདག་ཡིན་ནའང་འདྲ། སྐར་འོད་གློག་འགུལ་གྱིས་ཁྱོད་ལ་ཆ་ཚང་བའི་ཡོ་བྱད་གྲ་སྒྲིག་བྱས་ཡོད།",
            "about.cta_btn": "མྱུར་དུ་མར་འཇུག",
            "news.eyebrow": "NEWS & ANNOUNCEMENTS / བརྡ་ཁྱབ་ཆ་འཕྲིན",
            "news.title": "བརྡ་ཁྱབ་ཆ་འཕྲིན",
            "news.desc": "སྐར་འོད་གློག་འགུལ་མུན་ཁུལ་འགྲོ་བར་བྱས་པའི་རྣམ་གྲངས་ཀྱི་དྲ་ཚིགས་གཞི་རྩའི་བརྡ་ཁྱབ་དང་གསར་ཤོས་གནས་ཚུལ།",
            "footer.desc": "ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་གྱི་སྐར་འོད་གློག་འགུལ་ཚོང་རྟགས་ཏེ། རོལ་རྩེད་གློག་འགུལ་ལས་རིགས་ཁྲོད་ལག་པ་དང་སྦྱིན་བདག་སྦྲེལ་མཐུད་བྱེད་པའི་ཆེད་ལས་ཞབས་ཞུའི་སྟེགས་བུ།",
            "footer.nav": "ཕྱོགས་སྟོན་",
            "footer.dl": "མར་འཇུག་",
            "footer.contact": "འབྲེལ་གཏུག་",
            "footer.f_home": "ཁྱིམ་ཤོག",
            "footer.f_download": "མར་འཇུག་ལྟེ་གནས",
            "footer.f_about": "ང་ཚོའི་སྐོར",
            "footer.f_news": "བརྡ་ཁྱབ་ཆ་འཕྲིན",
            "footer.f_xy": "སྐར་འོད་གློག་འགུལ",
            "footer.f_yst": "སྐར་འོད་ཡི་ཧྲོ་ཐུང་",
            "footer.chairman": "（ཏུང་ཧྲི་ཀྲང་）",
            "footer.service": "（ཞབས་ཞུ་）",
            "footer.copy": "© 2026 ལུའོ་དབྱང་གྲོང་ཁྱེར་ཡུང་ཧེང་དྲ་བའི་རོལ་རྩེད་ · སྐར་འོད་གློག་འགུལ་ — ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ།རྣམ་གྲངས",
            "footer.brand_line": "XINGYAO ESPORTS / AQTW PROJECT"
        }
    };

    var STORAGE_KEY = "xy_lang";
    var DEFAULT_LANG = "zh-CN";

    /* ---- 工具函数 ---- */
    function getLang() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved && TRANS[saved]) return saved;
        } catch (e) {}
        return DEFAULT_LANG;
    }

    function setLang(lang) {
        if (!TRANS[lang]) lang = DEFAULT_LANG;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    /* 应用翻译到单个元素 */
    function applyToElement(el, dict) {
        /* 文本内容 */
        var key = el.getAttribute("data-i18n");
        if (key && dict[key] !== undefined) {
            el.textContent = dict[key];
        }
        /* 属性翻译 data-i18n-attr="placeholder:key,aria-label:key2" */
        var attrSpec = el.getAttribute("data-i18n-attr");
        if (attrSpec) {
            attrSpec.split(",").forEach(function (pair) {
                var parts = pair.split(":");
                if (parts.length === 2) {
                    var attr = parts[0].trim();
                    var akey = parts[1].trim();
                    if (dict[akey] !== undefined) {
                        el.setAttribute(attr, dict[akey]);
                    }
                }
            });
        }
        /* HTML 内容（允许简单标签） */
        var htmlKey = el.getAttribute("data-i18n-html");
        if (htmlKey && dict[htmlKey] !== undefined) {
            el.innerHTML = dict[htmlKey];
        }
    }

    /* 主切换函数 */
    function applyLang(lang) {
        if (!TRANS[lang]) lang = DEFAULT_LANG;
        var dict = TRANS[lang];
        var meta = dict["_meta"] || {};

        /* 更新 <html lang> */
        document.documentElement.lang = meta.html_lang || lang;

        /* 更新所有带 data-i18n 的元素 */
        document.querySelectorAll("[data-i18n], [data-i18n-attr], [data-i18n-html]").forEach(function (el) {
            applyToElement(el, dict);
        });

        /* 更新文档标题后缀（若有 data-i18n-title 基准） */
        var titleBase = document.documentElement.getAttribute("data-title-base");
        if (titleBase) {
            document.title = titleBase + (meta.title_suffix || "");
        }

        /* 同步所有语言按钮的激活状态 */
        document.querySelectorAll(".menu__lang-btn").forEach(function (btn) {
            var bLang = btn.getAttribute("data-lang");
            btn.classList.toggle("is-active", bLang === lang);
        });

        /* 触发自定义事件供页面监听 */
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
    }

    /* ---- 初始化 ---- */
    function init() {
        var lang = getLang();

        /* 记录原始标题基准 */
        if (!document.documentElement.getAttribute("data-title-base")) {
            /* 去掉已知的后缀部分，保留基准 */
            var t = document.title || "";
            var suffixes = [" · 星耀电竞暗区突围项目", " · 星耀電競暗區突圍項目", " · XINGYAO ESPORTS AQTW Project", " · 星耀電競暗区突囲プロジェクト", " · སྐར་འོད་གློག་འགུལ་ལྷན་ཐབས་ཁུལ་འགྲོ་བར་བྱས་པ།རྣམ་གྲངས"];
            var base = t;
            suffixes.forEach(function (s) {
                if (base.endsWith(s)) base = base.slice(0, -s.length);
            });
            document.documentElement.setAttribute("data-title-base", base);
        }

        /* 绑定语言按钮 */
        document.querySelectorAll(".menu__lang-btn").forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.stopPropagation();
                var newLang = btn.getAttribute("data-lang");
                setLang(newLang);
                applyLang(newLang);
            });
        });

        /* 应用当前语言 */
        applyLang(lang);
    }

    /* 暴露 API */
    window.XY_I18N = {
        apply: applyLang,
        get: getLang,
        set: function (l) { setLang(l); applyLang(l); },
        dict: TRANS
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
