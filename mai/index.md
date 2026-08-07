---
title: mai
---

# mai

<button id="sort-toggle" style="margin-bottom:1em;"></button>

<ul class="sortable-list">
{% assign files = site.static_files | where_exp: "f", "f.path contains '/mai/'" %}
{% for f in files %}
  <li data-time="{{ f.modified_time | date: '%s' }}000"><a href="{{ f.path | relative_url }}">{{ f.name }}</a> <span style="color:#888;font-size:0.9em;">({{ f.modified_time | date: '%Y-%m-%d' }})</span></li>
{% endfor %}
</ul>

<script src="{{ '/assets/sort.js' | relative_url }}"></script>
