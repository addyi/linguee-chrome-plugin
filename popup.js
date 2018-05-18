function openTabWithGitRepoPage() {
    chrome.tabs.create({
        url: "https://github.com/addyi/linguee-chrome-plugin"
    });
};

var langSelect;

window.onload = function(){
    langSelect = document.getElementById('target');

    chrome.storage.sync.get(["targetLang"], (items) => {
        langSelect.value = items.targetLang;
    });
}

window.addEventListener('load', function load(event){
    const openRepoButton = document.getElementById('openGitRepo');
    openRepoButton.addEventListener('click', function() { openTabWithGitRepoPage(); });

    langSelect.addEventListener("change", (e) => {
        const target = e.currentTarget;
        const value = target.options[target.selectedIndex].value;

        chrome.storage.sync.set({"targetLang" : value}, () => {
            chrome.extension.getBackgroundPage().console.log("TargetLang : " + value + " was well saved" );
        })
    })
});
