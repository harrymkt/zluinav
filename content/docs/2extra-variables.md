+++
title="Extra Variables"
+++
# Extra Variables
These variables must be set under `extra` object of the config. If they are not set, the default values will be used from the [theme.toml](https://github.com/harrymkt/zluinav/blob/main/theme.toml).
## tr_path
The path where language TOML files are stored, default is "langs".
## title_sep
Title separator, default is " - ".
## nav
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