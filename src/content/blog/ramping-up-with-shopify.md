---
title: Ramping up with Shopify
date: "2016-04-07"
description: "A simple gulp workflow for Shopify."
tags:
  - shopify
  - tooling
---

Just recently, I had the opportunity to build my first Shopify theme, and I had to learn to get productive quickly. Here are a few of the things that those who are coming from other platforms might want to take note of.

## Setting up a development environment

Because Shopify doesn't let you download their software, what I recommend doing is signing up for a [Partner Account](https://www.shopify.com/partners), which lets you create unlimited test stores (as well as pick up a percentage of profits if you refer customers to the platform). Rather than manually upload your theme files to your test store every time, you can either use the [Shopify Theme Gem](https://github.com/Shopify/shopify_theme) or the [Mac Only Desktop Theme Editor](https://apps.shopify.com/desktop-theme-editor) to sync all your theme code directly to the test store. I chose the gem - the set up instructions included in the repository were very straightforward and it didn't take long before I was up and running.

## Picking a starter theme

Once your `theme watch` is up and running, you can choose to go with an existing Shopify starter theme to help speed up your development process. [Skeleton](http://shopify.github.io/skeleton-theme/) is the more minimal of Shopify's two official themes, with the bare minimum amount of boilerplate to get you started. [Timber](http://shopify.github.io/Timber/) is the one I ended up using, it includes a helper class based grid system, an AJAX based interactive cart and responsive menus. If you'd prefer to roll with the more popular Foundation or Bootstrap, it might be wiser to go with the skeleton theme.

A shopify theme has the following folders:

- assets
- config
- layout
- locales
- snippets
- templates

If you poke around the assets folder, you might notice that all the styling is done in one giant .scss.liquid file, which Shopify compiles on its own servers. If you're used to a modern, modularized CSS workflow, the ban against `@import` will seem like a nightmare. Running your own SCSS processor and uploading the compiled CSS is an option, but doing so won't let you use liquid variables (aka Shopify settings you might want to include like colors and font sizes) within your SCSS. What I ended up doing was running a gulp task that watched a newly created scss folder. Upon detecting changes to the contents of that folder, it would use `gulp-cssimport` to string my stylesheets together into one giant .scss.liquid file that it then dumped into the assets directory. Below is my Gulpfile.

```
var gulp = require('gulp');
var cssimport = require("gulp-cssimport");

var globalConfig = {
  src: 'scss' // The directory where all your SCSS is
};

// Process CSS
gulp.task('styles', function(){
  return gulp.src(globalConfig.src + '/style.scss.liquid')
  .pipe(cssimport())
  .pipe(gulp.dest('assets/'));
})

// Watch files
gulp.task('watch', function () {
  gulp.watch(globalConfig.src + '/**/*.*', ['styles']);
});

// Default task
gulp.task('default', ['watch']);
```

And my style.scss.liquid looked something like this:

```
@import url('_variables.scss.liquid');

@import url('libs/_timber.scss.liquid');
...

@import url('components/_header.scss.liquid');
...
```

This way, you get to structure your scss however you are used to doing it. Crisis averted!

## Creating your own settings

Those of you coming from Wordpress will be pleased to know that adding new settings to Shopify is as easy as changing the `config/settings_schema.json` file. Below is a snippet from mine.

```
{
  "name": "Colors",
  "settings": [
    {
    "type": "header",
    "content": "TNB Theme Colors"
    },
    {
    "type": "color",
    "id": "tnb_color_bg",
    "label": "Background Color",
    "default": "#222222",
    "info": "Background color"
    }
  ]
}
```

This setting can be accessed in your .scss.liquid files just as easily, like so `{% raw %}{{settings.tnb_color_bg}}{% endraw %}` .

## Final observations

While I found developing for Shopify to be a breath of fresh air compared to working with Wordpress (figuring out how to handle theme settings + SCSS in Wordpress is just plain shitty), I have a few caveats. Shopify doesn't let you customize the checkout.liquid template (the template that handles the checkout process) unless you are a Shopify Plus customer. It also doesn't make it particularly easy to filter by product variants, which is the standard way to assign things like colors and sizes to a product. Those who might want complete control over the entire user experience or offer complicated product filtering without resorting to workarounds like manually managing tags should seek out a more robust platform, but if ease to use is a priority, I definitely wholeheartedly recommend Shopify.
