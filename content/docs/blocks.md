+++
title = "Blocks"
weight = 200
+++
# Blocks
- `extrahead`: use to add head meta, including your JS scripts. The charset and viewport are already added, so you can call `{{/*super()*/}}` before you add content to this block.
- `title`: title, default to config. This is best to call `{{/*super()*/}}` after the title set to also add your config site title.
- `header`: use before the main content. By default, this block contains accessibility skip links such as skip to main content, navigation, and footer. If multilingual is present, the "Change Language" icon will also be included.
- `nav`: navigation. This block contains the title called main menu. Rebase the block if you want to modify
- `content`: the content itself.
- `footer`: use after the content.
- `extrafoot`: an extra footer. This block is useful to insert JS scripts if they need to be inserted at the bottom of the footer, like copy.js. Therefore, calling {{/*super()*/}} is advised, should you rebase.