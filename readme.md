# UI Navigation
UI Navigation, or known as zluinav, is a Zola theme designed for accessibility rather than visual and made as easy as possible using templates and macros.

Zola is a fast site generator written in Rust powered by tera as its templating engine and has a powerful theme creation feature.

## Features of zluinav theme
* Blog with pagination enabled; multiple blogs can be created by copying the blog directory in the content folder to the new directory for a new blog. This means that you can have multiple blogs in one site. In fact, Zola doesn't have its build-in posts, but it is possible using sections.
* Multilingual; build your site in multiple languages. By default, English and Burmese have been provided as demo.
* Custom navigation; can be set via `config.extra.nav`.
* Customizable extrahead, header, navigation, and footer by base templates and blocks.
* Fast; Zola generates within a few milliseconds. This is because not much CSS is used as well as JavaScript. Zluinav is built with HTML using aria whenever possible for accessibility with assistive screen reader. You can rebase the templates, should you wish to add your own CSS or JavaScript content.
* Copy code blocks; add code blocks which can then be copied using buttons and display the code language if available, helped by JavaScript.

## Customization

### Extra variables
Can be accessed using `extra` object.
* `nav`: a list of inline tables for navigation, see config.toml for more info.
	
	Each navigation item has the following properties:
	* `name`(string) required: the name to display.
	* `url`(string) required: the URL to navigate. Slashes should be used for internal paths.
		
		Use `.l.` to reference the current language, for instance, `/.l./blog`
	* `key`(string) optional: the access key for the item.
	* `title`(string) optional: the title to set on the title attribute.
	* `id`(string) optional: the translation ID. If this is not provided, the name will be used instead.
	
	If you set the nav as empty or do not set at all, the navigation menu will be disabled, as well as skip to navigation link.

### Blocks
* `extrahead`: use to add head meta, including your JS scripts. The charset and viewport are already added, so you can call `{{super()}}` before you add content to this block.
* `title`: title, default to config. This is best to call `{{super()}}` after the title set to also add your config site title.
* `header`: use before the main content. By default, this block contains accessibility skip links such as skip to main content, navigation, and footer.
* `nav`: navigation. This block contains the title called main menu. Rebase the block if you want to modify
* `content`: the content itself.
* `footer`: use after the content.
* `extrafoot`: an extra footer. This block is useful to insert JS scripts if they need to be inserted at the bottom of the footer, like copy.js.

### Templates
These are a list of files available in the templates folder.
* `base.html`: template for site base. It is where all blocks live, so you can rebase the template by overwriting in your templates folder.
* `blogpage.html`: the blog page. You can use the frontmadder `page_template="blogpage.html"` to set in your section.
* `language_changer.html`: used as a template for change language page. Please note that if the config has no more than one language, the change language page in the `header` block will be disabled by default.
* `pagination.html`: this is an include template for pagination navigation. This is usually included by include statement in the section_paginated.html.
* `section_paginated.html`: used to display paginated sections. Use `template` frontmadder to set it.
* `index.html`, `page.html`, and `section.html` are for index home page, other pages, and sections, respectively.
* `404.html`: a custom 404 error page. Please note that this template is not work for multiple languages.

All templates can be rebased by copying in your templates directory. And in the base.html file of your own templates folder, make sure to extend "zluinav/templates/base.html", not base.html.

### Macros
This is a list of available macros that are located in mcs directory. Use heading level 4 to navigate each macro file, and level 5 to navigate available functions.

#### post.html
This is a macro defineing the function to preview the post, for example, in posts list. This is made so you can overwrite post previewing template without modifying a section templates.

##### post_preview
This function previews the post, useful in the forloop list.
* `post`(object) required: an object pointing to a post page.
* `tr`(object) optional: the object pointing to the loaded translation data.

##### show_authors
This method shows the authors of a page. If the page doesn't have set the authors, it will use config page author. If the config still doesn't have set, it will return empty.
* `post`(object) required: an object pointing to a post page.
* `tr`(object) optional: the object pointing to the loaded translation data.

#### translator.html
This macro defines functions for custom translation.

##### get
This method will search the TOML file containing translation for each language set in the config. The folder to search is base on the `config.extra.tr_path`. By default, it's langs. Directory searching is as follows:
* Searches in the directory where the config.toml file is located.
* If it is not found, searches in the theme directory. The theme directory means the directory which your current theme lives.

This macro has the following properties to pass:
* `key`(string) required: the key to translate, set in your language TOML file.
* `def`(string) optional: the default text if the key could not be translated.
* `tr`(object) optional: the object pointing to the loaded translation data.
* `language`(string) optional: a string containing the language name defined in config languages if different from the current language, useful to display names in a list, for instance, `en`

Please see the base.html for more information related to its usage.

### Shortcodes
This is a list of available shortcodes that are located in shortcodes directory that can be used in your markdown files to obtain information. Use heading level 4 to navigate each file.

#### geturl.html
This shortcode allows you to retrieve the URL specified by the path and optionally the language. This is useful to add links to markdown files if they depend on the language, useful for custom partials such as footer and header using markdown files.
* `p`(string) required: The path to retrieve.
* `lang`(string) optional: the language to get as.

Example:
```md
Go to [about]({{geturl(p="about")}}) page!
```