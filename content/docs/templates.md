+++
title = "Templates"
weight = 300
+++
# Templates
These are a list of files available in the templates folder.
- base.html: template for site base. It is where all blocks live, so you can rebase the template by overwriting in your templates folder.
- blogpage.html: the blog page. You can use the frontmadder `page_template="blogpage.html"` to set in your section.
- doc.html: the template for documentation.
- docpage.html: the documentation page template.
- language_changer.html: used as a template for change language page. Please note that if the config has no more than one language, the change language page in the `header` block will be disabled by default.
- pagination.html: this is an include template for pagination navigation. This is usually included by include statement in the section_paginated.html.
- section_paginated.html: used to display paginated sections. Use `template` frontmadder to set it.
- index.html, page.html, and section.html are for index home page, other pages, and sections, respectively.
- 404.html: a custom 404 error page. Please note that this template is not work for multiple languages.

All templates can be rebased by copying in your templates directory. And in the base.html file of your own templates folder, make sure to extend "zluinav/templates/base.html", not base.html.