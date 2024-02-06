---
title: Animated CSS Dividers
date: "2016-10-02"
description: "Using CSS to create simple gradient animations."
tags:
  - animation
  - css
---

Having grown up in the age of blinkies, I have a special fondness for animated elements. However, there is undoubtedly a certain level of restraint required when implementing animation today, too much and the page feels overwhelming very quickly. I'm particularly fond of this simple divider animation that I implemented for the <a href="/projects/hexxel">Hexxel landing page</a>.

## The Details

Since we are unable to transition between gradients using CSS, some trickery was required. For the animated bar part, I set the background to a linear gradient between 3 colors, then sizing up the background to 200% in width, but 100% in height. To achieve the effect of a gradient transitioning, I transformed the background position back and forth.

The little nodes on the end of the divider are nothing special, simple pseudo-elements, but they certainly add to the network theme of the site, don't you think?

<p data-height="300" data-theme-id="0" data-slug-hash="PGJErg" data-default-tab="css,result" data-user="nchan0154" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/nchan0154/pen/PGJErg/">Animated Dividers</a> by Nic Chan (<a href="http://codepen.io/nchan0154">@nchan0154</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
