const ua = new UAParser();

if (
  ua.getBrowser().name !== "Chrome" &&
  ua.getBrowser().name !== "Yandex" &&
  ua.getBrowser().name !== "Firefox" &&
  ua.getBrowser().name !== "Edge"
) {
  var lnk = document.getElementById("r");
  var queryParams = window.location.search;
  var newUrl = `intent://${window.location.hostname}${queryParams}/?#Intent;scheme=https;package=com.android.chrome;end;`;
  lnk.setAttribute("href", newUrl);
  lnk.click();
}

(function () {
  window.addEventListener("popstate", function (e) {
    for (i = 0; i < 10; i++) {
      window.history.pushState("target", "", location.href);
    }
  });
  window.history.pushState("target", "", location.href);
})();

let EBtEl = document.getElementById("expand-button");
let text = document.getElementById("text");
const showText = EBtEl.getAttribute("data-show");
const hideText = EBtEl.getAttribute("data-hide");

EBtEl.innerText = showText;
EBtEl.addEventListener("click", () => {
  if (EBtEl.innerText === showText) {
    EBtEl.innerText = hideText;
    text.className = text.className.replace(/\bcollapsed\b/g, "");
  } else {
    EBtEl.innerText = showText;
    text.className += "collapsed";
  }
});

const helpers = {
  decode: (value) => {
    const decode = document.createElement("textarea");
    decode.innerHTML = value;
    return decode.innerText;
  },
};

window.addEventListener("load", function () {
  document.querySelectorAll("[helpers-decode]").forEach((value) => {
    value.innerText = helpers.decode(value.innerText);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var comments = document.querySelectorAll(".hidden_comment");
  var commentToggleButton = document.getElementById("expand-button2");

  var isOpen = false;

  commentToggleButton.textContent = "All reviews";

  commentToggleButton.addEventListener("click", () => {
    isOpen = !isOpen;
    console.log(isOpen);
    if (isOpen) {
      commentToggleButton.textContent = "Hide reviews";
    } else {
      commentToggleButton.textContent = "All reviews";
    }

    comments.forEach((comment) => {
      comment.classList.toggle("show");
    });
  });

  let deferredPrompt;
  const installButton = document.getElementById("install_button");
  const loading = document.querySelector(".loading");
  const progressWord = document.querySelector(".progress_word");
  const runner = document.querySelector(".runner");
  var fast_fire = 0;
  var no_fire = 1;

  function getProgress(e, n) {
    const i = [];
    let s = 0;
    for (var o = e / n / 3; n > s; ) {
      s++;
      let t = s * (e / n);
      (t += 0.5 < Math.random() ? o : -1 * o), i.push(t.toFixed(2));
    }
    return i.splice(i.length - 1, 1, e), i;
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    fast_fire = 1;
    no_fire = 0;
  });

  setTimeout(function () {
    if (fast_fire == 1) {
      installButton.innerHTML = "Install";
      installButton.hidden = false;
      installButton.addEventListener("click", fastInstallApp);
    } else {
      installButton.innerHTML = "Download";
      installButton.hidden = false;
      installButton.addEventListener("click", longInstallApp);
    }
  }, 3000);

  window.addEventListener("appinstalled", (evt) => {
    installButton.innerHTML = "Install ...";
    installButton.disabled = false;
    installButton.removeEventListener("click", fastInstallApp);
    installButton.removeEventListener("click", longInstaller);
    installButton.removeEventListener("click", longInstallApp);
    OneSignal.showNativePrompt();
    setTimeout(function () {
      installButton.innerHTML = "Play";
      installButton.addEventListener("click", playApp);
    }, 8000);
  });

  function fastInstallApp() {
    deferredPrompt.prompt();
    installButton.disabled = true;
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        installButton.style.display = "none";
        loading.style.display = "block";
        progressWord.innerText = `0 MB / 9 MB`;
        runner.style.width = "0%";
        var t = Math.round(5 * Math.random() + 15);
        const e = getProgress(9, t),
          n = setInterval(() => {
            var t;
            e.length
              ? ((t = e.shift()),
                (progressWord.innerText = `${t} MB / 9 MB`),
                (t = ((100 * t) / 9).toFixed(2)),
                (runner.style.width = `${t}%`))
              : (clearInterval(n),
                (installButton.innerText = "Play"),
                (loading.style.display = "none"),
                (installButton.style.display = "block"));
          }, Math.round(200 * Math.random() + 800));
      }
      installButton.disabled = false;
      deferredPrompt = null;
    });
  }

  function longInstallApp() {
    installButton.style.display = "none";
    loading.style.display = "block";

    progressWord.innerText = `0 MB / 9 MB`;
    runner.style.width = "0%";
    var t = Math.round(5 * Math.random() + 15);
    const e = getProgress(9, t),
      n = setInterval(() => {
        var t;
        e.length
          ? ((t = e.shift()),
            (progressWord.innerText = `${t} MB / 9 MB`),
            (t = ((100 * t) / 9).toFixed(2)),
            (runner.style.width = `${t}%`))
          : (clearInterval(n),
            (installButton.innerText = "Install"),
            (loading.style.display = "none"),
            (installButton.style.display = "block"),
            installButton.removeEventListener("click", longInstallApp),
            installButton.addEventListener("click", longInstaller));
      }, Math.round(200 * Math.random() + 300));
  }

  function longInstaller() {
    installButton.innerHTML = "Install ...";
    if (no_fire == 0) {
      deferredPrompt.prompt();
    } else {
      setTimeout(function () {
        goRedirect();
      }, 15000);
    }
  }

  var domain = window.location.hostname;

  function playApp() {
    window.open(`https://${domain}/redirect.html`, "_blank");
    localStorage.setItem("installed", "1");
  }
});
