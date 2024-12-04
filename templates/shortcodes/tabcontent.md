{%- if id is not defined %}
{{- throw(message = "Did you forget to set the `id` parameter?") }}
{%- endif -%}
<div class="tab-content" id="tab-content-{{ id }}" style="display: none;">

{{ body }}

</div>{% if visible is defined and visible == true %}<script>switch_tab("{{ id }}");</script>{% endif %}