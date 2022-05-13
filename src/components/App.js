export default {
  data () {
    return {
      deliveryViaGAM: "",
      PRchecked: false,
      isExtendIn: "拡大しない",
      closeButtonAdd: "不要",
      isCloseButtonImageChange: false,
      normalGAMheadTag: "",
      normalGAMbodyTag: "",
      
      zoneType: "",
      zoneId: "",
      aladdinTag: "",
      height: "",
      prepend: "",
      append: "",
      rotateStatus: {
        period: 10000,
        count: 0,
        isWheelIn: false,
        isRemoveBottomSpace: true,
        isUpshift: true,
        iconSize: 30
      },
      prBarStatus: {
        prBackground: "#000000",
        prTextHeight: 20,
        prTextColor: "#FFFFFF",
        prTextSize: 15,
        prText: "[PR]"
      },
      closeButtonStatus: {
        closeButtonPos: "左",
        closeButtonSize: 16,
        closeButtonUrl: "https://works.gsspcln.jp/w/ad_format/close_icons/close_icon_bold.png"
      },
      
      creativeTag: "",
      GAMheadTag: "",
      GAMbodyTag: ""
    }
  },
  
  methods: {
    inputPrepend: function () {
      if (this.zoneType === "スタンダードバナー"){
        this.prepend = "<div id=\"geniee_overlay\" style=\"height: " + this.height + "px; width: 100%;\">";
      } else {
        this.prepend = "";
      }
    },

    inputAppend: function () {
      if (this.zoneType === "スタンダードバナー"){
        this.append = "";
        if (this.PRchecked){
          this.append += "<div style=\"background-color:" + this.prBarStatus.prBackground + ";text-align:center; width:320px; height:" + this.prBarStatus.prTextHeight + "px; color:" + this.prBarStatus.prTextColor + "; margin: 0 auto; font-size:" + this.prBarStatus.prTextSize + "px;\">" + this.prBarStatus.prText + "</div>\n"
        }
        this.append += "</div>\n<style> .gn_ov-fadeout-content{ animation-name: fadeoutOV; animation-duration: 0.5s; animation-timing-function: ease-out; transform-origin: 0 50%; } @keyframes fadeoutOV { 0% { -webkit-transform:rotateX(90deg); -moz-transform:rotateX(90deg); transform:rotateX(90deg); opacity: 0; } 50% { -webkit-transform:rotateX(45deg); -moz-transform:rotateX(45deg); transform:rotateX(45deg); opacity: 0.5; } 100% { -webkit-transform:rotateX(0deg); -moz-transform:rotateX(0deg); transform:rotateX(0deg); opacity: 1; } } </style>\n<script>\n  (function(window, document){\n    if (parent.document.getElementsByClassName(\"gnROV\")[0] && parent.document.getElementsByClassName(\"gnROV\")[0].dataset[\"isWheelIn\"] === \"true\") document.getElementById(\"geniee_overlay\").classList.add(\"gn_ov-fadeout-content\");\n  })(window, document);\n</scr" + "ipt>\n";
        
        
      } else if (this.zoneType === "SPオーバーレイ") {
        this.append = "";
        this.append += "<style> .gn_ov-fadeout-content{ animation-name: fadeoutOV; animation-duration: 0.5s; animation-timing-function: ease-out; transform-origin: 0 50%; } @keyframes fadeoutOV { 0% { -webkit-transform:rotateX(90deg); -moz-transform:rotateX(90deg); transform:rotateX(90deg); opacity: 0; } 50% { -webkit-transform:rotateX(45deg); -moz-transform:rotateX(45deg); transform:rotateX(45deg); opacity: 0.5; } 100% { -webkit-transform:rotateX(0deg); -moz-transform:rotateX(0deg); transform:rotateX(0deg); opacity: 1; } } </style>\n<script>\n  (function(window, document){\n    if (parent.document.getElementsByClassName(\"gnROV\")[0] && parent.document.getElementsByClassName(\"gnROV\")[0].dataset[\"isWheelIn\"] === \"true\") document.getElementById(\"geniee_overlay\").classList.add(\"gn_ov-fadeout-content\");\n  })(window, document);\n</scr" + "ipt>\n";
        if (this.PRchecked){
          this.append += "<script type=\"text/javascript\">\n(function(window, document) {\n  var adStr = \"" + this.prBarStatus.prText + "\",\n  bottomHeight = \"" + this.prBarStatus.prTextHeight + "px\",\n  ovBase = document.getElementById(\"geniee_overlay\");\n  ovBase.style.bottom = bottomHeight;\n  createAdInfo();\n\n  function createAdInfo() {\n    var div = document.createElement(\"div\");\n    div.setAttribute(\"style\", \"background-color:" + this.prBarStatus.prBackground + ";text-align:center;width:320px;color:" + this.prBarStatus.prTextColor + "!important;margin: 0 auto; font-size:" + this.prBarStatus.prTextSize + "px;\");\n    div.setAttribute(\"id\", \"gn_expand_area\");\n    div.style.height = bottomHeight;\n    div.innerHTML = adStr;\n    ovBase.appendChild(div);\n  }\n})(window, document);\n</scr" + "ipt>\n"
        }
      }
      if (this.isExtendIn === "Aladdin配信時のみ" && this.deliveryViaGAM === "Aladdinタグ直貼り"){
        var extendCode = "<script>\n    (function (window, document) {\n        var gnROV = parent.document.getElementsByClassName(\"gnROV\")[0];\n        var s = window.top.innerWidth / 320;\n\n        gnROV.style.transform = \"scale(\" + s + \")\";\n        gnROV.style.transformOrigin = \"bottom\";\n        window.frameElement.style.height =  \"" + this.height + "px\";\n    })(window, document);\n</scr" + "ipt>\n";
        this.append += extendCode;
      }
      if (this.closeButtonAdd ===  "Aladdin配信時のみ" && this.deliveryViaGAM === "Aladdinタグ直貼り"){
        var closeButtonPosition = "";
        var closeButtonSetting = "";
        closeButtonPosition = "closeIcon.style.left = \"0px\";\n";
        if (this.closeButtonStatus.closeButtonPos === "左") closeButtonPosition = "closeIcon.style.left = \"0px\";\n";
        else if (this.closeButtonStatus.closeButtonPos === "中央") closeButtonPosition = "";
        else if (this.closeButtonStatus.closeButtonPos === "右") closeButtonPosition = "closeIcon.style.right = \"0px\";\n";
        closeButtonSetting = "<script>\n(function(window, document){\n    if (parent.document.getElementById(\"geniee_overlay_close\")) return;\n    var geniee_overlay = parent.document.getElementsByClassName(\"gnROV\")[0];\n    var gn_delivery = parent.document.getElementsByClassName(\"gnROVin\")[0];\n    var closeIcon = document.createElement(\"img\");\n    var buttonSize = " + this.closeButtonStatus.closeButtonSize + ";\n    var buttonAdjust = buttonSize;\n    if (gn_delivery.style.transform.split(\"scale(\")[1]){\n      var s = parseFloat(gn_delivery.style.transform.split(\"scale(\")[1].split(\")\")[0]);\n      buttonSize *= s;\n      buttonAdjust = buttonSize + parseFloat(document.getElementById(\"geniee_overlay\").style.height) * (s-1);\n    }\n    closeIcon.src = \"" + this.closeButtonStatus.closeButtonUrl + "\";\n    closeIcon.style.width = buttonSize + \"px\";\n    closeIcon.style.height = buttonSize + \"px\";\n    closeIcon.style.position = \"absolute\";\n    closeIcon.style.top = \"-\" + buttonAdjust + \"px\";\n    " + closeButtonPosition + "    closeIcon.setAttribute(\"id\", \"geniee_overlay_close\");\n    geniee_overlay.insertBefore(closeIcon, gn_delivery);\n    closeIcon.addEventListener(\"click\",function(){\n        geniee_overlay.dataset[\"isRefresh\"] = \"false\";\n        geniee_overlay.style.display = \"none\";\n    });\n})(window, document);\n</scr" + "ipt>\n";
        this.append += closeButtonSetting;
      }
    },

    inputPreApp: function () {
      this.inputPrepend();
      this.inputAppend();
      this.inputPageGAMTag();
    },
      
    inputPageGAMTag: function () {
      if (this.aladdinTag === "") return;
      var aladdinTagSrc = this.aladdinTag.split('src="')[1].split('">')[0];
      var selectCSS = this.zoneType === "スタンダードバナー" ? "forAsyncSB.css" : "forAsyncOV.css";
      this.creativeTag = "<div class=\"gnROV\" data-ad-src=\"" + aladdinTagSrc + "\" data-zoneid=\"" + this.zoneId + "\" data-rotate-interval=\"" + this.rotateStatus.period + "\" data-rotate-count=\"" + this.rotateStatus.count + "\" data-is-wheel-in=\"" + this.rotateStatus.isWheelIn + "\" data-remove-bottom-space=\"" + this.rotateStatus.isRemoveBottomSpace + "\" data-remove-bottom-space-plus-translate=\"" + this.rotateStatus.isUpshift + "\" data-oicon-border=\"" + this.rotateStatus.iconSize + "\" data-is-refresh=\"true\" style=\"height: " + this.height + "px;\">\n  <iframe class=\"gnROVin\"></iframe>\n</div>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://works.gsspcln.jp/w/ad_format/" + selectCSS + "\"></link>\n<script type=\"text/javascript\" src=\"https://works.gsspcln.jp/w/ad_format/gnRotateBannerPrd_v2.js\"></scr" + "ipt>\n<script>\n  window.top.addEventListener(\"message\", function (e) {\n    if(e.data.action === \"linkNotification\") window.top.open(e.data.message, \"_top\");\n  }, false);\n</scr" + "ipt>";
      if (this.isExtendIn === "Aladdin配信時のみ" && this.deliveryViaGAM === "GAM経由配信"){
        var aladdinExtendCode = "<script>\n    (function (window, document) {\n        window.addEventListener('load', function () {\n            if (typeof window.__gn_gam_expand_params === 'undefined') return;\n            var s = parent.window.innerWidth / 320,\n                BOOTS_HEIGHT = 0;\n            var a = parent.document.getElementById('geniee_overlay_outer');\n\n             a.style.webkitTransform = 'scale(' + s + ')';\n            a.style.webkitTransformOrigin = 'bottom';\n            a.style.transform = 'scale(' + s + ')';\n            a.style.transformOrigin = 'bottom';\n\n             if (parent.document.getElementById('gn_expand_area') !== null) {\n                a.style.bottom = BOOTS_HEIGHT * s + 'px';\n            }\n\n             var b = document.getElementsByClassName('gnROVin')[0].contentWindow.document.getElementById('geniee_overlay');\n\n             b.style.webkitTransform = 'scale(1)';\n            b.style.transform = 'scale(1)';\n        }, false);\n    })(window, document);\n</scr" + "ipt>";
        this.creativeTag += aladdinExtendCode;
        this.append += "<script>\n    parent.window.__gn_gam_expand_params = true;\n</scr" + "ipt>\n";
      }
      if (this.rotateStatus.isUpshift && this.deliveryViaGAM === "GAM経由配信"){
        var aladdinUpshiftCode = "<script>\n    (function (window, document) {\n        window.addEventListener('load', function () {\n            if (typeof window.__gn_gam_upshift_params === 'undefined') return;\n            var a = document.getElementsByClassName('gnROVin')[0].contentWindow.document.getElementById('geniee_overlay'),\n                d = parent.document,\n                w = parent.window,\n                h = 0,\n                ov_base = d.getElementById('geniee_overlay_outer'),\n                banner_height = parseFloat(a.style.height),\n                boots_height = 0,\n                s = parent.window.innerWidth / 320;\n            if (d.getElementById('gn_outer_expand_area')) boots_height = parseFloat(d.getElementById('gn_outer_expand_area').style.height);\n\n             w.addEventListener('scroll', function () {\n                h = Math.max.apply(null, [d.body.clientHeight, d.body.scrollHeight, d.documentElement.scrollHeight, d.documentElement.clientHeight]);\n                var sc_top = d.body.scrollTop || d.documentElement.scrollTop,\n                    scr_h = w.innerHeight;\n                if (h <= sc_top + scr_h + banner_height + boots_height) {\n                    ov_base.style.bottom = '';\n                    ov_base.style.top = '0px';\n                    ov_base.style.webkitTransformOrigin = 'top';\n                    ov_base.style.transformOrigin = 'top';\n                } else {\n                    ov_base.style.bottom = '0px';\n                    ov_base.style.top = '';\n                    ov_base.style.webkitTransformOrigin = 'bottom';\n                    ov_base.style.transformOrigin = 'bottom';\n                }\n            }, false);\n        }, false);\n    })(window, document);\n</scr" + "ipt>";
        this.creativeTag += aladdinUpshiftCode;
        this.append += "\n<script>\n    parent.window.__gn_gam_upshift_params = true;\n</scr" + "ipt>\n";
      }
      if (this.closeButtonAdd ===  "Aladdin配信時のみ" && this.deliveryViaGAM === "GAM経由配信"){
        var aladdinCloseButtonPosition = "";
        aladdinCloseButtonPosition = "closeIcon.style.left = \"0px\";\n";
        if (this.closeButtonStatus.closeButtonPos === "左") aladdinCloseButtonPosition = "closeIcon.style.left = \"0px\";\n";
        else if (this.closeButtonStatus.closeButtonPos === "中央") aladdinCloseButtonPosition = "";
        else if (this.closeButtonStatus.closeButtonPos === "右") aladdinCloseButtonPosition = "closeIcon.style.right = \"0px\";\n";
        var aladdinCloseButtonCode = "<script>\n    var geniee_overlay = parent.document.getElementById('geniee_overlay_outer');\n    var closeIcon = document.createElement('img');\n    var buttonSize = " + this.closeButtonStatus.closeButtonSize + ";\n    closeIcon.src = '" + this.closeButtonStatus.closeButtonUrl + "';\n    closeIcon.style.width = buttonSize + 'px';\n    closeIcon.style.height = buttonSize + 'px';\n    closeIcon.style.position = 'absolute';\n    closeIcon.style.top = '-' + buttonSize + 'px';\n    " + aladdinCloseButtonPosition + "\n    var gn_delivery = geniee_overlay.getElementsByTagName('div')[1];\n    geniee_overlay.getElementsByTagName('div')[0].insertBefore(closeIcon, gn_delivery);\n    closeIcon.addEventListener('click',function(){\n        document.getElementsByClassName('gnROV')[0].dataset['isRefresh'] = 'false';\n        geniee_overlay.style.display = 'none';\n    });\n</scr" + "ipt>\n";
        this.creativeTag += aladdinCloseButtonCode;
      }
    },


    processingGAMTag: function () {
      var headTag = this.normalGAMheadTag;
      var bodyTag = this.normalGAMbodyTag;
      this.GAMheadTag = headTagProcess(headTag, this.zoneId, this.isExtendIn, this.closeButtonAdd, this.closeButtonStatus, this.prBarStatus);
      this.GAMbodyTag = bodyTagProcess(bodyTag, this.zoneId);
      
      function replaceSearch (target, start, end){
          let s = target.indexOf(start),
              el = end.length,
              e = target.indexOf(end, s + 1) + el,
              result = target.slice(s, e);
          return result;
      }
      function headTagProcess (normal, zoneId, isExtendIn, closeButtonAdd, closeButtonStatus, prBarStatus) {
        var divId = replaceSearch(normal, "'div-gpt-ad-", "')").slice(1).slice(0,-2);
        var tag = normal.replace(divId, zoneId);
        
        var forGAMChange = false;
          var tagPlusCode = "    \ngoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n            if (event.slot !== targetSlot) return;\n            var geniee_overlay_outer = parent.document.getElementById('geniee_overlay_outer');\n            if (geniee_overlay_outer.getElementsByTagName('iframe') === null) return;\n            if (geniee_overlay_outer.getElementsByTagName('iframe').length) {\n                var geniee_overlay_outer = document.getElementById('geniee_overlay_outer');\n                ";
          
          if (isExtendIn === "Aladdin配信時・AdX配信時ともに") {
              forGAMChange = true;
              var tagExtendCode = "var s = parent.window.innerWidth / geniee_overlay_outer.getElementsByTagName('iframe')[0].clientWidth,\n                    BOOTS_HEIGHT = " + prBarStatus.prTextHeight + ";\n                geniee_overlay_outer.style.webkitTransform = 'scale(' + s + ')';\n                geniee_overlay_outer.style.webkitTransformOrigin = 'bottom';\n                geniee_overlay_outer.style.transform = 'scale(' + s + ')';\n                geniee_overlay_outer.style.transformOrigin = 'bottom';\n                if (parent.document.getElementById('gn_expand_area') !== null) {\n                    geniee_overlay_outer.style.bottom = BOOTS_HEIGHT * s + 'px';\n                }\n                ";
              tagPlusCode += tagExtendCode;
          }
          if (closeButtonAdd === "Aladdin配信時・AdX配信時ともに") {
              forGAMChange = true;
              var tagCloseButtonPosition = "";
              tagCloseButtonPosition = "closeIcon.style.left = \"0px\";\n";
              if (closeButtonStatus.closeButtonPos === "左") tagCloseButtonPosition = "closeIcon.style.left = \"0px\";\n";
              else if (closeButtonStatus.closeButtonPos === "中央") tagCloseButtonPosition = "";
              else if (closeButtonStatus.closeButtonPos === "右") tagCloseButtonPosition = "closeIcon.style.right = \"0px\";\n";
              var tagCloseButtonCode = "var closeIcon = document.createElement('img');\n                var BUTTON_WIDTH = " + closeButtonStatus.closeButtonSize + ";\n                closeIcon.src = '" + closeButtonStatus.closeButtonUrl + "';\n                closeIcon.style.width = BUTTON_WIDTH + 'px';\n                closeIcon.style.verticalAlign = 'bottom';\n                    " + tagCloseButtonPosition + "    closeIcon.addEventListener('click', function () {\n                    geniee_overlay_outer.style.display = 'none';\n                });\n                geniee_overlay_outer.getElementsByTagName('div')[0].insertBefore(closeIcon, geniee_overlay_outer.getElementsByTagName('div')[1]);\n                ";
              tagPlusCode += tagCloseButtonCode;
          }

          if (isExtendIn !== "Aladdin配信時・AdX配信時ともに" && closeButtonAdd !== "Aladdin配信時・AdX配信時ともに") forGAMChange = false;
          
          if (forGAMChange) {
              var headTagInsertPosition = tag.indexOf("googletag.enableServices();") + 27;
              var firstHead = tag.slice(0, headTagInsertPosition);
              var secondHead = tag.slice(headTagInsertPosition);
              tag = firstHead + tagPlusCode + "            }\n            geniee_overlay_outer.style.opacity = '1';\n        });\n" + secondHead;
          }

        return tag;
      }

      function bodyTagProcess (normal, zoneId) {
        var divId = new RegExp(replaceSearch(normal, "'div-gpt-ad-", "'").slice(1).slice(0,-1), "g");
        
        normal = normal.replace(divId, zoneId);
        var tag = "<div id=\"geniee_overlay_outer\" style=\"position:fixed; bottom: 0px;left:0px; right:0px; margin:auto; z-index:1000000000;width:100%;\">\n  " + normal + "\n</div>";
        //if (isExtendIn === "Aladdin配信時・AdX配信時ともに") tag += "<script>\n    (function (window, document) {\n        window.addEventListener(\"load\", function () {\n            setTimeout(function () {\n                var geniee_overlay_outer = parent.document.getElementById(\"geniee_overlay_outer\");\n\n                 if (geniee_overlay_outer.getElementsByTagName(\"iframe\").length) {\n                    var s = parent.window.innerWidth / geniee_overlay_outer.getElementsByTagName(\"iframe\")[0].clientWidth,\n                        BOOTS_HEIGHT = 0;\n                    geniee_overlay_outer.style.webkitTransform = \"scale(\" + s + \")\";\n                    geniee_overlay_outer.style.webkitTransformOrigin = \"bottom\";\n                    geniee_overlay_outer.style.transform = \"scale(\" + s + \")\";\n                    geniee_overlay_outer.style.transformOrigin = \"bottom\";\n\n                    if (parent.document.getElementById(\"gn_expand_area\") !== null) {\n                        geniee_overlay_outer.style.bottom = BOOTS_HEIGHT * s + \"px\";\n                    }\n                }\n            }, 500);\n        }, false);\n    })(window, document);\n</scr" + "ipt>\n"
      
        /*if (closeButtonAdd === "Aladdin配信時・AdX配信時ともに"){
          var closeButtonElement = " \n<div id=\"geniee_overlay_inner\" style=\"position: relative;margin: auto; width: 320px;\">\n        <img src=\"" + closeButtonStatus.closeButtonUrl +"\" width=\"" + closeButtonStatus.closeButtonSize +"\" height=\"" + closeButtonStatus.closeButtonSize +"\" id=\"geniee_overlay_close\" style=\"position: absolute; top: -" + closeButtonStatus.closeButtonSize +"px;"; // left: 0;\">\n ";
          if (closeButtonStatus.closeButtonPos === "左") closeButtonElement += "left: 0;\">\n ";
          else if (closeButtonStatus.closeButtonPos === "右") closeButtonElement += "right: 0;\">\n ";
          else if (closeButtonStatus.closeButtonPos === "中央") closeButtonElement += "left: 0; right: 0; margin: auto;\">\n ";
        
          var divide1 = "<div id=\"" + zoneId +"\"";
          var divide1pos = tag.indexOf(divide1);
          if (divide1pos < 0){
            divide1 = "<div id='" + zoneId +"'";
            divide1pos = tag.indexOf(divide1);
          }
          tag = tag.slice(0,divide1pos) + closeButtonElement + tag.slice(divide1pos);
        
          var divide2 = "</div>";
          var divide2pos = tag.lastIndexOf(divide2);
          tag = tag.slice(0,divide2pos) + " </div>\n    " + tag.slice(divide2pos);
        
          tag += "<script>\n    (function (window, document) {\n        var geniee_overlay_outer = document.getElementById(\"geniee_overlay_outer\");\n        var geniee_overlay_inner = document.getElementById(\"geniee_overlay_inner\");\n        var closeIcon = document.getElementById(\"geniee_overlay_close\");\n\n         closeIcon.addEventListener(\"click\", function () {\n            geniee_overlay_outer.getElementsByTagName(\"iframe\")[0].contentWindow.document.getElementsByClassName(\"gnROV\")[0].dataset[\"isRefresh\"] = \"false\";\n           geniee_overlay_outer.style.display = \"none\";\n        });\n        window.addEventListener(\"load\", function () {\n            setTimeout(function () {\n                if (geniee_overlay_outer.getElementsByTagName(\"iframe\").length) {\n                    var iframe = geniee_overlay_outer.getElementsByTagName(\"iframe\")[0];\n                    var iframeWidth = iframe.clientWidth;\n                    geniee_overlay_inner.style.width = iframeWidth + \"px\";\n                    document.getElementById(\"" + zoneId + "\").style.margin = \"0\";\n                }\n                geniee_overlay_outer.style.opacity = \"1\";\n            }, 2000);\n        }, false);\n    })(window, document);\n</scr" + "ipt>\n";
        }*/
        return tag;
      }
    },


    inputAll: function () {
      this.inputPrepend();
      this.inputAppend();
      this.inputPageGAMTag();
      this.processingGAMTag();
    },
  }
}