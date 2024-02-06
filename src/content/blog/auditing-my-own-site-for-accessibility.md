---
title: "Auditing My Own Site For Accessibility"
date: "2019-04-12"
description: "How I retrofitted my portfolio to be more accessible."
tags:
  - accessibility
---

I launched the first version of this site well over 3 years ago, and it was one of my first fully completed code projects. Like many new self taught developers, I had built it as a demonstration of my skills to land clients and jobs, and to that end it has served me well. While I would occasionally add fixes to improve the user experience on older browsers, the basic design hasn't changed much over the years, and it essentially remains the same site that I launched back in 2015.

Over the years, as I learned more about web accessibility, and heard directly from disabled users giving feedback on my accessible Tumblr Theme, I began having the sneaking suspicion that my own site was probably not up to par. In 2018, I spent a lot of time focused on not only learning about accessible web practices, but also actually implementing accessibility improvements on client work, and now I finally feel ready to confront the skeletons in my own closet by tackling my own site.

Admittedly, I feared this day not because I felt I lacked the knowledge to implement certain accessibility changes, but because I felt that admitting any previous lack of knowledge would be perceived as a sign of weakness in a highly competitive industry. I toyed with the idea of wiping away all my past mistakes with a completely new design so I could pretend that I had always known the best way to build sites, but eventually I decided against this because 1. I still kind of like the design for this site and 2. I think it's more of an accurate representation to the way we build things on the web. Sure, we may not get it right the first time, or even the next few times, but the beauty of the web is that you get to go back and improve things over time. Everything is an ongoing work in progress, and we should embrace particular fact as a strength of the medium, not as a weakness. And on that note, feel free to continue reading to follow along on my journey to improving my own site.

## General

Right off the bat, I knew the color scheme was probably going to fail. While the body text, a deep navy, would definitely pass, I had some places where I knew the color contrast was too low, and my project pages had small transparent white text against a brand color that may or may not have been chosen with contrast in mind. Using [this fabulous tool, aremycolorsaccessible.com](http://www.aremycoloursaccessible.com/), I was able to input colors from my color scheme, and play with the toggles to find accessible alternatives and combinations. This tool is great because it not only tells you if your chosen colors are accessible, it also lets you go and tweak the color scheme directly on the same page, so you don't have to go back and forth between your graphics software and the browser.

{% cloudinaryImage 'a11y-2.PNG', 'aremycolorsaccessible.com screenshot showing a failed color scheme', 448, 558, "(min-width: 32em) 28em, 90vw", "lazy", ""%}

**Take Home Message**: Color schemes and contrast play a significant role in determining whether or not a site is accessible. Tooling can be extremely helpful for determining appropriate color schemes.

## Navigation

One easy accessibility win is adding a 'Skip to Main Content' link. This is a link which targets the main element on the page, allowing keyboard users to easily bypass tabbing through the whole navigation on each page. Most modern screen readers are smart enough to allow you to skip navigation elements if they are properly marked up, but this is still a nice thing to have for sighted keyboard users.

I ended up giving a solid background to my navigation on all pages (as opposed to a transparent background), so that I would eliminate the possibility that I'd choose a background that provided too little contrast for my navigation links. I also made sure that `aria-current="page"` was added to the currently active navigation link.
In addition, the existing hover and focus state of my navigation items needed improvement, as the current focus state relied solely on a color change. It is best not to rely exclusively on changing color in order to convey important information to the user, as certain types of color blindness can prevent people from easily detecting the change. I added an underline to the ensure that the currently highlighted nav item would not be missed.

<figure>
  {% cloudinaryImage 'a11y-3.PNG', 'Before and After screenshots of the old and new navigation', 526, 136, "(min-width: 38em) 32.875rem, 90vw", "lazy", ""%}
  <figcaption>
    Before: Low opacity white on light background? What was I thinking! <br />
    After: Increased contrast, consistent appearance on all pages.
  </figcaption>
</figure>

**Take Home Message**: Navigation is a crucial component to get right. Opt for visible navigation over hidden navigation if possible, and do your best to ensure that you can use the keyboard to navigate the menu by using clear focus states and appropriate elements and aria-roles when applicable.

## Homepage

I had taken the time to ensure that the homepage, with it's fancy scroll effect and all, still worked without JavaScript enabled. For sites with fancy animation where the elements load in on page scroll, it's common to set the initial state of elements to be animated with CSS, and then apply the transition with JS once the user has scrolled down to that section of the page. Because these transitions often involve transitioning from 0 opacity or transitioning elements from off the page, it's a good idea to set some kind of fallback method so that in case JS fails to load for some reason, your users can still interact with the page.

While I had progressively enhanced the whole layout, I had missed some basic semantics in the markup that would make a big difference to the experience of screen reader users. For example, look at the code snippet below:

```
<div class="tags__wrapper">
  <span class="tags__tag">Jekyll</span>
  <span class="tags__tag">Forestry</span>
  <span class="tags__tag">SCSS</span>
  <span class="tags__tag">Javascript</span>
</div>
```

Spot the issue? We should probably list these items out as an unordered list instead. Newer developers will often reach for the markup that is easier to style instead of choosing the element that is the most semantic, and this has a tendency to hurt not only screen readers, but any kind of robot/crawler, including search engines. Using semantic elements for list elements can allow screen readers to say the the total number of elements and allow for easy navigation within the list elements, and it is worth it to take the time to do a little bit of extra styling in order to make sure that the elements are read correctly when read aloud by screen readers.

One more thing to note about the homepage - consider the markup below:

```
<a class="button button--small" href="/projects/studio-ryte">
  Read Case Study →
</a>
```

Links that say things like 'Read More' or 'Learn More' are quite commonly seen across the web, but they can hurt scanability. Some screen readers offer the functionality of listing all links on a page. Vague link text or repeated link text can be confusing for users trying to scan for the link they want to navigate to when out of regular document context. Complicating things further, the title attribute is handled inconsistently between screen readers - some will ignore it completely and some read both the link text and the title attribute. We can provide context for screen reader users by adding screen reader text to the link, a trick I picked up from [Lindsey Kopacz's excellent blog!](https://www.a11ywithlindsey.com/blog) The corrected markup is as follows.

```
<a class="button button--small" href="/projects/studio-ryte">
  Read <span class="screenreader">Studio Ryte</span> Case Study →
</a>
```

**Take Home Message**: While the end result may all look the same to a sighted user, proper semantic markup gives you a ton of accessibility features for free. Consider the desired experience for your users and use the appropriate element based on that, not based on what is easiest to style.

## About Page

The about page features a resume section in addition to a contact form. Below is a sample of some of the resume markup in Liquid.

{% raw %}

```
<h2 class="resume__heading">Resume</h2>
<h2 class="subheading">Related Experience</h2>
{% for exp in page.experience %}
  <span class="resume__institution">{{ exp.institution }}</span>
  <span class="resume__title"> {{ exp.title }}</span>
  <span class="resume__bullet">&bull;</span>
  <span class="resume__date">{{ exp.date }}</span>
  <ul class="resume__description">
    {% for desc in exp.description %}
      <li>{{ desc.li }}</li>
    {% endfor %}
  </ul>
{% endfor %}
```

{% endraw %}

Right off the bat, we can see that I used two H2 tags in a row. 'Related Experience' is most definitely supposed to be a heading under 'Resume', and the two have separate classes with different styling to distinguish them visually, so the only cause I can think of is that I must have been copy and pasting from other parts of the project without really thinking about what heading level was appropriate in the context of the destination. 🤦

Screen readers allow users to navigate by heading levels, so having a clear document structure is necessary. With the markup above, it would appear that 'Resume' is a completely empty section to a screen reader user! We can fix this up by making 'Related Experience' an h3, and further improve readability by putting the position title, instution and date in a h4 to mark it as a heading before the list element below it.

{% raw %}

```
<h2 class="resume__heading">Resume</h2>
<h3 class="subheading">Related Experience</h3>
{% for exp in page.experience %}
  <h4 class="resume__point">
    <span class="resume__institution">{{ exp.institution }}</span>
    <span class="resume__title"> {{ exp.title }}</span>
    <span class="resume__bullet">&bull;</span>
    <span class="resume__date">{{ exp.date }}</span>
  </h4>
  <ul class="resume__description">
    {% for desc in exp.description %}
      <li>{{ desc.li }}</li>
    {% endfor %}
  </ul>
{% endfor %}
```

{% endraw %}

**Take Home Message**: Proper use of headings is essential for screen readers. Always evaluate what heading level is appropriate in the context of the resulting page. Be especially careful when using frameworks/component libraries that may abstract over the generated markup, it's easy to reach for the element that matches the design and not realize that you are using an incorrect heading level.

## Illustrations

The illustration section of my portfolio site is fairly simple in theory. Because the order of illustrations doesn't matter in this case, I have chosen to use [CSS Multi-Column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts) to create a Masonry style effect without loading any additional JS. Upon clicking an image, the image will open a modal that shows the full image and the title.

The modal was powered by [Lokesh Dhakar's Lightbox 2](https://www.lokeshdhakar.com/projects/lightbox2/) script, originally written over 8 years ago. The script used JavaScript to handle things that were difficult to do with CSS during that time period, like controlling the sizing and positioning of the image, and was ridiculously simple to set up. However, I realized the script failed on some basic accessibility issues, such as lacking alt text support, and failing to trap focus within the modal. An accessible modal should not only transfer focus to the modal when opened, it should also hide all other content to screen readers, and it needs to keep focus within itself until the element is closed. Otherwise, you can encounter an unpleasant situation where you can tab out of the modal, but the modal remains open, obscuring a keyboard user's current position on the page. I did some research by looking through [the project's Github issues](https://github.com/lokesh/lightbox2/issues/138), but it seemed like accessibility fixes weren't a priority for this version of the project, and would be better handled in version 3.

I decided that instead of submitting a PR to a project that wasn't actively being worked on anymore, I would find a new tool that would help me replicate the lightbox functionality. Additionally, I could kill two birds with one stone and take steps to remove my site's dependency on jQuery. Honestly, finding component libraries that are explicitly focused on accessibility and aren't tied to some other JS framework, whether it be jQuery, React, or something else, can be quite difficult. I find myself returning to [Heydon Pickering's Inclusive Components](https://inclusive-components.design/) and [Scott O'Hara's Accessible Components](https://github.com/scottaohara/accessible_components) time and time again whenever I need to find good examples of common UI patterns.

In this situation, I ended up using the [a11y-dialog library](https://github.com/edenspiekermann/a11y-dialog). I've used this library successfully on several client projects, and it exposes events that I need to dynamically generate the necessary markup. I like this library in particular because it comes with no styling - not a perk for most people, but this is great for projects when you need to match a client's designs and you don't want to spend hours overriding the highly specific CSS that often comes with these libraries! It uses the native `<dialog>` when the browser supports that element, and makes it work on older browsers that don't support `<dialog>` just yet.

I won't go into too much detail about my implementation, but there are a few things that are worth noting. I kept the modal trigger element as links to the larger versions of the images instead of a button, I like this as a form of progressive enhancement - if for some reason the JS fails, you can still see a larger version of the image by clicking on the link. I used flexbox on the contents of the dialog window, so that the title could be **before** the image in the source order, allowing the image to fall under the heading (a trick I picked up from [Heydon's article about cards!](https://inclusive-components.design/cards/)). I then used the order property to visually move the title below the image, as is more conventional when displaying art, so both sighted and screen reader users will experience a structure they are more familiar with. Using flexbox and the `:not(:empty)` selector allowed me to easily conditionally resize the image to occupy the full height if there wasn't a title (naming things is hard, as we all know). You can [visit this commit on Github](https://github.com/nchan0154/nchan0154.github.io/commit/42a26afd17dd736a46e25b04dc72f0d45e56cc91) to check out the code for the dialog.

<div class="post-callout">
  <h3 class="post-callout__title">
    Edit
  </h3>
  <p class="post-callout__text">
    <a href="https://www.scottohara.me/blog/2019/03/05/open-dialog.html">Scott O'Hara points out that the dialog element isn't quite functioning as intended</a> in certain popular browser and screen reader combinations, and that it's best to avoid the <code>&lt;dialog&gt;</code> element completely. In my code, I have replaced it with a <code>&lt;div&gt;</code> (horrified gasps echo around the room) with the role of dialog. In cases like this where the native support isn't that great, an appropriate usage of ARIA labels can help. Modal dialogs are a particular difficult component to build, and the incomplete/quirky browser support only makes it more difficult. While I'm not using modals for a critical element of my site, if you are using them for mission critical UI, consider testing with as many screen reader and browser combinations as possible as they all have their own unique quirks.
  </p>
</div>

**Take Home Message**: A single inaccessible dependency can render a site impossible to use for screen readers. Audit any UI libraries thoroughly before incorporating them into your project!

## In Closing

I hope this post has been somewhat helpful! Lately I have seen a greater push for web accessibility, and I wanted to contribute something that would provide a little more detail to those who already understand why accessibility is important, but are unsure how to begin implementing it. I'd like to close with some resources which have been incredibly valuable to me in my learning process:

- [Inclusive Components by Heydon Pickering](https://inclusive-components.design/)
- [A11y with Lindsey](https://www.a11ywithlindsey.com/blog)
- [Everything by Scott O'Hara](https://www.scottohara.me/code/)
- [The writings of Adrian Roselli](http://adrianroselli.com/tag/accessibility)
- [Video of Léonie Watson using various websites with a screen reader](https://www.smashingmagazine.com/2019/02/accessibility-webinar/)
