+++
title = "Geturl"
weight = 1
+++
# geturl.html
This shortcode allows you to retrieve the URL specified by the path and optionally the language. This is useful to add links to markdown files if they depend on the language, useful for custom partials such as footer and header using markdown files.
* `p`(string) required: The path to retrieve.
* `lang`(string) optional: the language to get as.

Example:
```markdown
Go to [about]({{/*geturl(p = "about")*/}}) page!
```
It may output like:
```text
Go to [about]({{geturl(p = "about")}})
```