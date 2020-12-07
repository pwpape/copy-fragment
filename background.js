let contextMenuItem = {
    "id": "iconid",
    "title": "iconTitle",
    "contexts": ["all"]  
};

chrome.contextMenus.create(contextMenuItem); 

chrome.contextMenus.onClicked.addListener( function (info, tab) {
    chrome.tabs.executeScript(tab.id, {file: "content.js"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });