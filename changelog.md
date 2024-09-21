# UI Navigation theme changelog
## New on Saturday, September 21, 2024
* Added 2 new optional properties to navigation items. `key` and `title`. The key is to set the access key, for instance, H can be used so that navigation item can be clicked using Alt+H. Finally, title is used to set the title attribute on the navigation item so as description, similar to `title="Read the latest news!"`.
* Separated the blocks `header` and `nav`.
* You can now disable the navigation. To do so, do not set `nav` table in `extra`. The navigation skip link will also be automatically disabled. As such, "no navigation found" error will not be shown.
* Fixed blank lines in templates. To rebase the templates, it is recommended to use whitespace control, the dash (`-`) for the blocks and extends but it is not required.
* Post title and post description will now show sepretly.