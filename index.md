---
title: materials
---

# materials

Materials for some seminars

- [Paper Review](pr/)

## Files

<ul>
{% assign files = site.static_files | sort: "name" %}
{% for f in files %}
  {% unless f.path contains '/pr/' or f.path contains '/.github/' %}
    <li><a href="{{ f.path | relative_url }}">{{ f.name }}</a></li>
  {% endunless %}
{% endfor %}
</ul>
