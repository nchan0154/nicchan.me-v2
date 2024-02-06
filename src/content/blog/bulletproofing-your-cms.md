---
title: Bulletproofing your Content Management System (CMS)
date: "2023-06-15"
description: "Help your future self by making sure your CMS can take anything clients throw at it."
tags:
  - cms
  - freelancing
---

How many times have you been in the discovery process with a client when they say something like "And of course, we'll need to be able to edit the content on our own." If you're anything like me, you probably hurriedly wrote "CMS" down in your notebook and circled it three times. You might ask the occasional follow-up question such as "Will this need to support multiple languages?" to inform the decision of which CMS you’ll choose, but other than that, the CMS piece of a site build is regarded as fairly straightforward. You pick the one that does everything you need it to do, and you build it out based on the content needs of your site. At handoff, you might do a workshop and/or prepare some documentation on how to manage content in the future, and hopefully you've done a good enough job to not get an email every time that client needs to change a line of text.

Lately, I've come to realize that I need to do better when estimating how long this kind of work will take. Across all my clients, I’ve noticed varying levels of how much post-launch CMS support a client needs. When I was trying to think of explanations for why some handoffs are smoother than others, I noticed certain commonalities; I realized that it all came down to the fundamental question of who is going to be editing the content in the future.

The smoothest hand-offs are always to those clients who will either have technical folks managing content in the future, or a designated permanent content person/team with previous content management experience. Technical teams tend to be aware of inherent limitations with content management, and in the event that something does go wrong, they may be able to fix it unaided. A professional content manager may need a little help as they learn the ropes, but after a while, they typically catch on to any unique quirks in the system and are able to train any new folks that come after them.

In my past experience, the most difficult CMS hand-offs have been to organizations where the content is managed by a rotating group of volunteers or interns. This may be their first experience working with any kind of content management, and the temporary nature of the position means that it’s difficult to create any kind of lasting knowledge. If an issue comes up once, you bet it’ll probably turn up again in a few months once there is a new person in that position. My experience in handing over sites in these conditions has taught me that I need to actually consider who will be maintaining the site’s content, and not just treat them as an afterthought. A website isn’t a one-size-fits-all solution, so why would a CMS be?

## Practices to consider

Below is a non-exhaustive list of things I came up with when considering the editing experience. If you have any other tips, I’d love to hear from you!

### Text Content

- Limit options appropriately. For example, instead of providing a free text field for hashtags, maybe start with a list of options that can be managed globally within the CMS. This prevents people from treating the field like social media and #making #everything #a #hashtag, thus preserving the usability of any tag archives.
- Consider removing smaller heading levels. For most kinds of blogs, 2-3 heading levels is more than enough. I tend to remove the h1 option as it’s reserved for the page title, as well as the lower heading levels as editors just tend to use them for styling text. Random heading levels can mess with accessibility and SEO, especially when your content editor treats h6 and bold text interchangeably!
- Consider stripping out empty paragraph and line break tags. Sometimes folks will ask me why the spacing is inconsistent between pages, and it’s almost always due to 14 extra line breaks inserted when copying content from a word processor to the CMS.

### Images

- Make sure an image of any dimensions can be uploaded and it will work on the site. You might tell your editors to upload a square image with specific dimensions for your staff page’s circle headshots, but someday someone will upload a landscape image, and without your intervention, some poor staff member’s head will be squished for all eternity. Cropping and resizing within the CMS is a must for certain audiences.
- If you are ever gonna have text over an image, you need to consider ways in which to ensure that the text will remain visible. It may seem obvious that white text on a photograph with a white background won’t be legible, but it’s happened too many times for me to not implement a failsafe by adding some kind of overlay over the image.
- Ideally, you want to process your images twice, once on the back-end to make sure that people uploading 48MB images won’t blow your hosting budget, and once on the front-end for all of that responsive image goodness and any cropping necessary.

### Errors

- Write error messages, even for things that seem self evident to you. For example, one project I worked on had a URL field. I would regularly find that editors would leave off the https:// prefix or add a random ‘www.’ instead (because all websites start with www!) Providing explainer text, a way to validate the URL inline AND good error messages are essential for making sure these issues don’t slip into production.
- Make sure any messaging is written in non technical language. ‘Text does not match validation regex’ may make sense to developers, but won’t help your editors. Take the time to write error messages that match your specific needs.
- Lock everything that needs to be locked down. Does your CMS allow editors to tweak things they probably shouldn’t, such as the canonical URL of the site? Removing access to things like global site settings and plugins when appropriate can prevent problems down the line. [Amadeus Maximillian](https://amxmln.com/) suggests using roles wherever possible to create permission based systems for different types of editor.
- Have the site fail gracefully in the event of broken content. One of my favorite things about modern deployment solutions is that most deployment solutions make it hard to break your site. If you're building a static site, you can lock the public version to the version that worked most recently, which gives you more time to troubleshoot any issues that come up.

## Conclusion

Some of of the tips I described fall under good usability and cognitive accessibility. In an ideal world, it would be desirable to make sure every project you work on is robust as possible, but budgets and deadlines often pose a real challenge. It is a sad reality that projects and organizations that need this work the most often have the least amount of resources, as it’s not uncommon for things like community groups or non-profit organizations to be entirely staffed with volunteers. The pay for this kind of project may be heavily discounted, or non-existent. When working on a project for free/a discounted rate, I used find myself wondering if I could cut a few corners on the CMS side in order to make things more manageable, but taking this shortcut always came back to bite me in the form of future stress. Keeping the future editor’s capabilities in mind can make this kind of work more sustainable for you and the organization.
