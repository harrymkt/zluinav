+++
title = "Example"
+++
# Examples
## Audio shortcode
[Documentation](@/docs/shortcodes/audio.md).
{{audio(source = "https://www.kozco.com/tech/piano2.wav")}}

Enjoy the audio shortcode!

## Tab
[Documentation](@/docs/shortcodes/tab.md).
{{ tab(name="Tab 1", id="1") }}
{{ tab(name="Tab 2", id="2") }}
{{ tab(name="Tab 3", id="3") }}
{% tabcontent(id="1", visible=true) %}
## Content for Tab 1
This is the content for the first tab.
{% end %}
{% tabcontent(id="2") %}
## Content for Tab 2
This is the content for the second tab.
{% end %}
{% tabcontent(id="3") %}
## Content for Tab 3
This is the content for the third tab.
{% end %}