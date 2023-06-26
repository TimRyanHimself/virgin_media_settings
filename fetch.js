fetch("https://ramblingryan.github.io/virgin_media_settings/virgin_media_block_youtube.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {
    /* Now you can use the script */
  })