{%- if summary is not defined %}
{{- throw(message = "`summary` parameter is required") }}
{%- endif -%}
<details{% if open is defined and open == true %} open{% endif %}>
<summary>{{ summary }}</summary>

{{ body }}

</details>