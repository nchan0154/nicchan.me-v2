---
title: Tips for Focus Styles
date: "2021-01-28"
description: "A series of notes on focus styles, an assortment of suggestions for both designers who may be looking for information on how to design focus styles, as well as tips for developers on implementing them. "
tags:
  - accessibility
  - css
  - featured
---

Below are a series of notes on focus styles: an assortment of suggestions for both designers who may be looking for information on how to design focus styles, as well as tips for developers on implementing them. This article assumes you have a basic level understanding of what focus indicators are, and why they are important, and that you just want to level up your understanding. If you want a great overview of what a focus indicator is and why it is important, you might want to check out [this excellent article by Caitlin Geier over at Deque](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) first!

Unfortunately, [default browser focus styles may not be all that accessible](https://adrianroselli.com/2017/02/avoid-default-browser-focus-styles.html). In Firefox, the focus indicator is a 1 pixel wide dotted outline. In Safari, it shows up as a light blue ring. On sites where the brand color is a similar shade of blue, or even on a site where the background color is plain white, neither of these styles meet the [required contrast ratio of 3:1 for non text elements](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).

[Chrome pushed an update to their focus styles](https://blog.chromium.org/2020/03/updates-to-form-controls-and-focus.html) so that it displays both a solid dark color and a solid white ring. Although much improved, there are still certain cases where it may be difficult to perceive; for example, a black button on a white background would just appear as slightly wider.

As iffy as these styles may be for accessibility, you are technically not reponsible for the inaccessibilty of these styles. Your site can be fully compliant with the WCAG 2.1 (Web Content Accessibility Guidelines) yet have totally invisible focus styles, provided they are the ones provided by the browser. We really can do a lot better than that, and I would argue that anyone who cares about accessibility should go take that extra step rather than relying on inaccessible browser defaults. In any case, there are quite a few gotchas that often trip people up when designing and developing focus styles. Let's dive into some common issues with custom focus styles.

## The best focus styles are additive

When I was just starting out, I often received designs with no interactive states at all! In many cases, it was on me to come up with hover and focus states. This led to me applying the same styling for all these states. While this is certainly better than having no focus states at all, the best focus states need to work in conjunction with other states. This is especially critical for things like checkboxes, where oftentimes a designer might design a hover or focus state that only works when the input is unchecked, but is incompatible with the checked/selected state.

By treating focus states as additive, you gain another benefit — on slower internet connections and devices, users may use the focus state as an indication that yes, the control has actually been pressed. On sites that are slow with high Time To Interactive metrics, I often find myself confused about whether or not a site is usable yet, and having an interface with carefully considered states may alleviate some of this confusion.

## Rely on affordances

An 'affordance' is a feature or property of a design that suggests how it is supposed to be used. In web design, radio buttons and checkboxes are both UI patterns that allow a user to select options. Checkboxes allow for multiple items to be selected, and radio buttons offer a single choice amongst the options. While their exact appearance differs across browsers, default browser radio buttons are always round and checkboxes are square. Similarly, although focus styles differ between browsers, all of them are some form of outline, so it's best to design focus styles with this in mind.

I recently came across a case in the wild where designed focus styles that lack affordances were an issue for me. I've mocked up a recreation of the experience in the screenshots below.

<figure>
  {% cloudinaryImage 'focus-outline1.PNG', "Zoomed in viewport that features navigation with two links, the last of which is focused, and a cut off hero section with a title", 1223, 789, "(min-width: 70em) 45rem, (min-width: 62em) calc(90vw - 15rem), 90vw", "lazy" %}
  <figcaption>Initial viewport</figcaption>
</figure>

<figure>
  {% cloudinaryImage 'focus-outline2.PNG', "Zoomed in viewport where the previously unseen button in the hero section is focused. There is no outline, but the background color of the button has changed", 1224, 799, "(min-width: 70em) 45rem, (min-width: 62em) calc(90vw - 15rem), 90vw", "lazy" %}
  <figcaption>After hitting tab from the last navigation link</figcaption>
</figure>

This site had custom focus styles for their buttons, where the outline was removed and the background color of the button was changed. While the colors in question meet all contrast requirements, the button was not previously visible until the user scrolled, so it took me a bit of tabbing back and forth to realize what had changed. Users who rely on browser zoom may also encounter issues with this as well, as their viewport sizes may prevent them from seeing the previous unfocused state of the control. By relying on affordances and design conventions, we can ensure that the focus styles make sense out of context and that we aren't relying on the visual difference between the unfocused and focused state.

## Consider adding a little bit of breathing room

Designers often request that focus styles be removed because a thick ring that butts up against the control isn't the most visually appealing. For things like navigation links, you could consider adding padding to the link to ensure that there is some space between the outline and the content. This not only adds more breathing room to the design, but it also improves accessibility by increasing the tappable area of the control.

{% cloudinaryImage 'focus-outline3.PNG', "Side by side of two focused links, one with no padding and the other with some padding", 358, 109, "22.438rem", "lazy" %}

If tap target size isn't a concern or changing the padding isn't feasible, you could use the [outline-offset](https://caniuse.com/?search=outline-offset) CSS property, supported in all modern browsers. All you need to do is pass in an offset distance, such as `outline-offset: 0.25rem;`, and the outline will be drawn the specified distance away from the element. Alternatively, you could utilize multiple box shadows by having a very thick box shadow in the color you would like the outline to be, and layer a box shadow the color of the background on top of it! (I learned this trick from [Eric Bailey's very cool slides on focus styles](https://speakerdeck.com/a11ychi/if-its-interactive-it-needs-a-focus-style-with-eric-bailey?slide=48).

```
button:focus {
  box-shadow: 0 0 0 0.5rem white, /* background color here */
              0 0 0 0.75rem blue; /* outline color here */
  /* this results in a blue outline 0.25rem wide,
   offset 0.5rem from the element, as pictured previously! */
}
```

Another reason why you may wish to offset the focus: if you have a element against a background where the contrast ratio just barely meets the requirements, it can be impossible to find a third color for the outline that also meets contrast requirements against all adjacent colors. By adding an offset, you only have to worry about the contrast between one color, the background.

## Dealing with `overflow: hidden`

Sometimes, even default outlines may be unintentionally removed when the parent of the interactable control has `overflow: hidden` on it. This can happen on things like card user interfaces, where using `overflow: hidden` to clip overflowing content will also remove the outlines. You could try consider using a negative value passed to outline offset, such as `outline-offset: -.25rem;` or an inset box shadow (eg. `box-shadow: inset 0 0 0 0.25rem red;`) in order to render an outline without changing the css on the parent element.

## Getting an outline to hug the element

<div class="post-callout">
  <h3 class="post-callout__title">
    Note
  </h3>
  <p class="post-callout__text">
    The following text about the outline not hugging the element is no longer true as of Firefox version 88, Chrome version 94 and Safari 16.4. If you need to support older browsers, considering follow the advice below, but otherwise, you're good to go!
  </p>
</div>

Another reason why designers may request for the focus outline to be removed is because the default outline ignores rounded borders on elements. Thankfully, we aren't actually limited to using the outline property for custom focus styles! This issue can be solved by using box-shadow instead of outline to account for the border radius.

{% cloudinaryImage 'focus-outline4.PNG', "Side by side of two focused rounded buttons, one using outline and the other with box shadow. The link with box shadow has the outline curving along the rounded corners.", 556, 158, "(min-width: 42em) 34.750em, 90vw", "lazy" %}

## It's probably best to avoid using `outline: none`, even if you override focus styles

Certain CSS properties are overriden in Windows High Contrast Mode, including borders, background colors and box shadows. A lot of custom focus styles are reliant on using these three properties and hiding the outline. In order to support high default contrast mode, [Sarah Higley](https://sarahmhigley.com/writing/whcm-quick-tips/) advises that we don't remove the outline completely with `outline: none;`. Instead, we can set the outline color to be transparent, so that the outline is invisible when not in high contrast mode, but overridden correctly in high contrast mode, where the transparent color will be replaced with a color set by the user. You could preserve the existing outline styles with `outline-color: transparent;`, or define a width and style with `outline: 0.25rem solid transparent;`.

## Final Words

Focus styles are definitely something that should be considered from the beginning of the design phase. Because consistency and convention are key to designing successful focus styles, adding focus styles may not take that much more time to design and implement, but would add a lot of value in terms of making the interface useable for disabled users.

I certainly don't think this piece is either the first or last piece of writing on the subject of focus styles (curse you all for stealing the good focus related puns!), but hopefully it gets the gears turning in your head for possible focus style options. I invite you to read up on the articles featured within this post and below, and, as always, test with users!

## Further Reading

- [Focusing on Focus Styles](https://css-tricks.com/focusing-on-focus-styles/) by Eric Bailey
- [Indicating focus to improve accessibility](https://hacks.mozilla.org/2019/06/indicating-focus-to-improve-accessibility/) by Hidde de Vries
- [:focus-visible and backwards compatibility](https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/) by Patrick H. Lauke
- [Accessible Focus Indicators: Something to :focus on](https://www.deque.com/blog/accessible-focus-indicators/) by Aaron Pearlman
