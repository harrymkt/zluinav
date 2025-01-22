+++
title = "Details"
+++
# details.html
This shortcode allows you to add HTML details tag. Always use % signs.
- `summary`(string) required: The summary of the detail.
- `open`(bool) optional: Should details tag be expanded by default?
- `name`(string) optional: The name, useful to prevent multiple details from being opened at the same time.
- `class`(string) optional: The class attribute.
- `title`(string) optional: The title attribute.

## Example
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

## Name attribute example
```html
{%/* details(name="tm", summary="Test me") */%}
# Test
- item1
- item2
{%/* end */%}
{%/* details(name="tm", summary="Test me2") */%}
# Test2
- item1
- item2
- item3
{%/* end */%}
```

Output:
{% details(name="tm", summary="Test me") %}
# Test
- item1
- item2
{% end %}
{% details(name="tm", summary="Test me2") %}
# Test2
- item1
- item2
- item3
{% end %}