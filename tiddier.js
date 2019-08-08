const prettify = document.getElementById('prettify');

prettify.onclick = function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.insertCSS(tabs[0].id, {
      code: `
      body {
        width: 80vw;
        margin: auto;
        line-height: 1.7;
        font-size: 1.19em;
        font-family: "Open Sans", sans-serif;
      }
      `
    });
  });
};
