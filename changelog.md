# UI Navigation theme changelog
## New on Monday, September 23, 2024
* Added multilingual support.

## New on Sunday, September 22, 2024
* Moved post_preview.html to mcs directory inside the templates for future macro files. It also got renamed to post.html.
* Documented macro functions.
* Default feed filename is now rss.xml.
* Added possible markdown tests in test4 post.
* Added `show_post_authors` macro in post macro to display one or more authors depending on the page authors set, or config author if the page doesn't have authors set, or none.

## New on Saturday, September 21, 2024
* Added 2 new optional properties to navigation items. `key` and `title`. The key is to set the access key, for instance, H can be used so that navigation item can be clicked using Alt+H key. Finally, title is used to set the title attribute on the navigation item so as description, similar to `title="Read the latest news!"`.
* Separated the blocks `header` and `nav`.
* You can now disable the navigation. To do so, do not set `nav` table in `extra`. The navigation skip link will also be automatically disabled. As such, "no navigation found" error will not be shown.
* Fixed blank lines in templates. To rebase the templates, it is recommended to use whitespace control, the dash (`-`) for the blocks and extends but it is not required.
* Post title and post description will now show sepretly.