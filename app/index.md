---
layout: default
title: Mauro Carabotii, Developer & Cyclist
---

Mauro Carabotti

Hello here I tell about my life

<article class="post_links">
{% for post in site.posts %}
- <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
</article>
