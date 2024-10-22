+++
title="Documentation Site"
+++
# Documentation Site
Zluinav supports built-in documentation template that allows you to create list base documentation pages. Each section, starting at content/, you can create a subsection documentation. You can also look the docs folder of this theme.

**Note**: documentations can be sorted by the method you like. Zluinav documentation uses slug sort style.

## Setup
First, create first documentation section in content folder, and add _index.md to it containing the following frontmadder. For this documentation, we will create docs folder.
```toml
+++
title="Your Documentation Main Section's Title"
template="doc.html"
page_template="docpage.html"
+++
Further content for the main documentation section
```

Now, you can create pages with md extention in your documentation folder. Any page within the first section (docs) in this case, is a part of the first section (docs).

You can write documentation as you normally would do, for example:
```toml
+++
title="Page1"
+++
Hello!
```

## Sections
You can also have subsections inside the main one. However, you cannot have more than 1 sections inside a subsection. For example, you can't have docs/a/b, but you can have docs/a, and docs/b, etc.

Lets create a subfolder name test inside the main documentation section (docs) in this case.

In the test folder, we will add _index.md with the following content.
```toml
+++
title="Testing"
render=false
+++
```

Note that we set `render=false` in the subsection. This is because _index.md will not generate itself in the build.

After that, you can write a short description related to that subsection. Do not write long texts in this file, because this will display at the top of the list containing pages related to this section.
```toml
+++
title="Testing"
render=false
+++
I am a test section, so you know.
```

You may then create pages in the test section usually as pages in the main documentation section.

## Variables
The following variables may be required to set in the main documentation section if the section isn't named `docs`. All below variables are set in extra object of the main documentation section.
* `section_path`: the path to the main documentation section. Default: "docs/_index.md"