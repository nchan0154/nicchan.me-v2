---
title: "My white whale: A use case for will-change"
date: "2022-02-03"
description: "what the heck does will-change even do anyway"
tags:
  - animation
  - css
  - performance
  - featured
---

I've been a professional web developer for seven years now, which has given me a little bit of time to explore the big wide world of CSS. I might not reach for rarer CSS properties such as [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) or the [CSS multicol properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol) every day, but they are a beloved part of my toolkit that serve their purpose well.

In all these years, one property I haven't been able to find a use case for is `will-change`. To give a bit of an introduction to what `will-change` is, Sara Soueidan wrote an [excellent explainer](https://dev.opera.com/articles/css-will-change-property/) which is well worth the read.

## A very quick explainer

In short, if we imagine the browser as a large art or design program, using `will-change` promotes that element to its own 'composite layer.' That layer can be hardware accelerated; that is, be rendered using the more powerful GPU (Graphics Processing Unit) instead of the default CPU (Central Processing Unit). Knowing that the element will change over time lets the browser isolate that element, and should improve rendering performance. `Will-change` does come with the caveat that it should be used sparingly, only on elements that really need it. Offloading too many things to the GPU can slow down the page, the opposite of what we want.

## The epic journey

With all that in mind, the `will-change` property landed in major browsers in August 2015, and I've been on the lookout for when to use it ever since. It might seem self-evident to apply it to commonly animated properties such as transform or opacity, but the [browser already classifies them as composite properties](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/), thus, they are known as the few properties that you can already expect decent animation performance from. So, heeding the advice of the great developers who came before me, I was cautious and waited for the right opportunity to come along.

I hoped that `will-change` would solve the [Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=521364) where vertically centering a element using `transform: translateY(-50%)` would result in a blurry element if the calculated height was an odd number of pixels, but our friend `will-change` let me down there, it had no effect whatsoever. (I typically use Flexbox to avoid this issue now, as it sadly, still exists, seven years later).

Over time we even began to see articles critiquing `will-change` appear. [GreenSock, a popular JavaScript animation library, published a piece](https://greensock.com/will-change/) noting how the implementation of `will-change` caused animations that had worked perfectly in the past to appear blurry, and the recommended solution (setting `will-change: auto`, effectively, a reset) seemed contrary to the proposed behavior of `will-change`.

In my mind, it was around this time where `will-change` became something to be wary of. For the most part, I wasn't really writing animation code that was very complex, and could rely on well-tested libraries such as GreenSock or documented techniques such as [FLIP](https://css-tricks.com/animating-layouts-with-the-flip-technique/) for silky smooth animations. Browsers were only getting better at rendering performance, whenever I popped open Chrome's [paint flashing tool](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas) to ensure that stuff was on its own layer when it needed to be, things were typically looking okay out of the box. I'd reach for it sometimes to try and fix the occasional rendering bug (usually as a cudgel after `translateZ(0)` and `backface-visibility: hidden` failed) but it certainly never was the silver bullet I hoped it would be.

## Get to the point already

But that all changed this week. I woke up one morning to find that a client had noted that the link animation was looking a little rough around the edges in Safari. Being a Windows gal, I fired up the good ol' BrowserStack to take a look, and saw this. (Forgive the screencap quality, it is a recording from Browserstack after all!)

<img src="https://res.cloudinary.com/nicchan/image/upload/v1643852472/linktext.gif" alt="Animation of a link being hovered, a purple background extends from left to right, but as the mouse is moved away, the animation reverses from right to left imperfectly, leaving a little purple block on the right side of the link" width="195" height="56" loading="lazy" />

My first reaction was surprise. Wasn't scale supposed to be one of the safe properties? Nonetheless, I reached deep into my toolbox, for the cursed artifact that I had never reached before. I may have even held my breath a little as I typed `will-change: transform` and waited for my browser to reload the page.

<img src="https://res.cloudinary.com/nicchan/image/upload/v1643852472/linktext-2.gif" alt="Animation of a link being hovered, a purple background extends from left to right, and recedes as expected when the link is no longer being hovered" width="182" height="56" loading="lazy" />

It worked! I dusted off my hands and continued on with my day, excited to have finally found my white whale, a use for the will-change property.

## The mystery continues

But wait, there's more! I know I can't leave you all without the juicy details. What went wrong, and why was will-change able to help? In this particular codebase, we had a link, and a pseudo element is animating from a horizontal scale of 0 to 1 when the link is hovered (snippet below lightly modified for brevity). I tried [dropping everything into a Codepen](https://codepen.io/nchan0154/pen/abVNYNo) to see if I could reproduce it, but interestingly enough, it works fine without will-change in the default Codepen view, and shows up only in the debug view, the only view on Codepen without their wrapping code (which I cannot share).

```css
.link::before {
  content: '';
  display: block;
  position: absolute;
  transform: scaleX(0)
  transform-origin: left-center;
}

.link:hover::before {
  transform: scaleX(1);
}
```

In a pre-pandemic life, I might have tried harder to get the bottom of this mystery, but alas, it was everything I had in me to type up this blog post, which I've uncharacteristically hammered out in a single sitting. Perhaps I will never know why `will-change` was able to save me in this case. I'd be extremely eager to hear if other folks have had experience with the `will-change` property smoothing any rendering issues, my inbox is open!

PS: Happy new year of the tiger. May 2022 be kinder to us all.

## Further examples (Last updated February 27, 2022)

Since publishing this article, I've found some other folks who have had luck with will-change resolving rendering issues. Thanks to the folks below who allowed me to share their discoveries here.

Alex Riviere noticed that when using Chrome 98 with a Macbook Pro, the last cloned item in [this infinite scrolling section](https://codepen.io/fimion/pen/jOamJaE?editors=0010) would cause the last element not to render. Adding `will-change: transform` fixes this.

Brian Cross noticed a recent issue with Safari 15 where GSAP transform animations that had worked correctly in previous versions were now [leaving behind artifacts](https://codepen.io/BrianCross/pen/wvqZPEq). [The official GSAP team's response](https://greensock.com/forums/topic/30156-safari-v15-rendering-bug/) was to add `will-change: transform` to the problematic element.

Justin Veiga came across [an issue with Chrome on MacOS](https://codepen.io/jvwrx/pen/KKZNLeZ/07caad5021a72b787ea3e8567b9d7d30), where a photo enlarging animation done with `transform: scale()` would display with noticeable jank. Adding `will-change: transform` resolves this.
