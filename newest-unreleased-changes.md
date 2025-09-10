## 0.11.2
- Added SEO tags. **warning**: the meta block has been replaced by `seo` block.
- You can now ignore errors! Currently `nojs` can be ignored, which is No Javascript usage. Use the `config.extra.ignore_logs` array.
- Added the ability to toggle the usage of JavaScript for both config and per-page frontmadder option. Please note that this will restrict the usage of some shortcodes. To use it you need to either turn this on for the specific page you add the shortcodes that require this switch on or ignore the `nojs` in log.
- Added ability to add heading ID to documentation pages frontmadder. Falls back to title if not set. This value will always be slugified regardless of whether you provided a slugified value or not.
- Added `link_title` frontmadder to separate between the title and the friendly title for the display in listings. Falls back to title if not set.
- Added `linktitle` content variable.
- Details shortcode has received significant changes. Added name, title, and class attributes.
- Added `overflow: auto;` to `pre` element to allow horizontal scrolling when content overflows.
