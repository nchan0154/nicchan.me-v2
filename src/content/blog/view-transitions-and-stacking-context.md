---
title: "View transitions and stacking context: Why does my CSS View Transition ignore z-index?"
date: "2023-10-28"
description: "Thankfully, there's a workaround!"
tags:
  - animation
  - css
  - featured
---

## The problem

Readers Of The Blog™ may know that I have been experimenting with the View Transitions API as a way to provide animations in my new portfolio site. Once I understood the [basics of how View Transitions work](https://daverupert.com/2023/05/getting-started-view-transitions/) (in Dave's words, think Animorphs), I found it relatively simple to get up and running with the default morph animation. In my case, I'm trying to replicate how an operating system will shrink and fadeout a window when you minimize it, within the same page. However, shortly afterwards, I noticed that there was a small issue, the animation was actually playing on top of the footer. Not ideal!

I know this can be hard to see at full speed, so I've quickly thrown together a little interface below so you can adjust the playback speed in browsers/feed readers that don't show a playback speed toggle by default. It's probably a little janky. My apologies.

<form data-play-video="site-video">
  <label class="contact-form__label">Video playback Speed</label>
  <div style="display: flex; gap: 1rem;">
    <input class="contact-form__input" type="number" value="0.5" step="0.1" name="playbackSpeed" max="2" min="0">
    <button class="button" style="flex: 1 0 8rem;">Play Video</button>
  </div>
</form>

<figure>
  <div class="video" style="aspect-ratio: 372 / 664; max-width: 23.25rem">
    <video controls id="site-video" class="video__embed">
      <source type="video/mp4" src="https://res.cloudinary.com/nicchan/video/upload/v1698457267/view-transitions.mp4">
    </video>
  </div>
  <figcaption>Video description: A website design with stacking windows, meant to emulate an operating system. When a window is minimized or maximized, an animation plays where the window shrinks and fades downwards/expands and fades in upwards, respectively. When this animation occurs, it covers the sticky footer, instead of appearing in behind it.</figcaption>
</figure>

Unsure of whether or not this was just my implementation, I tried to track down other examples in which this issue occurs. I was able to reproduce this in [Astro's demo for View Transitions](https://astro-records.pages.dev/) as well. Given that Astro got a nice little shoutout on the [Chrome Developer blog](https://developer.chrome.com/blog/astro-view-transitions/), I presume it meant someone from Chrome did take a look at the implementation at one point, so seemed to point something to do with the browser rather than developer error.

<form data-play-video="astro-video">
  <label class="contact-form__label">Video playback Speed</label>
  <div style="display: flex; gap: 1rem;">
    <input class="contact-form__input" type="number" value="0.5" step="0.1" name="playbackSpeed" max="2" min="0">
    <button class="button" style="flex: 1 0 8rem;">Play Video</button>
  </div>
</form>

<figure>
  <div class="video" style="aspect-ratio: 1090 / 830;">
    <video controls id="astro-video" class="video__embed">
      <source type="video/mp4" src="https://res.cloudinary.com/nicchan/video/upload/v1698457267/view-transitions-3.mp4">
    </video>
  </div>
  <figcaption>Video description: An album playing interface with an audio player stuck to the bottom of the viewport. When navigating between pages, you can see the animating items appearing over the audio player for the duration of the animation.</figcaption>
</figure>

If you couldn't spot the problem, here's a static screenshot of the demo at the exact point of failure as well:

<figure>
{% cloudinaryImage '56.png', "An album playing interface with an audio player stuck to the bottom of the viewport. There is a Franz Ferdinand cover overlaying part of the audio player.", 1090, 830, "(min-width: 62em) 38.25rem, 90vw", "lazy", "" %}
<figcaption>My computer really wants to load the Franz Ferdinand cover first.</figcaption>
</figure>

I sent out a few feelers in the ever-helpful [Shoptalk Show Discord](https://shoptalkshow.com/) and tried various things with no success, such as adjusting the z-index, transform and will-change properties on the animating elements, but without any success whatsoever. I ended up filing a [bug report for Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1496143), where the I was directed to this [Github issue](https://github.com/w3c/csswg-drafts/issues/8941) with a detailed explanation from Khushal Sagar, a Chromium engineer, which is worth checking out.

## The Workarond

Basically, here's my understanding of the issue, from a non-browser developer perspective. View transitions aren't actually moving your elements around in the DOM, the browser is doing secret work to take a snapshot of what the elements would look like as a flat raster image, and doing Animorphs Magic (Thanks Dave!) to morph between these images.

Paint order, the order in which your elements are painted, cannot be easily calculated without applying a complex algorithm, especially since many uses of View Transitions involve transitioning between pages. There isn't really a way to figure out the shared stacking context between two pages, because if we had to consider the z-index of every page simultaneously to account for every possible transition, our heads/computers might explode. The compromise that exists is that the browser tries to paint the elements in the following order (paraphrased from Khushal):

1. Paint all the view-transition-names in the old DOM, while respecting the existing order of these elements
2. Paint all the view-transition-names that exist only/are visible in the new DOM, while respecting the existing order of these elements. This goes on top of all the other things above.

You will note here that elements without a view-transition-name are not included in this paint order. I didn't have a transition name on my footer, as I had only worked on a single page, and footer had no animation at all. So, in order for my footer to be included in this paint order within this animation, I just had to stick a `view-transition-name` property onto the footer, even though it's not actually being transitioned.

If your use-case is slightly different and you are transitioning between elements that don't exist, whether it be due to an element being hidden with `display: none` or transitioning between pages with unique elements such as in the Astro demo, you will want to make sure that:

1. Your problematic sticky element has a `view-transition-name` property on it.
2. You are rearranging the order of the painted element with z-index, to make sure it appears on top of all your other animated groups.

This results in code that looks like this:

```
.myFixedFooter {
  position: fixed;
  view-transition-name: footer;
}
```

```
::view-transition-group(footer) {
  z-index: 100;
}
```

Initially, I was confused as to why things weren't working in the way that I expected. It felt not intuitive to apply a transition name to something I wasn't transitioning, and I wasn't sure why my z-index outside of the transition had no effect on the transition!

However, after reading through the explanation and finding the workaround, I'm personally okay with this limitation for my use case. Z-index + transitions has always been slightly iffy, and in this case, I'm just really glad there's a workaround.

<script>
  const forms = document.querySelectorAll('[data-play-video]');

  forms.forEach(form => {
    const id = form.dataset.playVideo;
    const video = document.getElementById(id);
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(form);
      const speed = Number.parseFloat(formData.get('playbackSpeed'));
      video.playbackRate = speed;
      video.play()
    });
  });
</script>
