function openTabWithGitRepoPage() {
    chrome.tabs.create({
        url: "https://github.com/addyi/linguee-chrome-plugin"
    });
};

window.addEventListener('load', function load(event){
    var openRepoButton = document.getElementById('openGitRepo');
    openRepoButton.addEventListener('click', function() { openTabWithGitRepoPage(); });
});