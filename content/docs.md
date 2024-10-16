+++
title="Documentation"
+++
# $title$
Use heading level 2 to navigate each section, heading level 3 to navigate each property. In some case, such as macros, use heading level 4 to navigate each function.
## Writing
In page content, you can add variables that will be replaced with the value when the site builds.
Variables are defined by `$variable_name$`. For example, `This page is named $/*title*/$ and was published on $/*date*/$, and was last updated on $/*updated*/$.`

You can render the variable name itself by prefixing with `/*` and `*/`. For example, `$/*/*title*/*/$` will be rendered as `$/*title*/$` without replacing its value.

Here is a list of supported variables:
* `title`: title of the page.
* `description`: description, if available.
* `link`: the permalink to the page.
* `date`: the published date of the page, if available.
* `updated`: the updated date of the page, if available.

Returned variable will be empty if the variable is not defined or failed to retrieve, so make sure you know it is defined!

## Extra variables
These variables must be set under `extra` object of the config. If they are not set, the default values will be used from the [theme.toml](https://github.com/harrymkt/zluinav/blob/main/theme.toml).
### tr_path
The path where language TOML files are stored, default is "langs".
### title_sep
Title separator, default is " - ".
### nav
A list of inline tables for navigation.

Each navigation item has the following properties:
* `name`(string) required: the name to display.
* `url`(string) required: the URL to navigate. Slashes should be used for internal paths.
	
	Use `.l.` to reference the current language, for instance, `/.l./blog/`
* `key`(string) optional: the access key for the item.
* `title`(string) optional: the title to set on the title attribute.
* `id`(string) optional: the translation ID. If this is not provided, the name will be used instead.	

If you set the nav as empty or do not set at all, the navigation menu will be disabled, as well as skip to navigation link.

Example navigation:
```toml
nav=[
{name="Home", url="/"},
{name="Blog", url="/blog/"},
# Translated page
{name="Multilingual", url="/.l./multilingual/"}
]
```

## Blocks
* `extrahead`: use to add head meta, including your JS scripts. The charset and viewport are already added, so you can call `{{/*super()*/}}` before you add content to this block.
* `title`: title, default to config. This is best to call `{{/*super()*/}}` after the title set to also add your config site title.
* `header`: use before the main content. By default, this block contains accessibility skip links such as skip to main content, navigation, and footer.
* `nav`: navigation. This block contains the title called main menu. Rebase the block if you want to modify
* `content`: the content itself.
* `footer`: use after the content.
* `extrafoot`: an extra footer. This block is useful to insert JS scripts if they need to be inserted at the bottom of the footer, like copy.js.

## Templates
These are a list of files available in the templates folder.
* `base.html`: template for site base. It is where all blocks live, so you can rebase the template by overwriting in your templates folder.
* `blogpage.html`: the blog page. You can use the frontmadder `page_template="blogpage.html"` to set in your section.
* `language_changer.html`: used as a template for change language page. Please note that if the config has no more than one language, the change language page in the `header` block will be disabled by default.
* `pagination.html`: this is an include template for pagination navigation. This is usually included by include statement in the section_paginated.html.
* `section_paginated.html`: used to display paginated sections. Use `template` frontmadder to set it.
* `index.html`, `page.html`, and `section.html` are for index home page, other pages, and sections, respectively.
* `404.html`: a custom 404 error page. Please note that this template is not work for multiple languages.

All templates can be rebased by copying in your templates directory. And in the base.html file of your own templates folder, make sure to extend "zluinav/templates/base.html", not base.html.

## Macros
This is a list of available macros that are located in mcs directory. Use heading level 4 to navigate each macro file, and level 5 to navigate available functions.
### content.html
This macro defines content processing, because the theme supports variables. Variables are processed by `$variable_name$`.
#### process
Returns the content replaced with all supported variables.
* `page`(object) required: an object pointing to a page to retrieve the content.
* `option`(string) optional: the option to process, default is "content".

### post.html
This is a macro defineing the function to preview the post, for example, in posts list. This is made so you can overwrite post previewing template without modifying a section templates.
#### post_preview
This function previews the post, useful in the forloop list.
* `post`(object) required: an object pointing to a post page.
* `tr`(object) optional: the object pointing to the loaded translation data.
#### show_authors
This method shows the authors of a page. If the page doesn't have set the authors, it will use config page author. If the config still doesn't have set, it will return empty.
* `post`(object) required: an object pointing to a post page.
* `tr`(object) optional: the object pointing to the loaded translation data.
### translator.html
This macro defines functions for custom translation.
#### get
This method will search the TOML file containing translation for each language set in the config. The folder to search is base on the `config.extra.tr_path`. By default, it's langs. Directory searching is as follows:
* Searches in the directory where the config.toml file is located.
* If it is not found, searches in the theme directory. The theme directory means the directory which your current theme lives.

This macro has the following properties to pass:
* `key`(string) required: the key to translate, set in your language TOML file.
* `def`(string) optional: the default text if the key could not be translated.
* `tr`(object) optional: the object pointing to the loaded translation data.
* `language`(string) optional: a string containing the language name defined in config languages if different from the current language, useful to display names in a list, for instance, `en` When specifying the language it will be loaded. As such, `tr` is not required when this is used.

Example:
```html
{%-import "macros/translator.html" as tran-%}
{%-set translated=tran::get(language="my", key="test", def="Testing")-%}
{{test}}
```

## Shortcodes
This is a list of available shortcodes that are located in shortcodes directory that can be used in your markdown files to obtain information. Use heading level 4 to navigate each file.
### geturl.html
This shortcode allows you to retrieve the URL specified by the path and optionally the language. This is useful to add links to markdown files if they depend on the language, useful for custom partials such as footer and header using markdown files.
* `p`(string) required: The path to retrieve.
* `lang`(string) optional: the language to get as.

Example:
```markdown
Go to [about]({{/*geturl(p="about")*/}}) page!
```
It may output like:
```text
{{geturl(p="about")}}
```