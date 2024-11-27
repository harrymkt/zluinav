<div class="tab-content" id="tab-content-{{ id }}" style="display: none;">

{{ body }}

</div>{% if visible is defined and visible == true %}<script>switchTab("{{ id }}");</script>{% endif %}