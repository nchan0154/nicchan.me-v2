---
title: Adventures in HTML5 Canvas
date: "2017-05-10"
description: "Musings on struggling with HTML5 Canvas generative art."
tags:
  - animation
  - canvas
---

Recently, I was tasked with replacing a background video, created in Apple Motion, with an HTML5 canvas animation. Having never worked with canvas before, I was suprised at how fundamentally simple the canvas API was, though I can't say it was 'easy' to work with neccessarily. Many hours of blood, sweat and tears later, I was able to produce something very close to the original video.

<p data-height="600" data-theme-id="0" data-slug-hash="OmjvZJ" data-default-tab="result" data-user="nchan0154" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/nchan0154/pen/OmjvZJ/">Animated Dividers</a> by Nic Chan (<a href="http://codepen.io/nchan0154">@nchan0154</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Canvas Basics

The canvas API is fairly primitive in that once you draw a shape, you can't really go back and edit it. This is the exact opposite of CSS or Javascript animation frameworks like GSAP, where you can reach in and grab a particular element with the targeted use of selectors. Because of this, the typical animation flow goes something like this:

1. Clear the canvas
2. Draw the canvas elements
3. Modify the elements that are to be animated
4. Grab the next frame, typically with requestAnimationFrame

It's pretty amazing to think that with every frame of this animation, we're drawing the same lines over again, eh? <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">MDN</a> was an invaluable source for me when I was trying to understand this process.

## On Algorithmic Perfection

I spent a lot of time trying to come up with the perfect formulas for calculating things like opacity, speed, and scaling. If we were modelling a real life situation, getting an accurate algorithm would be top priority, but since we are merely using these functions to generate a visual representation, there is a lot more freedom! Getting something that just 'feels right' is perfectly acceptable, and in some cases, preferred, over trying to manually calculate that perfect bezier curve.

## On Persistence

{% cloudinaryImage 'canvas-lines.PNG', 'Canvas Lines', 1129, 476, "(min-width: 70em) 45rem, (min-width: 62em) calc(90vw - 15rem), 90vw", "lazy", ""%}

I admit I'm a little ashamed to post this, but above is my first attempt at trying to generate a pattern of network lines with Javascript. It wasn't even in the same ballpark as what we needed, and I used exactly none of the code in the final product. Regardless, it's an important reminder that experimentation is necessary - you will probably fail your first few attempts when attempting a new thing, and that's perfectly normal.

If you want to see it in action, you can check out the final animation out on the <a href="http://darkshore.website/">Darkshore Website</a>.
