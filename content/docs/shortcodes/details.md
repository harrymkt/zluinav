+++
title = "Details"
+++
# details.html
This shortcode allows you to add HTML details tag. Always use % signs.
- `summary`(string) required: The summary of the detail.
- `open`(bool) optional: Should details tag be expanded by default?

Example:
```html
{%/* details(summary="Test me") */%}
# Test
- item1
- item2
{%/* end */%}
```

Output:
{% details(summary="Test me") %}
# Test
- item1
- item2
{% end %}