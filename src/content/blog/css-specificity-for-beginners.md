---
title: "CSS Specificity for Beginners"
date: "2022-10-17"
description: "An introduction to CSS specificity in non-technical terms"
tags:
  - css
---

## Introduction

CSS is a styling language that allows us to apply styles to our website. Although the browser includes some styles by default, we as web authors often choose to override those browser styles. On top of that, end-users can also choose to override the author styles with their own custom styles. With all these conflicting sources of styles, how does the browser determine what style should be applied? It comes down to two primary factors, the **cascade**, AKA what order your styles are in, and **specificity**, AKA how precise the styles are. In this article, we'll be focusing on the idea of CSS specificity.

```
.selector {
  color: red; /* This is a declaration */
}
```

A CSS rule consists of a selector and a declaration. The selector is a way of determining what elements the following declaration is applied to. Imagine that you are a teacher, with an auditorium full of students in front of you. A selector is a way of addressing particular students so that you can give instructions (AKA declarations) to them. The general rule is, the more specific your instruction, the higher its specificity. In CSS, more specific selectors win out over less specific selectors.

## Element Selectors

Element selectors are a way of targeting elements based on what the element is. In our school auditorium metaphor, this might be equivalent to addressing all students from a particular grade. If you say "Fifth-grade students, stand up", you are addressing students based on what they are. An example in CSS might look like this snippet below, where we are grabbing all our anchor links based on the fact that they are anchor links. This represents the lowest level of CSS specificity.

```

a {
  color: blue;
}

```

## Attribute Selectors

Attribute selectors are a way of grouping elements together based on different shared attributes. For example, in our school auditorium, we might want to address students across different grade levels based on some attribute they share. In this situation we might say something like "Students with long hair, stand up," to address all students with long hair. We could apply our previous knowledge and combine element and attribute selectors into a more specific instruction, such as "Fourth-grade students with long hair, fifth-grade students with long hair, sixth-grade students with long hair, stand up," but this level of specificity isn't necessary, and is more verbose than our original instruction.

An attribute selector in CSS is enclosed in square brackets and looks like this:

```
[lang="en"] {
  color: blue;
}
```

Attribute selectors fall under the second lowest tier of specificity.

## Class Selectors

You might think of a class name as a name that is assigned to an element. As individuals, we probably like to think that our given names are unique, but in practice that is rarely the case (I should know, I'm almost never the only Nic/Nick on a team)! Depending on the name, it might be that your name only appears once in a group, but it may be used to address multiple students at the same time, eg. "Students named John, stand up" is likely to result in multiple students standing up.

We can write our class names in a way to target one or more elements, depending on the wider context of our site and what we as CSS authors might need. A class name like "footer" may only be needed once per page, but a class name like "primary-button" may appear many times. The class selector begins with a period and is followed by the class name. Class selectors fall under the second lowest tier of specificity along with attribute selectors.

```
.navigation {
  color: blue;
}
```

## Id Selectors

So what if we want to grab a single student? The only truly unique identifier for an element is an id (technically, you can apply the same id to multiple elements and your page would still technically 'work', but this can have a negative impact on the accessibility and usability of your page!) An id can be thought of as a unique identifier for a student, such as a social security number or a passport number. Theoretically, there should only be one student that has a given id, so if we want to be sure that we're addressing a specific student, using their ID number is a more foolproof way to target them rather than saying something like "John Smith, stand up." An id selector begins with a hash, and is followed by the id. Id selectors fall under the second highest tier of specificity.

```
#navigation {
  color: blue
}
```

## Inline Styles

Inline styles aren't technically a selector in CSS, but they represent the highest tier of specificity. We might think of inline styles as students who have headphones on during the school assembly. Regardless of what instructions are given to them, they have their own set of styles that they are listening to. A room full of students with headphones on is much harder to wrangle than a room full of students listening attentively, so it is in your interest as a CSS author to minimize inline styles. Inline styles are directly applied to an element in the HTML.

```
<div style="color:red;">I'm red!</div>
```

## Combinator Selectors

Combinator selectors are a way of describing elements in relation to another. In our student metaphor, this might be akin to saying something like "Students who sit behind the first row of students", or "Amanda, the younger sibling of Sally from fifth-grade." Though both are ways of addressing students in relation to one another, one is more specific than the other. Combinators are powerful and can unlock a ton of useful functionality without having to come up with granular class names, but be warned as combinators add up the specificity of all selectors in that particular combination. Chaining too many combinators should be avoided.

```
p + p {
  margin-top: 1rem;
}
```

## `!important`

`!important` provides a way for us to override all of these selectors that we have previously mentioned. We might think of `!important` as an announcement blaring over the school's public address system, it takes precedence over what is being announced in the auditorium, regardless of how specific the selector is. "All students involved in lunchtime incident, please come to the principal's office" and "Student number 92374, please come to the principal's office" are equally capable of overriding our previous rules. Like inline styles, `!important` is not a selector, it is applied to a declaration directly.

```
a {
  color: red !important;
}
```

## What does this teach us about writing good CSS?

It's fairly common for newer developers to be overly specific when writing CSS. I often see developers combining and chaining together long selectors that may correspond to the HTML structure of their page. A selector like `#navigation > ul > li.current > .button` will get you the results that you want, but it can be more difficult to understand. Even more problematic, a selector like that can be hard to extend, as you keep having to find new ways to make subsequent selectors even more specific than your previous selector. The selector is much like stating "Students in fifth-grade, of which the one named John that sits behind Sally with blue eyes." It's a lot to keep track of! You'll have an easier time with CSS if you take some time to really think about what you are trying to target and how specific that selector needs to be.
