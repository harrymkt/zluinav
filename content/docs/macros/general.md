+++
title = "General Macro"
+++
# general.html
General macros added in general namespace

## title(titles)
Returns the titles, separated by the value set in `config.extra.title_sep`, with the site title appended after it.
- `titles`(array) required: array of titles.
- `sep`(string) optional: The title's separator. Defaults to what it is set in `title_sep` site extra. Passing this string empty will set back to default.
- `overwrite`(bool) optional: `false` if the site title should be appended after the titles, or `true` otherwise. Defaults to `false`.