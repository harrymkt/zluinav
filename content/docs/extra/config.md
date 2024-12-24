+++
title = "Config Variables"
weight = 20
+++
# Extra Config Variables
These variables must be set under `extra` object of the config. If they are not set, the default values will be used from the [theme.toml](https://github.com/harrymkt/zluinav/blob/main/theme.toml).

## tr_path
The path where language TOML files are stored, default is "langs".

## title_sep
Title separator, default is " – ".

## menus
A list of menus that can be shown with the menu macro.

Menus are defined like, `extra.menus.main`, etc. Just the main is the custom name for your menu, such as footer, header, navigation. Usually, `main` is the name that uses by default in the site's main navigation.

Each menu item has the following properties:
- `name`(string) required: the name to display.
- `url`(string) required: the URL to navigate. Slashes should be used for internal paths.
	
	Use `.l.` to reference the current language, for instance, `/.l./blog/`
- `key`(string) optional: the access key for the item.
- `title`(string) optional: the title to set on the title attribute.
- `id`(string) optional: the translation ID. If this is not provided, the name will be used instead.
- `attributes`(object) optional: custom attributes. These are also call tables.

Example navigation:
```toml
[[extra.menus.main]]
  name = "Home"
  url = "/.l./"
  key = "h"
  id = "nav1"
[[extra.menus.main]]
  name = "Documentation"
  url = "/.l./docs"
  id = "nav2"
[[extra.menus.main]]
  name = "Blog"
  url = "/.l./blog"
  id = "nav3"
  # Lets add class attribute to blog
  [extra.menus.main.attributes]
    class = "blog"
```

## search
- `enable`(bool): Toggles search. Defaults to `true`
- `default_enable`(bool): Default search status. This is useful to turn this off and manually turn on in the frontmadder of the pages you want. Defaults to `true`
- `format`(string): One of the [search formats](@/docs/search.md#sformats). Defaults to `pagefind`