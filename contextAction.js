function getword(info,tab) {
  console.log("Linguee search with word \"" + info.selectionText + "\" was requested.");
  chrome.tabs.create({  
    url: "https://www.linguee.com/search?source=auto&query=" + info.selectionText,
  });
}
chrome.contextMenus.create({
  title: "Linguee: \"%s\"", 
  contexts:["selection"], 
  onclick: getword,
});