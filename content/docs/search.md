+++
title = "Search"
weight = 2000
+++
# Search
Zluinav has search built-in. This is a quick overview on how to create your search.

## Configuration
These configurations apply on `extra` object of the config.
```toml
[extra.searching]
  enable = true
  format = "pagefind"
```

- `enable`(bool): Toggles the search. Defaults to `true`.
- `format`(string): The format to use. See [search formats](#sformats). Defaults to `pagefind`.

## Search Formats{#sformats}
You have a variety of formats to choose for your search.

### default
This format uses the default searching method configured in search according to Zola's documentation. `search.js` in the static folder provides for `elasticlunr`.

### pagefind
This is a third party searching tool, and thus it cannot be used in `zola serve`. Instead, this is best if you run this tool after the build. In short, this tool runs over your HTML files to generate the search, and it only takes up a few seconds.

Do the following to get up and run Pagefind. We'll asume you have Python installed:
1. Install Pagefind extended version. You can do this by this command up to the root of this repository. `pip install -r requirements.txt`
2. Set the search format in the config. Note, set the key in the extra section and not in the main. `search_format = "pagefind"`
3. Build the site. `zola build`
4. Generate the search index. Make sure to replace outputdir with the directory where your built files live. `python -m pagefind --site outputdir`
- Make sure to add `html` tag with the `lang` attribute set if you are building multilingual search.
- If you want to define where to start searching from, add `data-pagefind` to a tag like div.

That's it!