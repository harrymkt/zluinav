+++
title = "Writing"
weight = 100
+++
# Writing
In page content, you can add variables that will be replaced with the value when the site builds.
Variables are defined by `%variable_name%`. For example, `This page is named %/title% and was published on %/date%, and was last updated on %/updated%.`

You can render the variable name itself by prefixing with `/`. For example, `%//title%` will be rendered as `%/title%` without replacing its value.

Variable rendering is done by [content macro](@/docs/macros/content.md).

Returned variable will be empty if the variable is not defined or failed to retrieve, so make sure you know it is defined!

## Supported variables
- `title`: Title of the page.
- `description`: Description, if available.
- `link`: The permalink to the page.
- `date`: The published date of the page, if available.
- `updated`: The updated date of the page, if available.
- `linktitle`: The friendly title of the page. Falls back to title if not set.