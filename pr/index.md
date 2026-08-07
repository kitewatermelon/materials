---
title: Paper Review
section: pr
---

# Paper Review

<button id="sort-toggle" style="margin-bottom:1em;"></button>

<ul class="sortable-list">
{% assign pdfs = site.static_files | where_exp: "f", "f.path contains '/pr/'" %}
{% for f in pdfs %}
  {% assign d = site.data.dates[page.section][f.name] %}
  <li data-time="{% if d %}{{ d | date: '%s' }}000{% else %}0{% endif %}"><a href="{{ f.path | relative_url }}">{{ f.name | remove: '.pdf' }}</a> <span style="color:#888;font-size:0.9em;">({% if d %}{{ d | date: '%Y-%m-%d' }}{% else %}-{% endif %})</span></li>
{% endfor %}
</ul>

<script src="{{ '/assets/sort.js' | relative_url }}"></script>
