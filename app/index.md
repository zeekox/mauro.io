---
layout: default
title: Mauro Carabotii, Developer & Cyclist
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, nibh vitae commodo tristique, urna enim iaculis enim, eu eleifend turpis urna non mi. Suspendisse et orci libero. Sed vestibulum mauris et suscipit dictum. Nunc venenatis mi et ipsum malesuada, nec convallis neque tincidunt. Donec sit amet orci urna. In ultrices lacinia quam, vel tristique metus condimentum sit ame.:

### Blog
<article class="list_over">
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
- Some other link
- even more...
- ... and more examples
{% endfor %}
</article>

### Contact
<article class="list_over">

- Email
- Github

</article>