function getword(info,tab) {
    chrome.storage.sync.get(["targetLang"], (items) => {
        chrome.tabs.create({  
            url: "https://" + domainMap[items.targetLang] + "/search?source=auto&query=" + info.selectionText,
        });
    })
}

chrome.contextMenus.create({
    title: "Linguee: \"%s\"", 
    contexts:["selection"], 
    onclick: getword,
});

const domainMap =
{
    "English" : "www.linguee.com",
    "German" : "www.linguee.de",
    "French" : "www.linguee.fr",
    "Spanish" : "www.linguee.es",
    "Chinese" : "cn.linguee.com",
    "Russian" : "www.linguee.ru",
    "Japanese" : "www.linguee.jp",
    "Portuguese" : "www.linguee.pt",
    "Italian" : "www.linguee.it",
    "Dutch" : "www.linguee.nl",
    "Polish" : "www.linguee.pl",
    "Swedish" : "www.linguee.se",
    "Danish" : "www.linguee.dk",
    "Finnish" : "fi.linguee.com",
    "Greek" : "www.linguee.gr",
    "Czech" : "www.linguee.cz",
    "Romanian" : "ro.linguee.com",
    "Hungarian" : "www.linguee.hu",
    "Slovak" : "sk.linguee.com",
    "Bulgarian" : "bg.linguee.com",
    "Slovene" : "sl.linguee.com",
    "Lithuanian" : "lt.linguee.com",
    "Latvian" : "lv.linguee.com",
    "Estonian" : "et.linguee.com",
    "Maltese" : "mt.linguee.com"
} 