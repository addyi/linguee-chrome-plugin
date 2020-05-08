function openTabWithGitRepoPage() {
    chrome.tabs.create({
        url: "https://github.com/addyi/linguee-chrome-plugin"
    });
};

var targetLangSelect;
var sourceLangSelect;

window.onload = function () {
    targetLangSelect = document.getElementById('target');
    sourceLangSelect = document.getElementById('source');

    chrome.storage.sync.get(["targetLang"], (items) => {
        targetLangSelect.value = items.targetLang;
    })

    chrome.storage.sync.get(["sourceLang"], (items) => {
        sourceLangSelect.value = items.sourceLang || "Auto";
    })
}

window.addEventListener('load', function load(event) {
    const openRepoButton = document.getElementById('openGitRepo');
    openRepoButton.addEventListener('click', function () { openTabWithGitRepoPage(); });

    targetLangSelect.addEventListener("change", (e) => {
        const target = e.currentTarget;
        const value = target.options[target.selectedIndex].value;

        chrome.storage.sync.set({ "targetLang": value }, () => {
            chrome.extension.getBackgroundPage().console.log("TargetLang : " + value + " was well saved");
        })
    })
    sourceLangSelect.addEventListener("change", (e) => {
        const target = e.currentTarget;
        const value = target.options[target.selectedIndex].value;

        chrome.storage.sync.set({ "sourceLang": value }, () => {
            chrome.extension.getBackgroundPage().console.log("SourceLang : " + value + " was well saved");
        })
    })
});



