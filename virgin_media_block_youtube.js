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
var elements = document.getElementsByTagName(tag);
var found = [];
for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML === text) {
        elements[i].click();
    }
}

// Find the elements needed
let container = document.getElementById('blockedSiteContainer');
console.log(container.id);
let box = container.querySelector('.addsiteinputbox');
console.log(box.id);
let btn_block_site = document.getElementById('blockedSites')
console.log(btn_block_site.id);
let btn_apply = document.querySelector('.applyButton');
console.log(btn_apply.id);

// Call the function for each site to block
sites.forEach(block_site);

// Click Apply
btn_apply.click();

function block_site(site) {
    box.value = site;
    btn_block_site.click();
}



