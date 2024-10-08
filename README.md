# UI Navigation
UI Navigation, or known as zluinav, is a Zola theme designed for accessibility rather than visual and made as easy as possible using templates and macros. Since I am a blind developer, I'd like to develop with accessibility as possible so visually impaired users can use them.

Zola is a fast site generator written in Rust powered by tera as its templating engine and has a powerful theme creation feature.

[Theme demo](https://harrymkt.github.io/zluinav)

This theme is licensed under the terms of the [MIT License](https://github.com/harrymkt/zluinav/blob/main/LICENSE.md).

## Features of zluinav theme
* Blog with pagination enabled; multiple blogs can be created by copying the blog directory in the content folder to the new directory for a new blog. This means that you can have multiple blogs in one site. In fact, Zola doesn't have its build-in posts, but it is possible using sections.
* Multilingual; build your site in multiple languages. By default, English and Burmese have been provided as demo.
* Custom navigation; can be set via `config.extra.nav`.
* Customizable extrahead, header, navigation, and footer by base templates and blocks.
* Fast; Zola generates within a few milliseconds. This is because not much CSS is used as well as JavaScript. Zluinav is built with HTML using aria whenever possible for accessibility with assistive screen reader. You can rebase the templates, should you wish to add your own CSS or JavaScript content.
* Copy code blocks; add code blocks which can then be copied using buttons and display the code language if available, helped by JavaScript.
* Variables; add variables to your page content to be replaced during the site generate.

## Installation
Using git:
```bash
cd themes
git clone https://github.com/harrymkt/zluinav.git
```
Or [download manually](https://github.com/harrymkt/zluinav/archive/refs/heads/main.zip) and paste in the themes directory.

Or, add to the submodule
```bash
git submodule add --name zluinav https://github.com/harrymkt/zluinav.git themes/zluinav
git submodule update --remote
```

In your config.toml file, add the following
```toml
theme="zluinav"
```
## Customization
For more customizable options and configurations, please see [documentation](https://harrymkt.github.io/zluinav/docs)