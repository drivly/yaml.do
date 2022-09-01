---
icon: {{ icon }}
name: {{ site.github.project_title }}
description: {{ site.github.project_tagline }}
url: {{ site.github.url }}
api: {{ site.github.url }}/api
endpoints:
  types: {{ site.github.url }}/api
  list: {{ site.github.url }}/:type
  create: {{ site.github.url }}/:type/new
  read: {{ site.github.url }}/:type/:id
  update: {{ site.github.url }}/:type/:id/set?property=value
  delete: {{ site.github.url }}/:type/:id/delete
  import: {{ site.github.url }}/import/:url
type: https://apis.do
repo: {{ site.github.repository_url }}
---

# Hello World
