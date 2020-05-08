chrome.storage.sync.get(["targetLang"], (items) => {
    chrome.extension.getBackgroundPage().console.log("Default targetLang is: " + items.targetLang);

    // If targetLang is undefined, etc set English as default
    if(!items.targetLang) {
        chrome.storage.sync.set({"targetLang" : "English"}, () => {
            chrome.extension.getBackgroundPage().console.log("English was saved as default targetLang");
        })
    }
});
