# virgin_media_settings

Bookmarklet solution for blocking sites on Virgin Media

On Windows, can use Bookmarklets from the Bookmark bar

On Android, can only use Bookmarklets from search

Bookmarklets never work from blank page

The GitHub website is [published here](https://timryanhimself.github.io/virgin_media_settings)

The javascript file is [published here](https://timryanhimself.github.io/virgin_media_settings/virgin_media_block_youtube.js)

Put this in [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/) to get bookmarklet URL  

``` javascript
fetch("https://timryanhimself.github.io/virgin_media_settings/virgin_media_block_youtube.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {})
```
