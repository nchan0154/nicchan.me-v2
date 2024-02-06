---
title: "Talk: UI patterns in existing web map widgets"
date: "2020-10-09"
description: "A talk I gave at the W3C/OGC Maps for the Web Workshop on map accessibility."
tags:
  - accessibility
  - maps
  - talk
---

<div class="video" style="padding-top:56.25%">
  <div class="video__embed" id="player"></div>
</div>

[Standalone Slides](https://wcag-maps.nicchan.me/)

## Introduction [(0:00)](#player)

Hello everyone! My name is Nic Chan and I have been contributing to the Maps 4 HTML Community Group over the past year, with a particular focus on the Uses Cases and Requirements report. Today I will be presenting on the accessibility of existing map widgets and tools.

## Definitions [(0:19)](#player)

Before I get into the details of the analysis, I’d like to lay out some definitions that will frame this discussion.
The map tools discussed today fall into two general categories, widgets and client-side mapping APIs.
Widgets refer to an embeddable map, typically in an iframe or something similar, that requires minimal code to implement. These include things like the Google Maps embed that small business owners may use to share their store location.
Client-side Mapping APIs are JavaScript libraries that allow website developers to create more customized map viewers. They typically require the developer to do more configuration and instantiation work, with the benefit of offering more control over the end result. You would typically find these as a part of web apps like storefinders or delivery services.

In this presentation, I’d like to frame accessibility as the degree to which these maps are usable by disabled people. Some contexts may use the term accessibility to encompass other things, like cost and size of these tools and how that pertains to access, but in this case we will be focusing on the usability aspect, and especially how these mapping tools measure up to our next term, WCAG.

WCAG, short for Web Content Accessibility Guidelines, is a series of guidelines developed by the W3C in order to provide a shared standard for developing accessible web content. It is important to note that the WCAG is not the be all and end all of accessibility. When it comes to things like maps, a tool could meet every single criterion, but still not be accessible. There are many outstanding questions (which will be discussed in greater detail by other presenters and panelists) about what would constitute an equivalent experience to what a map can communicate for low vision and blind users. However, it is still worthwhile to examine the existing tools with the WCAG in mind, so we can account for other disabled users beyond low vision and blind users, such as people who have motor impairments. By looking at these existing tools, we can determine any common patterns worth adopting for a native HTML map element.

Not all WCAG criterion are relevant to web maps, so I’ve pulled out some of the most applicable and interesting ones, where the map tools meet these criterion with varying degrees of success.

## Tools Reviewed [(2:40)](#player)

The tools reviewed today include both widgets and libraries from vendors like Google, Bing, Apple, MapBox and TomTom, as well as some open source solutions with OpenStreetMap tiles. For a full breakdown of how each tool measures up and the details of each criterion, please visit Robert Linder’s full evaluation at [tinyurl.com/wcag-maps](https://tinyurl.com/wcag-maps). Robert is a member of the Maps4HTML Community Group, and his contributions have been invaluable.

With that out of the way, let’s begin!

## Non Text Content [(3:13)](#player)

5/11 tools failed.

This criterion states that all non-text content has an equivalent text alternative. None of the map tools offer any meaningful text alternative to the map content by default, so on that front, all of the maps would fail, unless context is provided by the site developer. As mentioned earlier, what this alternative content could look like is a very complicated question that depends on the content of the map, and warrants larger discussion.

Because developers and authors may choose to provide additional context, when evaluating this criteria, we are focused on text alternatives to controls other than the map itself. In this case, this criterion also applies to things like alternative text for logo images and making sure all icon buttons are labelled descriptively for screen reader users.

As an example, maps often use the plus and minus symbol to indicate zooming in and out. As a sighted user, I can see the visual context these buttons are in, and I can also see that the map zooms in and out when I press the buttons. However, if you just hear “Plus Button”, the context is a little more unclear, it could mean adding a pin to the map, or changing the quantity of another control. We can include context without changing the visual appearance of the control by adding things like alt text to images, or an aria-label to the control. A possible solution to resolve this example might be to add an aria-label to the button.

## Info & Relationships [(4:48)](#player)

11/11 tools failed.

This criterion requires that all information, including a control’s state or structure, can be determined programmatically or is otherwise available through text.
Tools often failed to label the map’s structure as a distinct piece of content and as a control. A map generated by these tools is not just a static image, it is a control in and of itself. When the map has focus, most tools will allow you to do things like pan and rotate the map using keyboard shortcuts or your mouse pointer. Thus, the map needs to be labelled so that it is identifiable as a control, not just an image. In tool authors’ defense, there isn’t a set standard or consensus for how to approach this yet, as ‘map’ is not yet a valid component role, so there may be uncertainty on how to appropriately label this map container.
The other most common reason for failure is the lack of attention paid to control state. For example, all of these web maps allow users to zoom in and out to an extent. Once you’ve hit the zoom limit, the appropriate control should be disabled, but very few examples communicate this programmatically, and most only adjust the styles. Furthermore, screen reader users will often have no idea of the current zoom level. Bing stands out amongst the examples as it announces the current zoom level in addition to the buttons state, so a user of an audio interface will always know what the current status is.

## Contrast [(6:21)](#player)

9/11 tools failed.

To pass this criterion, all text should pass a minimum contrast ratio of 4.5 for regular sized text. The contrast ratio refers to the contrast between the text color and the background color. Because many widgets do not allow for color customization, having accessible defaults would go a very long way in terms of ensuring map accessibility. This contrast criterion can apply to both the map controls and the actual map content.
Some maps had text buttons that did not meet the contrast ratio. Fixing this is as simple as changing the text color on the buttons.
Most maps had contrast issues within the map content, particularly with the labels for bodies of water and minor roads, such as in this example here. This screenshot shows the ocean filled in with a light blue color, but the text on top of it that says ‘North Atlantic Ocean’ is a medium blue, and it never gets any darker or larger no matter how much you zoom in. Maps are in a tricky position as color hierarchy is very important for establishing focal points, and there is a need to deprioritize certain map features to avoid making the map too noisy. When a map is zoomed out, it is understandable if some minor labels are below the average font size, or have lacking color contrast. However, when a map is zoomed into an area, a good map may have these minor labels take visual priority and be displayed larger and with more contrast. Some maps included a thin white outline around each label to increase the text contrast, a technique that is commonly used in closed captions for TV.

## Keyboard [(8:02)](#player)

7/11 tools failed.

Every functionality that is available to mouse or touch users must also be available for keyboard only users. This includes all interactable controls, as well as functions activated by pointer gestures, which most maps do have.
Most failures in this instance are due to the use of non-native controls. When a semantic element like a HTML button is used, all the behaviors that are expected of the control are handled automatically by the browser. It is very common for developers to add a click handler to a div element and ignore the other required behavior. Some custom buttons are not able to be accessed by hitting the tab key and cannot be activated because they cannot be accessed at all, whereas others can be focused, but do not have any means of activation through the keyboard.
A user with a pointer device can pan across the map by dragging the map interface. Some maps lack a way to do this with the keyboard, either because the map container is not focusable, or because they lack the keyboard shortcuts necessary.

## Character Key Shortcuts [(9:09)](#player)

1/11 tools failed.

This criterion states that if a keyboard shortcut is implemented using character keys, then at least one of the following is true:
A mechanism is available to turn the shortcut off; or
A mechanism is available to remap the shortcut to use modifier keys such as shift, control, alt, or
The keyboard shortcut is only active when that component has focus.
This criterion exists to prevent conflicts with assistive technology shortcuts and web interface shortcuts. The NVDA screen reader uses arrow keys to navigate text, and it may conflict with the use of arrow keys to pan and scroll the map. None of the web maps we analyzed used techniques #1 or #2. The web maps that have shortcuts and passed this criterion have opted for technique 3, only allowing keyboard shortcuts when the map container has focus.

## Focus Order [(10:06)](#player)

2/11 tools failed.

To pass this criterion, elements must receive focus in an order that matches the content reading order. In English and other left-to-right languages, we have an expectation that elements will be interactable from left to right, top to bottom, in the same order we read text.

Here is a diagram which displays the focus order of the Google Maps embed. The numbers indicate which element receives focus in what order. The first focusable element is the map container, which makes sense as the focus order should go from outward to inwards. Next is the Terms of Use button, which is in the bottom right hand corner. After that, comes the View Larger map button, which is in the opposite corner, in the top left. We return to both zoom control buttons in the bottom right, and finally, the unlabelled toggle satellite imagery button in the bottom left corner. In this case, the developers used styles to position the controls arbitrarily. Without proper focus order, the experience of tabbing through the map component is quite jarring and unnecessarily disorienting to bounce from corner to corner.

## Focus Visible [(11:16)](#player)

7/11 tools failed.

This criterion is related to the previous one. The focus ring is an indicator that shows which interactive element currently has focus, an example of which is shown here. We can see the zoom out button currently has focus due to the thick black ring that Chrome applies. It is present by default in all browsers, but is common for developers to remove this indicator without replacing it with their own styles. In combination with the previous criterion, this criterion is serious enough to render a map component unusable for sighted keyboard-only users, because there is no way for them to determine what element is currently selected.

In some cases, the focus isn’t persistently visible, which is due to the addition of scripts that remove the outline once the element is focused. This criterion is an example of the default behavior being accessible, and the developers have overridden this default behavior to make an ultimately inaccessible design choice

## Language of Parts [(12:21)](#player)

9/11 tools failed.

The requirement to pass this criterion is fairly simple, all it requires is that the content’s language is included in the markup. This is important for many accessibility reasons, such as making sure screen readers read words with the correct intonation, and can be useful for features like on-the-fly language translation. Despite the fact this criterion is simple to achieve, many vendors fail to implement this. Passing this criterion is as simple as adding a single lang attribute to the containing element, and lang attributes to text in other languages.

<div class="post-callout">
  <h3 class="post-callout__title">
    Motion Warning
  </h3>
  <p class="post-callout__text">
    The next slide has a gif which demonstrates an unexpected scrolling appearance. Viewers with vestibular issues may wish to look away for a second.
  </p>
</div>

## On Input [(13:11)](#player)

2/11 tools failed.

This criterion states that changing any setting in a user interface component should not trigger any changes of context unless the user has been warned about it. In layman’s terms, if a control is used, there shouldn’t be any unexpected side effects like changing the viewport size. Here we have a gif where the up and down arrow keys are being used to pan the map, but unfortunately the viewport scrolls up and down as well. This can be quite disorienting, so it’s important to test for side effects like this.

## Conclusion [(13:46)](#player)

Building accessible web maps is no easy task. The base level of accessibility for existing web map solutions is quite poor overall, and no one widget or library stands out as being far superior to the rest. Criteria where almost every tool fails are often due to the lack of standardization, and this is where having a native HTML map element could really set the bar for what map widgets should strive to be.

Regardless, there are quite a few quick and easy wins to be had. I hope any developers who work with these map libraries can consider implementing some of the low-hanging fruit I’ve brought up here.

Thank you! If you have any questions about the material covered, feel free to reach out to me at nic@nicchan.me.

<script>
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '315',
      width: '560',
      videoId: 'V-Gx0e5Gkzg',
    });
  }

  function toSeconds(str) {
    console.log(str);
    var units = str.split(":");
    return Number(units[0]) * 60 + Number(units[1]);
  }

  var videoLinks = document.querySelectorAll('[href="#player"]');

  for (let link of videoLinks) {
    link.addEventListener('click', event => {
      var seconds = toSeconds(link.innerText.replace(/[\(\)]/g, ''));
      player.seekTo(seconds, true);
    });
  }
</script>
