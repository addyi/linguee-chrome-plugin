function openTabWithGitRepoPage() {
    chrome.tabs.create({
        url: "https://github.com/addyi/linguee-chrome-plugin"
    });
};

window.addEventListener('load', function load(event){
    var openRepoButton = document.getElementById('openGitRepo');
    openRepoButton.addEventListener('click', function() { openTabWithGitRepoPage(); });

    var targetSelect = document.getElementById("target");
    targetSelect.addEventListener("change", (e) => {
        const target = e.currentTarget;
        const value = target.options[target.selectedIndex].value;

        chrome.storage.sync.set({"targetLang" : value}, () => {
            chrome.extension.getBackgroundPage().console.log("TargetLang : " + value + " was well saved" );
        })
    })
});

