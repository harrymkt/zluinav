+++
title = "Search"
weight = 2000
+++
# Search
Zluinav has search built-in. This is a quick overview on how to create your search.

## Configuration
See [search configuration](@/docs/extra/config.md#search)

## Search Formats{#sformats}
You have a variety of formats to choose for your search.

### lunr
This format uses the lunr searching method. Note that this must be configured in search according to Zola's documentation. `search.js` in the static folder provides for `elasticlunr`. The only disadvantage of this search format is that custom languages cannot be used to index.

### pagefind
This is the default used in Zluinav's demo and is a third party searching tool, and thus it cannot be used in `zola serve`. Instead, this is best if you run this tool after the build. In short, this tool runs over your HTML files to generate the search, and it only takes up a few seconds.

{% details(summary="Setup Pagefind") %}
#### Setup Pagefind
Do the following to get up and run Pagefind. We'll asume you have Python installed:
1. Install Pagefind extended version. You can do this by this command. `pip install -r pagefind[extended]`
2. Set the search format in the `search` object.
3. Build the site. `zola build`
4. Generate the search index. Make sure to replace outputdir with the directory where your built files live. `python -m pagefind --site outputdir`
- Make sure to add `html` tag with the `lang` attribute set if you are building multilingual search.
- If you want to define where to start searching from, add `data-pagefind` to a tag like div.

That's it!
{% end %}