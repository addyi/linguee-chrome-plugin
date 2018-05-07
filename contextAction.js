function getword(info,tab) {
    chrome.storage.sync.get(["targetLang"], (items) => {
        chrome.tabs.create({  
            url: "https://www.linguee.com/english-" + items.targetLang + "-?source=auto&query=" + info.selectionText,
        });
    })
}

chrome.contextMenus.create({
    title: "Linguee: \"%s\"", 
    contexts:["selection"], 
    onclick: getword,
});