+++
title = "Post"
weight = 10
+++
# post.html
This is a macro defineing the function to preview the post, for example, in posts list. This is made so you can overwrite post previewing template without modifying a section template.

## post_preview
This function previews the post, useful in the forloop list.
* `post`(object) required: an object pointing to a post page.
* `tr`(object) optional: the object pointing to the loaded translation data.

## show_authors
This method shows the authors of a page. If the page doesn't have set the authors, it will use config page author. If the config still doesn't have set, it will return empty.
* `post`(object) required: an object pointing to a post page.
* `tr`(object) optional: the object pointing to the loaded translation data.