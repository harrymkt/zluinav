# UI Navigation
A Zola theme designed for accessibility rather than visual.

## Features
* Blog with pagination enabled.
* Custom navigation, can be set via `config.extra.nav`.
* Customizable extrahead, header, and footer by base templates.

## Extra variables
Can be accessed using `extra` object.

### Page frontmadder extra
The following variables are to be set in the `extra` frontmadder in your page or section.
* `include_pagination`: toggles whether the pagination should be enabled on the current. This variable can only be used in sections.
