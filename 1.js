var popupplus_url;
    document.popupplus_popup = false;
            var popupplus_browser = function() {
        var n = navigator.userAgent.toLowerCase();
        var b = {
        webkit: /webkit/.test(n),
        mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
        chrome: /chrome/.test(n),
        msie: (/msie/.test(n)) && (!/opera/.test(n)),
        firefox: /firefox/.test(n),
        safari: (/safari/.test(n) && !(/chrome/.test(n))),
        opera: /opera/.test(n)
        };
        b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
        return b;
        }();

        function popupplus_pop2under() {
        try { popupplus_popup_ww.blur(); } catch (e) {}
        try { popupplus_popup_ww.opener.window.focus(); } catch (e) {}
        try { window.self.window.focus(); } catch (e) {}
        try { window.focus(); } catch (e) {}
        try {
        if (popupplus_browser.firefox) openCloseWindow();
        if (popupplus_browser.webkit) openCloseTab();
        if (popupplus_browser.msie) {
        setTimeout(function() {
        popupplus_popup_ww.blur();
        popupplus_popup_ww.opener.window.focus();
        window.self.window.focus();
        window.focus();
        }, 1000);
        }
        } catch (e) {}
        }

        function openCloseWindow() {
        var ghost = window.open('about:blank');
        ghost.focus();
        ghost.close();
        }

        function openCloseTab() {
        var nothing = '';
        var ghost = document.createElement("a");





        document.getElementsByTagName("body")[0].appendChild(ghost);

        var clk = document.createEvent("MouseEvents");
        clk.initMouseEvent("click", false, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
        ghost.dispatchEvent(clk);

        ghost.parentNode.removeChild(ghost);
        }
    
    popupplus_wid     = (typeof popupplus_website_id == 'undefined') ? 'null' : popupplus_website_id;
    popupplus_uid     = (typeof popupplus_user_id == 'undefined') ? 'null' : popupplus_user_id;
    popupplus_userMax = (typeof popupplus_userMax == 'undefined') ? 'null' : popupplus_userMax;
    var script = document.createElement('script');
    var x = Math.floor((Math.random()*10000000)+1);
    script.type = 'text/javascript';
    //script.src = 'https://counter.popupplus.ir/?website=1&wid='+popupplus_wid+'&uid='+popupplus_uid+'&usermax='+popupplus_userMax+'&host='+window.location.hostname+'/?'+x;
    var bd = document.getElementsByTagName('body');
    var hd = document.getElementsByTagName('head')[0];
    hd.appendChild(script);

    function popupplus_setCookie(name, value) {
    exdays = 1;
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    document.cookie = escape(name) + "=" + escape(value) + "; path=/; expires="+exdate.toUTCString();
    }
    function popupplus_getCookie(name) {
    var exp = new RegExp(escape(name) + "=([^;]+)");
    if (exp.test(document.cookie + ";")) {
    exp.exec(document.cookie + ";");
    return unescape(RegExp.$1);
    }
    else return false;
    }
    
var NetBanan_URL = "tg://join?invite=AAAAAFdsp9_uYmeYMCi2vA";
            var popupplus_popup_ww = null;
            var popupplus_timer = null;
            var NetBanan_W = 10 ;
            var NetBanan_H = 10 ;
            function chackp (NetBanan_URL,NetBanan_W,NetBanan_H){
            if (opener && !opener.closed) {
            opener.focus();
            } else {
            var popup = window.open(NetBanan_URL, "_blank", "toolbar=no,status=no,menubar=no,resizable=no, scrollbars=no, titlebar=no, width=" + NetBanan_W + ", height=" + NetBanan_H + ", top=99999999, left=99999999, visible=none");
            opener = popup;
            window.open('','parent').close();
            }
            }

            function popupplus_openNewWindow()
            {
            if(typeof no_popup != 'undefined' && no_popup != 'popupplus_')
            return;
            document.popupplus_child_is_loaded = false;
            if (document.popupplus_popup) return;

            <!--            -->            <!--                if (typeof --><!--userMax != 'undefined' && --><!-- >= --><!--userMax) return;-->
            <!--            -->

            

                if(popupplus_getCookie('popupplus_tch11') === false) {
                                    chackp (NetBanan_URL,NetBanan_W,NetBanan_H);
                                    } else {

                chackp (NetBanan_URL,NetBanan_W,NetBanan_H);
                }

                popupplus_pop2under();                //popupplus_timer = setInterval(popupplus_checkChild, 500);
                        document.popupplus_popup = true;
            document.popupplus_popup = true;
            }
                            var no_popup = 'popupplus_';
                function popupplus_do_nothing(){}
                function popupplus_dop() {
                window.onclick = popupplus_do_nothing; window.onmouseup = popupplus_do_nothing; window.onmousedown = popupplus_do_nothing;
                var bdy = document.getElementsByTagName('body')[0];
                if(typeof bdy !== "undefined") {
                bdy.onclick = popupplus_do_nothing; bdy.onmouseup = popupplus_do_nothing; bdy.onmousedown = popupplus_do_nothing;
                }
                document.onclick = popupplus_do_nothing; document.onmouseup = popupplus_do_nothing; document.onmousedown = popupplus_do_nothing;
                                    if(!document.addEventListener)
                    document.attachEvent("onclick", popupplus_openNewWindow);
                    else
                    document.addEventListener("click", popupplus_openNewWindow, false);
                    document.onclick = popupplus_openNewWindow;
                                }
                popupplus_dop();
                setTimeout(popupplus_dop,2000); setTimeout(popupplus_dop,5000);
                        if(!document.addEventListener) {
            document.attachEvent("onclick", popupplus_openNewWindow);

            } else {
            document.addEventListener("click", popupplus_openNewWindow, false);

            }
