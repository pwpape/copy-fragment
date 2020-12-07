let contextMenuItem = {
    "id": "iconid",
    "title": "iconTitle",
    "contexts": ["all"]  
};

chrome.contextMenus.create(contextMenuItem); 

chrome.contextMenus.onClicked.addListener( function (info, tab) {
    chrome.tabs.executeScript(tab.id, {file: "content.js"});
});
