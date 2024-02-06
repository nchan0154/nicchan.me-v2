---
title: "Features I Want for Shopify"
date: "2019-05-08"
description: "The features I think Shopify needs the most to improve developer experience."
tags:
  - accessibility
  - featured
  - shopify
---

In my role as a developer for [Alt and Dot](https://www.altanddot.com/), I work on both building custom themes from scratch as well as improving existing stores. As an agency, we often have long term relationships with merchants, maintaining and scaling their site as they grow. This list of Shopify features that I find myself wishing for on a regular basis is informed by that experience of working with many merchants over a long period of time, and the shared pain points we have observed as a Shopify-focused agency.

## Multiple section instances

For those who might be unfamiliar, the Theme Customizer is basically Shopify's answer to a page builder. In the actual admin, most pages just present you with a <abbr title="Rich Text Editor">RTE</abbr> field and a few other settings, but through the customizer, developers can define 'sections' with their own fields or repeatable blocks to allow merchants to customize complex content and layout on their pages.

Don't get me wrong, I adore sections and the addition of them has been the single greatest addition to Shopify since I started working with the platform. The downside is that for now, only homepage sections can be added and reordered. Other pages must have their sections predefined and placed in order within the template code. Even more frustrating is that while sections on the homepage are unique, sections on other pages are shared. So while you may be able to have multiple instances of say, a hero image component on the homepage, if you wanted to have hero components on a 'Contact Us' and 'About Page' with different content, you would need to define separate sections for this. There are different techniques to work with this limitation, but all involve duplication of the schema, and it requires developer intervention for the creation of new customized pages, even if it's only to copy and paste sections to create new instances. Allowing the full use of sections on all pages would open up a ton of new interesting possibilities for designs without having to do anything hacky like processing the <abbr title="Rich Text Editor">RTE</abbr> output or adding shortcodes.

## Additional section features

In addition to rolling out sections for all pages, it would be fantastic to be able to define some additional settings for sections, like what pages they can be added to. A list of product features might not make sense on non product pages, but it would still be nice to have it as a section so it can be reordered on the product page. It would also be useful to be able to define whether or not a section's content is 'global' or not. For example, you may have a list of products currently on sale on some pages in your store. In this case, it wouldn't make sense to have it be a part of your layout files, but you might want the content of that section to be the same any time it is used, and if it is updated on one page, it would be updated on all pages that it is present on.

## Redesign the Image Picker

While I'm on the topic of the the customizer, I think the image picker could use a redesign. I understand the desire to show the content being edited next to the images, but whenever I need to reuse an older image, the small image panel isn't much help. A search bar would go a long way in helping to track down existing images, and it would be even better if there was an option to look through past images in an expandable window, as seems a bit ridiculous to me that on my large external monitor, I can only see 9 thumbnails at a time. I often see editors re-upload the same image to save themselves the trouble of trying to find an older image, which means customers don't get the performance benefits of things like caching.

{% cloudinaryImage 'shopify-customizer.PNG', "Shopify's Image picker UI, there is a tiny sidebar for images and the page UI takes the rest of the ginormous amount of space.", 1920, 937, "(min-width: 70em) 45rem, (min-width: 62em) calc(90vw - 15rem), 90vw", "lazy", "" %}

## SVG Uploads

My team have heard me say this enough, but Shopify, it's 2019, please give us SVG upload support in the image picker! Vector-based illustrations and icons are a huge trend that is not going away any time soon, and it would be nice to allow people to upload crispy logos.

## Option to force alt text

One final thing I would like for the image picker is the ability to force an image to have alt text added before it can be saved. I look forward to a day where we can leave image carousels in the past, but until we reach a point where clients stop putting critical information exclusively in images, we need processes to ensure that we are not leaving screen reader users out of the equation. Right now, adding alt text is very much optional and it can be easily forgotten by a site editor.

## First Party metafields support

Ask any Wordpress developer what their favorite plugins are, and you'll find that Advanced Custom Fields is near the top of the list. ACF is a fantastic plugin that lets a developer add fields directly to the admin panel, allowing editors to edit complicated page layouts without fiddling with HTML or page builder plugins. Shopify's answer to this is ‘metafields’ — nearly all Shopify objects let you assign metafields to them. Metafields are often used by apps to extend Shopify's features, but they can also be used to populate unique content for specific products, pages, etc. For example, if you wanted to add an instructional video to your product pages, you could define a metafield for the embed code, and pull it in on the product templates.

The downside with Shopify is that there is no way to pull in metafields directly into the admin pages, you must use an external app. Because of the necessary authentication steps required for an external app, editing metafields can be a time consuming and annoying process. Some apps only let you edit the metafields that were created within that same app, which ties you to that particular app, but apps that show all metafields can show information that is unnecessary for the editor, like configuration objects for other app functions. Having the ability to define metafields that can be shown directly within the admin panel with a corresponding field type would significantly improve the editing experience for merchants.

## Improved Git workflow

One thing I enjoy about Shopify is the way they approach configuration. A store's settings (everything from what colors are used to the content for the sections) is stored in a single `config/settings_data.json` file, which makes migration and backups easier as you don't need to keep track of a local and remote database. It's treated as any other file, which means that you can edit locally and have ThemeKit sync up your changes remotely, or pull down remote changes from the live store whenever needed. However, when it comes to keeping track of this file in Git and managing it within the context of an active store, we've hit several barriers that make this a lot more unwieldy than we'd like.

Much of Shopify's theme tooling has been built around the use case of building a theme that would be used by many stores or sold in the theme store. In cases like this, the developers can easily manage the theme. They do not need to be concerned with a specific store's configuration, and they can treat their repository as a single source of truth and push updates to the theme store.

In the case where a developer is actively maintaining an existing store, managing version control becomes a lot more difficult. Most developers will have a seperate theme that is forked from the currently live theme where they will be implementing new features. To track this in Git, you might have the master branch correspond to the currently live theme, and new feature branches being created to correspond to themes that are not currently live but can be previewed through the admin. While a developer is working on a new feature, the merchant may install and configure a bunch of new apps that directly modify the theme code, and rearrange the homepage sections to reflect a new promotion. The developer needs to be actively pulling all these new changes into Git, or they might be lost when the feature branches are merged. Even worse, a developer may actively be trying to stay on top of these changes, but still potentially lose client content when it comes to merging due to the way JSON works.

Below is a abridged snippet of code that demonstrates how Shopify stores data for content blocks within the `config/settings_data.json` file. The numbers represent longer IDs that have been cut short for demonstration purposes, and each block represents a slide in a carousel.

```
"1": {
  "type": "carousel",
  "blocks": {
    "1": {
      ...
    },
    "2": {
      ...
    }
  },
  "block_order": [
    "1",
    "2"
  ],
}
```

As you can see, they are using a JavaScript Object for the block settings, and a separate `block_order` Array to determine the what order the blocks come in. We recently had a case where the client added a slide to the homepage while we were working on a separate feature branch. When it came time to merge feature branch with the master branch, the JavaScript object with the blocks was reordered as there is no guaranteed order on key/value pairs. As a result, the merge ended up creating an invalid configuration object with two duplicate slides and we ended up 'losing' a slide.

Most developers (and Shopify themselves) utilize the approach of completely ignoring the `config/settings_data.json` file in Git to avoid these hassles. This approach works if you are not servicing any particular store in general and are just developing themes, or if you are managing a store which lacks complex custom features and does not need to be updated often. But for large active stores, particularly Shopify Plus stores, better support for things like version control and workflow tooling are necessary to prevent potentially costly mistakes in the form of broken deployments and data loss. I've often encountered stores where developers are working directly on the live theme with no version control whatsoever, which can lead to disastrous consequences for the merchant. Improving the developer experience would allow developers to provide better service to merchants, and cultivate a healthier developer ecosystem around the Shopify platform in general.

## Highlight accessible themes and apps

Shopify has made great strides in improving accessibility in recent years, and I am very glad that they have a team devoted to working on improving the accessibility of their platform and their official themes. Currently, Debut and the Shopify Checkout paired together make for an experience that has been well tested by their accessibility team, so if it is a hard requirement that your store complies with the WCAG 2.1 guidelines, the Debut theme is a great place to start. Shopify also has a [library of liquid snippets](https://shopify.github.io/liquid-code-examples/) that serve as a great reference for anyone looking to implement common e-commerce patterns in a semantic and accessible way.

Shopify’s commitment to writing accessible code is great, but for now, third-party themes and apps remain a completely different ball game. The Shopify team have expressed that they are working on a set of guidelines for themes and apps to adhere to, and while I am very excited for this possibility, there’s not much out there right now to help well-meaning merchants find an accessible theme. Apps can be especially problematic, as a fairly accessible experience can be rendered completely inaccessible by something like a poorly-written email capture modal that offers no way to close it through keyboard access alone.

During the transition period for between now and whenever the accessibility guidelines are rolled out, it would be great to see functionality that would highlight more accessible themes and plugins within their respective stores, such as a special tag or something along those lines. Adding something like this would encourage theme developers to make accessibility a priority now, rather than waiting till when the guidelines come out and doing the bare minimum to meet them. Many merchants these days are more concerned about accessibility (even if only to avoid a facing a lawsuit), but right now, they lack the ability to make decisions about it without the guidance of an experienced technical person.

## Closing Remarks

I hope that what you take from this article isn’t ‘Shopify is a crappy platform that needs a ton of fixes to be usable’. On the contrary, I think Shopify is a great platform that has continued to implement features to improve both the developer and merchant experience. I would like nothing more than to have solutions to all these problems announced at this year’s Shopify Unite conference so as developers, we can better meet the needs of not only our clients, but their customers as well.

If you're also a Shopify dev, I'd love to hear from you! What features would you like Shopify to implement?
