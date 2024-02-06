---
title: "Usability Testing Popular Shopify Themes"
date: "2020-01-20"
description: "A deep dive into the accessibility of the Shopify theme landscape."
tags:
  - accessibility
  - featured
  - shopify
---

In recent years, there has been a [sharp increase in the number of lawsuits filed in response to inaccessible websites.](https://www.essentialaccessibility.com/blog/web-accessibility-lawsuits/) As a developer who works primarily with Shopify, I have seen an increase in questions from merchants related to accessibility, some of them from merchants who were facing lawsuits themselves.

As Shopify is popular with small business owners who can't afford a custom-built store, I began to wonder about the state of Shopify themes. What sort of options were out there for a merchant looking to purchase an existing theme from the theme store, and what could I safely recommend to merchants so they could have an accessible storefront from the beginning? I decided I would conduct some **basic** accessibility testing of all the themes on the homepage of the theme store to get an overview of what the theme landscape looked like.

## Methodology

For this article, I chose to test the themes for a specific task using two testing methods. First, I would try to add a product to my cart and reach checkout with my monitor obscured using only the NVDA screen reader on Chrome, and then I conducted the same test with the display unobscured but with the keyboard only, no mouse, trackpad or other pointer devices. This could be described as a simplified version of a task-oriented walkthrough.

<div class="post-callout">
  <h3 class="post-callout__title">
    Disclaimer
  </h3>
  <p class="post-callout__text">
    Proper accessibility testing takes a long time. To be able to fully evaluate a website’s accessibility, it needs to be tested with actual users on a variety of browsers and assistive technology combinations, ideally against the <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1.</a> I only tested these themes on my own, for a single task, so take my findings with a grain of salt!
  </p>
</div>

The list of themes consists of every single theme on the [Shopify theme store](https://themes.shopify.com/) home page, pulled from some time in April. 32 themes were tested in total, and testing was completed sometime in May, so bear in mind that some themes may have been updated since then, especially with increased discussions about the Domino’s Supreme Court case.

Where a theme had more than one color preset, I opted to test the first one. Most themes have 3-4 presets and the difference between them usually consists of different configurations of fonts and colors. While I certainly think that the choice of fonts and colors can be very revealing in terms of demonstrating a developer's commitment towards accessibility, almost all themes allow the merchant to change the site's fonts, font sizes and color palettes; thus merchants are able to improve these kinds of inaccessible theme defaults. As a result, I did not conduct any automated testing for things like color contrast or font sizes on these demo stores, and I only focused on whether or not I could complete the task at hand.

If at any point, I lost track of focus for more than a few tab stops, I would consider the keyboard test a fail. Your users will not have enough patience to debug your website's problems, even if I personally continued trying in order to determine further issues with the theme.

## Testing Steps

1. Land on the homepage
2. Using the main navigation, try to navigate to a collection page. If the navigation contains any submenus, the collection should be selected from a submenu. Expandable elements are often coded incorrectly and do not consider anything beyond the mouse/trackpad experience.
3. From the collection page (essentially a page where multiple products are listed ), try to navigate to a product that is not the first product on the page.
4. If a product variant (size, color, etc) was available, try to select something other than the default variant. This is often where theme developers will try to implement custom form controls, which are prone to accessibility failures.
5. Add the item to the cart. While some themes contain 'Buy it now' buttons that immediately take you to checkout, a user may want to purchase more than one item, thus we should test the cart process.
6. Navigate to the cart (this may be a cart component on the same page or a separate page depending on the theme)
7. Review the order and press checkout. The test ends here, as the Shopify checkout is standardized and is rigorously tested for accessibility by Shopify.

## Common Points of Failure

When asked why they do not bother to make accessible websites, developers often complain that it is too difficult to make things accessible because of the many niche bugs that occur with particular screen reader and browser combinations. In my experience, this couldn’t be further from the truth. Of all the failures I encountered, not one was due to an edge case scenario with my browser/screen reader combination, and the vast majority of errors came from ‘low-hanging fruit’. These kinds of errors are not difficult to fix. Semantic HTML and appropriate use of CSS can resolve most of these issues without complicated hacks or dependencies. Below is a summary of the most common reason why themes failed, with some resources that can help you learn how to resolve these common issues.

### No Focus Styles

The vast majority of navigation failures for the keyboard only test were due to the fact I lost track of where the keyboard focus was immediately. The solution to this is as simple as **not** adding `*:focus { outline: none; }` to your code in order to display the default focus outline, but a nicely designed one can often be an easier sell in terms of clients wanting to retain a certain brand aesthetic, and be more visible than default browser options.

### Inaccessible Dropdown Menus

Many e-commerce sites contain menus that are displayed when the parent link is hovered. Not only do many themes neglect to show the menu on keyboard focus, they also neglect to consider the usability of this pattern for tablet users. Developers should consider whether or not a [disclosure widget style navigation](https://w3c.github.io/aria-practices/examples/disclosure/disclosure-navigation.html) is more appropriate in this situation. If other stakeholders insist on showing the menu on hover as opposed to click, consider using the [:focus-within](https://www.scottohara.me/blog/2017/05/14/focus-within.html) selector in order to allow keyboard-only users to at least be able to navigate the menus. (Disclaimer: if you have more than a few links in your dropdowns, definitely consider the disclosure widget pattern, as it may constitute a failure of [2.4.1 Bypass Blocks.](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)

### Not Hiding Off-screen Content Properly

A lot of themes rely on content that may be hidden initially to the user, and displayed upon interaction, such as dropdown menus, quickshop modals, and etc. These UI patterns are frequently animated in from their initial hidden state, with developers utilizing properties like opacity and transforms. Although changing these properties may hide content from a sighted user, it is important to also also ensure that this hidden content is also hidden for screen reader users and keyboard only users. [This is a great summary of various approaches](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html), but the gist is that `visibility: hidden` respects CSS transitions, and can be used in conjunction with the animateable CSS properties in order to hide content for all users.

During my testing there were many times where my keyboard focus got stuck in an off-screen hamburger menu, and I was forced to give up.

### Unlabelled Icons and Interactable Elements

Icons in interfaces are becoming increasingly popular, but unless they are clearly labelled for screen reader users, they can be extremely confusing to navigate. Many times, icon buttons came in groups (eg. social media links), so I was left trying to make sense of what “Clickable Clickable Clickable” meant. If you are implementing icon buttons or links, you can [label them for screen reader users](https://www.sarasoueidan.com/blog/accessible-icon-buttons/) without changing the design, but bear in mind that [icons are likely not as clear as you think they are.](https://twitter.com/mattcutts/status/1099901408965525504)

### ARIA mysteries

There were several themes where the well-meaning developer had attempted to use ARIA roles to supplement their markup. Unfortunately, ARIA is often not well-understood by developers, and incorrect use of ARIA can lead to mismatched user expectations. One theme had a mega menu where every link was marked up as a `role="menuitem"` within several levels of `role="menu"`s, resulting in every link being announced as ‘menu item submenu menu menu item submenu link [LINK NAME]’. This is extremely verbose, and an [incorrect use of the ‘menu’ and ‘menuitem’ roles.](https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html) If you aren’t 100% sure what ARIA is doing for your markup, it’s best to leave it out completely rather than botching what would have been an accessible experience. [The HTML spec](https://www.24a11y.com/2019/pouring-aria-into-the-html-element-specs/) has recently been updated to include a new ‘Accessibility Considerations’ section that can help you determine whether or not a certain role is applicable in your situation.

### Inaccessible Custom Form Controls

Many merchants sell products that have multiple ‘variants’. Different options like sizes or colors are presented as form options that a customer can toggle between. Developers often try to implement custom controls for these form options in order to maintain complete control over the way these form options look, but these attempts can cause accessibility issues in several ways. Below is a list of some of the ways in which these form controls failed:

- Options were not keyboard accessible due to use of unsemantic elements, rendering a user completely unable to select any options at all
- Custom form controls (most commonly, color swatches and image thumbnails) did not have any textual label, so screen reader users had no idea what they were selecting
- Custom `<select>` elements that resembled modal dialogs did not move focus appropriately or have keyboard interactions

By implementing custom controls, developers lose a ton of value offered by using proper form controls. Because the form state and submission process are dealt within proprietary JavaScript, instead of within the form itself, developers not only create additional work for themselves on the accessibility front, they also make it extremely difficult to introduce third party code (such as from apps or external developers) that can extend the functionality of a theme. This results in a theme that is more difficult to maintain, less flexible for merchants and a poor experience for disabled users.

Styling form controls have come a long way; a lot more is possible now, with strong consistency across browsers. Instead of potentially botching your own attempt at a custom form control, consider referencing examples of [styled form components](https://scottaohara.github.io/a11y_styled_form_controls/) and incorporating them into your work. For Shopify product variants in particular, a lot of common UI patterns like color swatches can be represented by [radio buttons](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button/) because of their ability to select a single option among a group.

### Bad Focus Management and Dead-end AJAX

AJAX cart interactions are extremely common in e-commerce these days, as they allow the customer to complete actions without having to wait for the page to reload. Unfortunately, far too many sites do nothing to manage the keyboard states. In the rare instance where I was able to reach the Add to Cart button, I would often hit the button excitedly only to find that nothing at all would appear to happen. What an anticlimactic experience! Sighted users would be able to see either a notification window or an AJAX cart modal/drawer pop up, but if the focus is not moved, screen readers experience no indication that anything has happened.

AJAX interactions aren’t the only place where we encounter issues like these. Many modern user interfaces tend to include complex interaction patterns such as modals, but many implementations will just toggle the visibility of the modal and fail to follow any of the guidelines for [keyboard interaction](https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-7). If they’re lucky, a keyboard only or screen reader user may eventually be able to tab their way into the target component, but you would be lucky to hold their patience for that long.

## Results Tables

Horizontal headers represent the developer of the theme, and vertical headers represent where in the testing process the first accessibility failure took place. The later on in the process, the “better” a theme is, but given that the process of purchasing an item is integral to an e-commerce store, anything below a “pass” should be unacceptable.

<dl>
  <dt>Navigational failures</dt>
  <dd>
    Refers to when I could not even navigate to a different page due to missing styles or inaccessible menu components.
  </dd>
  <dt>Product failures</dt>
  <dd>
    Refers to when I could not navigate to a product from the collection page or could not select a product variant.
  </dd>
  <dt>Add to cart failures</dt>
  <dd>
    Refers to when I was not redirected to the cart after adding the product to the cart, or any checkout-preventing errors within the cart.
  </dd>
</dl>

### Keyboard results

<table>
  <thead>
    <td></td>
    <th scope="col">Shopify</th>
    <th scope="col">Third-Party</th>
  </thead>
  <tr>
    <th scope="row">Navigation Failure</th>
    <td>0</td>
    <td>11 (42.3%)</td>
  </tr>
  <tr>
    <th scope="row">Product Failure</th>
    <td>0</td>
    <td>4 (15.4%)</td>
  </tr>
  <tr>
    <th scope="row">Add To Cart Failure</th>
    <td>1 (16.7%)</td>
    <td>6 (23.1%)</td>
  </tr>
  <tr class="row--success">
    <th scope="row">Pass</th>
    <td>5 (83.3%)</td>
    <td>5 (19.2%)</td>
  </tr>
</table>

### Screen Reader results

<table>
  <thead>
    <td></td>
    <th scope="col">Shopify</th>
    <th scope="col">Third-Party</th>
  </thead>
  <tr>
    <th scope="row">Navigation Failure</th>
    <td>0</td>
    <td>9 (34.6%)</td>
  </tr>
  <tr>
    <th scope="row">Product Failure</th>
    <td>0</td>
    <td>2 (7.7%)</td>
  </tr>
  <tr>
    <th scope="row">Add To Cart Failure</th>
    <td>3 (50%)</td>
    <td>11 (42.3%)</td>
  </tr>
  <tr class="row--success">
    <th scope="row">Pass</th>
    <td>3 (50%)</td>
    <td>4 (15.3%)</td>
  </tr>
</table>

## Analysis

I didn’t want to critique individual theme developers with this exercise, but I did notice that themes built by Shopify performed noticeably better than than third-party themes. While many larger third-party developers had frequently asked questions or pages on their websites about accessibility, these pages often had expressed superficial commitment, and placed the burden on disabled people to report all errors, without making any effort to make these pages themselves accessible. You can see what a predicament this places disabled people in, and it allows accessibility to be deprioritized by false statistics (ie. “We haven’t had any complaints about this!”)

On the other hand, Shopify’s accessibility team is small but mighty. [Scott Vinkle](https://twitter.com/svinkle) and [Devon Persing](https://twitter.com/devonpersing) are both wonderful people who are committed to advocating for accessibility beyond their roles at Shopify. The codebases at Shopify are an order of magnitude larger than those by the average theme developer, and the fact that Shopify still came ahead in these tests is a testament to both their hard work and Shopify’s increasing commitment to accessibility.

It’s vital for Shopify to continue to model best practices. When reviewing the source code for the themes, I observed that many theme developers would often copy the markup and JavaScript for complex components from a Shopify theme to use as a functional starting point for their themes. Because of this, Shopify’s theme accessibility efforts not only benefit stores that use Shopify’s own themes, but also, the themes built by developers who seek to emulate Shopify’s work.

Theme developers should not regard Shopify’s relative successes in accessibility as a case of ‘let’s bring on a single person to do all of the accessibility for us!” It should never be the burden of a single individual to ensure accessibility. Company-wide buy-in is necessary not only because it takes only one small error to render a site unusable, but more importantly, the people who do work that falls under the umbrella of ‘Diversity and Inclusion’ should not be placed in a position where they are seen as constantly rejecting and critiquing the work of other people in the company. When we move beyond this idea of just ‘compliance’ and integrate accessibility holistically into the entire process of building things, we might finally be able to move the field forward.

Finally, let’s revisit the initial question. What sort of options are out there for a merchant who is looking for an accessible theme? Scott tells me that so far, [Debut](https://themes.shopify.com/themes/debut/styles/default), the theme that all stores start with, has undergone rigorous user testing and is updated to meet WCAG 2.1. Other themes by Shopify will undergo the same process eventually, but I’ve already noticed improvements in the time it’s taken me to write this article. Sometime in the future, [baseline accessibility requirements](https://www.shopify.com/accessibility/plan) may be imposed on all themes and apps within the ecosystem, so it’s wise to start thinking about accessibility now. Until this day comes, the options are fairly limited if a merchant wants to pick a WCAG 2.1 compliant theme - either use Debut out of the box, have a developer experienced with accessibility customize it to your needs, or opt for a custom theme. I hope that more developers in this space will see the need for options, and rise up to the challenge.
