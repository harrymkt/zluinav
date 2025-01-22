{%- import "mcs/general.html" as general -%}
{%- if not ctx %}
{%- set ctx = page | default(value = section) | default(value = "") %}
{%- endif %}
{%- set nojs = config.extra.no_js | default(value = false) %}
{%- if ctx and ctx.extra and (ctx.extra.no_js is defined) %}
{%- set nojs = ctx.extra.no_js %}
{%- endif -%}
{%- if nojs and general::errorable(id = "nojs") == true %}
{{- throw(message = "This shortcode requires JavaScript usage to be enabled") }}
{%- endif %}
{%- if id is not defined %}
{{- throw(message = "Did you forget to set the `id` parameter?") }}
{%- endif -%}
<div class="tab-content" id="tab-content-{{ id }}" style="display: none;">

{{ body }}

</div>{% if visible is defined and visible == true %}<script>switch_tab("{{ id }}");</script>{% endif %}