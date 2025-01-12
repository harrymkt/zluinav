+++
title = "Frontmadder Variables"
weight = 40
+++
# Extra Frontmadder Variables
These variables must be set under `extra` object of the page. Use heading level 2, and if it contains no spaces, then it means they are variables. Otherwise, they are texts splitted.

## Featured Image Display
You can display an image as the post's logo. These variables are available for the pages using `blogpage` template.
- `img`(string) optional: the image / image URL. Note that to display an image, this variable must be set. other image variables are optional.
- `alt`(string) optional: the alt text of the featured image. Requires the `img` variable to be set.

## search
bool: Toggles search indexing for this page. Available for pagefind format. Defaults to what it is set in the `searching` object of the config.

## hid
The heading ID. This is only for documentation pages. Defaults to the page's title.

## no_js
Toggles whether JavaScript is disabled for this page. Fall back to config if not set, thus it's usually `false`.