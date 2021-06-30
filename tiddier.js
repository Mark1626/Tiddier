const prettify = document.getElementById('prettify');

prettify.onclick = function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.insertCSS(tabs[0].id, {
      code: `
      body {
        width: 70vw;
        margin: auto !important;
        line-height: 1.7 !important;
        font-size: 1.19rem !important;
        font-family: "Open Sans", sans-serif;
      }
      `
    });
  });
};
