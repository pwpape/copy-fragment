let contextMenuItem = {
    "id": "iconid",
    "title": "iconTitle",
    "contexts": ["all"]  
};

function copyTextToClipboard(text) {
  let copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

chrome.contextMenus.create(contextMenuItem); 

chrome.contextMenus.onClicked.addListener( function (info, tab) {
    chrome.tabs.executeScript(tab.id, {file: "content.js"});
    //copyTextToClipboard(tab.url);

});