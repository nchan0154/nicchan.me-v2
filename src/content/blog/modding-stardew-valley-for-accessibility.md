---
title: Modding Stardew Valley for accessibility
date: "2022-04-18"
description: "What can looking at Stardew Valley mods teach us about how to make video games more accessible?"
tags:
  - accessibility
  - gaming
  - featured
image:
  name: stardew.png
  alt: Two farmers from Stardew Valley standing in front of a field of various crops.
---

Stardew Valley is a farming simulator game that was released in 2016 by a solo developer, ConcernedApe. It was an instant classic, and countless people—from diehard gamers to those picking up their very first video game—have fallen in love with its unique charm. As a game, Stardew Valley is both wide and deep: its open ended nature means you can do as much or as little as you want and still feel a sense of progression, and its retro style pixel art graphics make it playable on a wide variety of platforms.


Despite all the hype surrounding the game, I didn't expect to fall down the Stardew Valley rabbit hole myself. After a period of too much work I was left with a repetitive strain injury (RSI). I stayed away from the game because I assumed the Stardew Valley experience, like most other games, was now locked out to me. Due to my RSI, I couldn't understand the appeal of a game that seemed to involvebe doing repetitive actions over and over again. I finally picked up the game in 2021, and I was so glad I did! I was late to the party, but I now count myself amongst the millions of loyal fans that Stardew Valley has around the world.

As I became acquainted with the game, I soon found myself exploring the world of unofficial Stardew Valley mods, patches that players can apply to the base game in order to change some part of the experience. I've previously written at length about how how [disabled Tumblr users](https://www.nicchan.me/blog/what-tumblr-taught-me-about-accessibility/) have developed ways to make the platform more accessible, and was curious to see if the Stardew Valley community was similar.

<div class="post-callout">
  <h3 class="post-callout__title">
    Disclaimer
  </h3>
  <p class="post-callout__text">
    I am not a full-time assistive technology user, and can play Stardew Valley without much modification with the aid of my niche equipment setup. You might enjoy the following video reviews of the base Stardew Valley experience for a more exhaustive overview.

*   [Onehandmostly](https://www.youtube.com/watch?v=zhARjRoiGEI) walks through his experience with Stardew Valley as a one-handed gamer. He covers the existing accessibility settings extensively.

*   [Darrel Bowles](https://www.youtube.com/watch?v=2gTITzQqiqQ), a completely blind gamer, praises Stardew's use of subtle non-verbal audio cues. He plays Stardew Valley in multiplayer mode with a partner who helped to build pathing so that he may navigate the farm via sound, much like a blind person might use tactile paving in public spaces.

  </p>
</div>


## How accessible is the core Stardew Valley experience?

Those of you who are web developers might already be familiar with the [Web Content Accessibility Guidelines](http://gameaccessibilityguidelines.com/full-list/) (WCAG), a series of documents on how to make the web more usable for people with disabilities. For video games, there's a similar effort known as the [Game Accessibility Guidelines](http://gameaccessibilityguidelines.com/full-list/), which I've referenced for this article. While websites and video games have major differences, they both often are interactive digital experiences, and there is some overlap between accessibility best practices for both mediums.

Despite being the product of a sole developer, Stardew Valley offers quite a few accessibility features out of the box. The level of customization for the overall user interface and controls is more granular than most other games, even those with larger budgets and teams behind them.

{% cloudinaryImage 'stardew-options.png', 'A small sample of Stardew Valley settings. Players can toggle the menu background, lock the toolbar, adjust the zoom level, show zoom buttons and disable flash effects', 846, 581, "(min-width: 62em) 45em, 90vw", "lazy", ""%}

There are options to remap nearly every keybinding, and many mouse interactions can also be achieved via the keyboard. This is a welcome feature for those who have difficulty using a fine-tuned pointer device such as a mouse, or those who suffer from strain (like me!) using conventional mice. You can scale the user interface and the background independently up to 150% and 200% zoom, which is great for users with low vision or those who may need larger hitboxes in order to successfully complete an interaction. There is also an option to use the default hardware cursor, which is helpful for those who have customized their cursor to their needs (typically by increasing the size or changing the color).

In terms of sensory needs, Stardew Valley allows you to disable flashing lights during the occasional thunderstorm. Players have the ability to toggle certain sounds individually, allowing people to create their own custom sound experience based on their individual cognitive abilities, sensitivities and triggers. For example, blind gamers like Darrel Bowles may appreciate audio cues that would let them know that their action has been completed successfully, but gamers with certain phobias or triggers may appreciate the option to turn off particular sounds.

In terms of settings and configuration, Stardew Valley goes beyond most large-budget games, offering a wide variety of options that would allow you to configure the basic gaming experience. However, there aren't that many options to customize the actual game itself to make it more accessible, and this is where mods step in.

## The wonderful world of Stardew Valley mods

The vast majority of Stardew Valley mods are available through the [Stardew Modding API (AKA SMAPI)](https://www.nexusmods.com/stardewvalley/mods/2400). SMAPI is an installable piece of software that allows users to load mods by placing them in a particular folder on the filesystem. Once SMAPI is installed, mods can be downloaded from a variety of places such as Nexus Mods, which hosts thousands of Stardew Valley mods alone. While some mods are merely cosmetic or offer additional content, a quick glance at [the most popular Stardew Valley mods on Nexus Mods](https://www.nexusmods.com/stardewvalley/mods/) shows us that many others target specific accessibility needs.


<div class="post-callout">
  <h3 class="post-callout__title">
    Another Disclaimer:
  </h3>
  <p class="post-callout__text">
    I have linked mods here for illustrative purposes only; these are not meant as endorsements. I do not guarantee that any of the below mods will work with newer versions of Stardew Valley, or at all. Rather, I link to them to demonstrate that people do want—and deserve—accessible gaming experiences. Additionally, please note that sites like Nexus Mods tend to have some fairly significant accessibility issues themselves.
  </p>
</div>

### Colors

One of the things that made me personally wary of playing Stardew Valley was its bright color palette. While I'm sure plenty of players gravitate towards the default bright and cheerful graphics, many people experience eye fatigue or migraines when looking at a bright color palette. Luckily, there's a whole host of mods out there that offer alternative color palettes for the game maps, in every flavor imaginable. Options include, but are not limited to, the following:

*   [A Wittily Named Recolor](https://www.nexusmods.com/stardewvalley/mods/2995) makes the whole palette significantly more muted

*   [Starblue Valley](https://www.nexusmods.com/stardewvalley/mods/1869) makes everything a little more blue, an option for those who experience eye strain with too much yellow

*   [Natural Recolor](https://www.nexusmods.com/stardewvalley/mods/1213) makes the color palette more natural looking

*   [Vibrant Pastoral](https://www.nexusmods.com/stardewvalley/mods/6367), despite its name, reduces the saturation on all outdoor maps

<figure>
  {% cloudinaryImage 'stardew-recolor-comparison.png', '', 1282, 520, "(min-width: 62em) 45em, 90vw", "lazy", "Side by side comparison of what the farm looks like with the original Stardew Valley colors compared to colors from 'A Wittily Named Recolor.' The recolored farm is significantly less saturated and with higher contrast between the different kinds of foliage." %}
  <figcaption>
    Original Stardew Valley colors vs. A Wittily Named Recolor
  </figcaption>
</figure>

There are also color-related mods that explicitly target accessibility needs. [Dark User Interface](https://www.nexusmods.com/stardewvalley/mods/4056) offers a (you guessed it!) dark mode for the UI, and can be used in combination with a map recolor. For those who like light mode but struggle with the default bright yellow-orange interface, there's a beautiful, on-brand [white and brown](https://www.nexusmods.com/stardewvalley/mods/4697) alternative.

A fairly common complaint from Stardew Valley players on various forums is it can be difficult to tell the difference between different object states, especially when the difference is highlighted primarily through color (Different object states can signal important information to players, such as whether an object in the game can be interacted with.) Mods such as [Highlight Empty Jars](https://www.nexusmods.com/stardewvalley/mods/6833) address this by adding a more noticeable speech bubble on top of empty jars, or changing the empty jars to a brighter red color. Similarly, colorblind players can often struggle to tell crops apart or have issues identifying when things are finished growing, as color in the base game is often used to indicate ripeness. The [SDV Colorblind Mod](https://www.nexusmods.com/stardewvalley/mods/10380) offers a helpful alternative for those with red/green colorblindness.

### Cognitive accessibility

Playing Stardew Valley requires a certain degree of memorization. There are items you have to hunt down, seasonal crops and NPCs that have a specific weekly schedule. For gamers without cognitive issues, learning these things could be regarded as part of the game's overall learning curve. It mirrors your growth as a rookie farmer, and your knowledge about the world grows as the seasons pass.

However, for those with cognitive and learning disabilities, it can be difficult to ever reach that level of familiarity. Having to repeatedly pause a game in order to go double check something on the wiki is not my personal idea of a great time.
[Lookup Anything](https://www.nexusmods.com/stardewvalley/mods/541) basically offers an enhanced wiki experience within the game. It even provides contextual information, such as your current friendship level with NPCs and whether or not you've crafted an item before. [Similarly, Ui Info Suite](https://www.nexusmods.com/stardewvalley/mods/1150) enhances the level of information present in the UI, making hidden game mechanics more visible and improving the information found in the default tooltips so that players don't need to rely so much on memorization.

{% cloudinaryImage 'npc-map-locations.webp', '', 1200, 720, "(min-width: 62em) 45em, 90vw", "lazy", "The NPC Map icons mod changes the map to display a characters portrait in the location they are currently in. There is a tooltip over the characters that displays the names 'Jas, Vincent.'" %}

By default, Stardew Valley's map is static and displays only a graphic image of the world map. [NPC Map Locations](https://www.nexusmods.com/stardewvalley/mods/239) adds the different non-playable characters (NPCs) to the map, with locations updating in real time as they move around. It even adds a tooltip that will let you know when the NPC will leave their current location, so that you know whether or not you have time to meet them there before they leave.

Mods that help with cognitive accessibility are some of the most popular Stardew Valley mods of all time, with download counts numbering in the millions. As Nexus Mods keeps track of unique downloads and total downloads separately, we notice something interesting. With a mod like NPC Map Locations, the unique downloads number is around 1.3 million, where the total download number is around 3.3 million, nearly three times as much. This suggests that many gamers consider these mods essential enough that they continue to return for updates to ensure compatibility. Even a single purpose mod such as [Range Display](https://www.nexusmods.com/stardewvalley/mods/1179) (which lets you see how wide an area your sprinklers and scarecrows affect) has download numbers in the hundreds of thousands. Options to reduce the cognitive load on players are vital for cognitive accessibility and appreciated by a large number of gamers.

### Reducing repetition

Another highly popular category of mods revolves around reducing repetitive actions in this game. A big part of the core gameplay loop involves repetitive actions. To plant a crop, the player needs to hoe the ground, place the seeds, and water the seeds every day, until the plant grows. Over time, a player is able to upgrade their tools to make these tasks much less repetitive, but players with conditions such as RSI or carpal tunnel syndrome may find this initial hurdle too difficult to overcome. To most players, an extra click is an inconvenience at worst, but to some, an extra click can make the game unplayable.

{% cloudinaryImage 'tractor.png', '', 479, 252, "30rem", "lazy", "A Stardew Valley farmer driving a tractor across the ground." %}

Many mods allow users to bypass more repetitive aspects of the game, an effective way to minimize strain. The [Tractor Mod](https://www.nexusmods.com/stardewvalley/mods/1401) is a popular configurable mod that can drastically cut down the number of repetitive actions, with the added bonus of not breaking player immersion. A mod like this could be used in multiplayer mode to allow a disabled gamer to play on equal footing with abled players.

While early-game gameplay tends to revolve around growing crops for some initial cash, more advanced gameplay involves turning your produce into different kinds of processed goods. The [Automate](https://www.nexusmods.com/stardewvalley/mods/1063) mod gives the player the option to remove repetitive tasks by putting a storage chest next to the machine the player wants to automate, saving the player the effort of checking on the machine. In an open-ended game like Stardew Valley where players have the choice between dozens of different activities such as farming, fishing, mining, decorating, or even romancing your favorite NPCs, mods to reduce repetition give players the control to play the game exactly how they'd like to play it.

### Fine motor skills & timing

Stardew Valley's gameplay has a few elements that are considered time sensitive. Every seven seconds that pass in real life equate to 10 minutes in the Stardew Valley world. Most players will find that they are initially limited more by their in-game avatar's “energy” than by the actual passage of time, but players who use assistive technology may need a little more time to complete tasks, or may not be able to complete certain kinds of tasks at all.

The [Timespeed](https://www.nexusmods.com/stardewvalley/mods/169) mod does what its name implies: it gives the player full control over the passage of time in the game. You can slow down or pause the passage of time completely, and all of this can be tinkered with on the fly using various hotkeys, or based on personalized configuration for different locations.

Most actions in the game are not time sensitive, in the sense that the timing of your clicks and keypresses doesn't affect your success at the actual mechanic. There are two main exceptions—combat and fishing—where your ability to kill a monster or catch a fish is dependent on activating a control at a certain pace. There are many reasons why disabled players may not be able to achieve this, whether because a player has a condition that limits their ability to time their actions, or because the assistive technology they are using (an example might be a [sip and puff switch](http://www.orin.com/access/sip_puff/)) doesn't allow for precise timing. Mods like [Fishing Made Easy](https://www.nexusmods.com/stardewvalley/mods/3623), [Skip Fishing Minigame](https://www.nexusmods.com/stardewvalley/mods/2697) and [Combat Made Easy](https://www.nexusmods.com/stardewvalley/mods/4227) give the player granular control over different factors that make these aspects of the game challenging, allowing people to tailor their experience to their specific access needs.

At this point, you might be thinking, “But Nic, these mods have general appeal outside of accessibility needs. How do we know that these mods are actually benefiting disabled people?” Disabled people are loud and clear about how these mods solve various accessibility needs! Reddit user [baibeach91 describes how mods allowed them to play the game](https://www.reddit.com/r/StardewValley/comments/mfypfn/a_love_letter_to_the_modding_community_from_a/) after brain cancer left them with neurological difficulties, explicitly mentioning Fishing Made Easy as one of the mods that helps them. The creator of the mod responds to their post in the replies below:

> It makes me beyond happy to hear the mod I created has helped make the game easier for you and others that are physically unable to play the game as it is.
>
> A little backstory!
>
> I actually created Fishing Made Easy Suite in early 2019 only because I have a friend that has a form of Parkinson's disease and was unable to catch the tougher fish.

Mods like these are a part of the [curb-cut effect](https://ssir.org/articles/entry/the_curb_cut_effect), where a feature intended for disabled people also provides benefits to a larger group than who the feature was intended for. The mod was originally created for a friend with Parkinson's, but many other people are able to enjoy the game to a greater extent because the mod exists. In many cases, accessibility features have the incidental benefit of making the game better for a large number of people.

That being said, much has been written about the curb-cut effect and the dangers of centering non-disabled people in discussions about accessibility—too much to put in this article. I'd like to specifically note that disabled folks are worthy of being considered, regardless of whether or not their accommodations benefit the larger population.

### Text-to-speech & speech recognition

This final section covers a class of mods that are less likely to fall under the curb-cut effect: those that are specifically for a disabled audience. These mods seek to either integrate with existing assistive technologies such as screen readers, or to provide a Stardew Valley-specific version of an assistive technology. Although these mods may have lower download numbers, many have a far greater impact on people's ability to play Stardew Valley. These mods are often the only thing allowing the disabled users who download them to play the game, which would otherwise be completely inaccessible to them.

{% cloudinaryImage 'pelican-tts.jpg', '', 1838, 1159, "(min-width: 62em) 45em, 90vw", "lazy", "Pelican TTS settings let you configure different voices for each character." %}

First up, we have [Pelican TTS](https://www.nexusmods.com/stardewvalley/mods/1079). TTS stands for Text-to-Speech, a popular method for blind and low-vision people to interact with text interfaces. [This video shows off the gist of the Pelican TTS mod](https://youtu.be/Lo9UhAMoBJs?t=124), though many features have since been added that allow players to customize voices for each NPC.

In a similar vein, [StardewSpeak](https://github.com/evfredericksen/StardewSpeak) is a mod that allows for people to play Stardew Valley solely with their voice. In a similar vein, [StardewSpeak](https://github.com/evfredericksen/StardewSpeak) is a mod that allows gamers to play Stardew Valley solely with their voice. The mod creator has put a lot of thought into how to make the player's experience as streamlined as possible, adding in a bunch of [helpful commands](https://www.youtube.com/watch?v=XYL2eXWWi8U) that make this a viable way to play the game. For example, instead of forcing the player to count the number of tiles to reach the destination, the player can just say 'Go to farm', and the character will automatically find an appropriate path to the farm, taking all the twists and turns required.

Last but not least, we have the [Stardew Access](https://stardew-access.github.io/) mod, which seeks to make Stardew Valley fully playable with just the keyboard (no mouse!), and adds support for popular screen readers such as JAWS and NVDA. The creator of this mod, Shoaib Khan, kindly agreed to speak with me for this article.

Shoaib is a university student who works on mods in his free time and moderates a Discord Server called Playability to gather feedback and collect bug reports. He got into modding when LogicProXGaming, a blind Minecraft streamer he followed, expressed a need for a mod that would tell him his current health on a keypress. Shoaib rose to the challenge and eventually began developing Stardew Access as well. When asked about the reception of Stardew Access, Shoaib mentioned that he never thought so many people would be interested in a mod like this, and that he's grateful for all the feedback that allows him to improve the mod.

This is where I believe that arguments against accommodations making games “too easy”  or “for lazy people” fall flat. Imagine if you had to code an entire interface or submit a pull request just so you could play a game! Making games accessible is a tremendous effort that is unfairly borne by mostly disabled people themselves and by people like Shoaib. What a different world it would be if game developers considered accessibility from the start, and it wasn't something that players had to hack in themselves.

## Closing notes

Many people feel strongly that allowing for users to change the difficulty of the game somehow compromises the experience or the “developer's vision”, to which I can only shrug. Being able to meet people where they are is a fundamental aspect of accessibility. Opening the door and allowing people to enjoy a game that they wouldn't otherwise have been able to play is a good thing. I can't believe this still needs to be said, but based on the comment section of any given article on gaming accessibility, disabled people continue to have to fight for this basic level of acceptance in gaming spaces.

User-created mods are not a replacement for first-party/developer support, for many reasons. In the case of Stardew Valley, mods only work on open platforms, not on closed platforms such as the Nintendo Switch or iOS, and many other games don't allow for the use of mods at all. What I want folks to take away is this: the fact that people would go out of their way to create tools to make the game accessible to themselves and others highlights the importance of creating accessible gaming experiences in the first place. I am only a visitor to the big wide world of gaming accessibility, and I hope that people will continue to support and follow the efforts of disabled gamers and their advocates.
