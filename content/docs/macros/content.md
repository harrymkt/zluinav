+++
title="Content"
+++
# content.html
This macro defines content processing, because the theme supports variables. Variables are processed by `$variable_name$`.
## process
Returns the content replaced with all supported variables.
* `page`(object) required: an object pointing to a page to retrieve the content.
* `option`(string) optional: the option to process, default is "content".