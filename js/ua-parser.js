!(function (r, u) {
  "use strict";
  var c = "function",
    i = "undefined",
    m = "object",
    s = "model",
    e = "name",
    o = "type",
    n = "vendor",
    a = "version",
    d = "architecture",
    t = "console",
    l = "mobile",
    w = "tablet",
    b = "smarttv",
    p = "wearable",
    f = {
      extend: function (i, s) {
        var e = {};
        for (var o in i)
          s[o] && s[o].length % 2 == 0
            ? (e[o] = s[o].concat(i[o]))
            : (e[o] = i[o]);
        return e;
      },
      has: function (i, s) {
        return (
          "string" == typeof i &&
          -1 !== s.toLowerCase().indexOf(i.toLowerCase())
        );
      },
      lowerize: function (i) {
        return i.toLowerCase();
      },
      major: function (i) {
        return "string" == typeof i
          ? i.replace(/[^\d\.]/g, "").split(".")[0]
          : u;
      },
      trim: function (i) {
        return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
    },
    g = {
      rgx: function (i, s) {
        for (var e, o, r, n, a, d, t = 0; t < s.length && !a; ) {
          var l = s[t],
            w = s[t + 1];
          for (e = o = 0; e < l.length && !a; )
            if ((a = l[e++].exec(i)))
              for (r = 0; r < w.length; r++)
                (d = a[++o]),
                  typeof (n = w[r]) == m && 0 < n.length
                    ? 2 == n.length
                      ? typeof n[1] == c
                        ? (this[n[0]] = n[1].call(this, d))
                        : (this[n[0]] = n[1])
                      : 3 == n.length
                      ? typeof n[1] != c || (n[1].exec && n[1].test)
                        ? (this[n[0]] = d ? d.replace(n[1], n[2]) : u)
                        : (this[n[0]] = d ? n[1].call(this, d, n[2]) : u)
                      : 4 == n.length &&
                        (this[n[0]] = d
                          ? n[3].call(this, d.replace(n[1], n[2]))
                          : u)
                    : (this[n] = d || u);
          t += 2;
        }
      },
      str: function (i, s) {
        for (var e in s)
          if (typeof s[e] == m && 0 < s[e].length) {
            for (var o = 0; o < s[e].length; o++)
              if (f.has(s[e][o], i)) return "?" === e ? u : e;
          } else if (f.has(s[e], i)) return "?" === e ? u : e;
        return i;
      },
    },
    h = {
      browser: {
        oldsafari: {
          version: {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/",
          },
        },
      },
      device: {
        amazon: { model: { "Fire Phone": ["SD", "KF"] } },
        sprint: {
          model: { "Evo Shift 4G": "7373KT" },
          vendor: { HTC: "APA", Sprint: "Sprint" },
        },
      },
      os: {
        windows: {
          version: {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
        },
      },
    },
    v = {
      browser: [
        [
          /(opera\smini)\/([\w\.-]+)/i,
          /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
          /(opera).+version\/([\w\.]+)/i,
          /(opera)[\/\s]+([\w\.]+)/i,
        ],
        [e, a],
        [/(opios)[\/\s]+([\w\.]+)/i],
        [[e, "Opera Mini"], a],
        [/\s(opr)\/([\w\.]+)/i],
        [[e, "Opera"], a],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
          /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
          /(?:ms|\()(ie)\s([\w\.]+)/i,
          /(rekonq)\/([\w\.]*)/i,
          /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
        ],
        [e, a],
        [/(konqueror)\/([\w\.]+)/i],
        [[e, "Konqueror"], a],
        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
        [[e, "IE"], a],
        [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
        [[e, "Edge"], a],
        [/(yabrowser)\/([\w\.]+)/i],
        [[e, "Yandex"], a],
        [/(puffin)\/([\w\.]+)/i],
        [[e, "Puffin"], a],
        [/(focus)\/([\w\.]+)/i],
        [[e, "Firefox Focus"], a],
        [/(opt)\/([\w\.]+)/i],
        [[e, "Opera Touch"], a],
        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
        [[e, "UCBrowser"], a],
        [/(comodo_dragon)\/([\w\.]+)/i],
        [[e, /_/g, " "], a],
        [/(windowswechat qbcore)\/([\w\.]+)/i],
        [[e, "WeChat(Win) Desktop"], a],
        [/(micromessenger)\/([\w\.]+)/i],
        [[e, "WeChat"], a],
        [/(brave)\/([\w\.]+)/i],
        [[e, "Brave"], a],
        [/(qqbrowserlite)\/([\w\.]+)/i],
        [e, a],
        [/(QQ)\/([\d\.]+)/i],
        [e, a],
        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
        [e, a],
        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
        [e, a],
        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
        [e, a],
        [/(MetaSr)[\/\s]?([\w\.]+)/i],
        [e],
        [/(LBBROWSER)/i],
        [e],
        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
        [a, [e]],
        [/;fbav\/([\w\.]+);/i],
        [a, [e, "Facebook"]],
        [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
        [e, a],
        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
        [a, [e, "Chrome Headless"]],
        [/\swv\).+(chrome)\/([\w\.]+)/i],
        [[e, /(.+)/, "$1 WebView"], a],
        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
        [[e, /(.+(?:g|us))(.+)/, "$1 $2"], a],
        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
        [a, [e, "Android Browser"]],
        [/(sailfishbrowser)\/([\w\.]+)/i],
        [[e, "Sailfish Browser"], a],
        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
        [e, a],
        [/(dolfin)\/([\w\.]+)/i],
        [[e, "Dolphin"], a],
        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
        [[e, "Chrome"], a],
        [/(coast)\/([\w\.]+)/i],
        [[e, "Opera Coast"], a],
        [/fxios\/([\w\.-]+)/i],
        [a, [e, "Firefox"]],
        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
        [a, [e, "Mobile Safari"]],
        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
        [a, e],
        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [[e, "GSA"], a],
        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [e, [a, g.str, h.browser.oldsafari.version]],
        [/(webkit|khtml)\/([\w\.]+)/i],
        [e, a],
        [/(navigator|netscape)\/([\w\.-]+)/i],
        [[e, "Netscape"], a],
        [
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
          /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
          /(links)\s\(([\w\.]+)/i,
          /(gobrowser)\/?([\w\.]*)/i,
          /(ice\s?browser)\/v?([\w\._]+)/i,
          /(mosaic)[\/\s]([\w\.]+)/i,
        ],
        [e, a],
      ],
      cpu: [
        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
        [[d, "amd64"]],
        [/(ia32(?=;))/i],
        [[d, f.lowerize]],
        [/((?:i[346]|x)86)[;\)]/i],
        [[d, "ia32"]],
        [/windows\s(ce|mobile);\sppc;/i],
        [[d, "arm"]],
        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
        [[d, /ower/, "", f.lowerize]],
        [/(sun4\w)[;\)]/i],
        [[d, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
        ],
        [[d, f.lowerize]],
      ],
      device: [
        [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
        [s, n, [o, w]],
        [/applecoremedia\/[\w\.]+ \((ipad)/],
        [s, [n, "Apple"], [o, w]],
        [/(apple\s{0,1}tv)/i],
        [
          [s, "Apple TV"],
          [n, "Apple"],
        ],
        [
          /(archos)\s(gamepad2?)/i,
          /(hp).+(touchpad)/i,
          /(hp).+(tablet)/i,
          /(kindle)\/([\w\.]+)/i,
          /\s(nook)[\w\s]+build\/(\w+)/i,
          /(dell)\s(strea[kpr\s\d]*[\dko])/i,
        ],
        [n, s, [o, w]],
        [/(kf[A-z]+)\sbuild\/.+silk\//i],
        [s, [n, "Amazon"], [o, w]],
        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
        [
          [s, g.str, h.device.amazon.model],
          [n, "Amazon"],
          [o, l],
        ],
        [/android.+aft([bms])\sbuild/i],
        [s, [n, "Amazon"], [o, b]],
        [/\((ip[honed|\s\w*]+);.+(apple)/i],
        [s, n, [o, l]],
        [/\((ip[honed|\s\w*]+);/i],
        [s, [n, "Apple"], [o, l]],
        [
          /(blackberry)[\s-]?(\w+)/i,
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
          /(hp)\s([\w\s]+\w)/i,
          /(asus)-?(\w+)/i,
        ],
        [n, s, [o, l]],
        [/\(bb10;\s(\w+)/i],
        [s, [n, "BlackBerry"], [o, l]],
        [
          /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
        ],
        [s, [n, "Asus"], [o, w]],
        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
        [
          [n, "Sony"],
          [s, "Xperia Tablet"],
          [o, w],
        ],
        [
          /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
        ],
        [s, [n, "Sony"], [o, l]],
        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
        [n, s, [o, t]],
        [/android.+;\s(shield)\sbuild/i],
        [s, [n, "Nvidia"], [o, t]],
        [/(playstation\s[34portablevi]+)/i],
        [s, [n, "Sony"], [o, t]],
        [/(sprint\s(\w+))/i],
        [
          [n, g.str, h.device.sprint.vendor],
          [s, g.str, h.device.sprint.model],
          [o, l],
        ],
        [
          /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
          /(zte)-(\w*)/i,
          /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
        ],
        [n, [s, /_/g, " "], [o, l]],
        [/(nexus\s9)/i],
        [s, [n, "HTC"], [o, w]],
        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
        [s, [n, "Huawei"], [o, l]],
        [/(microsoft);\s(lumia[\s\w]+)/i],
        [n, s, [o, l]],
        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
        [s, [n, "Microsoft"], [o, t]],
        [/(kin\.[onetw]{3})/i],
        [
          [s, /\./g, " "],
          [n, "Microsoft"],
          [o, l],
        ],
        [
          /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
          /mot[\s-]?(\w*)/i,
          /(XT\d{3,4}) build\//i,
          /(nexus\s6)/i,
        ],
        [s, [n, "Motorola"], [o, l]],
        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
        [s, [n, "Motorola"], [o, w]],
        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
        [
          [n, f.trim],
          [s, f.trim],
          [o, b],
        ],
        [/hbbtv.+maple;(\d+)/i],
        [
          [s, /^/, "SmartTV"],
          [n, "Samsung"],
          [o, b],
        ],
        [/\(dtv[\);].+(aquos)/i],
        [s, [n, "Sharp"], [o, b]],
        [
          /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
          /((SM-T\w+))/i,
        ],
        [[n, "Samsung"], s, [o, w]],
        [/smart-tv.+(samsung)/i],
        [n, [o, b], s],
        [
          /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
          /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
          /sec-((sgh\w+))/i,
        ],
        [[n, "Samsung"], s, [o, l]],
        [/sie-(\w*)/i],
        [s, [n, "Siemens"], [o, l]],
        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
        [[n, "Nokia"], s, [o, l]],
        [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
        [s, [n, "Acer"], [o, w]],
        [/android.+([vl]k\-?\d{3})\s+build/i],
        [s, [n, "LG"], [o, w]],
        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
        [[n, "LG"], s, [o, w]],
        [/(lg) netcast\.tv/i],
        [n, s, [o, b]],
        [
          /(nexus\s[45])/i,
          /lg[e;\s\/-]+(\w*)/i,
          /android.+lg(\-?[\d\w]+)\s+build/i,
        ],
        [s, [n, "LG"], [o, l]],
        [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
        [n, s, [o, w]],
        [/android.+(ideatab[a-z0-9\-\s]+)/i],
        [s, [n, "Lenovo"], [o, w]],
        [/(lenovo)[_\s-]?([\w-]+)/i],
        [n, s, [o, l]],
        [/linux;.+((jolla));/i],
        [n, s, [o, l]],
        [/((pebble))app\/[\d\.]+\s/i],
        [n, s, [o, p]],
        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
        [n, s, [o, l]],
        [/crkey/i],
        [
          [s, "Chromecast"],
          [n, "Google"],
        ],
        [/android.+;\s(glass)\s\d/i],
        [s, [n, "Google"], [o, p]],
        [/android.+;\s(pixel c)[\s)]/i],
        [s, [n, "Google"], [o, w]],
        [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
        [s, [n, "Google"], [o, l]],
        [
          /android.+;\s(\w+)\s+build\/hm\1/i,
          /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
          /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
          /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
        ],
        [
          [s, /_/g, " "],
          [n, "Xiaomi"],
          [o, l],
        ],
        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
        [
          [s, /_/g, " "],
          [n, "Xiaomi"],
          [o, w],
        ],
        [/android.+;\s(m[1-5]\snote)\sbuild/i],
        [s, [n, "Meizu"], [o, l]],
        [/(mz)-([\w-]{2,})/i],
        [[n, "Meizu"], s, [o, l]],
        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
        [s, [n, "OnePlus"], [o, l]],
        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
        [s, [n, "RCA"], [o, w]],
        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
        [s, [n, "Dell"], [o, w]],
        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
        [s, [n, "Verizon"], [o, w]],
        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
        [[n, "Barnes & Noble"], s, [o, w]],
        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
        [s, [n, "NuVision"], [o, w]],
        [/android.+;\s(k88)\sbuild/i],
        [s, [n, "ZTE"], [o, w]],
        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
        [s, [n, "Swiss"], [o, l]],
        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
        [s, [n, "Swiss"], [o, w]],
        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
        [s, [n, "Zeki"], [o, w]],
        [
          /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
          /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
        ],
        [[n, "Dragon Touch"], s, [o, w]],
        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
        [s, [n, "Insignia"], [o, w]],
        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
        [s, [n, "NextBook"], [o, w]],
        [
          /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
        ],
        [[n, "Voice"], s, [o, l]],
        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
        [[n, "LvTel"], s, [o, l]],
        [/android.+;\s(PH-1)\s/i],
        [s, [n, "Essential"], [o, l]],
        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
        [s, [n, "Envizen"], [o, w]],
        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
        [n, s, [o, w]],
        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
        [s, [n, "MachSpeed"], [o, w]],
        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
        [n, s, [o, w]],
        [/android.+[;\/]\s*TU_(1491)\s+build/i],
        [s, [n, "Rotor"], [o, w]],
        [/android.+(KS(.+))\s+build/i],
        [s, [n, "Amazon"], [o, w]],
        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
        [n, s, [o, w]],
        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
        [[o, f.lowerize], n, s],
        [/[\s\/\(](smart-?tv)[;\)]/i],
        [[o, b]],
        [/(android[\w\.\s\-]{0,9});.+build/i],
        [s, [n, "Generic"]],
      ],
      engine: [
        [/windows.+\sedge\/([\w\.]+)/i],
        [a, [e, "EdgeHTML"]],
        [/webkit\/537\.36.+chrome\/(?!27)/i],
        [[e, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
          /(icab)[\/\s]([23]\.[\d\.]+)/i,
        ],
        [e, a],
        [/rv\:([\w\.]{1,9}).+(gecko)/i],
        [a, e],
      ],
      os: [
        [/microsoft\s(windows)\s(vista|xp)/i],
        [e, a],
        [
          /(windows)\snt\s6\.2;\s(arm)/i,
          /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
          /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
        ],
        [e, [a, g.str, h.os.windows.version]],
        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
        [
          [e, "Windows"],
          [a, g.str, h.os.windows.version],
        ],
        [/\((bb)(10);/i],
        [[e, "BlackBerry"], a],
        [
          /(blackberry)\w*\/?([\w\.]*)/i,
          /(tizen)[\/\s]([\w\.]+)/i,
          /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
        ],
        [e, a],
        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
        [[e, "Symbian"], a],
        [/\((series40);/i],
        [e],
        [/mozilla.+\(mobile;.+gecko.+firefox/i],
        [[e, "Firefox OS"], a],
        [
          /(nintendo|playstation)\s([wids34portablevu]+)/i,
          /(mint)[\/\s\(]?(\w*)/i,
          /(mageia|vectorlinux)[;\s]/i,
          /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
          /(hurd|linux)\s?([\w\.]*)/i,
          /(gnu)\s?([\w\.]*)/i,
        ],
        [e, a],
        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
        [[e, "Chromium OS"], a],
        [/(sunos)\s?([\w\.\d]*)/i],
        [[e, "Solaris"], a],
        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
        [e, a],
        [/(haiku)\s(\w+)/i],
        [e, a],
        [
          /cfnetwork\/.+darwin/i,
          /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
        ],
        [
          [a, /_/g, "."],
          [e, "iOS"],
        ],
        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
        [
          [e, "Mac OS"],
          [a, /_/g, "."],
        ],
        [
          /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
          /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
          /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
          /(unix)\s?([\w\.]*)/i,
        ],
        [e, a],
      ],
    },
    x = function (i, s) {
      if (("object" == typeof i && ((s = i), (i = u)), !(this instanceof x)))
        return new x(i, s).getResult();
      var e =
          i ||
          (r && r.navigator && r.navigator.userAgent
            ? r.navigator.userAgent
            : ""),
        o = s ? f.extend(v, s) : v;
      return (
        (this.getBrowser = function () {
          var i = { name: u, version: u };
          return g.rgx.call(i, e, o.browser), (i.major = f.major(i.version)), i;
        }),
        (this.getCPU = function () {
          var i = { architecture: u };
          return g.rgx.call(i, e, o.cpu), i;
        }),
        (this.getDevice = function () {
          var i = { vendor: u, model: u, type: u };
          return g.rgx.call(i, e, o.device), i;
        }),
        (this.getEngine = function () {
          var i = { name: u, version: u };
          return g.rgx.call(i, e, o.engine), i;
        }),
        (this.getOS = function () {
          var i = { name: u, version: u };
          return g.rgx.call(i, e, o.os), i;
        }),
        (this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU(),
          };
        }),
        (this.getUA = function () {
          return e;
        }),
        (this.setUA = function (i) {
          return (e = i), this;
        }),
        this
      );
    };
  (x.VERSION = "0.7.20"),
    (x.BROWSER = { NAME: e, MAJOR: "major", VERSION: a }),
    (x.CPU = { ARCHITECTURE: d }),
    (x.DEVICE = {
      MODEL: s,
      VENDOR: n,
      TYPE: o,
      CONSOLE: t,
      MOBILE: l,
      SMARTTV: b,
      TABLET: w,
      WEARABLE: p,
      EMBEDDED: "embedded",
    }),
    (x.ENGINE = { NAME: e, VERSION: a }),
    (x.OS = { NAME: e, VERSION: a }),
    typeof exports != i
      ? (typeof module != i && module.exports && (exports = module.exports = x),
        (exports.UAParser = x))
      : "function" == typeof define && define.amd
      ? define(function () {
          return x;
        })
      : r && (r.UAParser = x);
  var k = r && (r.jQuery || r.Zepto);
  if (typeof k != i && !k.ua) {
    var y = new x();
    (k.ua = y.getResult()),
      (k.ua.get = function () {
        return y.getUA();
      }),
      (k.ua.set = function (i) {
        y.setUA(i);
        var s = y.getResult();
        for (var e in s) k.ua[e] = s[e];
      });
  }
})("object" == typeof window ? window : this);
