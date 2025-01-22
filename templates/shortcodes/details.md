<details
{%- if class %} class="{{ class }}" {%- endif %}
{%- if name %} name="{{ name }}" {%- endif %}
{%- if open is defined and open == true %} open {%- endif %}
{%- if title %} title="{{ title }}" {%- endif -%}
>
<summary>{{ summary | default(value = "") }}</summary>

{{ body }}

</details>