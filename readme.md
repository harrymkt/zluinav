# UI Navigation
UI Navigation, or known as zluinav, is a Zola theme designed for accessibility rather than visual.

Zola is a fast site generator written in Rust powered by tera as its templating engine and contained a powerful theme creation.

## Features of zluinav theme
* Blog with pagination enabled; multiple blogs can be created by copying the blog directory in the content folder to the new directory for a new blog. This means that you can have multiple blogs in one site.
* Custom navigation; can be set via `config.extra.nav`.
* Customizable extrahead, header, and footer by base templates.
* Fast; Zola generates within a few milliseconds. This is because not much CSS is used as well as JavaScript. Zluinav is built with HTML using aria whenever possible for accessibility with assistive screen reader.

## Customization

### Extra variables
Can be accessed using `extra` object.
* `nav`: a list of inline tables for navigation, see config.toml for more info.

### Blocks
* `extrahead`: use to add head meta, including your JS scripts.
* `title`: title, default to config. This is best to call `{{super()}}` after the title set to also add your config site title.
* `header`: use before the main content.
* `content`: the content itself.
* `footer`: use after the content.

### Templates
* `base.html`: template for site base. It is where all blocks live, so you can rebase the template by overwriting in your templates folder.
* `blogpage.html`: the blog page. You can use the frontmadder `page_template="blogpage.html"` to set in your section.
* `pagination.html`: this is an include template for pagination navigation. This is usually included by include statement in the section_paginated.html.
* `index.html`, `page.html`, `section.html` are for index home page, other pages, and sections, respectively.
* `section_paginated.html`: used to display paginated sections. Use `template` frontmadder to set it.

All templates can be rebased by copying in your templates directory. And in the base file of your templates folder, make sure to extend "zluinav/base.html", not base.html.