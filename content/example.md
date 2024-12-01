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

Installation:
{{ tab(name="Windows", id="1") }}
{{ tab(name="Android", id="2") }}
{{ tab(name="Web Browser", id="3") }}
{% tabcontent(id="1", visible=true) %}
### Windows
- Click on the EXE file.
- follow the prompts
{% end %}
{% tabcontent(id="2") %}
### Android
- Click on APK file.
- Click install button.
{% end %}
{% tabcontent(id="3") %}
### Web
- Open the website.
- Use it.
{% end %}