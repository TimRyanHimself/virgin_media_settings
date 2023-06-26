const tag = 'a';
const text = 'Websites';
const sites = [
    "googlevideo.com",
    "youtu.be",
    "youtube-nocookie.com",
    "youtube.com",
    "youtube.googleapis.com",
    "youtubei.googleapis.com",
    "ytimg.com",
    "ytimg.l.google.com"
];

// Click on Websites tab
console.log("Clicking on Websites tab");
var elements = document.getElementsByTagName(tag);
var found = [];
for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML === text) {
        elements[i].click();
    }
}

// Find the elements needed
console.log("Finding elements");
let container = document.getElementById('blockedSiteContainer');
let box = container.querySelector('.addsiteinputbox');
let btn_block_site = document.getElementById('blockedSites')
let btn_apply = document.querySelector('.applyButton');

// Call the function for each site to block
sites.forEach(block_site);

// Click Apply
console.log("Clicking Apply");
btn_apply.click();

function block_site(site) {
    console.log("Adding " + site);
    box.value = site;
    btn_block_site.click();
}



