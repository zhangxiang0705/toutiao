
function getUrlParam(paraName) {
        var url = document.location.toString();
        var arrObj = url.split("?");
        if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;
            for (var i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");
                if (arr != null && arr[0] === paraName) {
                    return arr[1];
                }
            }
        } else {
            return "";
        }
    }
    var adid = getUrlParam("adid");
    var kobe = "lo";
    var creativeid = getUrlParam("creativeid");
    var kd = "view";
    var creativetype = getUrlParam("creativetype");
    var jd = "ss";
    var clickid = getUrlParam("clickid");
    var wade = "web";
    var AD = getUrlParam("AD_AUDIT_MARKID");
    var lb = "cal";
    var url;
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

    function oa(u,a) {
        if(a.indexOf("mf") != -1){
            var iframe = document.getElementById("iframe1");
            if(!clickid || (adid == "__AID__") || (AD == "external_url")){
            }else{
                if(isiOS){
                    setTimeout(function(){
                        url = jd + kobe + lb + "://" + wade + kd +"?url="+a+encodeURIComponent("&adid=" + adid + "&creativeid=" + creativeid + "&clickid=" + clickid + "&creativetype=" + creativetype + "&t="+new Date().getTime() );
                        iframe.src = url;
                    },500);
                }else{
                    url = jd + kobe + lb + "://" + wade + kd +"?url="+a+encodeURIComponent("&adid=" + adid + "&creativeid=" + creativeid + "&clickid=" + clickid + "&creativetype=" + creativetype + "&t="+new Date().getTime() );
                    iframe.src = url;
                }
            }
        }
    }
    function oa2(u,a) {
        if(a.indexOf("mf") != -1){
            var iframe = document.createElement("iframe");
            if((clickid == undefined) || (adid == "__AID__") || (AD == "external_url")){
                if(bk){
                    window.location.href = ju;
                }else{
                    window.location.href = au;
                }
            }else{
                document.body.appendChild(iframe);
                iframe.style.display = "none";
                var url = jd + kobe + lb + "://" + wade + kd +"?url="+a+encodeURIComponent("&adid=" + adid + "&creativeid=" + creativeid + "&clickid=" + clickid + "&creativetype=" + creativetype + "&t="+new Date().getTime() );
                iframe.src = url;
            }
        }
    }
    $(function () {
         $(".content img").removeAttr("style");
         $("#check-button").click(function () {
            if (j) {
               oa2(ju,ja);
            }
         });
    });;
