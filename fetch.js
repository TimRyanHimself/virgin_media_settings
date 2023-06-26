// fetch and run script
// put this in Bookmarklet Maker to get bookmarklet URL:  https://caiorss.github.io/bookmarklet-maker/

fetch("https://ramblingryan.github.io/virgin_media_settings/virgin_media_block_youtube.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {})
  