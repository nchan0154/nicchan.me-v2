---
title: "Talk: Developing an Accessible 'Add to cart' Flow "
date: "2023-09-05"
description: "A talk I gave at the W3C/OGC Maps for the Web Workshop on map accessibility."
tags:
  - accessibility
  - featured
  - shopify
  - e-commerce
---

I was excited to see my axe-con 2022 talk was posted on Youtube! There are captions in the video and transcript side by side, as well as below the video. Thank you Deque for allowing me to speak.

[Standalone Slides](https://add-to-cart-slides.netlify.app/)

<div class="video" style="padding-top:56.25%">
  <div class="video__embed" id="player"></div>
</div>

## Introduction [(0:00)](#player)

Hi, everyone, my name is Nic Chan and today I'll be speaking to you on "Developing an Accessible 'Add to Cart' Flow." If you have any questions or comments, you can find me on my website at www.nicchan.me. That's spelt N-I-C, C-H-A-N, or on my Twitter handle, @NicMakesStuff. I'm a Hong Kong woman with wavy black hair, and I'm wearing a purple an Axe-con shirt much like Liz. To give you a brief introduction, I'm a freelance front-end developer. And the insights from this talk are sort of gleaned from my years of experience working on Shopify stores. But hopefully the insights can also be applied to other e-commerce platforms. And fun fact, I'm definitely a cat person.

## Overview [(0:53)](#player)

To give you a sense of how this talk is gonna go, today, I'll be covering four different patterns, first being buttons, then inline notifications, then toasts, and then dialogs. And for each pattern, I'm gonna walk you through some different iterations, so some different variations of what these patterns might look like in the wild. And then pros and cons for each pattern, as well as tips and tricks for implementing them in a more accessible way.

So to make sure we're all on the same page, here's a typical Product page. I'm sure many of you have seen some variation of this in the wild before. On top, we have our breadcrumbs, which is our links that point to different parts of the website. Underneath that we have our slide images, and some thumbnail images. On the right, we have a product title and a product price, we have some variants for selecting a different color. And below that we have our star of today's show, it's the Add to Cart button. Underneath that we have a product description. There's lots of things to comment on this with regards to accessibility but for now, we're just gonna be focusing on what happens after that Add to Cart button.

So the first thing we wanna do is make sure that we're always using a form element. The reason why we would wanna do this is for two main reasons: progressive enhancement and semantics. There's this common misconception that screen reader users can't use JavaScript, but that's just a myth, it's not really relevant. The main reasons are for progressive enhancement and semantics. Progressive enhancement being the idea that we want our site to work for as many users as possible. So if for some reason the JavaScript fails, we'd still want our key actions to be able to be performed by our user and that includes our Add to Cart. In terms of semantics, assistive technologies offer the functionality to jump to things like different elements on the page, including form elements.

So by including a proper form element here, we can provide users that functionality. It's much like a table of contents in a book. So if someone wanted to skip to a particular point, they can just browse that table of contents, and then jump to what they need instead of just having to listen to the entire page before reaching that form. So what happens with this default form example?
Well, we can see that the form element has an action attribute on it, which points to a /cart/add route.And when you hit that Submit button, it'll take you to that /add route and it'll add that item to your cart and then presumably, it's gonna redirect you to a cart page. This solves a whole bunch of accessibility issues for us. Because navigating to a new page is a fundamental interaction of the web, almost all assistive technologies support that
and your users understand that, okay, like we're on a new page, it's titled your cart, and I can see that the item is now in my cart, and I understand what has just happened here.

So if this approach is so robust, why would we ever wanna use an alternative? Merchants realized that this was kind of like pushing users into a single flow, it's forcing them to Checkout when they might not wanna always go to checkout, they might wanna continue shopping on the site or do some other action first. So the following patterns are kind of developed as a way to both notify users and offer them a choice of whether or not to continue shopping or proceed to checkout.
Now that we're all on the same page, let's move into the actual patterns.

## Button Pattern [(5:02)](#player)

The first pattern is a button pattern. And here I have an image. And on top, we have our first button, and it just says Add to Cart. Underneath that we have a second button, and there's a checkmark in it, and it says Added to Cart instead of Add to Cart. When I refer to the button pattern, I'm referring to when the buttons text is changed when it is activated. This is a pattern that can be used in combination with other patterns, and I'd recommend it for the following reasons, and that is super great for users who use magnification, whether it be the default browser zoom, or special zooming software.

So here I have a screenshot of a user who is using ZoomText to browse our page. And on this, they can only see a small region of the page,
they can only see that price, and then the color variant, our Add to Cart button, and then one or two lines of description, so they only see a pretty small region. It's really good to have an indication of the state of the page in the place that they're currently looking at. So if we use the button pattern it might look something like this.

And here we can see that very same region of the page and our Add to Cart button now says 'Adding'. So moving on to implementation details. This type of pattern is typically implemented by using JavaScript to change the text.

So here we have, and we have our form element. And then below that we have some JavaScript where we're just adding the item to the cart, and then we're changing the inner text of that button to say 'Adding'. In isolation, this isn't a recommended approach because screen reader users aren't that great at handling text changes consistently. So while some screen readers may support changing the inner text of a button that's focused, a lot of screen readers don't. So we can consider using live regions in order to provide better support for screen reader users. If the button is your only indication of state, you definitely want to be using live regions.

Live regions are a way to announce changes in your site to assistive technology users. You can kind of think of them as a web equivalent of the inflight announcement on a plane, like you're just watching a movie, you're having a good time, and then suddenly, the captain's voice just interrupts and tells you that you're about to land. That's kind of like what a live region is. There are only for text only announcements, you can't really do anything with them. Live regions can be created by adding the aria-live attribute with a value of either polite or assertive. By using polite, you're telling the assistive technology for the current text to be finished before announcing what is in the live region whereas if you use assertive, it'll just interrupt the user, no matter what they're listening to. Live regions work most consistently when they're already present in the DOM. You don't wanna be adding them dynamically using JavaScript, you typically wanna have a live region already on your page, and then use JavaScript to add or remove text to it whenever relevant.

So here we have our code sample. And we have our form element. And below that we already have a live region with the attribute aria-live="polite." And below that we have our JavaScript. When we add the item to the cart, we're grabbing that live region and we're grabbing that button. And we're changing the text of both of these elements to be the same thing. Sometimes developers might wanna disable that Add to Cart button while the action is being assessed in order to prevent double submission. So sometimes users accidentally click it,
click the Add to Cart button twice, and then you have two items in your cart instead of one. And developers often use the disabled attribute to kind of prevent this. Using disabled isn't always the best choice because if you're not managing the focus correctly after,
you can cause the user to lose focus, and then lose keyboard focus.

So an alternative might be to use the aria-disabled="true" attribute instead, and use some additional code and styling to make sure that the same functionality is provided. But using aria-disabled might really not be any better because what can be announced to screen reader users can sometimes be confusing. For example, a screen reader might say something like Add to Cart unavailable. And that's especially confusing in an e-commerce context because, you know, how will the user know if the button is unavailable, or the product that they're trying to buy is unavailable.

So in this case, you would really wanna consider your user base. If your website is selling to a technical audience, maybe your audience will have a higher level of technical proficiency and they'll understand that this is actually unavailable as being applied to the button and not the product, and it will be okay. But you'd really wanna consider testing with users whether or not the disabled attribute is even needed or if you should just disable the click with JavaScript.

One final consideration for the Add to Cart button is wording. So here we have a diagram of two different possible wording flows. On the left, we have a button that says Add to Cart, and then it says Adding, and then it reverts back to Add to Cart. This can be confusing if it's the only indication of state because it requires users to be very actively paying attention to what might be a small difference. You'd have to imagine your user just staring at that region of the screen. And if your website loads fast as hopefully it should do, it's gonna revert very quickly back to the original Add to Cart state. And if that's your only indication, it's not too clear that anything has happened.

On the right, we have a button that says Add to Cart and then Adding and then the final state is Added to Cart. This poses a different problem of if you want to reset that button to the original state. There tends to be room for confusion about now, it's pretty clear that an Add to Cart button allows you to add something to your cart but what does an Added to Cart button do? Does it take you to Checkout? Does it let you add that item again? It's a mystery. So we might wanna consider using the button pattern in combination with other patterns in order to alleviate some confusion. And this leads us to our next pattern.

## Inline notifications [(12:34)](#player)

What do I mean when I refer to the inline notification pattern? By inline notification, I mean an element that is not positioned sticky, absolute or fixed. A notification is inserted into the reading area and then content is often shifted in order to make space for this notification.

So here we have an image. It's our same Product page as before and this time, underneath the Add to Cart button, we have a notification that lets us know that our product has been added to the cart. So we've already discussed the idea of using live regions as a way of presenting content to assistive technologies, should we be using them here? Live regions can best be thought of as temporary notifications.They're the web equivalent of an announcement blaring at you over the loudspeaker. If you're not in a logical place, like how I've placed it right under the Add to Cart button here, it might not be obvious where in the DOM they are, and a screen reader user has no option to go back and listen to that text again. Furthermore, zoom magnification users who don't use accompanying audio could be left out and they could miss this notification entirely.

A better approach would be to programmatically move the focus to the notification once it enters the DOM. And then this will be announced to screen reader users and other groups. So here we have our code samples. And we have a notification that has a tabindex of negative one,which lets the browser know that this element will be programmatically focused, but not included in the default focus order. And below that, we have our JavaScript and we're once again we're just adding that item to the cart and then we are grabbing our notification, the text of that notification to what we want it to be and then we're moving focus.

Sometimes our notification isn't just text, but it also includes interactive elements. So here we have the same image as before with our Add to Cart button and then below that is our notification. This time, I've added two links to this notification. So underneath that notification text, there's a link that says Continue Shopping. In these situations, we have to move focus, because our aria-live regions strip semantics of child elements. So a screen reader user might be able to tell that these are actions from the words, but they're gonna hear the words Continue Shopping or View Cart that has interacting with them.

Some implementations will have this notification disappear after a short amount of time. While this is not advisable due to being easily missable, it's also a WCAG failure of the 2.2.1 Timing Adjustable Criteria. Essentially, this criterion exists to make sure that we're allowing people to have adequate time to complete interactions. Because we're providing different interactions within the notification, hiding the notification automatically can prevent users from completing them. So a better way around this would be to add a button to dismiss the notification manually instead.

In the wild, I often see different placement options for this pattern. So here we have two examples of where we might put our notifications. And the first one is directly below our breadcrumbs, but above all of our product stuff. And the second one is in a similar location to the original notification, but it's directly above the Add to Cart button. I'd argue that the best place for the notification is after the Add to Cart button. Well, if we're moving focus, technically, we meet the requirements either way, but we can improve usability by not taking users too far out of the context they were originally in. Placing it near the button helps minimize tab stops for keyboard users and it will disorient users with dramatic content shifts if you're kind of like shifting things around the page. If we put it under the button that they're probably looking at, we have less room for disorientation.

## Inline notifications [(17:17)](#player)

The next two patterns I will be discussing are toasts and Dialogs. Before I get into the details, I'd like to emphasize that these patterns often lack distinctions in the wild. I'll be describing the behaviors of both toasts and Dialogs in terms of how they should be behaved, but the lines are really blurred. Because they pop out on the screen and overlay content, people kind of just tend to see a toast as a little dialog, and they code them in a really similar way. This ignores distinctions and semantics and the requirements for each of these elements to be accessible. A lot of accessibility errors come about from developers treating these two components as interchangeable when they're actually quite discreet.

So what is a toast? A toast is named after the behavior of a toaster.It's an element that kind of pops up in a fixed position on the screen, typically in the top right, bottom right,underneath the nav bar, and other places like that. And they should have a role="status" or role="alert" attribute on them, or an aria-live attribute so that they're announced to assistive technology users. Focus typically isn't moved to a toast. Contrary to how toasters work in real life, toasts on the web often disappear after a few seconds.

Should we be using toasts in an e-commerce context? A lot of the problems with toast stem from the fact that by definition, focus, isn't moved to it. Furthermore, toast inherently have a problem shared with a lot of fixed position elements, they're really easily missable by zoom users. You can imagine that if we're zoomed into that Add to Cart button and something pops up in the top right of the page, it's not that useful for a user who's just looking at that Add to Cart button region. Here we have a visual and we have a example of a toast.

Our toast looks really similar to the inline notification that we have previously but it's overlaying our content and it lives on the top right of our page, and it disappears after a few seconds. Early on, we discussed the 2.2.1 Timing Adjustable Criteria and the problem with child elements and this applies very much to this example right here. Trying to interact with a notification that disappears is about as frustrating as your toast vanishing off your plate while you try to eat it. Not recommended.

So how do we make sure that we don't fail the 2.2.1 Timing Adjustable Criterion while keeping tools behavior? We have some options. The first is that we could have a setting that lets you set that notification display time. And here we have an example of a settings page where we just allow the user to set the notification to five seconds. On the right, we have an example of a notification drawer and it looks a lot like a notification jar on your phone. Basically, it shows you all the toasts that have popped up previously with a timestamp of how recently they popped up. Sure, we can use both of these options to kind of remediate the issues with toasts, but it sort of defeats the purpose of toasts as a quick and easy way of displaying things. Plus no one really wants a drawer full of stale toasts. Unfortunately, I don't really think that toasts live up to their real life namesake. They're neither as useful nor as delicious as their real world counterparts, especially in e-commerce contexts where the Add to Cart is the primary action. What developers often try to implement as toasts should really be dialogs instead. And this leads us to our final section.

## Dialogs [(21:18)](#player)

Dialogs. Dialogs are often a misunderstood component, there is a misconception that all dialogs are basically what we understand to be an alert. Here on the screen, I have an example of a Windows 98 Style dialog. And it basically says "The system registry has been backed up already today. Would you like to back it up again?" And it provides option of Yes or No. All of the following patterns are examples of things I regularly see on online stores. While visually they look really different, they can all be considered dialogs. And so they can use similar semantics and functionality underneath the visual styling.

This is a dialog. So what we have here is a Product page that we had before and we have something that looks really similar to our toast example. It has "Your product has been Added to Cart" text, and it has our to Continue Shopping or View Cart links. And the only difference is that we've now added a little Close button in the top right so a user can dismiss it.

This is also a dialog. So here we have a Products page and there's a white semi-transparent overlay on top of that page. And on top of that, we have a kind of more expanded dialog. And we have our "Product has been Added to Cart" text, we have an image of product and then below that, we have our Continue Shopping and View Cart links styled more prominently. And there's also a Close button here.

This is also a dialog. So here we have a Product page and the difference is now we have a navigation bar and in the top right we have a button that will trigger the cart, and below that, we have our dialog and it has a title of your cart and within it, it has all the products that are in our cart, the total price, and then the option to Checkout.

This is also a dialog. So here we have our Product page, we have our semi-transparent overlay overlaying the content. And on the right hand side of the page, we kind of have like a cart and floor type situation that slides out from the right. And we have a title of your cart, all our products, the price and the Checkout button. The primary difference between these dialogs is whether or not they're modal or non-modal.

Non-modal dialogs don't prevent interactions between the rest of the webpage when they're open, but modal dialogs do. So if you have a backdrop behind your dialog, that probably would suggest that it is modal and your dialog should be coded in a modal way.

Now that we know that all these seemingly different patterns are actually just dialogs under the hood, I'm gonna give you some advice on implementation details.

It's my opinion that if web development were a video game, hand rolling your own dialog would be the final boss. I'm not gonna go into all the intricacies of building an accessible dialog because it is super complex, but here are a few tricks that can help you when evaluating dialogs on your site and perhaps letting you know if your current solution is okay or if you need to find something else.

Focus management. So regardless of whether or not your dialog is modal or non-modal, we wanna be moving focus to the dialog. If your dialog is modal, you also want to trap focus, which means that you shouldn't be able to move focus to the document that's in the background. When the dialog is open, hitting Tab a whole bunch of times suggests cycle between the elements within the modal and then shift to the browser UI. This browser UI is often forgotten part of the focus trapping.

When we close the dialog, we should return the focus to the element that opened the dialog. In this case, it's our friend the Add to Cart button. But if you've opted for a mini cart, or some other kind of cart thing that can be opened through another part of the page, you'll probably wanna account for handling different mobile triggers and moving focus to the correct element that opened the modal in that scenario.

Keyboard. We don't wanna forget our keyboard shortcuts. When you hit the Escape key, the dialog should close. If the dialog is modal, we wanna make sure that assistive technology users can't escape from the modal via other means. So oftentimes, I find developers will correctly implement focus trapping, which traps focus within the dialog but you also need to make sure that the document behind the modal is hidden from users when the modal is open. You can consider using the aria-modal="true" attribute in the future but the browser support is not that great right now. So in the meantime, you can probably consider using the inert attribute with a polyfill in order to make sure that the rest of the document is correctly hidden from assistive technology users.

And finally, we don't wanna dismiss the dialog automatically.Well, the dialog element is just about here. I have to give a shout out to Safari,which just dropped an update, 15.4, like two days ago, which caused me to frantically update these slides. The dialog element is so close, it's a great time to begin experimenting with deploying it in the future, but if you're a developer who needs to support older browsers, you might still wanna wait and you can continue using a with a role="dialog" until the browser support is just a little bit better.

Finally we wanna make sure that we're labeling all the things. We wanna make sure we're labeling the dialog itself. Consider using a aria-labelledby attribute, which will point to the ID of the element that labels the dialog. So it might be the text of the dialog or it's a heading like your shopping cart, we just wanna make sure that our dialog is labeled.

It's a really common issue that's found in modal carts and things like that so if your dialog has repetitive interactive elements, so like multiple Increase Quantity buttons, or multiple Remove Product buttons, one for each of your products, make sure that they have unique names. It can be annoying for a screen reader user to just list all the buttons, and hear five different buttons that say Remove with no indication of what product they're actually removing. So we wanna make sure that each of these buttons are labeled with a unique name.

## Inline notifications [(29:05)](#player)

Some final takeaways. I don't think there's a clear winner amongst the pattern. How you might use them really depends on the context of your site. Things like how many products you have, or what you want a user to do after adding an item to the cart, it sort of really drives which one of these patterns you'll wanna use.

And while testing individual components is great, we really wanna test the whole flow. So you can see that when we combine the patterns in different ways, different considerations pop up. So it's really necessary to not just individual components in our design system, but to test the entire flow to make sure that once you put it all together, it works in an accessible way. Finally, toasts and dialogs are not the same.

A whole bunch of accessibility errors come about from treating different components interchangeably. If you only learn one thing from this talk, let it be that toasts and dialogs are not the same. And with that, I'm pretty much done. So I guess I'll hand it back to you Liz for questions.

## Questions & Answers [(30:14)](#player)

Liz: Awesome. Thank you so much Nic for a great presentation here. And thank you for adding questions for all of our attendees. Please still feel free to add any questions that you have for Nic in the Q&A portion. And definitely Feel free to upload them and I'll make sure to go with the ones that have the most votes. So let's dive into the first question. This one's on toasts. Should toasts be used for simple success confirmation messages that would have no interactions with it, such as Saved Successfully, Copy to Clipboard, et cetera?

Nic: Yeah, I think if there's any place for toasts, it would be on those simple confirmation messages, as you've just said, especially if a user is gonna be triggering that action several times in a session. Like, if you are, you know, working in Google Docs or working in an art program, you wanna make sure your stuff is saved, and you probably save like 500 times an hour like I do, so in that case, so toast is probably appropriate.

Liz: Definitely. Okay, awesome. Next question here. Okay, this is on Add to Cart button. So could we use the Add to Cart button as a live region, instead of creating a live region and a separate div element?

Nic: I think that would conflict. I think it would cause a conflict because live regions, they will strip semantics from things. So because the button is a semantic element, we probably shouldn't use a live region on it. I'm sure reading the spec of what it's appropriate to add aria-live to will reveal whether or not it's an actual spec incompatibility, or if it's just something that we probably shouldn't do, but I probably wouldn't do it.

Liz: Okay. Great. Thank you, Nic. All right, got some more questions coming on here. Okay, what tools would you recommend someone use who is new to accessibility?

Nic: There are so many different tools for different things, I can't really think of any e-commerce ones off the top of my head. I have written an article for Smashing Magazine that is just entirely a ginormous list of different accessibility tools, and they're categorized by different uses. So for example, there's like tools for reading level, which can help with cognitive accessibility, or tools for color so you might wanna check that out.

Liz: Awesome. Thank you. Okay, another one on toast messages. Should toast messages be removed automatically after a set time, or both
hide and remove it?

Nic: So if you add a button to a toast, it kind of becomes a dialog. And that's part of where the issue is. Toast by definition should be removed after a set period of time, which makes them not great for a lot of things, but a true toast would just be removed after a short period of time.

Liz: Got it. Thank you. Okay. Somebody says, thank you for calling out including the browser UI in the focus trap. I hadn't considered that. Do you know of any good resources for how to do that?

Nic: I'm not sure actually. I think some libraries will handle this and some won't. But it would definitely be something that I would test for when looking at it. I can't name any off the top of my head, I would wanna bet that Kitty Giraudel's a11y-dialog Python dialog library should do this, but I haven't looked at it in a while.

Liz: Awesome, thank you. Okay. There's another one. You suggested moving focus to an announcement text. How does that work with the rule to not move focus around in response to user interaction?

Nic: I think because there are certain components that just sort of require you to move focus around, like there isn't really an option to have a dialog and not move focus to it because then the user would basically just completely miss that the dialog is there. I do know which rule you're talking about, I just I'm not entirely sure that applies in this particular context. I think you probably don't wanna be moving it around willy nilly but because this is sort of like on other site, it's not really acceptable that the user misses it. So we wanna make sure that when we do move it in a way that's like respectful and like not intrusive, but I'm pretty sure that we should move focus. - Thank you.

Liz: All right and thank you everyone for these great questions. Let's see here. Should we implement the Escape button to close toasts and notifications or only for modal dialogs?

Nic: That's a good question. I think it could be a worthwhile enhancement but obviously, there could be a complicating factors within your design, that would make it not ideal, for example, we've talked just like a Product page. But for example, I've seen, like, quick shop modals where the Product page is in a modal. So if you have a modal open, you'd wanna like consider, what kind of our modals are we gonna close with Escape, and things like that. So like I hate to give you, it depends answer, but I think in this case, it does.

Liz: Makes sense. Okay, could you follow up with a little more about how aria-live strips semantics from elements?

Nic: Yeah. For example, if we're looking at our notification, and if a screen reader user is just listening to it on the page, they'll hear product is an Added to Cart link, Continue Shopping or link View Cart. So they'll hear that they're interactable elements within it, and they can choose to interact with them, but when you announce it, a live region will basically just ignore all the stuff that you have in there. So if you have a heading in there, if you have links or buttons in there, it'll just read the inner text. So it'll say product has been Added to Cart, View Cart or Continue Shopping, but then the user can't really tell it's a link, except for hearing the words that are kind of like actiony.

Liz: Right. Thank you. All right, this one is on modals. Do you ever use modals for checkout, such as pop up modal for login, et cetera,
or is that something that you would just discourage?

Nic: So I've largely worked with the Shopify platform, and they have, I think, just locked all of the checkout to their platform. So there's basically no customization there. I do know that, like, one thing I really respect about the Shopify team is that they regularly have disabled users go and test all their flows. And they don't include modals in their checkout flow as far as I know, but that doesn't mean that you should never use it. I think, in their login situation, they will show a form in place, but they won't show it in a modal.

Liz: Right. Thank you. Okay, what is one piece of practical advice you would give to someone starting out? I think starting out in accessibility.

Nic: Yeah, I think accessibility is really hard. I think that we kind of tell people it's easy so that they won't be afraid of it and then you start to learn a bit about it and it's oh, my gosh, there is so many considerations. And not just that, it's like sometimes people's access needs will actually conflict with each other. So what will be good is actually good for other users. And I think the most important thing is to not be too dogmatic and just listen to feedback and accept that. It's like, Sisyphus's boulder like it's a never ending task and just simply it's part of the process.

Liz: Definitely. All right. What is the best e-commerce Add to Cart flow you have ever come across?

Nic: That's hard to say. I think honestly, I get so surprised when anything even works.Like, it's really sad. But when I try and test these things out,even if it works for just a single select flow, I would be so impressed. Like if there's an Add to Cart process that kind of works just for keyboard users, even if it didn't work for screen reader users, I'd be like, wow, they like made an attempt,because so often, it's just like not accessible at all for any users. When it works, even in part, I get impressed. But I know that's like a terrible bar and I shouldn't be impressed.

Liz: All right, next one, what do you think about using an animation that moves a number up from your button to where your shopping cart total is indicated on your page so it's like counting up?

Nic: I think I've seen an example of what you're talking about. I would say, you know, you can try it out, I would definitely make sure to respect the prefers-reduced-motion query, it's a query that lets you know if your user has turned off animations on their operating system
or their browser, and by using that media query, you can make sure that you're not showing the animation to users who definitely don't wanna see that animation. So try it out, remember to reset filters, reduce motion, and then sort of test with disabled users if you can.

Liz: A couple more questions here. Okay, for a modal dialog, would you dismiss the dialog when the users focus exits?

Nic: So for a modal dialog, the focus should be trapped within the dialog. So basically, if you're hitting Tab, you should kind of like cycle through all the tab-able elements in it, and then the browser UI, and then when you're tabbing back into the page, it should just reset on the first element in that modal. For a non-modal dialog, it definitely depends on sort of the presentation of it, but it's pretty standard that tabbing out of the non-modal dialog, you might close that modal automatically. So you can consider doing that for non-modal dialogs.

Liz: Great. Thank you. I think this might be the last question here. Should animated scrolls between two points on a page be avoided? It provides continuity between points, but could also be overwhelming, especially for zoomed users.

Nic: Yeah, I think browsers have recently given us a bunch of tools to kind of smoothly scroll between things and I think as we see that more, we do hear people with vertigo and motion sensitivity, saying that it's not a great pattern for them. So this is definitely a situation where I would make sure to use the prefers-reduced-motion query to make sure that we're respecting that preference, at least, and sort of consider how large that shift is gonna be. If your page is like an infinite scroll, scrolling all the products, I would probably not use that effect for anyone, but if it's maybe like a shorter distance of the page, you might wanna use itwith a prefers-reduced-motion query on it.

Liz: Great. Looks like we have just one more question here. Is it good practice to focus a dialogs Close button first when it opens?

Nic: Yeah, so I think this can really be a point of concern for a lot of people. I think different people will say different things. Some users think it's best to focus the entire modal and if you have a aria-labelledby on your modal, it'll kind of like read the heading first, or what it's labeled by first and then we'll kind of just read all the content in the modal and the user can choose to interact with it however, whenever they want to. Some people might focus directly on that heading elementand some people might just move focus to the first focusable element. I think it could be that you're focusing directly on that Close button instead of the modal container just 'cause you're adding items to your cart, you hit Add to Cart and then the next thing you hear is just like, close modal. It's not entirely clear what has just happened. But this is definitely something that are testing on your site and whether or not your modal, like your modal design you can change what that first focusable element is.

Liz: Got it. Great. Okay, we're gonna squeeze in one more question here. With such a varied range of disabilities, does it make sense to make flows for each and have different views and features for each?

Nic: I think that kind of like gets us into the territory of having like a different site for disabled people. And that can be a really othering experience, You can consider providing different ways of checkout, like, for example, some e-commerce sites you have individual Product pages, but they also have like, a collections list where you canadd items to cart from there or like different ways of adding to cart and perhaps in a way, you can provide different methods for the same outcome and not in a like this is for ZoomText users kind of way but if you have those options, it will. If there's a blocking aspect on one pattern, maybe it won't be as terrible on another pattern.

Liz: Great. Thank you so much, Nic. And with that I think we are about at time, I do wanna thank Nic for a great session. We really appreciate it. And thank you all for attending this session and for joining us at axe-con. We have quite a few more sessions the remainder of the day,so we hope y'all have a great time. Thank you.

Nic: Thanks Liz.

Liz: Bye.

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
      videoId: 'wYAFyGdq9Tc',
    });
  }

  function toSeconds(str) {
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
