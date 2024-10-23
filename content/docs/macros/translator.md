+++
title="Translator"
weight=20
+++
# translator.html
This macro defines functions for custom translation.
## get
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