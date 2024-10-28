+++
title = "Writing"
weight = 1
+++
# Writing
In page content, you can add variables that will be replaced with the value when the site builds.
Variables are defined by `$variable_name$`. For example, `This page is named $/*title*/$ and was published on $/*date*/$, and was last updated on $/*updated*/$.`

You can render the variable name itself by prefixing with `/*` and `*/`. For example, `$/*/*title*/*/$` will be rendered as `$/*title*/$` without replacing its value.

Here is a list of supported variables:
* `title`: title of the page.
* `description`: description, if available.
* `link`: the permalink to the page.
* `date`: the published date of the page, if available.
* `updated`: the updated date of the page, if available.

Returned variable will be empty if the variable is not defined or failed to retrieve, so make sure you know it is defined!