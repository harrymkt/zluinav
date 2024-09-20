# UI Navigation
UI Navigation, or known as zluinav, is a Zola theme designed for accessibility rather than visual and made as easy as possible using templates and macros.

Zola is a fast site generator written in Rust powered by tera as its templating engine and contained a powerful theme creation feature.

## Features of zluinav theme
* Blog with pagination enabled; multiple blogs can be created by copying the blog directory in the content folder to the new directory for a new blog. This means that you can have multiple blogs in one site. In fact, Zola doesn't have its build-in posts, but it is possible using sections.
* Custom navigation; can be set via `config.extra.nav`.
* Customizable extrahead, header, and footer by base templates.
* Fast; Zola generates within a few milliseconds. This is because not much CSS is used as well as JavaScript. Zluinav is built with HTML using aria whenever possible for accessibility with assistive screen reader. You can rebase the templates, should you wish to add your own CSS or JavaScript content.

## Customization

### Extra variables
Can be accessed using `extra` object.
* `nav`: a list of inline tables for navigation, see config.toml for more info. Each navigation item has the following properties:
	* `name`: the name to display (required).
	* `url`: the URL to navigate (required). Slashes should be used for internal paths , for example, `/`, `/blog/`

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
* `post_preview.html`: this is a macro defineing the function to preview the post, for example, in posts list. This is made so you can overwrite post previewing template without modifying a hole section templates. The macro requires the post parameter and it must be the page object, see section_paginated.html. Please note that you will still need to modify the `blogpage.html` for displaying a full post content, should you wish to add your own.
* `section_paginated.html`: used to display paginated sections. Use `template` frontmadder to set it.
* `index.html`, `page.html`, `section.html` are for index home page, other pages, and sections, respectively.
* `404.html`: a custom 404 error page.

All templates can be rebased by copying in your templates directory. And in the base file of your templates folder, make sure to extend "zluinav/base.html", not base.html.