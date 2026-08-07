---
title: Paper Review
---

# Paper Review

<ul>
{% assign pdfs = site.static_files | where_exp: "f", "f.path contains '/pr/'" %}
{% assign pdfs = pdfs | sort: "name" %}
{% for f in pdfs %}
  <li><a href="{{ f.path | relative_url }}">{{ f.name | remove: '.pdf' }}</a></li>
{% endfor %}
</ul>
