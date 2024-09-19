# UI Navigation
A Zola theme designed for accessibility rather than visual.

## Features
* Blog with pagination enabled; multiple blogs can be created by copying the blog directory in the content folder to the new directory for a new blog. This means that you can have multiple blogs in one site.
* Custom navigation; can be set via `config.extra.nav`.
* Customizable extrahead, header, and footer by base templates.

## Extra variables
Can be accessed using `extra` object.
* `nav`: a list of navigation, see config.toml for more info.

## Blocks
* `extrahead`: use to add head meta, including your JS scripts.
* `title`: title, default to config.
* `header`: use before the main content.
* `content`: the content itself.
* `footer`: use after the content.